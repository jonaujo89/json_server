const EwdBase = require('./EwdBase')
const Gtm = require('nodem').Gtm

class EwdGtm extends EwdBase {
  constructor(documentName, options = {}) {
    super(documentName)
    this.db = new Gtm()
  }

  open() {
    this.db.open()
  }

  close() {
    this.db.close({ resetTerminal: true })
  }
}

module.exports = EwdGtm
