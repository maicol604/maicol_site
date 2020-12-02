import React from 'react';

import './styles.scss';

const MainImgUser = (props) => {
    return (
        <div className='main-img-user'>
            <img src={require('../../img/maicol-main-min.jpg')} alt='user' />
            <div className='name'>
                <h2>MAICOL</h2>
            </div>
        </div>
    )
}
export default MainImgUser;