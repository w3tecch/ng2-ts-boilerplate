//import * as moment from 'moment'; // same as import moment = require('moment');
//import moment = require('moment');
import AppConfig from '../app.config.ts';

interface ILoggerMethods {
  INFO: string;
  DEBUG: string;
  WARN: string;
  ERROR: string;
}

export enum ILoggerLevel {
  NONE  = 0,
  INFO  = 1,
  DEBUG = 2,
  WARN  = 3,
  ERROR = 4,
}

export default class Logger {

  public static METHOD: ILoggerMethods = {
    INFO: 'info',
    DEBUG: 'debug',
    WARN: 'warn',
    ERROR: 'error'
  };

  private _level: number = ILoggerLevel.NONE;

  constructor(private _className: string) {
    switch (AppConfig.ENV.LOG_LEVEL.toLowerCase()) {
      case Logger.METHOD.INFO:
        this._level = ILoggerLevel.INFO;
        break;

      case Logger.METHOD.DEBUG:
        this._level = ILoggerLevel.DEBUG;
        break;

      case Logger.METHOD.WARN:
        this._level = ILoggerLevel.WARN;
        break;

      case Logger.METHOD.ERROR:
        this._level = ILoggerLevel.ERROR;
        break;

      default:
        this._level = ILoggerLevel.NONE;
    }
  }

  public get className(): string {
    return this._className;
  }

  public info<T>(message: string): (...args: T[]) => void {
    return (...args) => {
      if (this._level >= ILoggerLevel.INFO) {
        this._log(Logger.METHOD.INFO, message, ...args);
      }
    };
  }

  public debug<T>(message: string): (...args: T[]) => void {
    return (...args) => {
      if (this._level >= ILoggerLevel.DEBUG) {
        this._log(Logger.METHOD.DEBUG, message, ...args);
      }
    };
  }

  public warn<T>(message: string): (...args: T[]) => void {
    return (...args) => {
      if (this._level >= ILoggerLevel.WARN) {
        this._log(Logger.METHOD.WARN, message, ...args);
      }
    };
  }

  public error<T>(message: string): (...args: T[]) => void {
    return (...args) => {
      if (this._level >= ILoggerLevel.ERROR) {
        this._log(Logger.METHOD.ERROR, message, ...args);
      }
    };
  }

  private _log<T>(type: string, message: string, ...args: T[]): void {
    console[type](this.formatter(message), ...args);
  }

  private formatter(message: string): string {
    //return `[${moment().format('YYYY-MM-DD HH:MM:SS:SSS')} - ${this.className}] ${message}:`;
    return `[${new Date()} - ${this.className}] ${message}:`;
  }

}
