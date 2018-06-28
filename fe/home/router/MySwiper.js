/**
 * Created by yang on 18-5-31.
 */
import React, {Component} from 'react';
import YSwiper from 'react-y-swiper';

export default class MySwiper extends Component {
    render() {
        return (
            <YSwiper
                className="aaa"
                showNum={5}
                autoPlay={true}
                autoPlayTime={3}
                speed={0.75}
                onSlideStart={(i)=>{
                    console.log(i);
                }}
                onSlideEnd={(i)=>{
                    console.log(i);
                }}
                containerStyle={{
                    height:'9rem',
                    width:'25rem',
                    margin:'2rem auto',
                    backgroundColor: '#fff'
                }}
            >
                {['/static/image/1.png',
                    '/static/image/2.png',
                    '/static/image/3.png',
                    '/static/image/4.png',
                    '/static/image/5.png',
                    '/static/image/6.jpg'
                ].map(url=> {
                    return <img style={{width:'100%',height:'100%'}} src={url}/>;
                })}
            </YSwiper>
        );
    }
}