var strip = require('../');
process.stdin.pipe(strip()).pipe(process.stdout);
process.stdout.on('error', function () {});
