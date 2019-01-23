const Base = require('lowdb/adapters/Base')
const DocumentStore = require('ewd-document-store')

class EwdBase extends Base {
  constructor(documentName) {
    super()
    this.documentName = documentName
  }

  get documentStore() {
    if (!this._documentStore) {
      this._documentStore = new DocumentStore(this.db)
    }

    return this._documentStore
  }

  open() {
    this.db.open()
  }

  close() {
    this.db.close()
  }

  read() {
    const node = new this.documentStore.DocumentNode(this.documentName)
    const data = node.getDocument(true)

    return data
  }

  write(data) {
    const node = new this.documentStore.DocumentNode(this.documentName)
    node.setDocument(data)
  }
}

module.exports = EwdBase
