        function createqr(to,amount,name,comment){
            var to = encodeURIComponent(form1.to.value);
            var amount = form1.amount.value;
            var name = encodeURIComponent(form1.name.value);
            var comment = encodeURIComponent(form1.comment.value);
            var url = "https://twitter.com/intent/tweet?text=%40tipnem%20tip%20"+to+"%20"+amount+"%20"+name+"%20"+comment+"&hashtags=tipnem%e6%b1%ba%e6%b8%88";
            var qr = "http://chart.apis.google.com/chart?chs=547x547&cht=qr&chl="+encodeURIComponent(url);
            return qr;
        }
        function createurl(to,amount,name,comment){
            var to = encodeURIComponent(form1.to.value);
            var amount = form1.amount.value;
            var name = encodeURIComponent(form1.name.value);
            var comment = encodeURIComponent(form1.comment.value);
            var url = "https://twitter.com/intent/tweet?text=%40tipnem%20tip%20"+to+"%20"+amount+"%20"+name+"%20"+comment+"&hashtags=tipnem%e6%b1%ba%e6%b8%88";
            return url;
        }