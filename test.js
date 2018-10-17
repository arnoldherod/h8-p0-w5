// REGEX


// var message = 'Regex itu Mudah!';
// console.log(/[A-Z]/.test(message));
// // mengembalikan nilai true karena minimal satu karakter memenuhi pattern A-Z. Dan true, karena regex itu memang mudah :)

// var messageAllLowerCase = 'regex itu susah?';
// console.log(/[A-Z]/.test(messageAllLowerCase));
// // mengembalikan nilai false karena tidak ada satupun karakter yang memenuhi pattern A-Z. statement tersebut juga memang false! regex tidak sesulit yang kita kira!

// var regexPattern = new RegExp('[A-Z]');

// var message = 'Regex itu Mudah!';
// console.log(regexPattern.test(message));
// // mengembalikan nilai true karena minimal satu karakter memenuhi pattern A-Z. Dan true, karena regex itu memang mudah :)

// var messageAllLowerCase = 'regex itu susah?';
// console.log(regexPattern.test(messageAllLowerCase));
// // mengembalikan nilai false karena tidak ada satupun karakter yang memenuhi pattern A-Z. statement tersebut juga memang false! regex tidak sesulit yang kita kira!


var message = 'Regex seru DEH!';
console.log(message.match(/x/));
// menampilkan "e", namun hanya sekali

console.log(message.match(/e/g));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks.
// `g` menandakan pencarian secara global, tidak hanya satu kali

console.log(message.match(/e/gi));
// menampilkan "e" untuk setiap "e" yang terdapat di dalam teks.
// // `i` menandakan pencarian karakter dengan ignore case,
// // atau mengabaikan besar kecilnya karakter, sehingga "E" pun akan dicocokkan.

// var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
// console.log(string.match(/[a-z]+/gi));
// //menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]