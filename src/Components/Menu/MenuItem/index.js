import React from 'react';
import lottie from 'lottie-web';

import './styles.scss';

class MenuItem extends React.Component  {

    state = {
        obj: null
    }

    constructor(props) {
        super(props);
    
        this.lottieRefItem = null;
    
        this.setlottieRefItemRef = element => {
          this.lottieRefItem = element;
        };
    
        this.getlottieRefItem = () => {
          // Hace enfoque del campo de texto usando un método propio del DOM
          if (this.lottieRefItem) return this.lottieRefItem;
        };
    }

    componentDidMount(){
        const obj = lottie.loadAnimation({
            container: this.lottieRefItem,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:this.props.data
        });
        obj.setSpeed(.5);
        this.setState({obj});
    }

    render(){
        return (
            <div 
                className={'menu-item '+(this.props.active?'menu-item-active':'')} 
                onClick={() => this.props.onClick(this.props.title)}
                onMouseEnter={()=>this.state.obj.play()}
                onMouseLeave={()=>this.state.obj.stop()}
            >
                <span className='icon-wrapper'>
                    <div ref={this.setlottieRefItemRef}></div>
                </span>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
MenuItem.defaultProps = {
    title: 'undefined',
    active: false
}
export default MenuItem;