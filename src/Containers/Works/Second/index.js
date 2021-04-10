import React from 'react';
import './styles.scss';
import AnimateLink from '../../../Components/Icons/Link';

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
                        <img src={require('../../../img/works/xdraw-min.jpg')} alt=''/>
                    </article>
                    <article>
                        <a href='https://oneclan.es/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={require('../../../img/works/oneclan-min.jpg')} alt=''/>
                    </article>
                    <article>
                        <a href='https://www.ladespensadeinaki.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={require('../../../img/works/inaki-min.jpg')} alt=''/>
                    </article>
                    <article>
                        <a href='https://coolandpassion.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={require('../../../img/works/coolpassion-min.jpg')} alt=''/>
                    </article>
                    <article>
                        <a href='https://asadorinakimalaga.com' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={require('../../../img/works/asadorinaki-min.jpg')} alt=''/>
                    </article>
                    <article>
                        <a href='http://app.clandidate.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={require('../../../img/works/clandidate-min.png')} alt=''/>
                    </article>
                    <article>
                        <a href='https://dnatestinginsandiego.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={require('../../../img/works/sandiego-min.jpg')} alt=''/>
                    </article>
                    <article>
                        <a href='https://dnatestingphiladelphia.com/' target="_blank">
                            <AnimateLink/>
                        </a>
                        <img src={require('../../../img/works/philadelphi-min.jpg')} alt=''/>
                    </article>
                </section>
            </span>
        </div>
    )
}
export default WorksSecond;