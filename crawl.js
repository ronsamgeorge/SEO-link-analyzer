

function normalizeURL(url){

    let lowerCasedURL = url.toLowerCase();
    const lenOfURL = url.length;
    
    if (lowerCasedURL[lenOfURL -1] === '/'){
        lowerCasedURL = lowerCasedURL.substr(0,lenOfURL-1);
    }

    const link = new URL(lowerCasedURL);
    return (`${link.hostname}${link.pathname}`);
}

module.exports = {normalizeURL};