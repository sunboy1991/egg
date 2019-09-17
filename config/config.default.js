/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '12138';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  exports.news = {
    pageSize: 5,
    serverUrl: 'http://yapi.3k.com:3000/mock/274/',
  };
  exports.middleware = [
    'robot'
  ];
  // robot's configurations
  exports.robot = {
    ua: [
      /Baiduspider/i,
    ]
  };
  return {
    ...config,
    ...userConfig,
  };
};
