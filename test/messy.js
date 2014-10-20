var strip = require('../');
var test = require('tape');
var concat = require('concat-stream');

test('messy', function (t) {
    t.plan(1);
    var s = strip();
    s.pipe(concat(function (body) {
        t.equal(body.toString('utf8'), 'yo hey');
    }));
    s.end('<script>wooo</script>yo<i><!-- ignore me! --> <b>hey</b></i>');
});
