import React from 'react';
import './styles.scss';

const CircleProgress = (porps) => {
    return (
        <div className='box'>
            <div className='percent'>
                <svg>
                    <circle cx='70' cy='70' r='70'/>
                    <circle 
                        style={{strokeDashoffset:(440-(440*porps.percent)/100)}} 
                        cx='70' 
                        cy='70' 
                        r='70'
                    />
                </svg>
                <div className='content'>
                    {porps.children}
                    {porps.text}
                </div>
            </div>
        </div>
    )
}
export default CircleProgress;