import React from 'react';
import './styles.scss';

import image from '../../../img/maicol2-min.jpg';

const ContactFirst = (props) => {
    return (
        <div className='contact-first-wrapper'>
            <img className='BG' src={image} alt='user' />
        </div>
    )
}
export default ContactFirst;