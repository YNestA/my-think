import React,{Component}from 'react';
import Menu from './menu';
import Search from './search';
import styles from './index.css'

export default class MyHeader extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {headerStyle}=this.props;
        return(
            <header className={styles.header} style={headerStyle}>
                <h1 className={styles.logo}>
                    <a className={styles.logoA} style={{lineHeight:headerStyle.height||'0.6rem'}} href='/'>YNestA</a>
                </h1>
                <Search/>
                <Menu/>
            </header>
        )
    }
}