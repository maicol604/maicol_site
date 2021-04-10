import React from 'react';
import './styles.scss';

import image from '../../../svg/hyperlink.svg';

const AnimateLink = (props) => {
    return (
        <React.Fragment>
            <span className='animateicon-wrapper'>
                <img className='animate-icon animate-icon-first' src={image}/>
            </span>
        </React.Fragment>
    )
}
export default AnimateLink;
