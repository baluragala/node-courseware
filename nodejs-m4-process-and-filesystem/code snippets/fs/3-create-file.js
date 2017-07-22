let fs = require("fs");
let writeStream = fs.createWriteStream("Zeolearn.txt");
writeStream.write("Hi, Zeolearn Users. ");
writeStream.write("Thank You.");
writeStream.end();