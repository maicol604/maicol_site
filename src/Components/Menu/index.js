import React,{useState} from 'react';
import MenuItem from './MenuItem';

import './styles.scss';

const Menu = (props) => {
    const [state, setState] = useState({active:'ABOUT'});
    
    const handleActive = (active) => {
        if(props.onClick!==undefined)
            props.onClick(active);
        setState({active});
    }

    return (
        <div className='menu-wrapper'>
            {
                props.options.map((data, index) => {
                    return (
                        <MenuItem
                            title={data.title}
                            key={index}
                            onClick={handleActive}
                            active={props.active===data.title}
                            data={data.icon}
                        >
                        </MenuItem>
                    )
                })
            }
        </div>
    );
}

Menu.defaultProps = {
    options: [],
    active:'ABOUT',
}
export default Menu;