import React,{Component} from 'react';
import styles from './index.css'

export default class HomeCover extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={styles.home_cover}>Home Cover</div>
        );
    }
}