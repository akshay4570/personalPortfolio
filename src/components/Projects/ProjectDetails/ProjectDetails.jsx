import { images } from '../../../constants';

const projectDetails = [
    {
        name: 'COVID-19 tracker',
        image: images.covid,
        deployed_url: 'https://akshay4570.github.io/CovidTracker/',
        github_url: 'https://github.com/akshay4570/CovidTracker',
        description: 'COVID 19 tracker which provides detailed visuals and represented with great charts and UI, with country specific details.',
        category: ['react.js','chart.js']
    },

    {
        name: 'Memories',
        image: images.memories,
        deployed_url: 'https://memories-mernapp-akshay4570.netlify.app/',
        github_url: 'https://github.com/akshay4570/Memories_MERN',
        description: 'A project to demonstrate MERN stack with basic functionalities connecting Mongo DB with the server and rich UI/UX.',
        category: ['node.js', 'mongoDB', 'react.js','express.js']
    },

    {
        name: 'Realtime Chat App',
        image: images.chatapp,
        deployed_url: 'https://akshay4570-realtime-chat-application.netlify.app/',
        github_url: 'https://github.com/akshay4570/RealTimeChatApp',
        description: 'A realtime chat application mimicing the behaviour of Whatsapp, to explore the features of socket.io.',
        category: ['node.js', 'socket.io', 'react.js']
    },

    {
        name: 'YouTube Clone',
        image: images.youtube,
        deployed_url: '',
        github_url: 'https://github.com/akshay4570/YoutubeCloneBasic',
        description: 'A Youtube clone application with the embeded Youtube feature with Material UI backing the interface.',
        category: ['material.ui', 'react.js']
    },

    {
        name: 'Rest API',
        image: images.hardware,
        deployed_url: '',
        github_url: 'https://github.com/akshay4570/RESTAPI',
        description: 'An attempt to explore get, post, patch requests using POSTMAN for implementing end-to-end communication.',
        category: ['node.js', 'express.js','postman']
    },

    {
        name: 'Twitter Sentiment Analysis',
        image: images.twitter,
        deployed_url : '',
        github_url: 'https://github.com/akshay4570/TwitterSentimentAnalysis',
        description: 'Analying the sentiment of the tweets with preprocessing the data applying NLP and determing the sentiments and polarity of the tweets.',
        category: ['ML','Text Analysis']
    },

    {
        name: 'Postman Clone',
        image: images.postman,
        deployed_url: '',
        github_url : 'https://github.com/akshay4570/PostmanClone',
        description: 'An attempt to build a POSTMAN clone which serves the REST API requests, built with vanilla Javascript.',
        category: ['vanilla','postman']
    },

    {
        name: 'Movie Recommendation',
        image: images.imdb,
        deployed_url: '',
        github_url: 'https://github.com/akshay4570/Movie_Recommendation',
        description: 'A Recommendation engine smart enough to predict the movies based on previously watched content and also suggest movies based on the mood.',
        category: ['Data Mining', 'ML']
    },

    {
        name: 'Time Table Generation',
        image: images.timetable,
        deployed_url: '',
        github_url: 'https://github.com/akshay4570/Automated-Time-Table-Generation',
        description: 'Generating a Time Table across different semesters keeping in mind the constraints and resources at our disposal,An NP-Hard solution with optimized and randomized results.',
        category: ['Software Engineering','ML','Genetic Algorithm']
    },

    {
        name: 'Deep learning based Detection of Depression',
        image: images.depression,
        deployed_url: '',
        github_url: 'https://github.com/akshay4570/Automated-Time-Table-Generation',
        description: 'Implementing NLP on the raw data and building a feature vector model and training the system using Deep Learning algorithms which results in highly accurate Depression Detection engine.',
        category: ['DL','ML','NLP']
    },
]

export default projectDetails;