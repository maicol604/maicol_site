import React from 'react';
import './styles.scss';

const BG = (props) => {
    return (
        <ul className='animate-BG'>
            <li className={'rectangle '+(props.active?'rectangle-active':'')}></li>
            <li className={'rectangle '+(props.active?'rectangle-active':'')}></li>
        </ul>
    )
}
BG.defaultProps = {
    active:false
}
export default BG;