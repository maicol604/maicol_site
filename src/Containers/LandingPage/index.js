import React, {useState, useRef, useEffect} from 'react';
import Menu from '../../Components/Menu';
import './styles.scss';
import Divergent from '../../Components/Divergent';

import AboutFirst from '../About/First';
import AboutSecond from '../About/Second';

import ResumeFirst from '../Resume/First';
import ResumeSecond from '../Resume/Second';

import WorksSecond from '../Works/Second';
import WorksFirst from '../Works/First';

import ContactSecond from '../Contact/Second';
import ContactFirst from '../Contact/First';

import { useDrag } from 'react-use-gesture'



const LandingPage = (props) => {

    let MenuRef = useRef(null);

    const [state, setState] = useState({active: 'ABOUT'});
    const [OptionIndex, setIndex] = useState(0);
    const [tapActive, setTap] = useState(false);

    useEffect(()=>{

    },[])

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        //set({ x: down ? mx : 0, y: down ? my : 0 })
        //console.log(window.screen)
        if(window.screen.availWidth<1024){
            let x = down ? mx : 0;
            if(OptionIndex<(options.length-1) && x<-200 && !tapActive){
                setTap(true);
                setIndex(OptionIndex+1);
            }
            if(OptionIndex>0 && x>200 && !tapActive){
                setTap(true);
                setIndex(OptionIndex-1);
            }
            if(x===0)
                setTap(false);
            //console.log({ x: down ? mx : 0}, OptionIndex, tapActive);
            setState({active:options[OptionIndex].title});
        }
    })

    const options = [
        {
            title:'ABOUT',
            icon:require('../../lottie-data/user-male.json')
        },
        {
            title:'RESUME',
            icon:require('../../lottie-data/analyze.json')
         },
        {
            title:'WORKS',
            icon:require('../../lottie-data/laptop-thin.json')
        },
        {
            title:'CONTACT',
            icon:require('../../lottie-data/place-marker.json')
        },
    ];

    const handleOption = (response) => {
        setState({...state, active:response})
    }

    return (
        <div className='landing-wrapper'>
            <header className='menu-header'>
                <Menu
                    options = {options}
                    onClick = {handleOption}
                    active = {state.active}
                    onClick = {(active)=>{
                        setState({active});
                        for(let i=0;i<options.length;i++){
                            if(options[i].title===active){
                                setIndex(i);
                                break;
                            }
                        }
                    }}
                />
            </header>
            <section {...bind()}>
                <Divergent 
                    animate={state.active==='ABOUT'}
                    first={
                        <AboutFirst
                            active={state.active==='ABOUT'}
                            name='MAICOL'
                            lastname='FARIÑO'
                        />
                    }
                    second={
                        <AboutSecond
                            active={state.active==='ABOUT'}
                        />
                    }
                />
                            {/*<CircleProgress 
                                percent={state.active==='RESUME'?60:0}
                                text='CSS'
                            />*/}
                <Divergent 
                    animate={state.active==='RESUME'}
                    first={<ResumeFirst/>}
                    second={
                            <ResumeSecond
                                active = {state.active==='RESUME'}
                            />
                    }
                />
                <Divergent 
                    animate={state.active==='WORKS'}
                    first={<WorksFirst/>}
                    second={
                        <WorksSecond
                            active={state.active==='WORKS'}
                        />
                    }
                />
                <Divergent 
                    animate={state.active==='CONTACT'}
                    first={<ContactFirst/>}
                    second={
                        <ContactSecond
                            
                        />
                    }
                />
            </section>
        </div>
    )
}
export default LandingPage;