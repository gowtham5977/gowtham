/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Gowtham",
  logo_name: "Gowtham.()",
  nickname: "Mellow / picleric",
  full_name: "Gowtham",
  subTitle: `an AI & DS Student, 
Aspiring Data Analyst, Frontend Developer, and Passionate Coder.`,


  resumeLink:
    " ",
  mail: "mailto:gowthammec4@gmail.com",
};

const socialMediaLinks = {
  /* Social Media Link */
  github: "https://github.com/gowtham5977",
  linkedin: "https://www.linkedin.com/in/gowtham-s-a82590269/",
  gmail: "gowthammec4@gmail.com",
  gitlab: "",
  facebook: " ",
  twitter: "https://twitter.com",
  instagram: "https://www.instagram.com/mr._mellow._/",
};

const skills = {
  data: [
    {
      title: "Front end Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and Angular",
        "⚡ Backend development using NodeJS, ExpressJS and Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
      

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },


        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

   
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "E.R.k. Higher Secondery School",
      subtitle: "10th",
      logo_path: "dal.png",
      alt_name: "DAL",
      duration: "2020",
      descriptions: [
        "⚡ Scored 390 out of 500 in SSLC Board Examination.",
        "⚡ Built a strong academic foundation in core subjects like Mathematics, Science, and English.",
        "⚡ Developed early interest in computers and logical thinking.",
      ],
      website_link: "https://www.erktrust.com/school/",
    },
    {
      title: "E.R.k. Higher Secondery School",
      subtitle: "12th",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2022",
      descriptions: [
        "⚡Scored 412 out of 600 in HSC Board Examination.",
        "⚡Studied Computer Science, Mathematics, Physics, and Chemistry.",
        "⚡Built foundational knowledge in programming and logical reasoning.",
      ],
      website_link: "https://www.erktrust.com/school/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Analytics and Visualization",
      subtitle: "2023",
      logo_path: "accenture.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_S4NyMaH8cXYXxCvor_1727940249155_completion_certificate.pdf",
      alt_name: "accenture",
      color_code: "#FFFFFF",
    },
    {
      title: "UiPath Academy Automation Explorer Training ",
      subtitle: "Uipath / Sugar Labs/2023",
      logo_path: "google_logo.png",
      certificate_link: " https://credentials.uipath.com/3aef5296-687d-408b-b9ca-bfb0c749296e#acc.8lXtGQnq",
      alt_name: "Google",
      color_code: "red"  // Red

    },
    {
      title: "UiPath Academic Alliance Skill-A-Thon RPA Citizen Developer",
      subtitle: "2024",
      logo_path: "google_logo.png",
      certificate_link: "https://credentials.uipath.com/675b4703-84b9-4f37-9653-de9ebfcddfaa#acc.KrspLecu",
      alt_name: "Google",
      color_code: "#ff0000",
    },
    {
      title: "India's Biggest Web3 & AI hackathon series",
      subtitle: "singularityNET / CSharp/2024",
      logo_path: "hack.png",
      certificate_link: "https://pdflink.to/433cc73e/",
      alt_name: "Coursea",
      color_code: "#FF9900"
    },
    {
      title: "<>Google Developer Groups on Campus",
      subtitle: "Sustainable Development Goals/2024",
      logo_path: "gdg.png",
      certificate_link: "https://pdflink.to/433cc73e/",
      alt_name: "AWS",
      color_code: "#1A73E8" // Google Blue
    },
    {
      title: "Asia's Largest AI & Cloud Conference",
      subtitle: "2024",
      logo_path: "techc.jpg",
      certificate_link: "https://www.credly.com/badges/abcd1234-efgh-5678-ijkl-9876abcd1234",
      alt_name: "AWS",
      color_code: "#FFFFFF"
    },
    {
      title: "Learnathon",
      subtitle: " Microsoft, Celonis, Bentley, MathWorks, India Edu Program by Google For Developers, Qlik, MongoDB, Wadhwani Foundation",
      logo_path: "learn.png",
      certificate_link: "https://pdflink.to/9491ffc9/",
      alt_name: "AWS",
      color_code: "#2c3452"
    },  
    {
      title: "Learnathon",
      subtitle: " Microsoft, Celonis, Bentley, MathWorks, India Edu Program by Google For Developers, Qlik, MongoDB, Wadhwani Foundation",
      logo_path: "learn.png",
      certificate_link: "https://pdflink.to/9491ffc9/",
      alt_name: "AWS",
      color_code: "#2c3452"
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I've mostly done projects on my own and I am actively looking for internships.",
  header_image_path: "experience.svg",
  sections: [
    
    {
      title: "Internships",
      experiences: [
      ]
    },
    {
      title: "Volunteerships",
      experiences: [
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hrishi2.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don’t post very often, but when I complete a great project, I put in my full effort to share it.",
    link: " ",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Object Detection System🧠📸",
      url: "",
      description:
        "Developed an end-to-end real-time object detection system using YOLOv5. Led dataset preprocessing, model training, and integrated live camera feed with bounding box annotations.",
      languages: [
        
      ],
    },
 
    {
      name: "🛒 Price Comparison System 🇮🇳📊",
      url: " ",
      description:
        "Developed a real-time price comparison tool for 🏬 Big Bazaar, 🛍️ D-Mart, and 🏪 Reliance Smart.Implemented live web scraping, backend logic, and dynamic UI for seamless user experience.",
      languages: [
        
      ],
    },
     {
      name: "🧭 Pathfinder: Personalized Career Growth Planner 🎯📈",
      url: " ",
      description:
        "Created a web app that guides users through tailored career advice based on their interests and skills.Built user authentication, interest selection, and integrated AI-driven personalized recommendations for career growth.",
      languages: [
        
      ],
    },
     {
      name: "🧊📲Smart Fridge Inventory Management System ",
      url: " ",
      description:
        "Tracks food inventory and sends real-time alerts for expiring or low-stock items 📦⏰.Suggests recipes based on available ingredients to help reduce food waste and save time 🍳🥗.",
      languages: [
        
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
