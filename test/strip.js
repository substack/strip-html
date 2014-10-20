var strip = require('../');
var test = require('tape');
var concat = require('concat-stream');

test('strip html', function (t) {
    t.plan(1);
    var s = strip();
    s.pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'yo hey');
    }));
    s.end('yo<i> <b>hey</b></i>');
});
