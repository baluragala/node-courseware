let logger = require('./logger');
logger.info(__filename, 'This is info message');
logger.debug(__filename, 'This is debug message');
logger.error(__filename, 'This is error message');