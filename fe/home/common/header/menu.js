import React,{Component} from 'react';
import styles from './menu.css';

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            menu:[
                {url:'/',text:'世界树'},
                {url:'/',text:'次元壁'},
                {url:'/',text:'死海文书'},
                {url:'/',text:'About Me'}
            ]
        }
    }
    render(){
        return (
            <ul className={styles.menu}>
                {
                    this.state.menu.map((item,i)=>{
                        return (
                            <li className={styles.item} key={i}>
                                <a className={styles.itemA} href={item.url}>{item.text}</a>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}