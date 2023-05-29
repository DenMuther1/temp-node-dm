
//syncronised way:
const{readFileSync,writeFileSync} = require(`fs`);

const first = readFileSync(`./content/first.txt`,`utf8`);
const second = readFileSync(`./content/second.txt`,`utf8`);

console.log(first,second);

//the method to create a new file is writeFileSync:

writeFileSync(`./content/result.txt`,`Here is the result: ${first},${second}`)

//if there is a value on the texts by default the module will write onto the file

///Asyncronized approach: minus the sync word :-)
// We need to provide a callback - we run that call back when we are done with the function
//same way an event listener is done

//here in the call back we pass in two arguments, error and result


const{readFile,writeFile} = require(`fs`);

readFile('./content/first.txt', `utf8`,( err, result ) =>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

//when we get back the first text file, we would want to assign it to a 
//variable & read the second file 

const{readFile,writeFile} = require(`fs`);

readFile('./content/first.txt', `utf8`,( err, result ) =>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', `utf8`,( err, result ) =>{
        if (err) {
            console.log(err)
            return
        }
    const second = result;
    writeFile(`./content/result-async.txt`, `Here is the result:${first},${second}`),
    {flag: `a`}
}           