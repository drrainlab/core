// make sure we have stack
require('chai').config.includeStack = true;

global.SERVICES = {
  redis: {
    hosts: [
      {
        host: process.env.REDIS_1_PORT_6379_TCP_ADDR,
        port: process.env.REDIS_1_PORT_6379_TCP_PORT,
      },
      {
        host: process.env.REDIS_2_PORT_6379_TCP_ADDR,
        port: process.env.REDIS_2_PORT_6379_TCP_PORT,
      },
      {
        host: process.env.REDIS_3_PORT_6379_TCP_ADDR,
        port: process.env.REDIS_3_PORT_6379_TCP_PORT,
      },
    ],
    options: {},
  },
  amqp: {
    connection: {
      host: process.env.RABBITMQ_PORT_5672_TCP_ADDR,
      port: process.env.RABBITMQ_PORT_5672_TCP_PORT,
    },
  },
  redisSentinel: {
    sentinels: [
      {
        host: process.env.REDIS_SENTINEL_PORT_26379_TCP_ADDR,
        port: process.env.REDIS_SENTINEL_PORT_26379_TCP_PORT,
      },
    ],
    name: 'mservice',
    options: {},
  },
};
