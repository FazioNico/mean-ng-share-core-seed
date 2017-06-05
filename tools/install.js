/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   24-05-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 05-06-2017
*/


// Install Script v.0.0.2

"use strict";

var debugging = false;

var fs = require('fs');
var cp = require('child_process');
var path = require('path');

var coreAppPath = '../core';
var mobileAppPath = '../mobile';

console.log("-------------------------------------------------------------------------------------------");
console.log("------------------------ MEAN - Angular Core Seed INSTALL SCRIPT --------------------------");
console.log("");
console.log('[INSTALL] - MEAN Angular Core Seed installation:');

installCore();
installMobile();
installServer()
installElectron()
displayFinalHelp();

return 0;


function installCore(){
  console.log('   [RUN] - install Core dependecies...')
  try {
    cp.execSync("cd ./core && npm install && cd ../");
  }
  catch (err) {
    console.log("   [ERROR] - install core npm dependecies error: ", err);
    return 0
  }
  console.log('   [SUCCESS] -  Core module install with success')
}

function installMobile(){
  console.log('   [RUN] - install Mobile dependecies...')
  try {
    cp.execSync("cd ./mobile && npm install && cd ../");
  }
  catch (err) {
    console.log("   [ERROR] - install mobile dependecies error: ", err);
    return 0;
  }
  console.log('   [SUCCESS] -  Mobile dependecies install with success')
}

function installServer(){
  console.log('   [RUN] - install Server app...')
  try {
    cp.execSync("cd ./server && npm install && cd ../");
  }
  catch (err) {
    console.log("   [ERROR] - install Server app have an error: ", err);
    return 0;
  }
  console.log('   [SUCCESS] -  Server app with success')
}

function installElectron(){
  console.log('   [RUN] - install Electron app...')
  try {
    cp.execSync("cd ./electron && npm install && cd ../");
  }
  catch (err) {
    console.log("   [ERROR] - install Electron app have an error: ", err);
    return 0;
  }
  console.log('   [SUCCESS] -  Electron app with success')
}

/**
* Display final help screen!
*/
function displayFinalHelp()
{
  console.log("[SUCCESS] - MEAN Angular Core Seed install with success");
  console.log("");
  console.log("-------------------------------------------------------------------------------------------");
  console.log("------------------------ MEAN - Angular Core Seed is Now Ready ----------------------------");
  console.log("");
  console.log("Run your Server REST with:");
  console.log("  DevMode:   $ cd ./server && npm run dev");
  console.log("  ProdvMode: $ cd ./server && npm run prod");
  console.log("");
  console.log("Helper:");
  console.log("   cmd: $ npm run helper.cmd");
  console.log("");
  console.log("");
  console.log("Run your PWA app via IonicFramwork with:");
  console.log("  DevMode:   $ cd ./mobile && npm run dev");
  console.log("  ProdvMode: $ cd ./mobile && npm run prod");
  console.log("");
  console.log("Helper:");
  console.log("   cmd: $ npm run helper.cmd");
  console.log("");
  console.log("-----------------------------------------------------------------------------------------");
  console.log("");
}

function splitPath(v) {
  var x;
  if (v.indexOf('/') !== -1) {
    x = v.split('/');
  } else {
    x = v.split("\\");
  }
  return x;
}

function resolve(v) {
  var cwdPath = splitPath(process.argv[1]);
  // Kill the Script name
  cwdPath.length = cwdPath.length - 1;

  var resolvePath = splitPath(v);

  // Eliminate a trailing slash/backslash
  if (cwdPath[cwdPath.length-1] === "") { cwdPath.pop(); }

  if (v[0] === '/' || v[0] === "\\") { cwdPath = []; }
  for (var i=0;i<resolvePath.length;i++) {
    if (resolvePath[i] === '.' || resolvePath[i] === "") { continue; }
    if (resolvePath[i] === '..') { cwdPath.pop(); }
    else { cwdPath.push(resolvePath[i]); }
  }
  if (process.platform === 'win32') {
    var winResult = cwdPath.join("\\");
    if (winResult[winResult.length-1] === "\\") { winResult = winResult.substring(0, winResult.length - 1); }
    return winResult;
  } else {
    var result = cwdPath.join('/');
    if (result[0] !== '/') { result = '/' + result; }
    if (result[result.length-1] === '/') { result = result.substring(0, result.length - 1); }
    return result;
  }

}
