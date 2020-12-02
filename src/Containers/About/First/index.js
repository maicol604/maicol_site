import React from 'react';
import './styles.scss';
import lottie from 'lottie-web';

export default class AboutFirst extends React.Component {

    constructor(props){
        super(props);
    }


    componentDidMount(){
        this.gears = React.createRef();

        const obj = lottie.loadAnimation({
            container: this.gears,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/gears.json')
        });
        obj.setSpeed(.5);

    }

    render(){
        return (
            <div className='about-first-container'>
                <img className='BG' src={require('../../../img/maicol-main-min.png')} alt='user' />
                <div ref={this.setlottieGearRef}></div>
                <span className='text'>
                    <div className={'name '+(this.props.active?'name-active':'')}>{this.props.name}</div>
                    <div className={'lastname '+(this.props.active?'lastname-active':'')}>{this.props.lastname}</div>
                </span>
            </div>
        )
    }
}