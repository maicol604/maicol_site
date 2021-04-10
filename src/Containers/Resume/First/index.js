import React from 'react';
import './styles.scss';

import image from '../../../img/maicol2-min.jpg';

const ResumeFirst = (props) => {
    return (
        <div className='resume-first-wrapper'>
            <img className='BG' src={image} alt='user' />
        </div>
    )
}
export default ResumeFirst;