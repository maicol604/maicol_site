import React, { useRef, useEffect } from 'react';
import './styles.scss';
import Card from '../../../Components/Card';
import ProgressBar from '../../../Components/ProgressBar';

import lottie from 'lottie-web';

import unet from '../../../img/unet.png';
import reacticon from '../../../img/react.png';
import flutter from '../../../img/flutter.png';
import css from '../../../img/css-3.png';

const ResumeSecond = (props) => {
    let experienceRef = useRef(null);
    let guaranteeRef = useRef(null);

    useEffect(()=>{

        const experience = lottie.loadAnimation({
            container: experienceRef,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/star.json')
        });
        const guarantee = lottie.loadAnimation({
            container: guaranteeRef,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/guarantee.json')
        });

        experience.setSpeed(.5);
        experience.play();
        guarantee.setSpeed(.5);
        guarantee.play();

        return (()=>{
        });

    },[]);

    return (
        <div className='resume-wrapper'>
            <div className='experience-education-content'>
                <section>
                    <h2>Education</h2>
                    <Card
                        header={<React.Fragment><img src={unet} alt='UNET'/></React.Fragment>}
                        title='Computer engineering degree'
                        text='degree in computer engineering at the national experimental university of Táchira.'
                        style={{width:'100%'}}
                    />
                    <Card
                        header={<React.Fragment><img src={reacticon} alt='udemy'/></React.Fragment>}
                        title='React JS Udemy certificate'
                        text=''
                        style={{width:'100%'}}
                    />
                    <Card
                        header={<React.Fragment><img src={flutter} alt='udemy'/></React.Fragment>}
                        title='Flutter Udemy certificate'
                        text=''
                        style={{width:'100%'}}
                    />
                    <Card
                        header={<React.Fragment><img style={{filter: 'initial'}} src={css} alt='udemy'/></React.Fragment>}
                        title='CSS Udemy certificate'
                        text=''
                        style={{width:'100%'}}
                    />
                </section>
                <section>
                    <h2><span ref={experienceRef}/>Experience</h2>
                    <div>
                        <h3>Front-end Developer</h3>
                        <p>About two years of experience as a frontend developer in react js, with extensive knowledge in javascript, css, typescript and html. also development of plugins for wordpress and correction and detection of php and layout errors.</p>
                    </div>
                    <div>
                        <h3>Back-end Developer</h3>
                        <p>Development of apis for wordpress and use of nodeJS api to manage audio streams, basic knowledge of creating endpoints with nodeJS and express.</p>
                    </div>
                    <div>
                        <h3>Data Base Modeling</h3>
                        <p>Database modeling with entity, relationship models, and schemas for json NoSQL collections</p>
                    </div>
                </section>
            </div>
            <div className='skills-content'>
                <h2>My Skills</h2>
                <section>
                    <h3>Coding</h3>
                    <span className='skill-coding'>
                        <ProgressBar
                            percent={props.active?80:0}
                            text='HTML'
                        />
                        <ProgressBar
                            percent={props.active?90:0}
                            text='CSS'
                        />
                        <ProgressBar
                            percent={props.active?70:0}
                            text='Javascript'
                        />
                        <ProgressBar
                            percent={props.active?30:0}
                            text='Python'
                        />
                        <ProgressBar
                            percent={props.active?80:0}
                            text='React JS'
                        />
                        <ProgressBar
                            percent={props.active?50:0}
                            text='Dart'
                        />
                        <ProgressBar
                            percent={props.active?65:0}
                            text='PHP'
                        />
                    </span>
                </section>
                <section className='knowledge-content'>
                    <h3>Knowledges</h3>
                    <span className='knowledges'>
                        <ProgressBar
                            percent={props.active?90:0}
                            text='Problem solving and logical thinking'
                        />
                        <ProgressBar
                            percent={props.active?70:0}
                            text='Teamwork'
                        />
                        <ProgressBar
                            percent={props.active?60:0}
                            text='Software testing and debugging'
                        />
                        <ProgressBar
                            percent={props.active?80:0}
                            text='Object-oriented design (OOD)'
                        />
                        <ProgressBar
                            percent={props.active?80:0}
                            text='Databases'
                        />
                    </span>
                </section>
                
                <section>
                    <h3>Interesting technologies</h3>
                    <span className='skill-coding'>
                        <ProgressBar
                            percent={props.active?80:0}
                            text='Twilio'
                        />
                        <ProgressBar
                            percent={props.active?60:0}
                            text='Google Maps API'
                        />
                        <ProgressBar
                            percent={props.active?70:0}
                            text='Wordpress API'
                        />
                        <ProgressBar
                            percent={props.active?50:0}
                            text='Google Cloud Translation'
                        />
                        <ProgressBar
                            percent={props.active?40:0}
                            text='Microsoft - Azure Cognitive Services'
                        />
                    </span>
                </section>

            </div>  
        </div>
    )
}
export default ResumeSecond;