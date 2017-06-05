/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   24-05-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 05-06-2017
*/


// Deploy Server Script v.0.0.1

"use strict";

var cp = require('child_process');

preparDeployServer();
deployeServer();

function preparDeployServer(){
  console.log('   [RUN] - Prepar deploy server...')
  try {
    cp.execSync("git add -f ./dist/ && git add --all && git commit -m 'upd version - `date`' && git subtree split -P ./dist -b heroku-serve && git rm -r --cached ./dist/ && git add --all && git commit -m 'rm .temp folder'");
  }
  catch (err) {
    console.log("   [ERROR] - Prepar deploy Server error: ", err);
  }
  console.log('   [SUCCESS] -  Prtepar Server with success')
}

function deployeServer(){
  console.log('   [RUN] - Deploy Server...')
  try {
    cp.execSync("git push heroku heroku-serve:master --force  && git branch -D heroku-serve && heroku ps:scale web=1 && heroku open");
  }
  catch (err) {
    console.log("   [ERROR] - Deploy Server error: ", err);
  }
  console.log('   [SUCCESS] -  Deploy Sever with success');
}
