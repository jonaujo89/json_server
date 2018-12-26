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

  read() {
    this.db.open()

    const node = new this.documentStore.DocumentNode(this.documentName)
    const data = node.getDocument(true)

    this.db.close()

    return data
  }

  write(data) {
    this.db.open()

    const node = new this.documentStore.DocumentNode(this.documentName)
    node.setDocument(data)

    this.db.close()
  }
}

module.exports = EwdBase
