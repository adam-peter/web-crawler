import { argv } from "node:process";
import { crawlPage } from "./crawl.js";
import { printReport } from "./report.js";

const main = async () => {
  if (argv.length < 3) {
    console.log("Error - you must enter a base url to crawl!");
    process.exit(1);
  } else if (argv.length > 3) {
    console.log("Error - you can enter only one argument.");
    process.exit(1);
  } else {
    const baseUrl = argv[2];
    console.log(`The crawler has started crawling from baseUrl ${baseUrl}`);
    const result = await crawlPage(baseUrl, baseUrl, {});
    printReport(result);
  }
};

main();
