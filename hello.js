console.log("Hello World");
console.log("Please enter your name");

function processData(input) {
    //Enter your code here
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

/*process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null)
    console.log("Chunk Value: " + chunk.toString());
        if ('${chunk}' == "Quit") {
            console.log("Exiting...");
            // process.stdout.write('Ending the program');
            // process.end();return;
        }
        else {
            process.stdout.write(`Hello, ${chunk}`);
        }
}
)
process.stdin.on('end', () => {
    process.stdout.write('end');
}
); 
console.*/