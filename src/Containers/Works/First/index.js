import React from 'react';
import './styles.scss';

import image from '../../../img/maicol3-min.jpg';

const WorksFirst = (props) => {
    return (
        <div className='works-first-wrapper'>
            <img className='BG' src={image} alt='user' />
        </div>
    )
}
export default WorksFirst;