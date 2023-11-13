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
  startDate?: string;
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

export type Resume = {
  name: string;
  bio: string[];
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
};

const name = 'Michael Olatunji';

const bio = [
  'As a Computer Engineering student and Software Engineer, I am passionate about using technology to solve real-world problems. With a strong foundation in Computer Science and Engineering principles and programming languages such as JavaScript, Python, C++ and Java. I am constantly seeking opportunities to learn and apply my skills in new and innovative ways.',
  'In addition to my academic pursuits, I have completed internships at leading technology companies, where I have gained valuable experience working on complex software projects. I am a team player who enjoys collaborating with others and sharing knowledge.',
  'I am excited to continue learning and growing as a software engineer, and I am eager to apply my skills and knowledge to tackle challenging problems and make a positive impact on the world.',
];

const workExperiences: WorkExperience[] = [
  {
    company: 'JP Morgan Chase & Co',
    role: 'Software Engineer Intern',
    startDate: 'JUN 2023',
    endDate: 'AUG 2023',
    achievements: [
      'Co-Led a team of 3 interns, designing and developing an end-to-end social network graph project for employees to find how they are connected to other people within the firm, improving employee experience.',
      'Developed a Batch Processing application which transforms Oracle SQL data into Neo4j Graph data using Spring Batch',
      'Developed a RESTful backend service to compute the shortest path, all paths, and path recommendations in the employee network',
      'Implemented draggable and interactive graphs visualization for the social network'
    ],
  },
  {
    company: 'Cruise LLC',
    role: 'Software Engineer Intern',
    startDate: 'SEP 2022',
    endDate: 'DEC 2022',
    achievements: [
      'Helped built the world’s most advanced self-driving vehicles to safely connect people with places, things, and experiences they care about',
      'Collaborated alongside multiple teams to bring forth multiple deliverables that improved end-to-end metrics gathering, enabling the Simulation department to measure the impact of its various efforts on key success metrics',
      'Contributed to Cruise AI Simulation Platform Tools which empowers AV engineers to run simulations at scale, accelerating the development of Autonomous Vehicles by more than 4x',
      'Implemented NPCs objective profile conversion features for Planning Simulation (PSIM) and Matrix on the Scenario Editor Software, which prevent data loss while editing scenarios and maintain states between NPCs objective profiles',
    ],
  },
  {
    company: 'JP Morgan Chase & Co',
    role: 'Software Engineer Intern',
    startDate: 'JUN 2022',
    endDate: 'AUG 2022',
    achievements: [
      'Designed and developed the prototype of a new Global Search Platform that enables searching of internal trades data to make search speed at least 10x faster and flexible search queries possible using Spring Boot and Elasticsearch',
      'Configured and deployed Kafka Connect (sink connector) to ship data from the Kafka Cluster to the Elasticsearch Cluster',
      'Automated the visualization and analytics of data as they are shipped in real-time using Kibana',
    ],
  },
  {
    company: 'Block Knowledge',
    role: 'Software and DevOps Engineer',
    startDate: 'DEC 2020',
    endDate: 'DEC 2021',
    achievements: [
      'Designed the database and system architecture for Kadogo (turn everyday purchases into charitable donations)',
      'Led the kadogo backend team of 2 - 3 people',
      'Built the entire backend of the MVP version, which raised $100,000 in funding',
      'Optimized the backend to leverage on cloud services like serverless functions and messaging systems to increase performance and prevent downtime of the critical part of the application',
      'Developed APIs for the mobile application, merchant and NGO dashboard',
      'Facilitated the use of continuous integration and continuous deployment tools to reduce code shipping time and increase collaboration and productivity among the developers',
      'Implemented the spare change and cashback donation algorithms',
      'Set up Autoscaling, Load balancers and failover servers on AWS for development, staging, production environment',
    ],
  },
  {
    company: 'Powerjamb',
    role: 'Software and DevOps Engineer Intern',
    startDate: 'JUN 2019',
    endDate: 'SEP 2020',
    achievements: [
      'Managed infrastructure as code using AWS CloudFormation',
      'Redesigned the landing page to 3x faster',
      'Developed a web mobile-first examination application',
      'Created Dockerfiles and built docker images for the microservices to run on Kubernetes cluster',
      'Created and managed the deployment of microservices cluster to EKS using Docker, Kubernetes, Helm, and Jenkins',
      'Experience with Amazon services such as AWS, VPC, S3, EC2 Relational Database (RDS), Document DB, Elastic Load Balancing, Autoscaling, ECR, ECS, Lambda, IAM, EKS, Beanstalk, and CloudFormation',
    ],
  },
  {
    company: 'Soft Quest Incorporated',
    role: 'Software Enginer Intern',
    startDate: 'SEP 2018',
    endDate: 'MAR 2019',
    achievements: [
      'Produced clean, validation-ready code for given project needs',
      'Developed a basic Banking Web Application with Angular and PHP',
      'Developed a Car Racing game using JavaScript and HTML5 canvas',
      'Built an advanced Scientific Calculator, Inventory System, Timer, Countdown on the Web and many other self-development Projects',
    ],
  },
];

const skills: Skill[] = [
  {
    title: 'Languages',
    body: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Java', 'Go'],
  },
  {
    title: 'Frameworks/Libraries',
    body: ['React', 'Vue', 'Nodejs', 'Nestjs', 'Nextjs', 'GraphQL', 'Flask'],
  },
  {
    title: 'Storages/Databases',
    body: ['SQL', 'PostgreSQL', 'MongoDB', 'Kafka', 'ElasticSearch', 'Neo4j'],
  },
  {
    title: 'Tooling',
    body: ['Linux', 'Git', 'Docker', 'Kubernetes', 'AWS', 'GCP'],
  },
];

const educations: Education[] = [
  {
    title: 'B.Sc Computer Engineering at Obafemi Awolowo University',
    endDate: 'MAY 2025',
    relevant: [
      'Introduction to Computing',
      'Introduction to Programming',
      'Digital Computer Systems',
      'Calculus I & II & III',
      'Vector Analysis',
    ],
  },
  {
    title: 'Smith International Baptist Academy, Ogbomoso',
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

const hobbies = ['Learning', 'Playing the piano', 'Lifting', 'Football/Soccer'];

export const resume: Resume = {
  name,
  bio,
  workExperiences,
  skills,
  educations,
  certifications,
  languages,
  hobbies,
};
