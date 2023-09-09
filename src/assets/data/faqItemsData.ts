import { CompanyName } from "./company";
export interface FAQItem {
    id: number;
    question: string;
    answer: string;
  }

  
  export const  FAQItems: FAQItem[] = [
    {
        id: 1,
        question: `What is the main purpose of ${CompanyName}?`,
        answer: `${CompanyName} is designed to provide an integrated platform for school management, streamlining administrative tasks, and facilitating efficient student data management.`,
      },
      {
        id: 2,
        question: 'How do you handle data security and privacy?',
        answer: 'Data security and privacy are our top priorities. Our software employs robust encryption and follows industry best practices to ensure the confidentiality and safety of all user data.',
      },
    {
      id: 3,
      question: `Can ${CompanyName} be customized to suit our schools specific needs?`,
      answer: 'Yes, our software is highly customizable. We understand that different schools have unique requirements, so we offer flexibility in tailoring the software to meet your specific needs.',
    },
    {
      id: 4,
      question: 'What kind of support and training do you provide?',
      answer: 'We provide comprehensive support and training to help schools make the most of our software. Our team is available to assist with any inquiries and offer training sessions to ensure smooth implementation and utilization.',
    },
    {
      id: 5,
      question: 'How will CALA AI enhance the efficiency of the Continuous Assessment Learning Activity?',
      answer: ' CALA AI brings cutting-edge technology to the CALA project, streamlining and automating various assessment processes. By utilizing advanced algorithms and data analysis, CALA AI can quickly evaluate students performance, generate valuable insights, and provide real-time feedback to both teachers and students. This efficiency ensures that educators can focus more on instructional support and tailor learning activities, while students receive timely guidance to improve their academic journey.',
    },
    {
      id: 6,
      question: 'Can you explain how CALA AI contributes to continuous improvement in the CALA project over time?',
      answer: 'CALA AI is a learning system itself. As it gathers more data and interacts with students and teachers, it continuously refines its algorithms and adapts to the evolving educational landscape. This means that CALA AI gets smarter over time, becoming even more effective at providing personalized learning experiences and generating valuable insights. Its ongoing improvement ensures that the CALA project remains at the forefront of modern education, delivering exceptional outcomes for students and educators alike.',
    },
    {
      id: 7,
      question: 'How will students learn when they rely on CALA AI?',
      answer: 'The CALA AI is designed to be a supportive learning companion for students rather than a direct source of answers. It will act as a guiding mentor, assisting students in their learning journey. When students use CALA AI, they will encounter a dynamic and interactive platform that presents them with thought-provoking questions and challenging exercises. Instead of simply providing answers, CALA AI will encourage critical thinking and problem-solving skills by prompting students to analyze concepts, explore different approaches, and make informed decisions, much like they would ask their teacher for guidance. This approach fosters a deeper understanding of the subject matter and empowers students to become independent learners, preparing them to excel in a rapidly evolving world. CALA AIs goal is to nurture a lifelong love for learning and equip students with the essential skills they need to succeed academically and beyond.',
    },
   
    
  ];
  


export const admissionFAQ: FAQItem[] = [
  {
    id: 1,
    question: "How can our school implement your admission management software?",
    answer: "Implementing our admission management software is straightforward. Contact our sales team, and they will guide you through the setup process, including data migration and staff training.",
  },
  {
    id: 2,
    question: "Is the admission management software customizable to our school's needs?",
    answer: "Yes, our admission management software is highly customizable. We understand that each school has unique requirements, and our software can be tailored to fit your specific admission processes.",
  },
  {
    id: 3,
    question: "Can the software handle a large number of admission inquiries and applications?",
    answer: "Absolutely! Our admission management software is designed to handle a high volume of inquiries and applications. It has robust scalability to accommodate schools of all sizes.",
  },
  {
    id: 4,
    question: "What security measures are in place to protect student data?",
    answer: "We take data security seriously. Our admission management software employs industry-standard encryption and access controls to safeguard student data and ensure compliance with data protection regulations.",
  },
  {
    id: 5,
    question: "Does the software provide analytics and reporting on admission trends?",
    answer: "Yes, our admission management software includes advanced analytics and reporting features. You can gain valuable insights into admission trends, conversion rates, and counselor performance to optimize your admission strategies.",
  },
  {
    id: 6,
    question: "What types of schools should invest in an admission management system?",
    answer: "Every school should have an admission management system. The software is best suited for schools of all sizes, both public and private, day school and boarding school.",
  },
];

