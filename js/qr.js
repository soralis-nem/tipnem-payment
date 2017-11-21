function GetQueryString() {
	var result= {}
	;
	if (1 < window.location.search.length) {
		var query=window.location.search.substring(1);
		var parameters=query.split('&');
		for (var i=0;
		i < parameters.length;
		i++) {
			var element=parameters[i].split('=');
			var paramName=decodeURIComponent(element[0]);
			var paramValue=decodeURIComponent(element[1]);
			if (typeof paramValue === "undefined") {
				result[paramName]= "";
			}
			else {
				result[paramName]=paramValue;
			}
		}
	}
	return result;
}
function shorten(url) {
  return new Promise((resolve, reject) => {
    gapi.load('client', _ => {
      gapi.client.init({
        'apiKey': 'AIzaSyB_Y1nA9nd5Aa_i1Xpb2VsLPqGy5JfRzSI',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/urlshortener/v1/rest'],
      })
        .then(_ => gapi.client.urlshortener.url.insert({
          longUrl: url
        }))
        .then(resolve, reject)
    });
  });
}

window.onload=function () {
	var args=GetQueryString();
	var to=args["to"];
	var amount=args["amount"];
	var name=args["name"];
	var comment=args["comment"];
	var LONG_URL="https://twitter.com/intent/tweet?text=%40tipnem%20tip%20"+to+"%20"+amount+"%20"+name+"%20"+comment+"&hashtags=tipnem%e6%b1%ba%e6%b8%88";
	var SHORT_URL=shorten(LONG_URL);
	new QArt( {
		value: SHORT_URL,
		imagePath: 'img/nem.svg', 
		filter: 'color'
	}
	).make(document.getElementById('combine'));
}