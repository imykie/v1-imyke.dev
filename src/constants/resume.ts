export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Skill = {
  title: string;
  body: string[];
};

export type Education = {
  title: string;
  startDate: string;
  endDate: string;
  relevant: string[];
};

export type Certification = {
  title: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export interface Resume {
  name: string;
  title: string;
  intro: string;
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
}

const name = 'Michael Olatunji';

const title = 'Software Engineer';

const intro =
  "I'm a problem solving Software Engineer with background working effectively in dynamic environments. Proud team player focused on achieving project objectives with speed and accuracy. Proficient with automating, configuring management and monitoring tools, and in developing CI/CD pipelines.";

const workExperiences: WorkExperience[] = [
  {
    company: 'Cruise Automation (GM)',
    role: 'Incoming Software Engineer Intern',
    startDate: 'SEP 2022',
    endDate: '',
    achievements: ['Simulation Team (Fall)'],
  },
  {
    company: 'JP Morgan Chase',
    role: 'Incoming Software Engineer Intern',
    startDate: 'JUN 2022',
    endDate: '',
    achievements: ['Summer Analyst (Summer)'],
  },
  {
    company: 'Block Knowledge',
    role: 'Software and DevOps Engineer',
    startDate: 'DEC 2020',
    endDate: 'DEC 2021',
    achievements: [
      'Designed the database and system architecture for Kadogo (turn everyday purchases into charitable donations)',
      'Led the kadogo backend team of 2/3 people',
      'Optimized the backend to leverage on cloud services like serverless functions and messaging systems to increase performance and prevent downtime of the critical part of the application.',
      'Developed APIs for the mobile application, merchant and NGO dashboard.',
      'Facilitated the use of continuous integration and continuous deployment tools to reduce code shipping time and increase collaboration and productivity among the developers.',
      'Implemented the spare change and cashback donation algorithms.',
      'Set up Autoscaling, Load balancers and failover servers on AWS for development, staging, production environment.',
    ],
  },
  // {
  //   company: 'FarmKonnect Agric Business Nig. Ltd',
  //   role: 'Software Engineer (Contract)',
  //   startDate: 'SEP 2020',
  //   endDate: 'DEC 2020',
  //   achievements: [
  //     'Co-designed the database and system architecture for Afide. An inclusive financial platform for daily earners.',
  //     'Developed the web application that facilitates transactions and payment on the platform.',
  //     'Developed 4 dashboards for end-to-end activity of the platforms (Admin, User, Agent, Cooperative Admin Dashboards)',
  //   ],
  // },
  {
    company: 'Powerjamb',
    role: 'Software and DevOps Engineer (Intern, Part-time)',
    startDate: 'JUN 2019',
    endDate: 'SEP 2020',
    achievements: [
      'Managed infrastructure as code using AWS CloudFormation.',
      'Redesigned the landing page to 3x faster.',
      'Developed a web mobile-first examination application.',
      'Created Dockerfiles and built docker images for the microservices to run on Kubernetes cluster.',
      'Created and managed the deployment of microservices cluster to EKS using Docker, Kubernetes, Helm, and Jenkins.',
      'Experience with Amazon services such as AWS, VPC, S3, EC2 Relational Database (RDS), Document DB, Elastic Load Balancing, Autoscaling, ECR, ECS, Lambda, IAM, EKS, Beanstalk, and CloudFormation.',
    ],
  },
  {
    company: 'Soft Quest Incorporated',
    role: 'Software Enginer Intern',
    startDate: 'SEP 2018',
    endDate: 'MAR 2019',
    achievements: [
      'Produced clean, validation-ready code for given project needs.',
      'Developed a basic Banking Web Application with Angular and PHP.',
      'Developed a Car Racing game using JavaScript and HTML5 canvas.',
      'Built an advanced Scientific Calculator, Inventory System, Timer, Countdown on the Web and many other self-development Projects.',
    ],
  },
];

const skills: Skill[] = [
  {
    title: 'Languages',
    body: ['JavaScript/TypeScript', 'Python', 'Go'],
  },
  {
    title: 'Frameworks/Libraries',
    body: ['React', 'Vue', 'Nodejs', 'Nestjs', 'Firebase', 'GraphQL', 'Flask'],
  },
  {
    title: 'Storages/Databases',
    body: ['SQL', 'Postgres', 'MongoDB', 'Firestore', 'AWS S3', 'Cloud Storage'],
  },
  {
    title: 'Tooling',
    body: ['Linux', 'Git', 'Docker', 'CloudFormation', 'Prometheus', 'Graphana'],
  },
  {
    title: 'Automation Tools',
    body: ['Jenkins', 'Circle CI', 'GitLab CI', 'Github Workflows'],
  },
];

const educations: Education[] = [
  {
    title: 'B.Sc Computer Engineering at Obafemi Awolowo University, Ile-Ife',
    startDate: 'MAR 2019',
    endDate: 'CURRENT',
    relevant: [
      'Introduction to Computing',
      'Introduction to Programming',
      'Digital Computer Systems',
      'Calculus I & II',
      'Vector Analysis',
    ],
  },
  {
    title: 'Smith Internation Baptist Academy, Ogbomoso',
    startDate: 'SEP 2012',
    endDate: 'JUL 2018',
    relevant: [],
  },
];

const certifications: Certification[] = [
  {
    title: 'Cloud DevOps Engineer Nanodegree, Udacity',
    date: 'MAY 2020',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ – 900)',
    date: 'JUL 2020',
  },
];

const languages: Language[] = [
  {
    name: 'English',
    level: 'PROFICIENT',
  },
  {
    name: 'Yoruba',
    level: 'PROFICIENT',
  },
  {
    name: 'Spanish',
    level: 'BEGINNER',
  },
];

const hobbies = ['Learning', 'Music', 'Football'];

export const resume: Resume = {
  name,
  title,
  intro,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies,
};
