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
			if (typeof paramValue==="undefined") {
				result[paramName]="";
			}
			else {
				result[paramName]=paramValue;
			}
		}
	}
	return result;
}



$(function() {
	$('#show').click(function(e) {
		$('#popup, #layer').show();
		var args=GetQueryString();
		form1.to.value=args["to"];
		form1.amount.value=args["amount"];
		form1.name.value=args["name"];
		form1.comment.value=args["comment"];
	}
	);

	$('#close').click(function(e) {
		$('#popup, #layer').hide();
	}
	);

	$('#show-qr').click(function(e) {
		var to=encodeURIComponent(form1.to.value);
		var amount=form1.amount.value;
		var name=encodeURIComponent(form1.name.value);
		var comment=encodeURIComponent(form1.comment.value);
		$('#qrcode').show();
		qrcode.src =createqr(to, amount, name, comment);
	}
	);

	$('#tip').click(function(e) {
		$('#popup, #layer').hide();
		var to=encodeURIComponent(form1.to.value);
		var amount=form1.amount.value;
		var name=encodeURIComponent(form1.name.value);
		var comment=encodeURIComponent(form1.comment.value);
		var url = createurl(to, amount, name, comment);
		window.open(url);
	}
	);

}
);

window.onload=function () {
}