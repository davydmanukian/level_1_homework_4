//  3) Write a recursive function to determine whether all digits of the number are odd or
// not

function checkOdd(num, i=0){
  let arr = (num += '').split('');
  if(!(arr[i] % 2)){
      return false
  } else {
      arr.shift();
      if((arr.length === 0)){
          return true
      };
      num = +(arr.join(''));
      return checkOdd(num,i)
  }
}






// 4) Given an array of numbers. Write a recursive function to find its minimal positive element. (if
//     such element does not exist, return -1)․

function minPositive(arr,i = 0){
  let shifted = [];
  if(arr.length === 0){
      return -1;
  }
  shifted.push(arr.shift());
  if(shifted[i] < 0){
      return minPositive(arr,i = 0)
  };
  if(shifted[i] < arr[i]){
      arr.shift();
      arr =  shifted.concat(arr);
      return minPositive(arr,i);
  };
  if(shifted[i] >= arr[i]){
      if(arr[i] < 0){
          arr.shift();
          arr = shifted.concat(arr)
      }
      return minPositive(arr,i)
  };
  if(arr.length === 0){
      let lastDigit = shifted.pop()
      return lastDigit
  }
}



//  2) Write a JavaScript function to get all possible subsets of given length of the given
// array.

function subArray (arr,n, i = 0) {
  let result = []
  for (let i = 0; i <= arr.length - n; i++) {
      subArr = arr.slice(i,(i+n))
      result.push(subArr)
  }
  return result
}

// stex mi tramabanutyun ei mtacel en el chkaroxaca grem, stex uzum ei bolor 3 irar koxqinnere grei,
// heto arrayi elementnere hertov hanei u tenc irar koxqi 3-akan elementnere tarber ein linum,
// heto krknvoxnere hanum ei u stanum ei patasxane:


// 1. Create a function that builds a tree like object given an array with object which
// contains parent and id properties.



function treeObject(arr){
    let tree = {};
        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < arr.length; j++) {
                if(arr[i].id === arr[j]["parent"]) {
                    tree[arr[i].parent] = {}
                } 

            }
          
    return tree
}
}



let treeArray = [

   { parent : null, id : 0,},
   { parent : 0, id : 1,},
   { parent : 0, id : 2,},
   { parent : 1, id : 3,},
   { parent : 1, id : 4,},
   { parent : 2, id : 5,},
   { parent : 4, id : 6,}
];
console.log(treeObject(treeArray));
