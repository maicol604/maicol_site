import React, { useRef, useEffect } from 'react';
import './styles.scss';
import Card from '../../../Components/Card';
import ProgressBar from '../../../Components/ProgressBar';

import lottie from 'lottie-web';


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
                        header={<React.Fragment><img src={require('../../../img/unet.png')} alt='UNET'/></React.Fragment>}
                        title='Computer engineering degree'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum aliquet massa, ac rutrum urna vehicula vitae. Cras tristique iaculis velit, a rutrum erat mattis sed.'
                        style={{width:'100%'}}
                    />
                    <Card
                        header={<React.Fragment><img src={require('../../../img/react.png')} alt='udemy'/></React.Fragment>}
                        title='React JS Udemy certificate'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum aliquet massa, ac rutrum urna vehicula vitae. Cras tristique iaculis velit, a rutrum erat mattis sed.'
                        style={{width:'100%'}}
                    />
                    <Card
                        header={<React.Fragment><img src={require('../../../img/flutter.png')} alt='udemy'/></React.Fragment>}
                        title='Flutter Udemy certificate'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum aliquet massa, ac rutrum urna vehicula vitae. Cras tristique iaculis velit, a rutrum erat mattis sed.'
                        style={{width:'100%'}}
                    />
                </section>
                <section>
                    <h2><span ref={experienceRef}/>Experience</h2>
                    <div>
                        <h3>Front-end Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum aliquet massa, ac rutrum urna vehicula vitae. Cras tristique iaculis velit, a rutrum erat mattis sed.</p>
                    </div>
                    <div>
                        <h3>Back-end Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum aliquet massa, ac rutrum urna vehicula vitae. Cras tristique iaculis velit, a rutrum erat mattis sed. Aliquam convallis ex nisi, sed iaculis urna cursus nec. Sed suscipit purus quis rutrum pulvinar. Sed eget dui porta, facilisis magna et, hendrerit ipsum.</p>
                    </div>
                    <div>
                        <h3>Data Base Modeling</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum aliquet massa, ac rutrum urna vehicula vitae. Cras tristique iaculis velit, a rutrum erat mattis sed.</p>
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
            </div>  
        </div>
    )
}
export default ResumeSecond;