import Images from "../Utils/Images";

export default Profile = {
  INFO: {
    name: 'Your Name',
    company: 'M.I. Solutions',
    profile_picture: Images.PROFILE_PICTURE,
    banner: Images.BANNERS.BANNER7,
    bio: 'Founder S.G.Codes | Developer@M.I.Solutions | React-Native Developer',
    talksAbout: ['reactjs', 'react-native',  'webdevelopment','javascript', 'androiddevelopment'],
    followers: 3256,
    connections: 2165,
  },
  ANALYTICS: {
    profile_views: 1065,
    post_impressions: 6589,
    search_appearence: 471
  },
  ABOUT: "Cupidatat mollit non est excepteur ut laborum Lorem fugiat laborum labore et fugiat occaecat labore. Elit ut veniam laborum commodo commodo cupidatat. Aliqua amet consectetur dolore nostrud enim do velit anim officia consectetur. Tempor dolor sunt Lorem quis labore. Aliquip et irure pariatur sint Lorem mollit consectetur consequat proident sint et labore. Voluptate occaecat magna magna culpa. Ut elit anim laboris non excepteur eu irure incididunt.",
  EXPERIENCE: [
    {
      logo: Images.LOGOS.LOGO5,
      title: 'Software Developer',
      companyName: 'M.I. Solutions',
      jobType: 'Full-Time',
      startDate: 'Jan-2022',
      endDate: 'Present'
    },
    {
      logo: Images.LOGOS.LOGO9,
      title: 'Software Developer (Backend)',
      companyName: 'L&T Solutions',
      jobType: 'Full-Time',
      startDate: 'Jan-2021',
      endDate: 'Dec-2021'
    },
    {
      logo: Images.LOGOS.LOGO2,
      title: 'Software Developer (Frontend)',
      companyName: 'V.P.I.',
      jobType: 'Internship',
      startDate: 'July-2020',
      endDate: 'Dec-2020'
    },
    {
      logo: Images.LOGOS.LOGO7,
      title: 'Software Developer',
      companyName: 'DigiTech Solutions',
      jobType: 'Internship',
      startDate: 'Jan-2020',
      endDate: 'June-2020'
    },
  ],
  EDUCATION: [
    {
      logo: Images.LOGOS.UNIVERSITY,
      college: 'Your College Name',
      name: "Bachelor's Degree, Computer Science",
      time: '2018-2022',
      CGPA: 9.4
    }
  ],
  LICENSE_CERTIFICATION: [
    {
      logo: Images.LOGOS.LOGO9,
      title: 'ReactJs Advanced',
      issuedDate: 'Mar-2022',
      hasCertificate: false,
    },
    {
      title: 'React-Native Expert Certification',
      logo: Images.LOGOS.LOGO4,
      issuedDate: 'Dec-2021',
      hasCertificate: true,
      certificate: 'https://sgcodes.co.in/youtube'
    },
    {
      title: 'JavaScript Advanced',
      logo: Images.LOGOS.LOGO8,
      issuedDate: 'Jan-2021',
      expirationDate: 'Dec-2030', // no expiration date as well 
      hasCertificate: false
    },
    {
      title: 'JavaScript Beginner',
      logo: Images.LOGOS.LOGO7,
      issuedDate: 'Jan-2020',
      expirationDate: 'Dec-2025', // no expiration date as well 
      hasCertificate: true,
      certificate: 'https://sgcodes.co.in/youtube'
    },
  ],
  SKILLS: [
    {
      title: 'React Native',
      endorsements: 10
    },
    {
      title: 'ReactJs',
      endorsements: 8
    },
    {
      title: 'NodeJs',
      endorsements: 12
    },
    {
      title: 'MERN Stack',
      endorsements: 1
    }
  ],
  COURSES: [
    'React Native Tutorial',
    'React-Native Crash Course by S.G.',
    'Project Development with React-Native'
  ],
  PROJECTS: [
    {
      title: 'React Native NEWS App',
      startDate: 'Dec-2022',
      endDate: 'Present',
      description: 'Exercitation nostrud sunt occaecat in est qui do dolor labore. Enim sunt qui exercitation aliquip aliquip.'
    },
    {
      title: 'Login/Signup Page',
      startDate: 'Mar-2021',
      endDate: 'Aug-2021',
      isLinkPresent: true,
      link: 'https://sgcodes.co.in/youtube',
      description: 'Sit nulla magna cupidatat eu. Do fugiat Lorem id elit ipsum cillum officia eu.'
    },
  ],
  PEOPLE_VIEWED: [
    {
      profile_picture: Images.USERS.USER1,
      name: 'Asma Punia',
      title: 'SDE-1 @Google || Full Stack Developer',
      connection: '1st',
    },
    {
      profile_picture: Images.USERS.USER2,
      name: 'Oliver',
      title: 'Student at KMS College of Engineering',
      connection: '2nd',
    },
    {
      profile_picture: Images.USERS.USER4,
      name: 'Priya Sharma',
      title: 'Senior Software Developer',
      connection: '3rd',
    },
    {
      profile_picture: Images.USERS.USER5,
      name: 'Olivia',
      title: 'Heading Marketing @Ola',
      connection: '2nd',
    },
    {
      profile_picture: Images.USERS.USER6,
      name: 'Shivam Kalra',
      title: '50K+ Linkedin followers',
      connection: '1st',
    },
    {
      profile_picture: Images.USERS.USER9,
      name: 'Rishi Nagar',
      title: '100K+ followers | Influencer',
      connection: '2nd',
    },
  ],
};
