const EwdBase = require('./EwdBase')
const RedisGlobals = require('ewd-redis-globals')

class EwdRedisGlobals extends EwdBase {
  constructor(documentName, options = {}) {
    super(documentName)
    this.db = new RedisGlobals(options)
  }
}

module.exports = EwdRedisGlobals
