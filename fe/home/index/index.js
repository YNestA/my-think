import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MyHeader from '../common/header/index';
import styles from './index.css';
import HomeCover from './HomeCover';
import HomePassages from './HomePassages';

export default class HomeIndex extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className={styles.wrap}>
                <MyHeader
                    headerStyle={{position:'absolute'}}
                />
                <HomeCover/>
                <HomePassages/>
            </div>
        );
    }
}
ReactDOM.render(
    <HomeIndex/>,
    document.getElementById('main')
);