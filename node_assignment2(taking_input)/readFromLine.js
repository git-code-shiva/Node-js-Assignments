const readline =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Enter Your Name:`, name=>{
    console.log(`Hi ${name}!`);
    readline.close();
});