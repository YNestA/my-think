import React, {Component} from 'react';
import styles from './index.css';
import Velocity from 'velocity-animate';
import MyUtils from '../../common/MyUtils';

export default class HomeCover extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.homeCover}>
                <img className={styles.motto} src='/static/image/home/motto.png'/>
                {/*
                        <ul>
                            <li><a href='/'><img/></a></li>
                            <li><a href='/'><img/></a></li>
                            <li><a href='/'><img/></a></li>
                            <li><a href='/'><img/></a></li>
                        </ul>

                */}
                <a className={styles.goDown} href='javascript:;' onClick={() => {
                    Velocity(document.getElementById('home-passages'), 'scroll', {
                        duration: 800
                    })
                }}/>
            </div>
        );
    }
}