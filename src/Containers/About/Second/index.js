import React from 'react';
import './styles.scss';
import lottie from 'lottie-web';

import Card from '../../../Components/Card';
import Testimony from '../../../Components/Testimony';

import nelumbo from '../../../img/LogoNelumbo-min.png';
import wwtc from '../../../img/wwtc-min.png';

import angel from '../../../img/angel-min.jpg';
import jose from '../../../img/jose-min.jpg';

export default class AboutSecond extends React.Component {

    state={
        comp:null,
        net:null,
        phon:null,
        game:null,
        money:null,
        testimonials:[],
    }
    
    constructor(props) {

        super(props);
    
        this.Comp = null;
        this.setCompRef = element => {
          this.Comp = element;
        };
        this.getComp = () => {
          if (this.Comp) return this.Comp;
        };

        this.Net = null;
        this.setNetRef = element => {
          this.Net = element;
        };
        this.getNet = () => {
          if (this.Net) return this.Net;
        };

        
        this.Phon = null;
        this.setPhonRef = element => {
          this.Phon = element;
        };
        this.getNet = () => {
          if (this.Phon) return this.Phon;
        };
        
        this.Game = null;
        this.setGameRef = element => {
          this.Game = element;
        };
        this.getNet = () => {
          if (this.Game) return this.Game;
        };

        this.Money = null;
        this.setMoneyRef = element => {
          this.Money = element;
        };
        this.getNet = () => {
          if (this.Money) return this.Money;
        };

    }

    componentDidMount(){
        
        const testimonials = [
            {
                name:'Angel de Freitas',
                description:'Maicol did a great job to meet our DevOps needs. I appreciate extra efforts made by him to understand the problems and doing the necessary development or debugging keeping the urgency in mind. Looking forward to working together in the future over the next projects.',
                src:angel
            },
            {
                name:'Jose Ochoa',
                description:'One of the best professionals. Great back-end and sysadmin capabilities. Very attentive and dedicated to his work. Highly recommended',
                src:jose
            }
        ];

        const comp = lottie.loadAnimation({
            container: this.Comp,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/computer-display.json')
        });

        comp.setSpeed(.5);

        const net = lottie.loadAnimation({
            container: this.Net,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/network.json')
        });
        net.setSpeed(.5);
        
        const phon = lottie.loadAnimation({
            container: this.Phon,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/phonelink-ring.json')
        });
        phon.setSpeed(.5);

        const game = lottie.loadAnimation({
            container: this.Game,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/play-load.json')
        });
        game.setSpeed(.5);

        const money = lottie.loadAnimation({
            container: this.Money,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/dollar.json')
        });
        money.setSpeed(.5);
        
        comp.play();
        net.play();
        phon.play();
        game.play();
        money.play();


        this.setState({comp, net, phon, game, money, testimonials});
    }

    render(){
        const { testimonials } = this.state;
        return (
            <div className='about-second-container'>
                <span className='lastname '>
                    <div className={'name'+(this.props.active?' name-active':'')}>FARIÑO</div>
                    <div className={'title'+(this.props.active?' title-active':'')}>Full Stack Developer</div>
                </span>
                <div className='about-content'>
                    <div className='me'>
                        <h3>About Me</h3>
                        <p>
                        I am Maicol Fariño, a Full Stack Software Engineer from Venezuela. I have rich experience in web site design, building, and customization, also I am good at React and WordPress. In today's overcrowded online ecosystem it’s more important than ever to stand out. Our customized technology solutions will bring your ideas to life and feed them the rocket fuel they need to take off. Experience a smarter way to grow. I will love to talk with you about my services.
                        </p>
                    </div>
                    <div className='about-me'>
                        <h3>What can I do</h3>
                        <div className='services'>
                            <span className='col'>
                                <Card
                                    header={<React.Fragment><span ref={this.setCompRef}/></React.Fragment>}
                                    title='Front-end web development'
                                    text='A modern and mobile-ready website that will help you reach all of your marketing.'
                                />
                                <Card
                                    header={<React.Fragment><span ref={this.setNetRef}/></React.Fragment>}
                                    title='Back-end Development'
                                    text='Based on your specific needs I develop a custom strategy that aligns your goals with the right technology solution.'
                                />
                            </span>
                            <span className='col'>
                                <Card
                                    header={<React.Fragment><span ref={this.setPhonRef}/></React.Fragment>}
                                    title='Mobile development'
                                    text='I take a multi-tiered approach to build powerful, secure & easy to use mobile applications.'
                                />
                                <Card
                                    header={<React.Fragment><span ref={this.setGameRef}/></React.Fragment>}
                                    title='Game Development'
                                    text='I can develop a memorable game for web, android, and IOS.'
                                />
                            </span>
                        </div>
                        <span className='pricing'>
                            <h3>Pricing</h3>
                            <span className='price'>$15.00 / hr</span>
                            {/*<Card
                                style={{width:'100%'}}
                                header={<React.Fragment><span ref={this.setMoneyRef}/></React.Fragment>}
                                title='$9.00 / hr'
                                text=''
                            />*/}
                        </span>
                        <span className='clients'>
                            <h3>Clients</h3>
                            <span className='clients-logos-container'>
                                <span className='client'><img src={nelumbo} alt=''/></span>
                                <span className='client'><img src={wwtc} alt=''/></span>
                                <span className='client'>Resultados Marketing Sectoriales, S.L.</span>
                            </span>
                        </span>
                        <span className='testimonials'>
                            <h3>Testimonials</h3>
                            <span>
                                {
                                    testimonials.map((data, index) => {
                                        return(
                                            <Testimony
                                                key={index}
                                                name={data.name}
                                                text={data.description}
                                                avatar={<img src={data.src} alt=''/>}
                                            />
                                        )
                                    })
                                }
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}