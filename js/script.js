//http://www.jqueryscript.net/social-media/jQuery-Plugin-To-Display-RSS-Feeds-On-Your-Webpage-YRSS.html
$('.rss-feed').yrss('https://www.hayadan.org.il/category/biology/brain/feed/', {
    ssl: true,
    limit: 2,
    dateformat: 'spellmonth',
    image: true,
    snippetlimit: 100
});
