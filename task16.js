/* 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
*/

function removeUrlAnchor(url){
	if ( url.includes('#')){
	return url.slice(0, url.indexOf('#'))
	  }
	else return url;
  }