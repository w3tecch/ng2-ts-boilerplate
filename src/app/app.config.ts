let jsonConfig = require('!json!./../config.json');

export interface IAppConfig {
  ENV: string;
  NAME: string;
  VERSION: string;
  API_URL: string;
  LOG_LEVEL: string;
}

export const AppConfig: IAppConfig = {
  ENV: jsonConfig.ENV,
  NAME: jsonConfig.NAME,
  VERSION: jsonConfig.VERSION,
  API_URL: jsonConfig.API_URL,
  LOG_LEVEL: jsonConfig.LOG_LEVEL,
};
