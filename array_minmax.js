// sol 1 

let arrNew = [1000, 11, 445, 1, 330, 3000];

let pair = { min: 0, max:0} ;
function minmax(arr){

  pair.min = arr[0];
  pair.max = arr[0];
  if (arr.length === 1) {
    
    return pair;
  }

  for (let index = 0; index < arr.length; index++) {

      if ( arr[index] < pair.min) {
        pair.min = arr[index];
      } else {
          pair.max = arr[index];
      }
 
    // alternate solution 
    //  pair.min = arr[ind] <= pair.min ?  arr[ind] : pair.min;
    //  pair.max = arr[ind] >= pair.max ?  arr[ind] : pair.max;

  }
  
 
    return pair;

}

let newmm = minmax(arrNew);
console.log(newmm);



// sol 2 

let array = [1000, 11, 445, 1, 330, 3000];
minValue = Math.min(...array);
maxValue = Math.max(...array);


