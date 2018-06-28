import MySwiper from './MySwiper';
import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import NySwiper from './MySwiper'

class YNestA extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <a href='/hello'>hello</a>
                        <li><Link to='/router'>主页</Link></li>
                        <li><Link to='/router/swiper'>轮播</Link></li>
                        <li><Link to='/router/A'>A</Link></li>
                        <li><Link to='/router/re'>re</Link></li>
                        <li><Link to='/router/nomatch'>match</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/router' component={()=><div>home</div>}/>
                        <Redirect exact from='/router/re' to='/router/A'/>
                        <Route path='/router/swiper' component={MySwiper}/>
                        <Route path='/router/A' component={()=><div>A</div>}/>
                        <Route component={()=><div>no match</div>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <YNestA/>,
    document.getElementById('main')
);
