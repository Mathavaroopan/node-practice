// asynchronous file handling

const fs = require('fs');

fs.readFile('./content/first-async.txt', 'utf8', 
    (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const first = result;
        fs.readFile('./content/second-async.txt', 'utf8', 
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            const second = result;
            console.log(first);
            console.log(second);
            fs.writeFile('./content/result-async.txt', `Here is the result: ${first}${second}`, (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            })
        }
        )
    }
)