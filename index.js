var pick = require('pick-random')
module.exports = function () {
  return {
    cons: [],
    vows: [],
    seed: function (ls) {
      var that = this
      ls.forEach(function (l) {
        l.split(' ').forEach(function (w) {
          var chopped = chopByVowelConsonant(w)
          that.cons = that.cons.concat(chopped.filter(function (l) {
            return !l.match(/[aeiou]/i)
          }))
          that.vows = that.vows.concat(chopped.filter(function (l) {
            return !!l.match(/[aeiou]/i)
          }))
        })
      })
      return this
    },
    fill: function (length) {
      // if user passes 0, umm, undefined!
      if (length) {
        var res = []
        var vows = Math.random() < 0.5
        while (res.length < length) {
          if (vows) {
            res.push(pick(this.vows))
          } else {
            res.push(pick(this.cons))
          }
          vows = !vows
        }
        // return the generated string
        return res.join('')
      }
    }
  }
}

function chopByVowelConsonant (word) {
  var res = []
  var letters = word.split('')
  var curr = letters.shift()
  var vowel = !!curr.match(/[aeiou]/i)
  letters.forEach(function (l) {
    if (vowel === !!l.match(/[aeiou]/i)) {
      curr += l
    } else {
      res.push(curr)
      curr = l
      vowel = !!curr.match(/[aeiou]/i)
    }
  })
  if (curr) res.push(curr)
  return res
}

module.exports.chopByVowelConsonant = chopByVowelConsonant
