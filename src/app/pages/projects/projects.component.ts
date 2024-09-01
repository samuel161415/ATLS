import { Component } from '@angular/core';
import { getCountryFlagByCountryName } from './flags';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  
  // currentSection: string = 'project';
  isModalOpenArray: boolean[] = [];
  isFinalOpenArray: boolean[] = []
  

  constructor(private sanitizer: DomSanitizer) {
    // Initialize the isModalOpenArray with the same number of elements as projects
    this.isModalOpenArray = new Array(this.projects.length).fill(false);
    this.isFinalOpenArray = new Array(this.final_projects.length).fill(false)
  }

  openModal(projectIndex: number) {
    // Set the modal state for the clicked project to open
    this.isModalOpenArray[projectIndex] = true;
  }
  openFinalModal(projectIndex: number) {
    // Set the modal state for the clicked project to open
    this.isFinalOpenArray[projectIndex] = true;
  }

  closeModal(projectIndex: number) {
    // Set the modal state for the clicked project to close
    this.isModalOpenArray[projectIndex] = false;
  }
  closeFinalModal(projectIndex: number) {
    // Set the modal state for the clicked project to close
    this.isFinalOpenArray[projectIndex] = false;
  }  

  // scrollToSection(sectionId: string): void {
  //   this.currentSection = sectionId;
  //   const canNavigate: boolean =
  //     !document.body.classList.contains('overflow-hidden');
  //   const element = document.getElementById(sectionId);
  //   if (element != null && canNavigate) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  final_projects : any[] = [
    {
      team: 'Brainiacs',
      projectname: 'HealthHUB',
      description:
        'An interactive AI-powered digital platform that uses 3D brain scans to revolutionize medical education.',
      countries: ['Tunisia'],
      category : 'Healthcare',
      demo : "https://www.youtube.com/embed/oNeyWCr0MdY?si=5SVUZFRkf-AB5bmU",
      pitch : "https://www.youtube.com/embed/JsAqlL1mOBw?si=BdeByYyVYukNu5Wt",
      webUrl : "http://37.187.29.19:5085/",
      
      

    },
    {
      team: 'FutureX',
      projectname: 'Kurio',
      description:
        "An AI-powered app for personalized and interactive children's learning and entertainment.",
      countries: ['Algeria'],
      category : 'AI-driven Artistry and Innovation',
      demo : "https://www.youtube.com/embed/BLcX8sRU-aE?si=wYdkUaKh9Xkhr4bI",
      pitch : "https://www.youtube.com/embed/fWRPbIW21J0?si=JdjMRhojDF052ltO",
      mobileUrl : "https://drive.google.com/file/d/1CG6WzV7HpjxxOY_Ti6j8EgS4NJT75vpN/view?usp=drive_link"
       
    },
    {
      team: 'Miiltoo',
      projectname: ['Miiltoo'],
      description:
        'AI-enhanced learning for Ethiopian students, blending traditional teaching with interactive quizzes and personalized support.',
      countries: ['Ethiopia'],
      category : 'Education and Learning',
      demo : "https://www.youtube.com/embed/LTuWkjnSR-w?si=kKmQ32TY7JZvtRoZ",
      pitch : "https://www.youtube.com/embed/TXcBTA-3fvI?si=IhQ7QLiNe3CmM-jx",
      webUrl : "https://miiltoo.onrender.com/"
    },
    {
      team: 'Sapphire',
      projectname: 'StoryCraft',
      description:
        'AI-powered platform that creates personalized and engaging storybooks for early readers, fostering a love for reading among children.',
      countries: ['Kenya'],
      category : 'AI-driven Artistry and Innovation',
      demo : "https://www.youtube.com/embed/YHBCz0VNjaA?si=AJHna8gKMUX8EAiR",
      pitch : "https://www.youtube.com/embed/d5vJMWklKpM?si=DgSCAMdTxeb99GsK",
      webUrl : "http://www.storycraftai.tech/"

    },
    {
      team: 'Innovate Fusion',
      projectname: 'THE ARCHITECT AI',
      description:
        'Virtual architectural design assistant that uses generative AI to generate customizable and sustainable skyscraper designs for architecture and construction projects in Africa.',
      countries: ['Ethiopia'],
      category : 'Personalized Assistance',
      demo : "https://www.youtube.com/embed/irHZkTfRL2c?si=1g-5WDz6Bx1L39zS",
      pitch : "https://www.youtube.com/embed/AvpUPbTf7HE?si=7USncKJOg2-K1_8Q",
      webUrl : "https://architect-ai-theta.vercel.app/home",
      mobileUrl : "https://drive.google.com/file/d/1E7CKANKvaY6yh-VKgUTdcSc6QxCS8K6r/view?usp=drive_link"

    },
    {
      team: 'The Siblings',
      projectname: 'CogniPath',
      description:
        'AI-powered platform creates learning materials for students with learning disorders.',
      countries: ['Tunisia','Cameroon'],
      category : 'Education and Learning',
      demo : "https://www.youtube.com/embed/SIjvIMWqgDs?si=ZVHTL7YUAN00sYgi",
      pitch : "https://www.youtube.com/embed/5fKccJiX_8I?si=7TA69lVH6Ni494p8",
      webUrl : "https://cognipath.azurewebsites.net/"
    
    },
    {
      team :"YYeni AI",
      projectname : "YYeni AI",
      description : "AI chatbot for an enhanced educational experience through inquiry-based learning and customizable content.",
      category : 'Education and Learning',
      demo : "https://www.youtube.com/embed/lhVff0IBnOY?si=S1_gEIo48Xjo-BC-",
      pitch : "https://www.youtube.com/embed/ZoYZDrZN1SY?si=osdo2FZf28eeRa_0",
      countries : ["Namibia"],
      webUrl : "https://yyenichat.com/",
      
    },
    // {
    //   team: 'D1g1t4l Dyn4m0s',
    //   projectname: 'Mail QA',
    //   description:" Mail QA is a workspace assistant that seamlessly integrates information retrieval, email management, and calendar scheduling into yourworkspace.",
    //   countries: ['Kenya'],
    //   category : 'Communication and Accessibility',
    //   demo : "https://www.youtube.com/embed/uEaJ1gJCVRY?si=hXF1VlzH0BtYRfyu",
    //   pitch : "https://www.youtube.com/embed/0f6WZqes9Js?si=IJNUcqtCOuPu0Q0-",
    //   webUrl : "https://mailqademo.myratecardinfo.com/",
    //   slackUrl : "https://digital-dynamos-group.slack.com/join/shared_invite/zt-2609f7b1w-zVJylghjkdyDCucv_U~EXw#/shared-invite/email"
    // },
    {
      team: 'RMaster',
      projectname: 'Lasta',
      description:
        'A Recruitment Processing Platform powered by Generative AI, streamlining applicant tracking, CV evaluation, and soft skills assessment for efficient hiring.',
      countries: ['Ethiopia'],
      category : 'Data Analysis and Decision making',
      demo : "https://www.youtube.com/embed/KyNLER53Kt0?si=Z-k4EtlO44VEdN_b",
      pitch : "https://www.youtube.com/embed/2fFadfYMoVI?si=JEBPueOIqzI2o5YF",
      webUrl : "https://rmaster.knovuslab.com/"

    },
  ]
  categories : any[] = [
    {
      title : 'Data Analysis and Decision making',
      description : "Explore cutting-edge initiatives revolutionizing data analysis and decision support, including a Recruitment Processing Platform that enhances hiring efficiency, an AI platform that empowers small businesses with live insights, and a pioneering AI-powered document generation solution designed to tackle Africa's documentation obstacles."
    },
    {
      title : 'Communication and Accessibility',
      description : 'Elevate communication avenues with projects focused on language translation and urban navigation for the visually impaired. Witness innovations that transcend barriers, enhancing accessibility for all.'
    },
    {
      title : 'AI-driven Artistry and Innovation',
      description : 'Explore the intersection of AI and creativity through projects focused on music generation and storytelling. Dive into a showcase of artistic brilliance, where only the top 4 projects from the quarterfinals advance to the highly competitive semifinal stage.'
    },
    {
      title : 'Legal',
      description : 'Explore cutting-edge projects in the legal domain, featuring chatbots, document generation, and content summarization. Only the top 3 projects from the quarterfinals secured a spot in the semifinals, showcasing the transformative power of AI in the legal field.'
    },
    {
      title : 'Healthcare',
      description : 'Explore groundbreaking projects addressing healthcare challenges through AI, encompassing health assessment, medical education, and disease identification. With 20 projects in the quarterfinals, only the top 6 have secured a spot in the semifinals, shaping the future of Africa with healthcare solutions.'
    },
    {
      title : 'Agriculture and Farming',
      description : 'Immerse yourself in projects dedicated to revolutionizing agriculture, offering solutions such as farmer apps, crop optimization, and data analysis powered by AI. Among the 20 projects in the quarterfinals, only the top 4 have earned their place in the semifinals, showcasing the pinnacle of agricultural innovation.'
    },
    {
      title : 'Education and Learning',
      description : 'Dive into the world of education transformation with projects focused on AI-driven advancements, including personalized learning apps, note taking tools, and content creation. Out of 22 projects in the quarterfinals, only the top 10 have secured a spot in the semifinals, leading the way for the evolution of educational technologies.'
    },
    {
      title : 'Personalized Assistance',
      description : 'Explore cutting-edge projects delivering personalized recommendations and support services, from book suggestions to resume builders. Only 6 projects outshined the rest in the quarterfinals, earning their spot in the semifinals—leading the charge in precision learning innovation.'
    },
  ]

  projects: any[] = [
    {
      team: 'FutureX',
      projectname: 'Kurio',
      description:
        "An AI-powered app for personalized and interactive children's learning and entertainment.",
      countries: 'Algeria',
      video : 'https://www.youtube.com/embed/3p7NTY88hZk?si=35MouwGZRmHRvjnU',
      category : 'AI-driven Artistry and Innovation',
       
    },
    {
      team: 'Miiltoo',
      projectname: 'Miiltoo',
      description:
        'AI-enhanced learning for Ethiopian students, blending traditional teaching with interactive quizzes and personalized support.',
      countries: 'Ethiopia',
      category : 'Education and Learning',
      video : 'https://www.youtube.com/embed/USxOjaacD-M?si=1crHEVi61lI8x7gz'
    },
    {
      team: 'Brainiacs',
      projectname: 'HealthHUB',
      description:
        'Changing Medical Education with 3D Brain Scans for Interactive Learning.',
      countries: 'Tunisia',
      category : 'Healthcare',
      video : "https://www.youtube.com/embed/WD2QS5Vffbk?si=BzDw-JkFHraGA0Yj",

    },
    {
      team: 'Nucleus',
      projectname: 'Vega',
      description:
        'An AI-powered music generation platform that enables users to personalize their music experience. ',
      countries: 'Ethiopia',
      category : 'AI-driven Artistry and Innovation',
      video : "https://www.youtube.com/embed/Um3dk9XxBXI?si=XxRku4XI7ja7S5fh",

    },
    {
      team: 'AfroGPT ',
      projectname: 'Enderase',
      description: 'AI-powered Ethiopian legal chatbot.',
      countries: 'Ethiopia',
      category : 'Legal',
      video: 'https://www.youtube.com/embed/uSugZbiQj3Q?si=lOuaptimJCIbxMOv'
    },
    {
      team: 'Cyber X',
      projectname: 'AGRIGENI-X',
      description:
        'AI-driven mobile app to assist farmers with real-time advice on animal care, crop cultivation, disease detection, and soil moisture, fostering sustainability.',
      countries: 'Mauritius',
      category : 'Agriculture and Farming',
      video : 'https://www.youtube.com/embed/ZX4hv_KMUHE?si=Em_UumyU3sPhCd33'
    },
    {
      team: 'Byte Builders',
      projectname: 'AfriData Nexus',
      description:
        "AI-powered document generation to overcome Africa's documentation challenges.",
      countries: 'Ethiopia',
      category : 'Data Analysis and Decision making',
      video : 'https://www.youtube.com/embed/SXlaQP6AAL4?si=0n7vfcSdRoUopGC0'
    },
    {
      team: 'Sapphire',
      projectname: 'StoryCraft',
      description:
        'AI-powered platform that creates personalized and engaging storybooks for early readers, fostering a love for reading among children.',
      countries: 'Kenya',
      category : 'AI-driven Artistry and Innovation',
      video : "https://www.youtube.com/embed/1HaJ8d3vkKo?si=3yycuASR6A7vptla",

    },
    {
      team: 'Innovate Fusion',
      projectname: 'THE ARCHITECT AI',
      description:
        'Virtual architectural design assistant that uses generative AI to generate customizable and sustainable skyscraper designs for architecture and construction projects in Africa.',
      countries: 'Ethiopia',
      category : 'Personalized Assistance',
      video : "https://www.youtube.com/embed/xSGaDjqbJMw?si=dDMNbe2AYXdpizKG",

    },
    {
      team: 'Savanna synth',
      projectname: 'LittleVisions',
      description:
        'Interactive storytelling web app empowering kids to create adventures using text, images, and sounds. ',
      countries: 'Kenya',
      category : 'AI-driven Artistry and Innovation',
      video : "https://www.youtube.com/embed/96ZjPTSd9Pw?si=kTxWzb6sDaLhDMpz",

    },
    {
      team: 'BAIai',
      projectname: 'Business Analyst Intelligence AI(BAIai)',
      description:
        'AI platform that automates data analysis for small businesses, providing real-time insights.',
      countries: 'Kenya',
      category : 'Data Analysis and Decision making',
      video : 'https://www.youtube.com/embed/lWz8peZsQEA?si=txOKkUfppV1nMY09'
    },
    {
      team: 'The Siblings',
      projectname: 'CogniPath',
      description:
        'AI-powered platform creates learning materials for students with mental disorders.',
      countries: 'Tunisia,Cameroon',
      category : 'Education and Learning',
      video : 'https://www.youtube.com/embed/0i6kDZ7KBMw?si=9qmpwzk3sbOwHDEi'
    },
    {
      team: 'GenZAI ',
      projectname: 'AgriSense',
      description:
        'AI-powered agricultural solution assists farmers in optimizing crop selection and planting schedules for higher yields and market alignment.',
      countries: 'Kenya, Nigeria',
      category : 'Agriculture and Farming',
      video : 'https://www.youtube.com/embed/WKA_jOpEn88?si=RfmxzHDnEz91Py2N',

    },
    {
      team: 'Code Abyssinia ',
      projectname: 'WikiGPT',
      description: 'Wikipedia article summarizer using AI.',
      countries: 'Ethiopia',
      category : 'Education and Learning',
      video : 'https://www.youtube.com/embed/UmVc28ZX544?si=WU50LMW639L_wppq'
    },
    {
      team: 'Octatech',
      projectname: 'FININFO',
      description:
        'Online chat platform offering personalized financial advice and information to customers.',
      countries: 'Kenya',
      category : 'Personalized Assistance',
      video : 'https://www.youtube.com/embed/acp26QQvQR8?si=DZp4QxsYameO5DTJ',
    },
    {
      team: 'Fem Cycle',
      projectname: 'Fem Cycle',
      description:
        'AI-powered menstrual health management platform for young women and girls in Sub-Saharan Africa.',
      countries: 'Rwanda, South Sudan',
      category : 'Healthcare',
      video : "https://www.youtube.com/embed/8Kd0InStyhU?si=JwVx0b39H9Q8R1mZ",

    },
    {
      team: 'InnovateX',
      projectname: 'Assister ',
      description:
        'A platform offers real-time language translation, telemedicine, job matching, and digital literacy support to empower African refugees.',
      countries: 'Ethiopia',
      category : 'Communication and Accessibility',
      video : "https://www.youtube.com/embed/EHHet4SyqmA?si=hhSQIseYkO6OYpK5",

    },
    {
      team: 'Balewite,Nigeria',
      projectname: 'BOKA',
      description:
        'A telemedicine platform using AI for remote diagnostics and consultations to address healthcare accessibility challenges in Nigeria.',
      countries: 'Nigeria',
      category : 'Healthcare',
      video : 'https://www.youtube.com/embed/GWHecW3Y8LU?si=c6WL2elD05VewY45'
    },
    {
      team: 'CodeCrafters',
      projectname: 'Taarifa',
      description:
        'Integrate generative AI into education for personalized job skill training.',
      countries: 'Ethiopia',
      category : 'Education and Learning',
      video : "https://www.youtube.com/embed/47fi10myNRA?si=B6hYEymei90MytlA"
    },
    {
      team: 'CodeBabes',
      projectname: 'VisaBud',
      description:
        'Visa guidance platform for Africans, minimizing rejection risks with tailored advice.',
      countries: 'Cameroon',
      category : 'Communication and Accessibility',
      video : 'https://www.youtube.com/embed/w_vdnRwJXMY?si=NR0bhpjIo6Qw_KJX'
    },
    {
      team: 'Error404',
      projectname: 'SmartNote',
      description:
        'Note-taking app streamlining lectures into summaries and generates custom exam questions for efficient studying.',
      countries: 'Nigeria, Ethiopia, Togo',
      category : 'Education and Learning',
      video : 'https://www.youtube.com/embed/4NS9YlxdGuo?si=RBFTMJ7gBPgWos8p'
    },
    {
      team: 'Et Hack Maverics',
      projectname: 'QuizMe',
      description: 'An AI quiz generator simplifying quiz creation.',
      countries: 'Ethiopia',
      category : 'Education and Learning',
      video : 'https://www.youtube.com/embed/O1unZzFky7c?si=YBg1Oy2wziW9YscH'
    },
    {
      team: 'Moroccan Ai Crafters',
      projectname: 'My Way(طريقي)',
      description:
        ' AI-driven platform that creates personalized goal roadmaps, helping individuals define and achieve their aspirations effectively.',
      countries: 'Morocco',
      category : 'Personalized Assistance',
      video : "https://www.youtube.com/embed/Xywm3fzAKfs?si=jC2vtqlVl7oU1cLv" ,

    },
    { 
      team: 'tech titans',
      projectname: 'NeuroGenAI',
      description:
        'An AI-powered platform aims to prevent strokes and improve rehabilitation in developing nations by offering personalized exercises and guidance.',
      countries: 'Ethiopia',
      category : 'Healthcare',
      video : "https://www.youtube.com/embed/-xQLTF9JDns?si=-22oAJoW4BN_83Wp",

    },
    {
      team: 'notchAI',
      projectname: 'NOTCHAI',
      description:
        'AI-powered health assessment platform enabling users to make informed decisions about their well-being',
      category : 'Healthcare',
      countries: 'Nigeria',
      video : 'https://www.youtube.com/embed/wNwvLTHdsMw?si=a_0GIpm9Eb8ikVjH'
    },
    {
      team: 'D1g1t4l Dyn4m0s',
      projectname: 'Mail QA',
      description:
        'AI-powered platform that provides email summaries and generates natural language responses.',
      countries: 'Kenya',
      category : 'Communication and Accessibility',
      video : 'https://www.youtube.com/embed/xSLUsVjjj10?si=9b1NJPX58l-6yjK-'
    },
    {
      team: 'Binary brains',
      projectname: 'PATHFINDER',
      description:
        'AI-powered urban navigation for the visually impaired, combining AI and augmented reality for enhanced independence and mobility.',
      countries: 'democratic republic of congo',
      category : 'Communication and Accessibility',

      video : 'https://www.youtube.com/embed/p2vVuX5NjkY?si=nRJgrwnpT5AadyQv'
    },
    {
      team: 'YYeni AI',
      projectname: 'YYeni AI',
      description:
        'AI chatbot for an enhanced educational experience through inquiry-based learning and customizable content.',
      countries: 'Namibia',
      category : 'Education and Learning',
      video : "https://www.youtube.com/embed/Bh7en52jwsc?si=Y7U7SD1UFp4mS78o",

    },
    {
      team: 'C0de Cr4ftsm3n',
      projectname: 'SoilSmart',
      description:
        'AI-powered soil analysis for enhanced crop yield and sustainable farming practices.',
      countries: 'Ethiopia, Kenya, Ghana',
      category : 'Agriculture and Farming',
    },
    {
      team: 'Byte Band1ts',
      projectname: 'LawSuite',
      description:
        'An AI web app that provides answers to legal questions and offers links to relevant laws and statutes.',
      countries: 'Uganda, Tunisia',
      category : 'Legal',
      video : 'https://www.youtube.com/embed/ie9eFXLmfWA?si=m7ILgxbN3BO8JNXj'
    },
    {
      team: 'RMaster',
      projectname: 'Lasta',
      description:
        'A Recruitment Processing Platform powered by Generative AI, streamlining applicant tracking, objective evaluation, and soft skills assessment for efficient hiring.',
      countries: 'Ethiopia',
      category : 'Data Analysis and Decision making',
      video : "https://www.youtube.com/embed/im5bmyZLfYo?si=wKB4M99bVMMlmJ4r"

    },
    {
      team: 'Studera',
      projectname: 'Studera',
      description:
        'AI-powered exam prep web app for personalized and efficient studying.',
      countries: 'Malawi, Nigeria',
      category : 'Education and Learning',
      video : "https://www.youtube.com/embed/ciKx69yqPiI?si=UsOnu1X0ei-_GJad",
    },
    {
      team: "konjoyew's Team",
      projectname: 'CLEAR SIGHT',
      description:
        'AI-powered solution for early Trachoma identification in East Africa, enhancing eye health.',
      countries: 'Ethiopia',
      category : 'Healthcare',
      video : "https://www.youtube.com/embed/Y_D-aBVzivw?si=Nu4qTasmsRRAHsJS",
    },
    {
      team: 'P1xel 4rch1t3cts',
      projectname: 'ArchAId',
      description:
        'AI-optimized infrastructure planning and cost-effective material selection for construction projects.',
      countries: 'South Africa, Tunisia, Nigeria',
      category : 'Personalized Assistance',
      video : 'https://www.youtube.com/embed/STZcZBNS33o?si=c9rrkJpYwPr7-prA'
    },
    {
      team: 'H4ck M4g1c14ns',
      projectname: 'Study Hacks',
      description:
        'AI-powered personalized study guides and summaries for students in higher education.',
      countries: 'Malawi, Namibia, Kenya',
      category : 'Education and Learning',
      video : "https://www.youtube.com/embed/jxuhB7Hz1Jk?si=lKiQ042w5G63SDfa",
    },
    {
      team: 'ClaritySmartTechnologies',
      projectname: 'LawBot Express',
      description:
        'AI-powered legal document analysis for streamlined, compliant, and risk-reduced content.',
      countries: 'Zimbabwe',
      category : 'Legal',
      video : "https://www.youtube.com/embed/PB-XytT8ozs?si=gTMytvL3tY9E4QkQ",

    },
    {
      team: 'amigo5',
      projectname: 'RESUMAI',
      description:
        "AI-powered platform for effortlessly generating personalized CVs and cover letters based on users' information and specific job descriptions.",
      countries: 'Ethiopia',
      category : 'Personalized Assistance',
      video : "https://www.youtube.com/embed/KrC1MeQyV3c?si=g1wvLjXTFV2cE6-H",

    },
    {
      team: 'Shazzy',
      projectname: 'Bookfinder',
      description:
        'Platform that helps book enthusiasts to find a book that fits their taste and interests.',
      countries: 'Kenya',
      category : 'Personalized Assistance',
      video : "https://www.youtube.com/embed/MZvgNDCl_WA?si=FjCQ77oqCz6AGIXq",
    },
    {
      team: 'InnovateX',
      projectname: 'InnovateX',
      description:
        'An AI-powered content personalization platform is being developed to address the learning challenges of students who struggle with complex concepts.',
      countries: 'Ethiopia, Nigeria, Kenya',
      category : 'Education and Learning',
      video :  "https://www.youtube.com/embed/2O4l0n1vUnY?si=2JmRahHo_H_zNu8D",
    },
    {
      team : "EcoGen Innovators",
      projectname : "AgriBot",
      description : "AI farming assistant providing tailored weather forecasts, resource advice, crop monitoring, market insights, and financial services access.",
      countries : "Zimbabwe, Algeria, Sudan, Zambia",
      category : 'Agriculture and Farming',
      video : "https://www.youtube.com/embed/4jNkfFL8JWU?si=SPaxIEVUmy5IlrAQ"
    }
  ];

  safeVideoUrls: any[] = this.projects.map((project) =>
    this.sanitizer.bypassSecurityTrustResourceUrl(project.video)
  );
  safeFinalDemoUrls: any[] = this.final_projects.map((project) =>
  this.sanitizer.bypassSecurityTrustResourceUrl(project.demo)
);
safeFinalPitchUrls: any[] = this.final_projects.map((project) =>
this.sanitizer.bypassSecurityTrustResourceUrl(project.pitch)
);

  categoryExpanded: boolean[] = new Array(this.categories.length).fill(false);
  finalExpand: boolean[] = new Array(this.projects.length).fill(false);
  toggleCategory(index: number) {
    this.categoryExpanded[index] = !this.categoryExpanded[index];
  }
  toggeFinalProject(index: number) {
    this.finalExpand[index] = !this.finalExpand[index];
  }
  

  ngOnInit(): void {
    // Add flag emojis to the projects
    
    this.projects = this.projects.map((project) => ({
      ...project,
      countriesWithFlags: project.countries
        .split(',')
        .map((country: string) => country.trim())
        .map(
          (country: string) =>
            ` ${getCountryFlagByCountryName(country)} ${country}`
        )
        .join(', '),
    }));
    this.final_projects = this.final_projects.map((project) => ({
      ...project,
      countriesWithFlags: project.countries
        .map((country: string) => country.trim())
        .map(
          (country: string) =>
            ` ${getCountryFlagByCountryName(country)} ${country}`
        )
        .join(', '),
    }));

  }
}
