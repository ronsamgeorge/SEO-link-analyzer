const jsdom = require("jsdom");
const {JSDOM} = jsdom;

//Takes in a URL and noramlizes to format and get 
function normalizeURL(url){

    let lowerCasedURL = url.toLowerCase();
    const lenOfURL = url.length;

    if (lowerCasedURL[lenOfURL -1] === '/'){
        lowerCasedURL = lowerCasedURL.substr(0,lenOfURL-1); //handles trailing slash after the pathname
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
    const URLList = [];                                             //stores the list of links : un-normalized

    for(url of aTagList){
        let link = url.href;
        if (!regAbsoURLPattern.test(link)){                         // to check if the given 
            link = `${baseURL}${link.substr(1)}`;                   //starts from 1 to remove an extra / preceeding the relative address
        }

        URLList.push(link);
    }
    return (URLList);
 }


// for manual testing : 
//  const htmlBody = `<!DOCTYPE html><p href="/xyz">Link</p> <p href="/xyz.com">Link</p>`; 
//  getURLsFromHTML(htmlBody,'https://ron.dev/');

module.exports = {normalizeURL, getURLsFromHTML};