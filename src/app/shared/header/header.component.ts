import {
  Component,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { ModalService } from "src/app/modal.service";
import { RegisterService } from "src/app/services/register.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  showMenu: boolean = false;
  isModalOpenArray: boolean = false;
  @Input() currentSection: string = "landing";
  constructor(
    private elRef: ElementRef,
    private modalService: ModalService,
    private registerService: RegisterService
  ) {}

  showMentorsModal = false;
  mentorsRegistrationLink = "https://a2sv.typeform.com/to/wHajkVvJ";
  showModal: boolean = false;
  dropdownVisible: boolean = false;
  showGetInvolvedModal = true;
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showWaitlistBanner: boolean = true;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  openModal(event: Event) {
    event.stopPropagation();
    this.modalService.openModal();
  }

  openRegisterModal() {
    this.registerService.openModal();
    this.registerService.showEligibility();
  }

  onShowMentorsModal() {
    this.toggleChatEvent.emit(false);
    this.showMentorsModal = true;
    this.showGetInvolvedModal = false;
    
    document.body.classList.add("overflow-hidden", "z-0");
    document.getElementById("prizes")?.classList.add("z-0");
    document.getElementById("prizes")?.classList.remove("z-40");
  }
 

  onHideModal() {
    this.toggleChatEvent.emit(true)
    this.showModal = false;
    this.showGetInvolvedModal = true;
    this.showMentorsModal = false;
    document.body.classList.remove('overflow-hidden', 'z-0' )
    document.getElementById('prizes')?.classList.remove('z-0')
    document.getElementById('prizes')?.classList.add('z-40')
    document.getElementById('partners')?.classList.remove('hidden')
    document.getElementById('info')?.classList.remove('hidden')
    document.getElementById('judges')?.classList.remove('hidden')
    document.getElementById('eligibility')?.classList.remove('hidden')
    document.getElementById('about-us')?.classList.remove('hidden')
    document.getElementById('footer')?.classList.remove('hidden')
  }



  scrollToSection(sectionId: string): void {
    this.currentSection = sectionId;
    const canNavigate: boolean =
      !document.body.classList.contains("overflow-hidden");
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  setLinks( link: string) {
    window.open(link, "_blank");
  }
  navigateToEligiblity() {
    const shareModal = window.document.getElementById(
      "register_modal"
    ) as HTMLDialogElement;
    shareModal?.close();
    this.scrollToSection("eligibility");
  }
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  onHideWaitlistBanner (){
    this.showWaitlistBanner = false;
  }
}
