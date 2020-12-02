import React, { useState } from 'react';
import './styles.scss';

const Card = (props) => {
    const [state, setState] = useState({hover:false});

    const handleMouseHover = (e) => {
        setState({...state, hover:true});
    }

    const handleMouseLeave = (e) => {
        setState({...state, hover:false});
    }

    return (
        <div className='card-container' style={props.style}>
           {(props.header!==null) ? <header onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
                 <span className='img-header'>{ props.header }</span>
                <div className={'hover-effect'+(state.hover?' hover-effect-active':'')}/>
                <div className={'hover-effect-top'+(state.hover?' hover-effect-active':'')}/>
            </header>:''}
            <h4>{ props.title }</h4>
            <div>
                <p>
                    { props.text }
                </p>
            </div>
        </div>
    )
}

Card.defaultProps = {
    header:null,
    title:null,
    text:null
}

export default Card;