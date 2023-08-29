import img1 from '../assets/Project2.webp'
import img2 from '../assets/portfoliocover.webp'
import img3 from '../assets/nerdycover.png'
import img4 from '../assets/witchats.webp'
import img5 from '../assets/suvidhaimg.png'
// Now create a function contains the data of the cards
const ProjectData =[
    {
        imgUrl:img1,
        title:"Boxxoffice",
        about:"This is a react-application for Movie-lovers. I created an API of 30+ movies which are rendered on Featured Movie page. There is another section called MORE-MOVIES which has an API_INTEGRATION you can search the movie of your choice and can read its overview. I gave Register-login form also with proper validation using yup(library) and formik. Soon will implement backend using django for this website.",
        explore:"https://boxxoffice.netlify.app/",
        github:"https://github.com/KumarAbhay98/Boxxoffice"

    },

    {
        imgUrl:img3,
        title:"Nerdy",
        about:"This website has few sections like: Tech-dive(It helps to make you updated with latest technologies and tools and blogs(In this I explained issue like-Procrastination, pschycological-problems and much more The Website is fully Responsive.To make it more attractive I included several animated sections using javascript and css very efficiently.",
        explore:"http://nerrdytechhs.pythonanywhere.com/",
        github:"https://github.com/KumarAbhay98/nerdytech"

    },
    {
        imgUrl:img2,
        title:"Portfolio",
        about:"A modern looking portfolio based on react and its libraries like AOS , Typewriter , Animate-css , react-vertical-timeline-component , react-scroll etc. For sending the response of the form attached on contact page I used Formspree. Overall the portfolio looks different from the basic usual portfolios. Explore the project Section. ",
        explore:"https://abhaykumarportfolio.netlify.app/",
        github:"https://github.com/KumarAbhay98/Portfolio"
    },

    {
        imgUrl:img4,
        title:"Witchats",
        about:"This is a WordPress website which is mainly for blogs . It has various categories of blogs. You guys can read my blogs and can comment on those blogs. Soon it is going to be live. Checkout The links below",
        explore:"https://witchats.liveblog365.com/",
        github:"https://github.com/KumarAbhay98/Witchats"

    },
    {
        imgUrl:img5,
        title:"Suvidha Foundation",
        about:"This is the website I worked on during my internship period. I was the team-lead of 10 members. We got a task of redesigning the whole UI from scratch so first we made some wireframes, then figma design and then coding part. We were advised not to use React because they wanted to keep the website simple and easy to maintain. We used HTML/CSS/JS/BOOTSTRAP/PHP. The website has some sliders and a testimonial component which is ver good. below is the deployed link of my work. You can notice changes in the main website live because other they updated the code.",
        explore:"https://suvidhafoundation98.netlify.app/",
        github:"https://github.com/KumarAbhay98/Intern_website"
    },
    
];

export default ProjectData
