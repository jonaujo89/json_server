const EwdBase = require('./EwdBase')

class EwdGtm extends EwdBase {
  constructor(documentName, options = {}) {
    super(documentName)
    this.db = new require('nodem').Gtm()
  }

  open() {
    this.db.open()
  }

  close() {
    this.db.close({ resetTerminal: true })
  }
}

module.exports = EwdGtm
