var fs=require ("fs");
var exit=require("process");
export default async function queryDB(externalFunction){
fs.readFile("dbFileCheck.js", function(err, data){
	     if(err){
	     	console.log("somthing went wrong", err);
	     	exit(1);
	     }
	     console.log(data.toString());
});
}
queryDB();