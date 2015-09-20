var tap = require('tap')

var makeQueneauLetters = require('./')
var chop = require('./').chopByVowelConsonant

tap.test('chops it up', function (t) {
  t.plan(2)
  t.deepEqual(chop('world'), ['w', 'o', 'rld'], 'does it')
  t.deepEqual(chop('cccoooled'), ['ccc', 'ooo', 'l', 'e', 'd'], 'does it')
})

tap.test('does the thing', function (t) {
  t.plan(1)
  var q = makeQueneauLetters()
  q.seed(['craa', 'aarc'])
  t.ok(q.fill(2).match(/craa|aarc|rcaa/), 'does it')
})
