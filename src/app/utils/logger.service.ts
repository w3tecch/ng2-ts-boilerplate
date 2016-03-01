//import * as moment from 'moment'; // same as import moment = require('moment');
//import moment = require('moment');
import {AppConfig} from '../app.config';

interface ILoggerLevel {
  INFO: number;
  DEBUG: number;
  WARN: number;
  ERROR: number;
  NONE: number;
}

interface ILoggerMethods {
  INFO: string;
  DEBUG: string;
  WARN: string;
  ERROR: string;
}

export default class Logger {

  public static METHOD: ILoggerMethods = {
    INFO: 'info',
    DEBUG: 'debug',
    WARN: 'warn',
    ERROR: 'error'
  };

  public static LEVEL: ILoggerLevel = {
    INFO: 0,
    DEBUG: 1,
    WARN: 2,
    ERROR: 3,
    NONE: 4
  };

  private _level: number = 3;

  constructor(private _className: string) {
    switch (AppConfig.LOG_LEVEL.toLowerCase()) {
      case Logger.METHOD.INFO:
        this._level = Logger.LEVEL.INFO;
        break;

      case Logger.METHOD.DEBUG:
        this._level = Logger.LEVEL.DEBUG;
        break;

      case Logger.METHOD.WARN:
        this._level = Logger.LEVEL.WARN;
        break;

      case Logger.METHOD.ERROR:
        this._level = Logger.LEVEL.ERROR;
        break;

      default:
        this._level = 4;
    }
  }

  public get className(): string {
    return this._className;
  }

  public info(message: string): (...args) => void {
    return (...args) => {
      if (this._level >= Logger.LEVEL.INFO) {
        this._log(Logger.METHOD.INFO, message, ...args);
      }
    };
  }

  public debug(message: string, ...args): (...args) => void {
    return (...args) => {
      if (this._level >= Logger.LEVEL.DEBUG) {
        this._log(Logger.METHOD.DEBUG, message, ...args);
      }
    };
  }

  public warn(message: string, ...args): (...args) => void {
    return (...args) => {
      if (this._level >= Logger.LEVEL.WARN) {
        this._log(Logger.METHOD.WARN, message, ...args);
      }
    };
  }

  public error(message: string, ...args): (...args) => void {
    return (...args) => {
      if (this._level >= Logger.LEVEL.ERROR) {
        this._log(Logger.METHOD.ERROR, message, ...args);
      }
    };
  }

  private _log(type: string, message: string, ...args): void {
    console[type](this.formatter(message), ...args);
  }

  private formatter(message: string): string {
    //return `[${moment().format('YYYY-MM-DD HH:MM:SS:SSS')} - ${this.className}] ${message}:`;
    return `[${new Date()} - ${this.className}] ${message}:`;
  }

}
