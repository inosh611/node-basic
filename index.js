
import {dirname, join} from "node:path";
import { fileURLToPath } from 'url';
import { appendFile, readFile, rm, writeFile } from "node:fs";
const log = console.log;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("file name : ", __filename);
console.log("__dirname : ", __dirname);

readFile(join(__dirname, 'myname.txt'), {
    encoding:"utf-8"
},(err, data)=>{
    if(err){
        console.log(err);
    }
    log(data);
});

writeFile(join(__dirname, "write.txt"), "AUK Learning Center",{
    encoding: "utf-8",
} ,(err)=> {
    if(err){
        log(err);
    }
});

appendFile(join(__dirname, "write.txt"), `
new data`,
(err)=>{
    if(!err){
        log("document written");
    }
}
);

appendFile(join(__dirname, "file.js"),
    `
    const a = 'Inosh';
    const c = [1, 2, 3, 4];

    console.log(a);
    console.log(c[3]);
    `,
    (err) => {
        if(!err){
            log("JS file created successfully !");
        }
    }
);

rm(join(__dirname, "write.txt"), (err)=>{
    if(!err){
        log("file deleted!");
    }
});