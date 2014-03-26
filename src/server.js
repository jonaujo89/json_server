var express = require('express')
var cors    = require('cors')
var http    = require('http')
var path    = require('path')
var low     = require('low')
var utils   = require('./utils')
var routes  = require('./routes')

low._.createId = utils.createId

var server = express()

server.set('port', process.env.PORT || 3000)
server.use(express.logger('dev'))
server.use(express.json())
server.use(express.urlencoded())
server.use(express.methodOverride())

if (fs.existsSync(process.cwd() + '/public')) {
  app.use(express.static(process.cwd() + '/public'));
} else {
  app.use(express.static(path.join(__dirname, './public')));
}

server.use(cors())
server.use(server.router)

if ('development' == server.get('env')) {
  server.use(express.errorHandler());
}

server.get(  '/db'                          , routes.db)
server.get(  '/:resource'                   , routes.list)
server.get(  '/:parent/:parentId/:resource' , routes.list)
server.get(  '/:resource/:id'               , routes.show)

server.post( '/:resource'                   , routes.create)

server.put(  '/:resource/:id'               , routes.update)
server.patch('/:resource/:id'               , routes.update)

server.del(  '/:resource/:id'               , routes.destroy)

server.low = low

module.exports = server