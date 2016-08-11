// Polyfills
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';

// Others
require('expose?$!expose?jQuery!jquery');
import 'materialize-css';
//require('materialize-css/js/init.js'); // Remove this line if you like to automatically initialize js components
