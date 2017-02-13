const winston = require("winston")
    , extend = require('extend')
    
var defaults = {
  transports: {
    file: {
      level: 'info',
      colorize: false,
      timestamp: true,
      json: true, 
      filename: __base + "/log/production.log",
      maxsize: 5242880,
      maxFile: 10,
      logstash: false,
      tailable: true 
    },
    console: {
      level: 'debug',
      colorize: true,
      json: false,
      handleExceptions: true,
      humanReadableUnhandledException: true   
    }
  }
}

function optionsToWinston(options){
  var transportObjects = []
  Object.keys(options.transports).forEach(function(key){
    var transportName = [key[0].toUpperCase() + key.slice(1)]
    if(winston.transports[transportName])
      transportObjects.push(new winston.transports[transportName](options.transports[key]))
  })
  return extend(options, {transports: transportObjects})
}

module.exports = ( function(options) {
  options = options || {}
  extend(true, defaults, options) 
  return new winston.Logger(optionsToWinston(defaults))
})

