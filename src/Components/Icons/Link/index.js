import React from 'react';
import './styles.scss';

const AnimateLink = (props) => {
    return (
        <React.Fragment>
            <span className='animateicon-wrapper'>
                <img className='animate-icon animate-icon-first' src={require('../../../svg/hyperlink.svg')}/>
            </span>
        </React.Fragment>
    )
}
export default AnimateLink;
