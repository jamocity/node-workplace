 import fs from "fs";

 import { exit } from "process";

 export default asyn function dbfilecheck(){

 	if(!fs.existSync("db.json")){

 		console.log("file does not exist");
 		
 		exit(1);
 	}
 } 