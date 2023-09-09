import { IconDefinition, faBookOpen, faLightbulb, faListCheck, faMagnifyingGlass, faPenToSquare, faPencil, faVials } from '@fortawesome/free-solid-svg-icons';
import img1 from "../makronexa.png"
import img2 from "../settings.png"
import img3 from "../uploadFile.png"
export interface calaProps {
    id: number;
    title: string;
    description: string;
  }
export interface FAQProps {
    id: number;
    question: string;
    answer: string;
  }
 
export interface timelineItemsProps {
    id: number;
    icon:IconDefinition;
    color:string;
    title: string;
    description: string;
    imgUrl?:string;
  }
  export const studentsItems:timelineItemsProps[] = [
  
    {

      id:1,
      icon:faBookOpen,
      color:"rgb(41, 128, 185)",
      title: 'Content Summarization',
      description: 'Instantly obtain concise summaries of lengthy articles, research papers, and textbooks.',
      imgUrl:img1 
    },
    {
      id:2,
      icon:faMagnifyingGlass,
      color:"rgb(192, 57, 43)",
      title: 'Research Support',
      description: 'Effortlessly find relevant research materials, articles, and sources to enhance your assignments and CALA projects',
      
    },
    {
      id:3,
      icon:faPencil,
      color:"rgb(250, 147, 37)",
      title: 'Study Assistance & Homework Help',
      description: 'Get step-by-step solutions and explanations for math, science, and other subjects.',
      imgUrl:img1 
    },
    {
      id:4,
      icon:faPenToSquare,
      color:"rgb(26, 188, 156)",
      title: 'Essay Writing',
      description: 'Improve your essays with grammar checks, writing style suggestions, and content enhancements. Enhance your writing skills and create well-structured, compelling essays.',
    },
  ];
  
 export   const teacherItems:timelineItemsProps[] = [
  {
    id:1,
    icon: faLightbulb,
    color: 'rgb(247, 195, 49)',
    title: 'CALA Generation Assistance',
    description: 'Harness AI to assist in generating educational content, CALA projects, including quizzes, practice exercises, and lesson plans, based on specific learning objectives and curriculum requirements.',
    imgUrl:img1 

  },
  {
    id:2,
    icon: faVials,
    color: 'red',
    title: 'Create Exams Within Seconds',
    description: 'Choose from over 20L+ subjective and objective questions and create your test within seconds! Plan, Conduct & Evaluate Exams with Ease.',
    imgUrl:img2 
    
  },
  {
    id:3,
    icon: faListCheck,
    color: 'rgb(0, 123, 255)',
    title: 'Automated Grading and Assessment',
    description: 'Utilize AI-powered tools to automatically grade objective assessments, such as CALA projects, multiple-choice questions or fill-in-the-blank exercises, saving time and providing instant feedback to students.',
    imgUrl:img3
  },
 
];
   
  export const calaFAQ:FAQProps[] =[
    {id: 1,
    question: "Is Makronexus AI free to use?",
    answer: "Yes, you can create an account to use Makronexus AI for free. You have a 60 page limit for the free version on a range of different PDFs with maximum document size at 60 pages.",},
    
    {id: 2,
    question: "What do you do with my documents?",
    answer: "We train our AI on you data",},
    {id: 3,
    question: "How are my documents secured?",
    answer: "Your documents are securely stored in encrypted cloud storage. We have stringent security protocols to provide the highest standards of safety to protect your information from any malicious intent. You own and control your data and the ability to delete any unwanted files on your dashboard.",},
    {id: 4,
    question: "How does Makronexus AI work?",
    answer: "Makronexus AI creates vector embeddings for semantic search and utilizes the latest advances in AI to synthesize results based on natural language commands.",},
    {id: 5,
      question: "What type of document should I upload?",
      answer: "Currently we support DOC, DOCX, PDF, more file types coming soon."},
    
]
  export const quickFeatures:calaProps[]=[
    {id: 1,
    title: "Summarize long papers",
    description: "Learn Faster. Turn complex technical papers into simply explained summaries. Discover new insights 100X faster.",},
    {id: 2,
    title: "Instant Q&A",
    description: "Answer hard questions related to your file. Get easy-to-understand answers instantly.",},
    {id: 3,
    title: "CALA Assistance",
    description: "AI has revolutionized CALA research, simplifying complex data analysis and enhancing productivity.The future of CALA research is brighter than ever with AI's transformative capabilities",},
    
]