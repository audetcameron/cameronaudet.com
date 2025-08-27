/*COOKIES*/
  //create cookie functions to be used
  //https://www.section.io/engineering-education/understanding-and-working-with-javascript-cookies/
//setcookie
export const setCookie = function (name: string, value, daysToLive, minutes = false) {
  // console.log('setting cookie');
  var cookie = name + "=" + encodeURIComponent(value);
  if(typeof daysToLive === "number" && !minutes) {
    //set a standard day cookie used for alerts
    cookie += "; max-age=" + (daysToLive*24*60*60);
    document.cookie = cookie;
  }else if(typeof daysToLive === "number" && minutes){
    //this is to set a 10 minute cookie used in rate code to "throttle"
    var now = new Date();
    now.setTime(now.getTime() + (daysToLive * 60 * 1000));
    // console.log('cooke should be ' + daysToLive + ' minutes')
    //https://www.tutorialspoint.com/How-to-set-cookies-to-expire-in-30-minutes-in-JavaScript
    cookie += "; expires=" + now.toUTCString() + ";"
    // console.log(now)
    document.cookie = cookie;
  }
}

//getcookie
export const getCookie = function(name: string) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if(name == cookiePair[0].trim()) {
          return decodeURIComponent(cookiePair[1]);
      }
  }
  return null;
}
//delete cookie
export const deleteCookie = function(name: string) {
  document.cookie = name +"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  return null;
}