function loadGoogleAnalytics(id) {
    // Google tag (gtag.js)
    var firstScript= document.getElementsByTagName("script")[0];
    newScript= document.createElement("script");
    newScript.async= "";  
    newScript.src= "https://www.googletagmanager.com/gtag/js?id="+ id;
    firstScript.parentNode.insertBefore(newScript, firstScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', id);
}

$(window).on("load", function() {
    if (navigator.webdriver) {
        loadGoogleAnalytics("G-LE1ZGTPC77");
        console.log('Bot Browser');
    } else {
        if ($(location).attr('href').indexOf(".games235.com")> -1) {        
            loadGoogleAnalytics("G-4EMF7BG2HD");
        } else {
            loadGoogleAnalytics("G-KFFPC3CBG0");
        }
        console.log('Human Browser');
    }    
});
