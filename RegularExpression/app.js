// let re;

// re = /hello/i; // case insenstive
// // re = /hello/g; // global search

// // const result = re.exec("hello world");

// // const result = re.test("Hello");

// let str;
// str = "hello World";

// // const result = str.match(re);

// // const result = str.search(re);

// const result = str.replace(re, 'hi');

// console.log(result);

let re;
re = /hello/;
re = /hello/i;

// Meta character
re = /^h/i;   // must start with
re = /d$/i;   // must end with
re = /^hd$/i; // must start and end with
re = /^h.llo$/i; //Matches any one character
re = /h*llo/i; // Matches any 0 or more characters
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character


// Brackes [] - Character sets
re = /gr[ae]y/i; // Must be a or e
re = /[GF]ray/; // Must be g or f
re = /[^GF]ray/; // Matches anything except G and F
re = /[A-Z]ray/; // Matches any uppercase letter
re = /[a-z]ray/; // Matches any lower letter
re = /[A-Za-z]ray/; // Matches any letter
re = /[0-9]ray/;  // Matches any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;   // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;   // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;   // Must occur at least {m} amount of times

// parentheses () - Grouping
re = /([0-9]x){3}/;



const str = '3x3x3x';

const result  = re.exec(str);
console.log(result);


function retest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

retest(re, str);