import React from 'react';
import './styles.scss';
import AnimateLink from '../../../Components/Icons/Link';

import image1 from '../../../img/works/xdraw-min.jpg';
import image2 from '../../../img/works/inaki-min.jpg';
import image3 from '../../../img/works/inaki-min.jpg';
import image4 from '../../../img/works/coolpassion-min.jpg';
import image5 from '../../../img/works/asadorinaki-min.jpg';
import image6 from '../../../img/works/clandidate-min.png';
import image7 from '../../../img/works/sandiego-min.jpg';
import image8 from '../../../img/works/philadelphi-min.jpg';

const WorksSecond = (props) => {
    return (
        <div className='works-wrapper'>
            <h2>Portfolio</h2>
            {/*<span className='laptop'><Laptop active={props.active}/></span>
            <h3>My recent works</h3>*/}
            <span className='works-content'>

                <section className='works'>
                    <article>
                        <a href='#' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={image1} alt=''/>
                    </article>
                    <article>
                        <a href='https://oneclan.es/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={image2} alt=''/>
                    </article>
                    <article>
                        <a href='https://www.ladespensadeinaki.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={image3} alt=''/>
                    </article>
                    <article>
                        <a href='https://coolandpassion.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={image4} alt=''/>
                    </article>
                    <article>
                        <a href='https://asadorinakimalaga.com' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={image5} alt=''/>
                    </article>
                    <article>
                        <a href='http://app.clandidate.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={image6} alt=''/>
                    </article>
                    <article>
                        <a href='https://dnatestinginsandiego.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={image7} alt=''/>
                    </article>
                    <article>
                        <a href='https://dnatestingphiladelphia.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={image8} alt=''/>
                    </article>
                </section>
            </span>
        </div>
    )
}
export default WorksSecond;