var logger = require('../../logger')
const dbURL = "mongodb://localhost:27017/LoggerDb"

module.exports.init = function() {
  var loggerOptions = {
    transports:{
      file:{
        filename:__dirname+'/log/dev.log'
      },
      MongoDB: {
      db : dbURL,
      collection: 'logs'
    
    }
    }
  }

  module.exports.loggerObj = logger.getLogger(loggerOptions)
}
