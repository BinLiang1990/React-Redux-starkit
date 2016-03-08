/**
 * Created by EdenLiang on 2016/3/8.
 */
'use strict';
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./root.prod');
} else {
    module.exports = require('./root.dev');
}