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



      // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // // {
  // //   foxes: { name: 'Dimitri', score: 90 },
  // //   wolves: { name: 'Alexei', score: 85 }
  // // }
  
  
  // console.log(highestScore([
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
  // //   foxes: { name: 'Alexander', score: 100 },
  // //   wolves: { name: 'Alisa', score: 76 },
  // //   tigers: { name: 'Viktor', score: 80 }
  // // }
  
  
  // console.log(highestScore([])); //{}