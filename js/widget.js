function GetScriptParams()
{
    var scripts = document.getElementsByTagName( 'script' );
    var src = scripts[ scripts.length - 1 ].src;

    var query = src.substring( src.indexOf( '?' ) + 1 );
    var parameters = query.split( '&' );

    var result = new Object();
    for( var i = 0; i < parameters.length; i++ )
    {
        var element = parameters[ i ].split( '=' );

        var paramName = decodeURIComponent( element[ 0 ] );
        var paramValue = decodeURIComponent( element[ 1 ] );

		if (typeof paramValue==="undefined") {
			result[paramName]="";
		}
		else {
			result[paramName]=paramValue;
		}
    }

    return result;
}


function createqr(to,amount,name,comment){
	var to = encodeURIComponent(tipnem_popup.to.value);
	var amount = tipnem_popup.amount.value;
	var name = encodeURIComponent(tipnem_popup.name.value);
	var comment = encodeURIComponent(tipnem_popup.comment.value);
	var url = "https://twitter.com/intent/tweet?text=%40tipnem%20tip%20"+to+"%20"+amount+"%20"+name+"%20"+comment+"&hashtags=tipnem%e6%b1%ba%e6%b8%88";
	var qr = "http://chart.apis.google.com/chart?chs=547x547&cht=qr&chl="+encodeURIComponent(url);
	return qr;
}
function createurl(to,amount,name,comment){
	var to = encodeURIComponent(tipnem_popup.to.value);
	var amount = tipnem_popup.amount.value;
	var name = encodeURIComponent(tipnem_popup.name.value);
	var comment = encodeURIComponent(tipnem_popup.comment.value);
	var url = "https://twitter.com/intent/tweet?text=%40tipnem%20tip%20"+to+"%20"+amount+"%20"+name+"%20"+comment+"&hashtags=tipnem%e6%b1%ba%e6%b8%88";
	return url;
}

function tipnem_show()
{
	document.getElementById("tipnem_back").style.display="block";
	document.getElementById("tipnem_widget").style.display="block";

}

function tipnem_close()
{
	document.getElementById("tipnem_back").style.display="none";
	document.getElementById("tipnem_widget").style.display="none";
}
function tipnem_showqr()
{
	var to=encodeURIComponent(tipnem_popup.to.value);
	var amount=tipnem_popup.amount.value;
	var name=encodeURIComponent(tipnem_popup.name.value);
	var comment=encodeURIComponent(tipnem_popup.comment.value);
	document.getElementById("tipnem_qr").style.display="block";
	tipnem_qr.src =createqr(to, amount, name, comment);
}
function tipnem_tip()
{
	tipnem_close();
	var to=encodeURIComponent(tipnem_popup.to.value);
	var amount=tipnem_popup.amount.value;
	var name=encodeURIComponent(tipnem_popup.name.value);
	var comment=encodeURIComponent(tipnem_popup.comment.value);
	var url = createurl(to, amount, name, comment);
	window.open(url);
}



window.onload=function () {
	var args=GetScriptParams();
	$('#tipnem-widget').html("<button onclick='tipnem_show ();' >TipNemで寄付する</button><div id='tipnem_back' style='display: none;'></div><div id='tipnem_widget' style='display: none;'><img src='https://soralis-nem.github.io/tipnem-payment/img/close.png'  id='tipnem_close_button' onclick='tipnem_close();'><form name='tipnem_popup'><div class='mui-textfield' name='input' ><input type='text' name='to' value="" required><label>送る相手</label></div><div class='mui-textfield' name='input' ><input type='text' name='amount' required><label>数量</label></div><div class='mui-textfield' name='input' ><input type='text' name='name'  required><label>mosaic名</label></div><div class='mui-textfield' name='input' ><input type='text' name='comment' ><label>コメント</label></div><button type='button' onclick='tipnem_tip ();' class='mui-btn mui-btn--primary' >送る</button><button type='button' onclick='tipnem_showqr ();' class='mui-btn mui-btn--primary' >QR</button></form><img src='' width='256' height='256' id='tipnem_qr' style='display: none;' ></div>");
	tipnem_popup.to.value=args["to"];
	tipnem_popup.amount.value=args["amount"];
	tipnem_popup.name.value=args["name"];
	tipnem_popup.comment.value=args["comment"];
}
