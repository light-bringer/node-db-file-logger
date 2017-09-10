const logger = require(__dirname + '/config/loggerconfig.js')
var loggerObj


logger.init()
loggerObj = logger.loggerObj


loggerObj.info("Hi")
loggerObj.error("Error")
