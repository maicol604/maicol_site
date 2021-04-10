import React from 'react';

import './styles.scss';

import image from '../../img/maicol-main-min.jpg';

const MainImgUser = (props) => {
    return (
        <div className='main-img-user'>
            <img src={image} alt='user' />
            <div className='name'>
                <h2>MAICOL</h2>
            </div>
        </div>
    )
}
export default MainImgUser;