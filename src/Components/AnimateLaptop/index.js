import React from 'react';
import './styles.scss';

import laptop2 from '../../img/mac-keyboard-min.png';

const Laptop = (props) => {
    return (
        <div className='laptop-wrapper'>
            <img className={'animate-screen '+(props.active?'animate-screen-active':'')} src={require('../../img/mac-min.png')} alt='laptop' />
            <span className={'coding '+(props.active?'coding-active':'')}><img src={require('../../img/coding.gif')} alt='coding' /></span>
            <img className='keyboard' src={laptop2} alt='laptop' />
        </div>
    )
}
Laptop.defaultProps = {
    active:false,
}
export default Laptop;