import * as fs from "fs";

function parse() {
  console.log("convert chrome bookmark to json");
  const bookmark = "bookmark.json";
  // or read bookmark from "/Users/{your user name}/Library/Application Support/Google/Chrome/Default/Bookmarks";
  // const bookmark =
  //   "/Users/{your user name}/Library/Application Support/Google/Chrome/Default/Bookmarks";
  fs.readFile(bookmark, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    const res = data.replace(/\\xa0/g, "");
    const json = JSON.parse(res);
    console.log(json);
  });
}

parse();
