const fs = require("fs");
const youtubedl = require("youtube-dl");
const ora = require("ora");
const questions = require("./questions");

module.exports = {
  download: async function (videoLink) {
    const videoName = await questions.askVideoTitle();
    console.log("Downloading...");

    const video = youtubedl(videoLink);

    video.pipe(
      fs.createWriteStream(`${process.env.OUTPUT_PATH}/${videoName.name}.mp4`)
    );
  },
};
