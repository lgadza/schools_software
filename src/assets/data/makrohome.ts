import teacher from "../../assets/imgs/teacher.jpg"
import student from "../../assets/imgs/student.jpg"
import parent from "../../assets/imgs/parent.jpg"
import schoolChairs from "../../assets/imgs/schoolChairs.jpg"

export interface imgProps {
    id: number;
    title: string;
    imageUrl:string;
    description: string;
  }
 
   
  export const betterCardList:imgProps[]=[
    {id: 1,
    title: "Schools",
    imageUrl:schoolChairs,
    description: "Automate operations, boost efficiency and reduce overheads with the most powerful school management platform by your side.",},
    {id: 2,
    title: "Teachers",
    imageUrl:teacher,
    description: "By streamlining administrative tasks, such as attendance tracking, grade management, and scheduling, teachers will have more time to focus on meaningful interactions with students.",},
    {id: 3,
    title: "Students",
    imageUrl:student,
    description: "Never miss your CALA submission deadline with CALA Assistance at your fingertips.",},
    {id: 4,
    title: "Parents",
    imageUrl:parent,
    description: "Monitor & track your children’s progress with complete transparency and stay on top of all the school updates with ease",},
]
export interface homeFeatureProps{
    id:number;
    heading:string;
    content:string;

}


export const admissionFeatures: homeFeatureProps[] = [
    {
      id: 1,
      heading: `Digitize Student Records with Ease`,
      content: `Go paperless by securely storing all essential data and documents in an accessible digital platform.`,
    },
    {
      id: 2,
      heading: `Deliver with Speed and Efficiency`,
      content: `Streamline the entire process and eliminate delays with our automated admissions system.`,
    },
    {
      id: 3,
      heading: `Create a Delightful Experience`,
      content: `Make admissions a joy for everyone, from administrators and counselors to students and parents.`,
    },
  ];
  
export const HomeIAFeatures: homeFeatureProps[] = [
    {
      id: 1,
      heading: `Infinite saved time`,
      content: `Highly accessible and highly relevant information at one touch`,
    },
    {
      id: 2,
      heading: `Easy & Quick Setup`,
      content: `Integrate (no-code) & use today: low effort, do what you have to do!`,
    },
    {
      id: 3,
      heading: `Human like`,
      content: `Verbalized and factual answering - close to no errors in interpretation of information`,
    },
  ];
  