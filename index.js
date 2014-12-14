var tokenize = require('html-tokenize');
var combine = require('stream-combiner2');
var through = require('through2');

var tagMatcher      = /^<([^ >]_[ >])/;
var ignoreBlockTags = ['script', 'style', '!--'];

function getTagName(str) {
    return str.match(tagMatcher)[1];
}

module.exports = function () {
    var inside = false;
    var stream = through.obj(function (row, enc, next) {
        var tagName;
        if (row[0] === 'open') {
            tagName = getTagName(row[1].toString('utf8'));
            inside  = (ignoreBlockTags.indexOf(tagName) >= 0);
        }
        else if (inside && row[0] === 'close') {
            inside = false;
        }
        else if (row[0] === 'text') {
            this.push(row[1]);
        }
        next();
    });
    return combine(tokenize(), stream);
};
