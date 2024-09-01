import {Component, EventEmitter, Output} from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      
    ])
  ]
})
export class EligibilityComponent {

  constructor(private registerService: RegisterService) {

  }
  @Output() openChatEvent = new EventEmitter<void>()
  registrationDeadline = new Date(2023, 7, 31, 23, 59, 59)
  isIndividual: boolean = true;
  registrationButtonVisible = true;
  
  ngOnInit(): void {
    this.registerService.registrationType$.subscribe(type => {
      if (type) {
        this.isIndividual = type === 'individual';
        this.criteria = this.isIndividual ? this.individualCriteria : this.teamCriteria;
      }
    });
    setInterval(() => {
      this.updateRegistrationButtonVisibility();
    }, 1000);
  }

  checkEligibility() {
    // this.registerService.checkEligibility();
    this.registerService.openModal();
  }
  updateRegistrationButtonVisibility() {
    const now = new Date();
    this.registrationButtonVisible = now < this.registrationDeadline;
  }
  openChat(){
    this.openChatEvent.emit()
  }

  criterieas = [
    {text: "Every team must have a minimum of 3 members and a maximum of 5 members."},
    {text: "Every team member must be located in Africa."},
    {text: "All team members must be students currently enrolled in a University, College (undergrad, Associate, Diploma program), or High School, with a graduation year after January 2024. Students currently pursuing or who have completed a Master's degree or higher are not eligible to participate."},
    {text: "If you don't have a team you can register individually and we'll match you with other talented developers, designers, and problem solvers."}
  ]
  individualCriteria = [
    { text: "Are you currently studying or have you completed your studies in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa?", answered: null },
    { text: "Is your graduation year after January 2024?", answered: null },
    { text: "Are you already in a team of 4 - 5 or are you willing to be grouped into teams by the organizers?", answered: null }
  ];
  teamCriteria = [
    {text:"Are all of your team members currently studying or have completed their studies in a University, College (undergraduate, Associate, or Diploma program), or High School in Africa?", answered: null},
    {text:"Are the graduation years of all team members after January 2024?", answered: null},
    {text:"Is each team member registered only to one team?", answered: null},
    {text:"Does your team have 3 to 5 members?", answered:null},

  ];
  // general criteria list
  // individualCriteria = [
  //   { text: "You should currently be studying or have completed your studies at a University, College (undergraduate, Associate, or Diploma program), or High School in Africa.", answered: null },
  //   { text: "Your graduation year should be on or after the year the hackathon is held.", answered: null },
  //   { text: "You should already be in a team of 4-5 members or be willing to be grouped into teams by the organizers.", answered: null }
  // ];
  
  // teamCriteria = [
  //   { text: "All of your team members should currently be studying or have completed their studies at a University, College (undergraduate, Associate, or Diploma program), or High School in Africa.", answered: null },
  //   { text: "The graduation years of all team members should be on or after the year the hackathon is held.", answered: null },
  //   { text: "Each team member should be registered in only one team.", answered: null },
  //   { text: "Your team should have 3 to 5 members.", answered: null }
  // ];
 
 

  criteria: any[] = this.individualCriteria;
  currentQuestionIndex: number = 0;
  eligibilityConfirmed: boolean = false;
  ineligible: boolean = false;
  registrationTypeSelected: boolean = false;
 

  selectRegistrationType(type: string) {
    this.registrationTypeSelected = true;
    this.isIndividual = type === 'individual';
    this.criteria = this.isIndividual ? this.individualCriteria : this.teamCriteria;
    this.resetEligibility();
    this.registerService.setRegistrationType(type);
  }


  switchRegistrationType() {
    this.isIndividual = !this.isIndividual;
    this.criteria = this.isIndividual ? this.individualCriteria : this.teamCriteria;
    this.resetEligibility();
    const type = this.isIndividual ? 'individual' : 'team';
    this.registerService.setRegistrationType(type);
  }

  

  resetEligibility() {
    this.currentQuestionIndex = 0;
    this.eligibilityConfirmed = false;
    this.ineligible = false;
    this.registrationButtonVisible = false;
    this.criteria.forEach(c => c.answered = null);
  }

  answerYes() {
    this.criteria[this.currentQuestionIndex].answered = true;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.criteria.length) {
      this.eligibilityConfirmed = true;
      this.registrationButtonVisible = true;
      this.registerService.checkEligibility();
    }
  }

  answerNo() {
    this.criteria[this.currentQuestionIndex].answered = false;
    this.ineligible = true;
  }
}