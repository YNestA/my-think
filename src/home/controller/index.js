const Base = require('./base.js');
import React from 'react';
import {renderToString} from 'react-dom/server';
import HomeIndex from '../web/index';

module.exports = class extends Base {
    indexAction() {
        this.assign({
            main:renderToString(<HomeIndex/>)
        });
        return this.display();
    }
};
