import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faSchool, faSpinner } from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBook} />,
  iconStyle: { background: 'black', color: 'teal' }
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'black', color: 'teal' }
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faSpinner} />,
  iconStyle: { background: 'black', color: 'teal' }
};

function TimelineSection() {
  const timeline = [
    { icon: workIcon, date: '2016-2017', title: 'Class X', subtitle: 'KapilMuni Childrens Academy', desc: 'I passed high school exams in 2017 with Cumulative grade point average of 10.' },
    { icon: workIcon, date: '2018-2019', title: 'Class XII', subtitle: 'KapilMuni Childrens Academy , Bewar Mainpuri', desc: 'I passed my intermediate examinations in the year 2019.' },
    { icon: workIcon, date: '2020-2024', title: 'Btech', subtitle: 'Harcourt Butler Technical University' , desc:'Pursuing btech in Information Technoloy from Harcourt Butler Technical University Kanpur UttarPradesh.  CGPA:8.386'},
    { icon: workIcon, date: '2021-2022', title: 'Trainee, Alumni Interaction Department', subtitle: 'Print and Social Media SubCouncil', desc: 'Worked as a trainee for Alumni Interaction department and took interviews of some renowned personalities. Drafted many interviews and worked for the magazine.' },
    { icon: schoolIcon, date: '2022-2023', title: 'Senior, Alumni Interaction Department', subtitle: 'Print and Social Media SubCouncil', desc: 'Worked as a senior for several events like "SAMVAD" and covered the whole event of Centenary Celebration from data curation for magazine to writing articles on the new architectures.' },
    { icon: schoolIcon, date: '2023 - ', title: 'Coordinator', subtitle: 'Print and Social Media SubCouncil', desc: 'After giving interview, Got a post of Coordinator. I worked for the better of the team from automating the work of newsletter to teaching the core values and introduced some more new members.' },
    { icon: schoolIcon, date: ' March - April 2023', title: 'Webdeveloper Intern', subtitle: 'Suvidha Foundation(Suvidha Mahila Mandal)', desc: 'Did requirement analysis and led a team of 6-7 members while coding for frontend and contributed to their donation compaign.At last got the chance to work with backend team and used expressjs and mongoDB.' },
    { icon: schoolIcon, date: ' Aug - Sept 2023', title: 'Webdeveloper Intern', subtitle: 'PrimaThink', desc: 'This Time I worked on react.js and TailwindCSS, created some resuable components by using props and react hooks. It was an internship of one month only.' },
    { icon: starIcon }
  ];

  return (

    <div className="App">
      <div style={{fontSize:'4rem',color:'rgb(27, 201, 201)',marginTop:'5rem',textAlign:'center',fontFamily:'Monoton, Outfit'}}>Timeline</div><br/>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const contentStyle = {
            
          background: 'rgba(72, 214, 233, 0.22)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          webkitBackdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',fontSize:"1.5rem",textShadow:'3px 3px 4px black'
          }
        const arrowStyle = {borderRight: '10px solid  teal' };

        return <VerticalTimelineElement
          key={i}
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={arrowStyle}
          date={t.date}
          {...t.icon}
        >
          {t.title ? <React.Fragment>
            <h4 className="vertical-timeline-element-title" style={{color:'teal'}}>{t.title}</h4>
            {t.subtitle && <h4 className="vertical-timeline-element-subtitle" style={{ color: 'white',fontSize:'1.2rem',marginTop:'0.5rem', textShadow: '2px 2px 2px black' }}>{t.subtitle}</h4>}
            {t.desc && <p style={{ color: 'white',fontSize:'1.2rem', textShadow: '3px 3px 10px teal' }}>{t.desc}</p>}
          </React.Fragment> : undefined}
        </VerticalTimelineElement>
        })}
      </VerticalTimeline>
    </div>
  );
}

export default TimelineSection;