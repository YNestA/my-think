/**
 * Created by yang on 18-5-31.
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
const Base = require('./base.js');
import YNestA from '../web/index';

module.exports=class extends Base{
    indexAction(){
        this.assign({
            main: renderToString(<YNestA/>)
        });
        return this.display();
    }
};