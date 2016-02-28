let jsonConfig = require('!json!./../config.json');

export interface IAppConfig {
  ENV: string;
  NAME: string;
  VERSION: string;
  API_URL: string;
  LOGGER: string[];
}

export const AppConfig: IAppConfig = {
  ENV: jsonConfig.ENV,
  NAME: jsonConfig.NAME,
  VERSION: jsonConfig.VERSION,
  API_URL: jsonConfig.API_URL,
  LOGGER: jsonConfig.LOGGER,
};
