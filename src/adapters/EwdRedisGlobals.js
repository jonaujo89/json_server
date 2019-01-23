const EwdBase = require('./EwdBase')

class EwdRedisGlobals extends EwdBase {
  constructor(documentName, options = {}) {
    super(documentName)

    const RedisGlobals = new require('ewd-redis-globals')
    this.db = new RedisGlobals(options)
  }
}

module.exports = EwdRedisGlobals
