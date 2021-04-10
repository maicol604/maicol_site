import React, { useEffect, useRef } from 'react';
import './styles.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Form from '../../../Components/ContactForm';
import lottie from 'lottie-web';

const position = [7.7913,-72.2056];

const ContactSecond = (props) => {
    const wspRef = useRef(null);
    const gmRef = useRef(null);
    useEffect(()=>{
        const wsp = lottie.loadAnimation({
            container: wspRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/whatsapp-shake.json')
        });

        const gm = lottie.loadAnimation({
            container: gmRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData:require('../../../lottie-data/gmail.json')
        });
        
        wsp.setSpeed(.25);
        wsp.play();
        
        gm.setSpeed(.25);
        gm.play();
    },[]);

    return (
        <div className='contact-wrapper'>
            <h2>Contact Me</h2>
            <div className='map-wrapper'>
                <MapContainer center={position} zoom={10}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        Here I am!
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
            <div className='social'>
               <div className='icon wsp'>
                   <a href='https://wa.me/584247629436' target='_blank'><span style={{width: '100%'}} ref={wspRef}/></a>
               </div>
               <div className='icon gm'>
                    <a href="mailto:maicol.fario@gmail.com"><span style={{width: '100%'}} ref={gmRef}/></a>
               </div>
            </div>
            <div>
                <Form/>
            </div>
        </div>
    )
}
export default ContactSecond;