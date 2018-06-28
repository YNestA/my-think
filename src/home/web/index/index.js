import React,{Component} from 'react';
import MyHeader from '../common/header';
import HomeCover from './HomeCover';
import HomePassages from './HomePassages';

const styles={
    wrap:{
        background:`url("/static/image/home/bg.jpg") no-repeat center center fixed;`,
        backgroundSize:'cover'
    },
    headerStyle:{
        position:'absolute'
    }
};
export default class HomeIndex extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={styles.wrap}>
                <MyHeader
                    headerStyle={styles.headerStyle}
                />
                <HomeCover/>
                <HomePassages/>
            </div>
        );
    }
}