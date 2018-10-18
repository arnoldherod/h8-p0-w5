function highestScore (students) {
    // Code disini
    var objRes = {}
    
    for (var i = 0 ; i < students.length ; i++){
      var obj = {}
      if (objRes[students[i]["class"]] === undefined){
        obj["name"] = students[i]["name"]
        obj["score"] = students[i]["score"]
        objRes[students[i]["class"]] = obj
      }
        else{
            if(students[i]["score"] > objRes["score"]){
              obj["name"] = students[i]["name"]
              obj["score"] = students[i]["score"]
              objRes[students[i]["class"]] = obj
            }
          }
        }
        return objRes
      }


      function graduates (students) {
        // Code disini
        var objRes = {}
        
        for (var i = 0 ; i < students.length ; i++){
          var arr = []
          var obj = {}
          if (objRes[students[i]["class"]] === undefined && students[i]["score"] > 75){
            obj["name"] = students[i]["name"]
            obj["score"] = students[i]["score"]
            arr.push(obj)
            objRes[students[i]["class"]] = arr
          }
          else{
            if(students[i]["score"] > 75){
                  obj["name"] = students[i]["name"]
                  obj["score"] = students[i]["score"]
                  objRes[students[i]["class"]].push(obj)
            }
          }
        }
        return objRes
    }



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