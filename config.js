module.exports = {
  HOST_NAME: process.env.HOST_NAME || '127.0.0.1',
  PRETTY_LOGGING: process.env.PRETTY_LOGGING || 'pino-pretty',
  RABBITMQ_URI: process.env.RABBITMQ_URI || 'amqp://rabbitmq:5672',
  PORT: process.env.PORT || 3000,
};
