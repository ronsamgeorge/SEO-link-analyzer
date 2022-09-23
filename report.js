
//takes in the pages object and prints report in sorted order
function printReport(pages){
    console.log("The report is starting");
    const sortedReport = sortPages(pages);
    for(let page of sortedReport){
        console.log(`Found ${page[1]} internal link to url : ${page[0]}`);   //index 0 has the url and index 1 has the count
    }
}


//sorts the pages in Report by the number of links
function sortPages(pages){
    let sortedPages = [];

    //saving the key value pair in a new array for sorting as : [key,value]
    for (let page in pages){
        sortedPages.push([page,pages[page]]);
    }

    sortedPages.sort((a,b)=>{
        return b[1] - a[1];
    });
    
    return sortedPages;
}

module.exports = {printReport};