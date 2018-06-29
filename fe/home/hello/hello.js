/**
 * Created by yang on 18-5-31.
 */
import React, {Component} from 'react';

export default class YNestA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'yang'
        }
    }

    componentWillMount() {
        this.setState({name: 'Yang'});
    }

    render() {
        return (
            <div>hello,{this.state.name}</div>
        );
    }
}
