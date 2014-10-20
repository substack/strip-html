var tokenize = require('html-tokenize');
var combine = require('stream-combiner2');
var through = require('through2');

module.exports = function () {
    var tok = tokenize();
    var inside = false;
    var stream = through.obj(function (row, enc, next) {
        var s = row[1].toString('utf8');
        if (row[0] === 'open' && /^<script/i.test(s)) {
            inside = 'script';
        }
        else if (row[0] === 'open' && /^<!--/.test(s)) {
            inside = 'comment';
        }
        else if (inside) {
            if (row[0] === 'close') inside = false;
        }
        else if (row[0] === 'text') {
            this.push(row[1]);
        }
        next();
    });
    return combine(tokenize(), stream);
};
