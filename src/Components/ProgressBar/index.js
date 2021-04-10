import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';

const ProgressBar = (props) => {
    const [inViewport, setInViewport] = useState(false);

    let barRef = useRef(null);

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, true);
        return ()=>{
            window.removeEventListener(handleScroll);
        }
    },[]);

    const handleScroll = () => {
        //console.log(isInViewport(barRef.current));
        if(isInViewport(barRef.current)){
            setInViewport(true);
        }else{
            setInViewport(false);
        }
    }

    const isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    

    return (
        <div className='progress-bar-wrapper' ref={barRef}>
            <div className='bar-container'>
                <div className='text'>{props.text}</div>
                <div className='bar' style={{width:inViewport?(props.percent+'%'):'0'}}/>
            </div>
        </div>
    )
}
export default ProgressBar;