const courses = [
    {
        name: 'Front-End',
        price: 60000,
        duration: '2 months',
        details: 'Learn web fundamentals, build clean interfaces, and properly version your code. Gain indepth knowledge of HTML5, CSS3, ES6+, React, Git, Github, and traspilers.',
        curriculum: [
            {
                section: 'Introduction to the internet and Web browsers',
                details: [
                    'Understanding the Internet.',
                    'How browsers work.',
                    'Understanding HTTP/HTTPS.',
                    'Project 1.1 Verifying the DNS of a site.',
                    'Project 1.2: Uploading files to the server.',
                    'Project 1.3: Sending emails using an SMTP server.',
                    'Homework #1'
                ]
            },
            {
                section: 'Markup with HTML5',
                details: [
                    'Introduction to HTML5',
                    'Elements, tags and attributes',
                    'Paragraphs, Headings, Links and Images',
                    'Audio, Video and Iframes',
                    'Lists',
                    'Forms',
                    'Tables',
                    'Web Graphics and Semantic tags',
                    'Project 3.1: Porfolio page markup',
                    'Project 3.2: Github clone markup',
                    'Project 3.3: Tictok clone markup',
                    'Project 3.4: konga.com clone markup',
                    'Project 3.5: uniport.edu clone markup',
                    'Homework #2'
                ]
            },
            {
                section: 'Cascading Style Sheets',
                details: [
                    'Introduction to CSS3',
                    'How to add CSS to HTML file',
                    'CSS selectors',
                    'Colors, Backgrounds, Text and Fonts',
                    'Units of Measurement and the box model theory',
                    'Border, Padding and Margin',
                    'Web Graphics',
                    'Styling Tables, Images, Forms and Lists',
                    'Display, Overflow and Floats',
                    'Positioning: Flex box and Grid',
                    'Linear , and radial gradient',
                    'Transform , Transition , and Animation',
                    'Project 3.1: Porfolio page styling',
                    'Project 2.2: Github clone styling',
                    'Project 2.3: Tictok clone styling',
                    'Project 2.4: Konga.com clone styling',
                    'Homework #3'
                ]
            },
            {
                section: 'Responsive Design',
                details: [
                    'What is responsive design?',
                    'Fluid layout',
                    'Fluid Image',
                    'Media Queries',
                    'Responsive design with Bigjara Framework',
                    'Project 4.1 Making Porfolio responsive',
                    'Project 4.2 Making Github clone responsive',
                    'Project 4.3 Making Tictok clone responsive',
                    'Project 4.4 Making Jiji.com clone responsive',
                    'Project 4.5 Making uniport.edu clone responsive',
                    'Homework #4'
                ]
            },
            {
                section: 'Programming with Javascript',
                details: [
                    'What is the essence of Programming?',
                    'Common Problems in computing',
                    'Getting started with Javascript',
                    'Bindings and Operators',
                    'Window Globals',
                    'Conditionals',
                    'Controlling repetition',
                    'Functions',
                    'Array',
                    'Set , and Map',
                    'Introduction to Object Oriented Programing (OOP)',
                    'OOP in Javascript',
                    'String',
                    'Number',
                    'Math Object',
                    'Date',
                    'Regular Expression',
                    'Exception Handling',
                    'Document Object Model',
                    'Event Handling',
                    'Modular Programming',
                    'Asynchronous Programming',
                    'Developers Tool',
                    'Writing efficient Javascript',
                    'Project 5.1: MVC Architectured Todo list App',
                    'Project 5.2: Browser Project Management Tool',
                    'Project 5.3: Gmail clone',
                    'Project 5.4 Browser Calculator',
                    'Project 5.5 Tictak game',
                    'Project 5.6 Snake Game',
                    'Project 5.7 Computer Based Testing Platform',
                    'Project 5.8 Result Processing Browser Software',
                    'Homework #5'
                ]
            },
            {
                section: 'Version Control and Collaboration',
                details: [
                    'Why Version Control?',
                    'Getting started with Git',
                    'How git works',
                    'Configuring git',
                    'Initializing a repository',
                    'Viewing repostiory status',
                    'How to add changes',
                    'How to make a useful commit',
                    'Tags , and code versioning',
                    'Commit History',
                    'Branching',
                    'Checkout',
                    'Merging',
                    'Undoing changes',
                    'Introduction to Github',
                    'Github interface overview',
                    'Branching',
                    'Pull Request',
                    'Issues',
                    'Labels',
                    'Milestones',
                    'Github pages, and wiki',
                    'Git and Github',
                    'Github Teams and organizations',
                    'Introduction to Open Source Development with github',
                    'Project 6.1 Tracking local project',
                    'Project 6.2 Adding a remote repository',
                    'Project 6.3 Making changes to a remote repository',
                    'Project 6.4 Contributing to an external project',
                    'Homework #6'
                ]
            },
            {
                section: 'React',
                details: [
                    'Why React?',
                    'Understanding Elements , and components',
                    'JSX, and Props',
                    'Creating components',
                    'Lists',
                    'Events',
                    'Component Lifecycle',
                    'Forms and controlled components',
                    'State Management',
                    'Routing with React Router',
                    'React, and Bigjara Framework - A complete combo',
                    'Thinking in React',
                    'Redux',
                    'Context API',
                    'Project 7.1 Design of whatsApp with React',
                    'Project 7.2 Design of Telegram with React',
                    'Project 7.2 Design of Facebook with React',
                   ' Homework #'
                ]
            },
            {
                section: 'Assessment and Evaluation',
                details: [
                    'Complete Design of a startup in any chosen sector',
                    'Group project',
                    'Publishing your portfolio',
                    'Job and Career Networking',
                    'Graduation'
                ]
            }
        ]
    },
    {
        name: 'Back-End',
        price: 65000,
        duration: '2 months',
        details: `Learn how to build an efficient, scalable, and robust back end infrastructure to power organization's need. Learn how to create secure and irresitible API's.`,
        curriculum: [
            {
                section:'Introduction to Server side programming',
                details: [
                    'Server : Hardware or Software?',
                    'HTTP',
                    'Routing',
                    'Security and Configuration',
                    'Project 1.1 A practical step on understanding how server operates.',
                    'Homework #1'
                ]
            },
            {
                section: 'Data Engineering with PostgreSQL',
                details: [
                    'Understanding SQL',
                    'Entity modeling and ERD',
                    'PostgreSQL',
                    'Creating Database',
                    'Database access and Security',
                    'Constraint',
                    'Table',
                    'CRUD operations',
                    'Transaction',
                    'Views',
                    'Project 2.1 Restaurant Modeling',
                    'Project 2.2 Recruitment System Data Modeling',
                    'Project 2.3 Social Networking System Modeling',
                    'Homework #2',
                ]
            },
            {
                section: 'Data Engineering with MONGODB',
                details: [
                    'Understanding NoSQL',
                    'The concept of collection and document',
                    'MongoDB as a DBMS',
                    'Creating and Destroying a Database',
                    'Database access and security',
                    'Creating capped and uncapped collections',
                    'Creating new documents',
                    'CRUD operations',
                    'Document modifiers',
                    'Working with Arrays',
                    'Web Graphics',
                    'Sharding and Scaling',
                    'Project 3.1 Modeling of a Restaurant',
                    'Project 3.2 Recruitment System Data Modeling',
                    'Project 3.3 Social Media Modeling',
                    'Homework #3'
                ]
            },
            {
                section: 'Server Programming with Node.js',
                details: [
                    'Introduction to Server Side Programming with Node',
                    'Environment Setup',
                    'Event Loop',
                    'Node core modules',
                    'File system modules',
                    'Third party modules',
                    'Express and its related technologies',
                    'Designing and Developing APIs with Express',
                    'Multip-page App with Express',
                    'Testing',
                    'Profiling, and Optimization',
                    'Security checks',
                    'Staging, and Deployment',
                    'Project 4.1 A simple web server',
                    'Project 4.2 Music Downloader App',
                    'Project 4.3 API (REST, and GraphQL) for Hotel Management System',
                    'Project 4.4 A realtime voting application',
                    'Project 4.5 A file collaboration tool',
                    'Project 4.6 A Content Management System with Emailing Feature',
                    'Project 4.7 Ecommerce Application',
                    'Homework #4'
                ]
            },
            {
                section: 'Server Programming with Django',
                details: [
                    'Django to the rescue',
                    'Creating a Django Project',
                    'Django Project Settings',
                    'How to create an app',
                    'Working on Django Models',
                    'Django Templating Language',
                    'Routing',
                    'Serving static files',
                    'Django Admin Site',
                    'Security',
                    'Deploying a Django app',
                    'Project 5.1 A simple web server',
                    'Project 5.2 Music Downloader App',
                    'Project 5.3 API (REST , and GraphQL) for Hotel Management System',
                    'Project 5.4 A realtime voting application',
                    'Project 5.5 A file collaboration tool',
                    'Project 5.6 A Content Management System with Emailing Feature',
                    'Project 5.7 Ecommerce Application',
                    'Homework #5',
                ]
            },
            {
                section: 'Assessment and Evaluation',
                details: [
                    'Why Version Control?',
                    'Project : Model of a Population Record System'
                ]
            }
        ]
    },
    {
        name: 'Mobile App',
        price: 80000,
        duration: '3 months',
        details: `Learn how to build cross platform mobile apps . This course will focus on Flutter (Dart), and React Native (Javascript), how to setup Android Studio, and deploy to app stores.`,
        curriculum: [
            {
                section: 'Introduction to Dart Programming',
                details: [
                    'Important concepts',
                    'Keywords and Variables',
                    'Dart Example Codes',
                    'Built in types',
                    'Operators',
                    'Functions',
                    'Control Flow Statements',
                    'Classes',
                    'Generics',
                    'Libraries',
                    'Asynchronous Programming',
                    'Effective Dart Programming',
                    'Dart for different Platforms',
                    'Selected Dart Programs',
                    'Homework #3'
                ]
            },
            {
                section: 'Mobile App with Flutter',
                details: [
                    'Installation',
                    'Setup Editor',
                    'Test Drive',
                    'Write your first App',
                    'Widgets',
                    'Database and Backend engineering',
                    'Accessibility',
                    'Platform Integration',
                    'Packages and Plugins',
                    'Understanding Flutter SDK',
                    'Using Android Studio and InteliJ',
                    'Testing and Optimization',
                    'Deployment'
                ]
            },
            {
                section: 'Javascript and React Revision',
                details: [
                    'Javascript Basics',
                    'Functions, Array, Map, Set, Classes',
                    'Interacting with DOM',
                    'Event Handling',
                    'Node.js',
                    'JSX, and Components',
                    'State Managment',
                    'Design of Selected Interfaces with Vanilla JS',
                    'Homework #1'
                ]
            },
            {
                section: 'React Native',
                details: [
                   ' Getting to Know React Native',
                    'Environment Setup',
                    'Core Components',
                    'Native Components',
                    'Getting Started with Expo CLI',
                    'Handling Text Input',
                    'How to Design the APP view',
                    'Adding Images',
                    'Using External Libraries',
                    'Listening to touch event',
                    'Using Scrollview',
                    'Using Listview',
                    'Running your app on device',
                    'Using Listview',
                    'Project: Build a weather tracking App',
                    'HTTP, and Database',
                    'Project : Build Uber Clone',
                    'Testing, and Profiling',
                    'Deployment',
                    'Platform Specific Instructions',
                    'Homework #2'
                ]
            }
        ]
    },
    {
        name: 'Blockchain',
        price: 50000,
        duration: '3 months',
        details: `Learn how to build smart contracts, decentralized applications using industry standard tools like Solidity, Remix, truffle, ganache, metatask etc. Also learn trading.`,
        curriculum: [
            {
                section: 'Introduction to Blockchain Technology',
                details: [
                    'Blockchain appreciation',
                    'Problems solved by Blockchain',
                    'Blockchain Application',
                    'What is distributed computing',
                    'Getting Familiar with Network models',
                    'Why blockchain is a P2P network?'
                ]
            },
            {
                section: 'Blockchain Ecosystem',
                details: [
                    'Blockchain Architecture',
                    'Components of the Ecosystem',
                    'Blocks, Wallet, Accounts, Addresses',
                    'Write your first App',
                    'Cryptography and Blockchain Algorithm',
                    'Public and Private Key',
                    'Merkle Tree and Hashing',
                    'Transaction Execution and Distribution',
                    'Types of Blockchain',
                    'Security',
                    'Regulations',
                    'Building your own Blockchain solution : Steps to follow',
                    'Use cases : Finance, Investment, Healthcare, Cyber Security, Token Economy, etc',
                    'Project Creating Accounts',
                    'Project Funding Accounts',
                    'Project Transfer of coins',
                    'Homework'
                ]
            },
            {
                section: 'Blockchain Mining',
                details: [
                    'What is Blockchain Mining',
                    'Types of Mining',
                    'What are Miners',
                    'Consensus and Consensus Algorithms',
                    'Homework'
                ]
            },
            {
                section: 'Bitcoin',
                details: [
                    'Nakamato and the White Paper',
                    'Mechanics of Bitcoin',
                    'Bitcoin Application',
                    'Bitcoin Security',
                    'Bitcoin : Community, Economics, and Politics',
                    'Bitcoin as a Platform',
                    'Future of Bitcoin',
                    'Project : Bitcoin RestFul Services and Integration',
                    'Homework'
                ]
            },
            {
                section: 'Ethereum',
                details: [
                    'What is Ethereum',
                    'Ethereum History Lesson and Whitepaper',
                    'Understanding Ethereum concepts : Ether, Gas, Wei, etc',
                    'Ethereum use case and Security',
                    'Introduction to Decentralized Application',
                    'Project : Ethereum RestFul Services and Integration',
                    'Homework'
                ]
            },
            {
                section: 'Smart Contract With Solidity',
                details: [
                    'What is a Smart Contract',
                    'Use cases',
                    'Using Remix IDE',
                    'Complete Guide to Solidity',
                    'Compiling and Testing Solidity Codes',
                    'Smart Contract Deployment',
                    'Interacting with Smart Contracts',
                    'Securing Smart Contracts',
                    'Project : Decentralized Voting Platform',
                    'Homework'
                ]
            },
            {
                section: 'Local Environment Setup',
                details: [
                    'Truffle',
                    'Using Web3js',
                    'metatask',
                    'Ganache CLI',
                    'Go Ethereum',
                    'Building Smart Contracts',
                    'Deploying Smart Contracts',
                    'Front End Apps for our Smart Contract',
                    'Project : Crypto Exchange Platform',
                    'Project : Peer to Peer lending Platform',
                    'Project : Tokenized FashionHub',
                    'Homework'
                ]
            }
        ]
    },
    {
        name: 'Ethical Hacking',
        price: 50000,
        duration: '3 months',
        details: `Learn how to hack and secure both Wi-Fi and Wired connections. Learn Kali Linux, exploit vulnerabilities in applications, and do Penetration testing.`,
        curriculum: [
            {
                section: 'Why should we learn how to hack?',
                details: [
                    'Introduction to Hacking',
                    'Why we should learn how to hack',
                    'Setting up a hacking lab',
                    'Installing Kali Linx',
                    'Exploring the vulnerabilities in Wi-Fi',
                    'Project : A Phishing Attack',
                    'Project : Social Engineering Attack',
                    'Project : Brute Force Attack',
                    'Homework'
                ]
            },
            {
                section: 'Linux Basics',
                details: []
            },
            {
                section: 'Network Hacking',
                details: []
            },
            {
                section: 'Pre Connection Attacks',
                details: []
            },
            {
                section: 'WEP cracking',
                details: []
            },
            {
                section: 'WPA cracking',
                details: []
            },
            {
                section: 'Post Connection Attacks',
                details: []
            },
            {
                section: 'Detection and Security',
                details: []
            },
            {
                section: 'Client and Server Attacks',
                details: []
            },
            {
                section: 'Web Hacking',
                details: []
            },
            {
                section: 'Python for Penetration Testing',
                details: []
            }
        ]
            
    },
    {
        name: 'UI-UX',
        price: 50000,
        duration: '2 months',
        details: `Learn how to engineer clean, and usable interface. The viability of any product in the market is closely knit to the interface. Clients place more emphasis on what they see.`,
        curriculum: [
            {
                section: 'WireFraming',
                details: []
            },
            {
                section: 'High Fidelity Prototyping',
                details: []
            },
            {
                section: 'User Flow Design',
                details: []
            },
            {
                section: 'User Persona Design',
                details: []
            },
            {
                section: 'Using Adobe XD and Basalmiq',
                details: []
            }
        ]
    },
    {
        name: 'IOT',
        price: 50000,
        duration: '3 months',
        details: `Learn how to design, code, build, and market IOT products. Learn and master Arduino IDE, learn how to program micro controllers, and connect to cloud IOT platforms.`,
        curriculum: [
            {
                section: 'What it is and Why you should learn it',
                details: []
            },
            {
                section: 'Getting started with Electronics: Boards, Sensors, and Shields',
                details: []
            },
            {
                section: 'Complete Guide to Arduino',
                details: []
            },
            {
                section: `Complete Guide to Cloud Computing and It's essence to IOT`,
                details: []
            },
            {
                section: 'The 3 exciting combinatives : WIFI, Cloud DB, and Mobile Apps',
                details: []
            },
            {
                section: 'Project 1 : Home Automation',
                details: []
            },
            {
                section: 'Project 2 : Building Safety using motion Detector',
                details: []
            },
            {
                section: 'Project 3 : Alarm System for the Elderly',
                details: []
            },
            {
                section: 'Test : Eavesdropping Agent',
                details: []
            }
        ]
    },
    {
        name: 'Data Science and ML',
        price: 60000,
        duration: '3 months',
        details: `Learn how to use Python for statistical analysis, develop business intuition using deep learning, and construct interesting machine learning algorithms.`,
        curriculum: [
            {
                section: 'knowing Data Science',
                details: []
            },
            {
                section: 'Understanding Probability',
                details: []
            },
            {
                section: 'Statistics',
                details: []
            },
            {
                section: 'Programming with Python',
                details: []
            },
            {
                section: 'Python for statistics',
                details: []
            },
            {
                section: 'Matrix, Linear Algebra, and Geometry',
                details: []
            },
            {
                section: 'Deep Learning',
                details: []
            },
        ]
    },
    
  ]
  
  export default courses
  