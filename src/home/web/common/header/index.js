import React,{Component}from 'react';

const styles={
    header:{
        height:'60px',
        color:'#fff'
    }
};
export default class MyHeader extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {headerStyle}=this.props;
        return(
            <header style={{
                ...styles.header,
                ...headerStyle
            }}>header</header>
        )
    }
}