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


//     for (var i = 0 ; i < students.length ; i++){
//         objRes[students[i]["class"]] = []
//     }
    
//     for (var j = 0 ; j < students.length ; j++){
//         for (var key in objRes){
//             if(students[j]["class"] === key && students[j]["score"] > 75){
//                 var obj = {}
//                 obj["name"] = students[j]["name"]
//                 obj["score"] = students[j]["score"]
//                 objRes[key].push(obj)
//             }  
//         } 
//     }
//     return objRes
// }
  



// TEST CASES

  // console.log(graduates([
  //   {
  //     name: 'Dimitri',
  //     score: 90,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Alexei',
  //     score: 85,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Sergei',
  //     score: 74,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Anastasia',
  //     score: 78,
  //     class: 'wolves'
  //   }
  // ]));
  
  // // {
  // //   foxes: [
  // //     { name: 'Dimitri', score: 90 }
  // //   ],
  // //   wolves: [
  // //     { name: 'Alexei' , score: 85 },
  // //     { name: 'Anastasia', score: 78 }
  // //   ]
  // }
  
  // console.log(graduates([
  //   {
  //     name: 'Alexander',
  //     score: 100,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Alisa',
  //     score: 76,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Vladimir',
  //     score: 92,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Albert',
  //     score: 71,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Viktor',
  //     score: 80,
  //     class: 'tigers'
  //   }
  // ]));
  
  // // {
  // //   foxes: [
  // //     { name: 'Alexander', score: 100 },
  // //     { name: 'Vladimir', score: 92 }
  // //   ],
  // //   wolves: [
  // //     { name: 'Alisa', score: 76 },
  // //   ],
  // //   tigers: [
  // //     { name: 'Viktor', score: 80 }
  // //   ]
  // // }
  
  
  console.log(graduates([])); //{}