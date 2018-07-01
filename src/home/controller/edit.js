const Base = require('./base.js');
import React from 'react';

module.exports = class extends Base {
    indexAction() {
        return this.display();
    }
};
