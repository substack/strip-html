# strip-html

strip html streamingly

[![build status](https://secure.travis-ci.org/substack/strip-html.png)](http://travis-ci.org/substack/strip-html)

# example

``` js
var strip = require('strip-html');
process.stdin.pipe(strip()).pipe(process.stdout);
process.stdout.on('error', function () {});
```

```
$ curl -s http://www.transcendentalists.com/walden_where_i_lived.htm \
  | node strip.js | tail -n+511 | head -n15
often safely offered in jest.  And I am sure that I never read any
memorable news in a newspaper.  If we read of one man robbed, or
murdered, or killed by accident, or one house burned, or one vessel
wrecked, or one steamboat blown up, or one cow run over on the
Western Railroad, or one mad dog killed, or one lot of grasshoppers
in the winter -- we never need read of another.  One is enough.  If
you are acquainted with the principle, what do you care for a myriad
instances and applications?  To a philosopher all news, as it is
called, is gossip, and they who edit and read it are old women over
their tea.  Yet not a few are greedy after this gossip.  There was
such a rush, as I hear, the other day at one of the offices to learn
the foreign news by the last arrival, that several large squares of
plate glass belonging to the establishment were broken by the
pressure -- news which I seriously think a ready wit might write a
twelve-month, or twelve years, beforehand with sufficient accuracy.
```

# methods

``` js
var strip = require('strip-html');
```

## var stream = strip()

Return a transform `stream` that takes html text as input and outputs plain text
as output.

Note that the output side might contain html entities because this module does
not decode entities itself.

# usage

This package also comes with a `strip-html` command:

```
usage: strip-html {OPTIONS}

  -i, --infile   Read input from a file. Default: "-" (stdin)
  -o, --outfile  Write output to a file. Default: "-" (stdout)
  -h, --help     Show this message.

```

# install

With [npm](https://npmjs.org) do:

```
npm install strip-html
```

# license

MIT
