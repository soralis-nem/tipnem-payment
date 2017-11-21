function GetQueryString()
{
    var result = {};
    if( 1 < window.location.search.length )
    {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        var query = window.location.search.substring( 1 );

        // クエリの区切り記号 (&) で文字列を配列に分割する
        var parameters = query.split( '&' );

        for( var i = 0; i < parameters.length; i++ )
        {
            // パラメータ名とパラメータ値に分割する
            var element = parameters[ i ].split( '=' );

            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        }
    }
    return result;
}

$(function() {

    $('#show').click(function(e) {
        $('#popup, #layer').show();
        var args = GetQueryString();
        var to = args["to"];
        form1.to.value = to;
    });

    $('#close').click(function(e) {
        $('#popup, #layer').hide();
    });

    $('#show-qr').click(function(e) {
        new QArt({
          value: "value",
  imagePath: 'img/nem.svg',  // png,svgファイルにも対応
  filter: 'color' // 'filter'オプションが無いと白黒のQRコードが作成される
}).make(document.getElementById('combine'));
        $('#qr').show();
    });
});