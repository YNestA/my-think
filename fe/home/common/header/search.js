import React,{Component} from 'react';

const styles={
    search:{
        float:'right'
    }
};
export default class Search extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div onClick={()=>{alert(1)}} style={styles.search}>Search</div>
        );
    }
}