function fizzBuzz(n) {
    let counter = 1;
    while (counter <= n) {
        // console.log(`this is our counter`, counter)
        // Write your code here
        if (counter % 3 === 0 && counter % 5 === 0) console.log('FizzBuzz')
        if (counter % 3 === 0 && counter % 5 !== 0) console.log('Fizz')
        if (counter % 3 !== 0 && counter % 5 === 0) console.log('Buzz')
        if (counter % 3 !== 0 && counter % 5 !== 0) console.log(counter)
        counter += 1;
    }
}


fizzBuzz(15) //?