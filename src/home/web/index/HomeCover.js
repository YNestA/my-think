import React,{Component} from 'react';

const styles={
    homeCover:{
        height:'100vh',
        paddingTop:'60px'
    }
};
export default class HomeCover extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div style={styles.homeCover}>Home Cover</div>
        );
    }
}