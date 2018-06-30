import React,{Component} from 'react';
import searchImg from './search.png'
import styles from './search.css';

export default class Search extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div  className={styles.search}>
                <input className={styles.searchInput} type='text'/>
                <a className={styles.searchBtn} href='/'>
                    <img  src={searchImg} alt='search'/>
                </a>
            </div>
        );
    }
}