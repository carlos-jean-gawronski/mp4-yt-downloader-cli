const program = require("commander");
require("dotenv").config();
const Downloader = require("./lib/downloader");

program.version("0.0.1").description("YouTube downloader CLI ");

program
  .command("ytd-mp4")
  .requiredOption("-l, --link <link>", "A youtube video link or id")
  .option("-n, --name [name]", "Name of the downloaded file")
  .action((cmObj) => {
    const { link } = cmObj;

    Downloader.download(link);
  });

program.parse(process.argv);
