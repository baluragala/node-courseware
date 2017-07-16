let Logger = require('./logger');
let logger = new Logger();

logger.emit(logger.INFO, __filename, 'This is info message');
logger.emit(logger.DEBUG, __filename, 'This is debug message');
logger.emit(logger.ERROR, __filename, 'This is error message');