'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const eventsCount = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM event;',
      { type: Sequelize.QueryTypes.SELECT }
    );


    if (eventsCount[0].count == 0) {
      await queryInterface.bulkInsert('event', arrayFakeEvents);
    } else {
      console.log('Table "event" is not empty. Skipping seeding for events.');
    }


    const visitorsCount = await queryInterface.sequelize.query(
      'SELECT COUNT(*) as count FROM visitors;',
      { type: Sequelize.QueryTypes.SELECT }
    );


    if (visitorsCount[0].count == 0) {
      return queryInterface.bulkInsert('visitors', arrayFakeVisitors);
    } else {
      console.log('Table "visitors" is not empty. Skipping seeding for visitors.');
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('visitors', null, {});
    return queryInterface.bulkDelete('event', null, {});
  }
};


const arrayFakeEvents = [
  {
    title: 'Web Development Bootcamp',
    description: 'Intensive course on modern web development',
    dateEvent: new Date('2024-11-01'),
    eventOrganizer: 'ABC Company',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'AI in Healthcare',
    description: 'Exploring AI applications in healthcare',
    dateEvent: new Date('2024-10-10'),
    eventOrganizer: 'ABC Company',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'JavaScript Mastery',
    description: 'Deep dive into JavaScript programming',
    dateEvent: new Date('2024-12-15'),
    eventOrganizer: 'XYZ Company',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Introduction to Docker',
    description: 'Getting started with containerization',
    dateEvent: new Date('2024-12-20'),
    eventOrganizer: 'lol Company ',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'React for Beginners',
    description: 'Learning the fundamentals of React',
    dateEvent: new Date('2024-12-25'),
    eventOrganizer: 'ABC Company',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Cloud Computing Essentials',
    description: 'Understanding cloud services and architectures',
    dateEvent: new Date('2024-12-30'),
    eventOrganizer: 'XYZ Company',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Mobile App Development',
    description: 'Creating apps for iOS and Android',
    dateEvent: new Date('2025-01-05'),
    eventOrganizer: 'DTY Company',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Cybersecurity Basics',
    description: 'Fundamentals of protecting digital information',
    dateEvent: new Date('2025-01-10'),
    eventOrganizer: 'NYS Company',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Data Science Workshop',
    description: 'Hands-on workshop in data analysis',
    dateEvent: new Date('2025-01-15'),
    eventOrganizer: 'Nyx Company',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'DevOps Practices',
    description: 'Integrating development and operations',
    dateEvent: new Date('2025-02-01'),
    eventOrganizer: 'Nike',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Blockchain Fundamentals',
    description: 'Understanding the basics of blockchain technology',
    dateEvent: new Date('2025-02-05'),
    eventOrganizer: 'Adidas',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Frontend Frameworks',
    description: 'Comparing popular frontend frameworks',
    dateEvent: new Date('2025-02-10'),
    eventOrganizer: 'mcdonalds',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'SQL for Beginners',
    description: 'Introduction to relational databases and SQL',
    dateEvent: new Date('2025-02-15'),
    eventOrganizer: 'Samsung',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'UI/UX Design Principles',
    description: 'Fundamentals of user interface and user experience design',
    dateEvent: new Date('2025-02-20'),
    eventOrganizer: 'Hators',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Agile Methodologies',
    description: 'Understanding agile project management',
    dateEvent: new Date('2025-02-25'),
    eventOrganizer: 'Google',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'React Native Workshop',
    description: 'Building mobile apps with React Native',
    dateEvent: new Date('2025-03-01'),
    eventOrganizer: 'Facebook',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Advanced CSS Techniques',
    description: 'Exploring modern CSS for web design',
    dateEvent: new Date('2025-03-05'),
    eventOrganizer: 'Facebook',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'API Development with Node.js',
    description: 'Creating RESTful APIs using Node.js',
    dateEvent: new Date('2025-03-10'),
    eventOrganizer: 'Facebook',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Testing in JavaScript',
    description: 'Introduction to testing frameworks in JavaScript',
    dateEvent: new Date(),
    eventOrganizer: '4Tech',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'GraphQL Basics',
    description: 'Getting started with GraphQL for APIs',
    dateEvent: new Date('2025-03-15'),
    eventOrganizer: 'Sony',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'IoT and Smart Devices',
    description: 'Exploring the Internet of Things',
    dateEvent: new Date('2025-03-20'),
    eventOrganizer: 'Apple',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Virtual Reality Development',
    description: 'Creating experiences in virtual reality',
    dateEvent: new Date('2025-03-25'),
    eventOrganizer: 'Facebook',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Machine Learning 101',
    description: 'Introduction to machine learning concepts',
    dateEvent: new Date('2025-04-01'),
    eventOrganizer: 'Microsoft',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'PHP for Web Development',
    description: 'Building dynamic websites with PHP',
    dateEvent: new Date('2025-04-05'),
    eventOrganizer: 'HP',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Introduction to TypeScript',
    description: 'Learning TypeScript for better JavaScript development',
    dateEvent: new Date(),
    eventOrganizer: 'Asus',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Microservices Architecture',
    description: 'Building scalable systems with microservices',
    dateEvent: new Date('2025-04-10'),
    eventOrganizer: 'Amazon',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Software Testing Strategies',
    description: 'Understanding different software testing techniques',
    dateEvent: new Date('2025-04-15'),
    eventOrganizer: 'MongoDB',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Ethical Hacking Workshop',
    description: 'Learning the basics of ethical hacking',
    dateEvent: new Date('2025-04-20'),
    eventOrganizer: 'Facebook',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Digital Marketing Trends',
    description: 'Latest trends in digital marketing',
    dateEvent: new Date('2025-04-25'),
    eventOrganizer: 'Salesforce',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Career Development in Tech',
    description: 'Strategies for advancing your tech career',
    dateEvent: new Date('2025-05-01'),
    eventOrganizer: 'github',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]





const arrayFakeVisitors = [
  {
    fullName: 'John Doe',
    email: 'john@example.com',
    dateBirth: '1990-01-01',
    whereHearEvent: 'Social Media',
    idEvent: 30,
    createdAt: new Date('2024-09-26T06:09:26.659Z'),
    updatedAt: new Date()
  },
  {
    fullName: 'Alice Walker',
    email: 'alice@example.com',
    dateBirth: '1991-02-10',
    whereHearEvent: 'Friends',
    idEvent: 30,
    createdAt: new Date('2024-09-25T06:09:26.659Z'),
    updatedAt: new Date()
  },
  {
    fullName: 'Bob Johnson',
    email: 'bob@example.com',
    dateBirth: '1989-11-12',
    whereHearEvent: 'Found Myself',
    idEvent: 30,
    createdAt: new Date('2024-09-23T06:09:26.659Z'),
    updatedAt: new Date()
  },
  {
    fullName: 'Cathy Stevens',
    email: 'cathy@example.com',
    dateBirth: '1995-04-15',
    whereHearEvent: 'Social Media',
    idEvent: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Daniel Green',
    email: 'daniel@example.com',
    dateBirth: '1988-06-20',
    whereHearEvent: 'Friends',
    idEvent: 30,
    createdAt: new Date(),
    updatedAt: new Date()
  },


  // idEvent: 2
  {
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    dateBirth: '1985-05-05',
    whereHearEvent: 'Friends',
    idEvent: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Eva Moore',
    email: 'eva@example.com',
    dateBirth: '1993-03-20',
    whereHearEvent: 'Social Media',
    idEvent: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Fred Baker',
    email: 'fred@example.com',
    dateBirth: '1987-08-08',
    whereHearEvent: 'Found Myself',
    idEvent: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Grace Miller',
    email: 'grace@example.com',
    dateBirth: '1990-10-02',
    whereHearEvent: 'Friends',
    idEvent: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Henry White',
    email: 'henry@example.com',
    dateBirth: '1992-11-11',
    whereHearEvent: 'Social Media',
    idEvent: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // idEvent: 3
  {
    fullName: 'Mike Johnson',
    email: 'mike@example.com',
    dateBirth: '1992-03-03',
    whereHearEvent: 'Found Myself',
    idEvent: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Ivy Adams',
    email: 'ivy@example.com',
    dateBirth: '1991-12-25',
    whereHearEvent: 'Social Media',
    idEvent: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Jack Daniels',
    email: 'jack@example.com',
    dateBirth: '1984-09-14',
    whereHearEvent: 'Friends',
    idEvent: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Karen Ford',
    email: 'karen@example.com',
    dateBirth: '1986-06-30',
    whereHearEvent: 'Found Myself',
    idEvent: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Larry Scott',
    email: 'larry@example.com',
    dateBirth: '1990-02-22',
    whereHearEvent: 'Social Media',
    idEvent: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    fullName: 'Oliver Wright',
    email: 'oliver@example.com',
    dateBirth: '1994-01-01',
    whereHearEvent: 'Social Media',
    idEvent: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Sophia Barnes',
    email: 'sophia@example.com',
    dateBirth: '1988-02-14',
    whereHearEvent: 'Friends',
    idEvent: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Liam Turner',
    email: 'liam@example.com',
    dateBirth: '1991-05-05',
    whereHearEvent: 'Found Myself',
    idEvent: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  {
    fullName: 'Ella Perez',
    email: 'ella.perez@example.com',
    dateBirth: '1992-06-06',
    whereHearEvent: 'Found Myself',
    idEvent: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Jacob Wilson',
    email: 'jacob.wilson@example.com',
    dateBirth: '1989-07-07',
    whereHearEvent: 'Social Media',
    idEvent: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Sophia Davis',
    email: 'sophia.davis@example.com',
    dateBirth: '1987-08-08',
    whereHearEvent: 'Friends',
    idEvent: 25,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // idEvent: 26
  {
    fullName: 'Liam Brown',
    email: 'liam.brown@example.com',
    dateBirth: '1989-09-09',
    whereHearEvent: 'Found Myself',
    idEvent: 26,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Ava Taylor',
    email: 'ava.taylor@example.com',
    dateBirth: '1991-10-10',
    whereHearEvent: 'Social Media',
    idEvent: 26,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'William Moore',
    email: 'william.moore@example.com',
    dateBirth: '1988-11-11',
    whereHearEvent: 'Friends',
    idEvent: 26,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Emily Anderson',
    email: 'emily.anderson@example.com',
    dateBirth: '1990-12-12',
    whereHearEvent: 'Found Myself',
    idEvent: 26,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Mason Thompson',
    email: 'mason.thompson@example.com',
    dateBirth: '1987-01-01',
    whereHearEvent: 'Social Media',
    idEvent: 26,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // idEvent: 27
  {
    fullName: 'Sophia Baker',
    email: 'sophia.baker@example.com',
    dateBirth: '1992-02-02',
    whereHearEvent: 'Friends',
    idEvent: 27,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Jackson Harris',
    email: 'jackson.harris@example.com',
    dateBirth: '1991-03-03',
    whereHearEvent: 'Found Myself',
    idEvent: 27,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Ella Clark',
    email: 'ella.clark@example.com',
    dateBirth: '1990-04-04',
    whereHearEvent: 'Social Media',
    idEvent: 27,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'James Walker',
    email: 'james.walker@example.com',
    dateBirth: '1988-05-05',
    whereHearEvent: 'Friends',
    idEvent: 27,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Lily Green',
    email: 'lily.green@example.com',
    dateBirth: '1989-06-06',
    whereHearEvent: 'Found Myself',
    idEvent: 27,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // idEvent: 28
  {
    fullName: 'Emily Brown',
    email: 'emily.brown@example.com',
    dateBirth: '1992-07-07',
    whereHearEvent: 'Social Media',
    idEvent: 29,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Henry Davis',
    email: 'henry.davis@example.com',
    dateBirth: '1988-08-08',
    whereHearEvent: 'Friends',
    idEvent: 28,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Sophia Clark',
    email: 'sophia.clark@example.com',
    dateBirth: '1990-09-09',
    whereHearEvent: 'Found Myself',
    idEvent: 29,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Liam Wright',
    email: 'liam.wright@example.com',
    dateBirth: '1989-10-10',
    whereHearEvent: 'Social Media',
    idEvent: 29,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    fullName: 'Jackson Brown',
    email: 'jackson.brown@example.com',
    dateBirth: '1991-11-11',
    whereHearEvent: 'Friends',
    idEvent: 29,
    createdAt: new Date(),
    updatedAt: new Date()
  },

  // idEvent: 29
  {
    fullName: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    dateBirth: '1985-12-12',
    whereHearEvent: 'Found Myself',
    idEvent: 29,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];