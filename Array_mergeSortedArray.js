// Merge sorted Array
function merge() {

  const a1 = [0,3,4,31,32,99,99]
  const a2 = [4,6,30,35,37,80]
  let m1 = [];
  let p1=0 ,p2=0;
  while (p1<a1.length && p2<a2.length) {
    compare(a1[p1], a2[p2]);
  }
  
  if (p2 === a2.length && p1 < a1.length) {

    for( let i = p1 ; i < a1.length ; i++) {
      m1.push(a1[i]);
    }
  } else if (p1 === a1.length && p2 < a2.length ) {
     for( let i = p2 ; i < a2.length ; i++) {
      m1.push(a2[i]);
    }
  }

  
  function compare(a1, a2) {
    if (a1 > a2) {
      m1.push(a2);
      p2++;
    } else if (a1 < a2) {
      m1.push(a1);
      p1++;
    } else {
      m1.push(a1);
      m1.push(a2);
      p1++;
      p2++;
    }
  }

  return m1;

}

const ma = merge();

console.log(ma)
