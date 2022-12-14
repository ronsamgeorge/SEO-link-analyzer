const {crawlPage} = require("./crawl.js");
const {printReport} = require("./report.js");


async function main(){
    const args = process.argv.slice(2); //takes all Arguments from index 2,  excludes the first two : node path and file path

    if(args.length > 1){
        console.log("Kindly enter only one Argument");
        return ;
    }

    if(args.length < 1){
        console.log("No Arguments Entered. Kindly enter a BaseURL.");
        return;
    }

    console.log(`BaseURL received : ${args}. Analyzing starting .... `);
    const report = (await crawlPage(args[0],args[0],{}));
    printReport(report);
}

main();