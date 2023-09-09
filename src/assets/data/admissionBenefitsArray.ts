import { CompanyName } from "./company";
interface AdmissionBenefit {
    id:number;
    heading: string;
    content: string;
  }
  
  // Define the array of objects directly
   export const admissionBenefitsArray: AdmissionBenefit[] = [

    {
      id:2,
      heading: "Fast admission processes",
      content: `${CompanyName} helps fasten the admission processes. Schools, colleges, and educational institutions can avoid long queues at the admission counter with the admission management software.`,
    },
    {
      id:3,
      heading: "Better record management",
      content: `Educational institutions can avoid long and tiresome manual data management processes with an online admission system. They can store huge data files safely with the admission management software. Secure your students’ data efficiently with ${CompanyName}.`,
    },
    {
      id:4,
      heading: "Inquiry management",
      content: "The online admission system allows educational institutions to handle admission inquiries effortlessly. They can reach out to more students and parents seeking admission to the institute.",
    },
    {
      id:5,
      heading: "Aids information flow",
      content: `Providing the correct information at the correct time is crucial. With ${CompanyName}, assign or transfer the inquiries to specific counselors or handle them yourself to make the admissions process easier.`,
    },
    {
      id:6,
      heading: "Reduced paperwork",
      content: "Avoid using piles of paper in the admission process. Admission management software reduces paperwork and promotes environment-friendly admission processes.",
    },
    {
      id:7,
      heading: "Easy follow-up process",
      content: `${CompanyName} eases the follow-up process with interested candidates through calls. Educational organizations can set up a follow-up call with a single click. They can also add the admitted students directly to the student’s directory.`,
    },
    {
      id:8,
      heading: "Tracking the effectiveness of admission processes",
      content: "Track the effectiveness of leads and quantify the efforts of admission counselors with responses of students and parents. Keep an eye on the ongoing activities and track day-to-day admissions activities.",
    },
    {
      id:9,
      heading: "Enhanced productivity",
      content: `The admission management system enhances the productivity of admission counselors and administrative staff. Increase the overall productivity throughout the institute with ${CompanyName}`,
    },
    {
      id:10,
      heading: "One-stop solution",
      content: "The admission management module is a one-stop solution for lead generation, admissions, and inquiries handling. Schools can reduce their dependency on traditional admission processes through this module.",
    },
  ];
  

interface Characteristics {
    id: number;
    heading: string;
    imageSrc: string;
    content: string;
  }
  

  export const characteristicsArray: Characteristics[] = [
  
    {
      id: 2,
      heading: "Student data collection",
      imageSrc: "",
      content: `Educational organizations can collect and manage student information effortlessly with ${CompanyName}. Now, admins don't have to collect the data of individual students manually. They can automate the data collection process with the admission management software.`,
    },
    {
      id: 3,
      heading: "Document collection",
      imageSrc: "",
      content: "Admins can collect relevant documents from students with admission management software. Students can upload their information on the dashboard.",
    },
    {
      id: 4,
      heading: "Selection",
      imageSrc: "",
      content: `Educational organizations can generate merit lists to fasten the admission process and include top performers in the institutes. With ${CompanyName}, educational institutes can get more learners through an automated selection process.`,
    },
    {
      id: 5,
      heading: "Admissions",
      imageSrc: "",
      content: `Automate the admission process and prevent long queues at the admission desk with ${CompanyName}. Get the answers to all admission-related queries on the same platform.`,
    },
  ];
  
  

interface Paragraph {
    id: number;
    content: string;
  }
  
 
 export const admissionParagraphs: Paragraph[] = [
    {
      id: 1,
      content: `With ${CompanyName}, educational institutions can automate student data and document collection, selection, and admission processes.`,
    },
    {
      id: 2,
      content: `As schools are heading towards new academic sessions, the need for an online admission system has increased. Schools must give admission management software a try to streamline their admissions process. Provide hassle-free admission processes to every stakeholder with ${CompanyName}.`,
    },
    {
      id: 3,
      content: "Updating schools and other educational institutions with time is vital. Running the traditional admissions process takes a lot of time. Moreover, conventional admissions processes have lags and inefficiencies. Fortunately, school administration can solve the problems in the traditional admissions system through admission management software.",
    },
  ];
  
 
  
  