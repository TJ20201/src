/////////////////////////////////////////////////////////
// Author: TJ20201                                     //
// Name: credit.js                                     //
// Description: Adds a credit profile to a webpage.    //
/////////////////////////////////////////////////////////

try {
  var credits = document.getElementById('credits');
} catch(e) {
  throw("Error while getting \"credits\" DIV: "+e);
}

if (credits) {
  var credit = "<div id='tj20201-credit-SRCSTYLEUSED' style='background-color: #101010;height: 128px; color: #d8d8d8;width: 50ch;padding: 1px;border-radius: 2px;'><img href='https://tj20201.github.io/src/img/srcicon.png' alt='' style='width:128px;height:128px;float:left;border-radius:5px;'><p> This site uses TJ's styles.<br> <span style='border-radius:3px;background-color:#202020;font-family: Consolas, monospace;padding: 1px;'>src</span> git repository: <a href='https://github.com/TJ20201/src'>Click</a></p></div>";
  credits.insertAdjacentHTML('beforeend', credit);
} else {
  throw("Put credit.js on your credits page, or if this is the credits page please create a \"credits\" DIV!");
}
