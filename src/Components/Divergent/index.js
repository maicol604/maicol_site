import React  from 'react';
import './styles.scss';

import BG from './animateBG';

const Divergent = (props) => {

    return (
        <React.Fragment>
            <div className='divergent-wrapper'>
                <div className={'divergent-img '+(props.animate?'divergent-img-slidein':'')}>
                    <span className='content'>{props.first}</span>
                </div>
                <div className={'divergent-content '+(props.animate?'divergent-content-slidein':'')}>
                    <BG
                        active={props.animate}
                    />
                    <span className='content'>{props.second}</span>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Divergent;