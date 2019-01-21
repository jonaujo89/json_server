const low = require('lowdb')
const EwdRedisGlobals = require('./EwdRedisGlobals')
const EwdGtm = require('./EwdGtm')

const registry = {
  'ewd-redis-globals': EwdRedisGlobals,
  'ewd-gtm': EwdGtm,
}

module.exports = function(adapterName, documentName, adapterOptions) {
  const Adapter = registry[adapterName]

  if (!Adapter) {
    throw new Error(`Unsupported adapter ${adapterName}`)
  }

  if (!documentName) {
    throw new Error(`Missing <documentName> argument`)
  }

  return low(new Adapter(documentName, adapterOptions))
}
