//http://www.jqueryscript.net/social-media/jQuery-Plugin-To-Display-RSS-Feeds-On-Your-Webpage-YRSS.html
$('.rss-feed').yrss('https://www.hayadan.org.il/category/biology/brain/feed/');

// https://stackoverflow.com/questions/8237923/parsing-xml-rss-from-url-using-java-script
/*
var x = new XMLHttpRequest();
x.open("GET", "http://www.hayadan.org.il/category/biology/brain/feed/", true);
x.onreadystatechange = function () {
    if (x.readyState == 4 && x.status == 200)
    {
        var doc = x.responseXML;
        // …
    }
};
x.send(null);

var title = doc.getElementsByTagName("channel")[0].getElementsByTagName("title")[0].firstChild.nodeValue;
console.log(title);*/
