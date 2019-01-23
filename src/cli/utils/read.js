const is = require('./is')

module.exports = function(args) {
  if (args.length === 2) {
    return {
      source: args[0],
      destination: args[1]
    }
  }

  const ok = is.FILE(args[0]) || is.URL(args[0]) || is.JS(args[0])
  
  const source = ok ? args[0] : false
  const destination = source ? '' : args[0]

  return {
    source,
    destination
  }
}
