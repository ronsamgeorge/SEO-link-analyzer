const jsdom = require("jsdom");
const {JSDOM} = jsdom;

//Takes in a URL and noramlizes to a format
function normalizeURL(url){

    let lowerCasedURL = url.toLowerCase();
    const lenOfURL = url.length;

    if (lowerCasedURL[lenOfURL -1] === '/'){
        lowerCasedURL = lowerCasedURL.substr(0,lenOfURL-1);     //handles trailing slash after the pathname
    }

    const link = new URL(lowerCasedURL);
    return (`${link.hostname}${link.pathname}`);
}



//takes in a string of HTML and return an array of all the link in that webpage
// returns absolute URL, by concatinationg to baseURL 
 function getURLsFromHTML(inputHTMLBody, baseURL){

    const regAbsoURLPattern = new RegExp('^(?:[a-z]+:)?//', 'i');    //Regular expression to check if url present are absolute or relative
    const dom = new JSDOM(inputHTMLBody);
    const aTagList = dom.window.document.querySelectorAll("a");     //selects all the <a> tags
    const URLList = [] ;                                             //stores the list of links : un-normalized

    for(aTag of aTagList){
        let link = aTag.href;
        if (!regAbsoURLPattern.test(link)){                         // to check if the given 
            link = `${baseURL}${link.substr(1)}`;                   //starts from 1 to remove an extra / preceeding the relative address
        }

        URLList.push(link);
    }

    console.log(URLList);
    return URLList;
 }


 //

 async function crawlPage(baseURL){
    try {
        const response = await fetch(baseURL);

        const responseCode = response.status;
        if(responseCode >= 400){
            console.log(`Received Error Code : ${responseCode}`);
            return;
        }

        const responseContentType = response.headers.get('content-type'); 
        if(!responseContentType.includes('text/html')){
            console.log(`Content type Error. Expected : text/html, Received : ${responseContentType}`);
            return;
        }

        console.log(await response.text());         //response.text() returns a promise 
    }catch(err){
        console.log(err);
    }
 }


// for manual testing : 
//  const htmlBody = `<!DOCTYPE html><a href="/xyz">Link</a> <a href="/xyz.com">Link</a>`; 
//  getURLsFromHTML(htmlBody,'https://ron.dev/');

crawlPage('https://wagslane.dev');

module.exports = {normalizeURL, getURLsFromHTML};