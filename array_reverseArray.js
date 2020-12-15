let a = [1,2,3,4,5];
function reverse(arr, start, end){
 let temp; 
 while(start < end) {
   temp = arr[start];
   arr[start] = arr[end];
   arr[end] = temp;
   start +=1;
   end -=1;
 
}
return arr;  
}

let b = reverse(a,0, a.length);
console.log(b);
