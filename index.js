if(!global.__base)
  global.__base = __dirname + '/'

const logger = require(__base + "logger.js")

module.exports =  {
  getLogger: function(options) {
    return logger(options)
   }
  
}
