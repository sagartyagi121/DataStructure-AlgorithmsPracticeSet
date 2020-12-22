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

// sol 3 - most efficient 


/* structure is used to return two values from minMax() */
let pair = { min : 0, max:0 }; 

function getMinMax(arr) {
  let i;
  const n = arr.length;
  let minmax = { min: 0, max: 0 }; 

  /* If array has even number of elements then 
     initialize the first two elements as minimum and 
	 maximum */

  if (n % 2 === 0) {
    if (arr[0] > arr[1])     
    {
      minmax.max = arr[0];
      minmax.min = arr[1];
    }  
    else
    {
      minmax.min = arr[0];
      minmax.max = arr[1];
    }
	i = 2; /* set the starting index for loop */
  } 

/* If array has odd number of elements then 
	initialize the first element as minimum and 
	maximum */
  else {
	minmax.min = arr[0];
	minmax.max = arr[0];
	i = 1; /* set the starting index for loop */
  }

/* In the while loop, pick elements in pair and 
	compare the pair with max and min so far */
  while( i < n-1) {
    if (arr[i] > arr[i+1])          
    {
      if(arr[i] > minmax.max)        
        minmax.max = arr[i];
      if(arr[i+1] < minmax.min)          
        minmax.min = arr[i+1];        
    } 
    else        
    {
      if (arr[i+1] > minmax.max)        
        minmax.max = arr[i+1];
      if (arr[i] < minmax.min)          
        minmax.min = arr[i];        
    }  
    i += 2;
  }    

  return minmax;
} 

const arr = [1000, 11, 445, 1, 330, 3000];
pair = getMinMax(arr);
console.log('nMinimum element is :' + pair.min);
console.log(`nMaximum element is : ${pair.max}`);
 
