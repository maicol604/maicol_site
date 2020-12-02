import React from 'react';
import './styles.scss';

const Testimony = (props) => {
    return (
        <div className='testimony-wrapper'>
            <header>
                <span className='avatar'>{props.avatar}</span>
                <h4>{props.name}</h4>
            </header>
            <div className='text'>
                {/*<span className='quotation'><img style={{width:'100%'}} src={require('../../svg/quotation.svg')} alt='quotation'/></span>*/}<span>{props.text}</span>
            </div>
        </div>
    )
}
export default Testimony;