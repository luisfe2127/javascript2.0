for (let i = 1; i < 5; i++) {
   console.log("loop for (i): " + i)
}

let x = 0

do {
   x++
   console.log("loop do while (x): " + x)
} while(x < 5) 

let y = 0

while (y < 5) {
   y++
   console.log("loop while (y): "  + y)
}

i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

console.log(n)

checkianj: while(i < 4) {
   console.log(i)
   i += 1 

   checkj: while(j > 4) {
      console.log(j)
      j -= 1

      if(j % 2 === 0) {
         continue checkj
      }
      console.log(j + " é estranho.");
   }
   console.log("i = " + i);
   console.log("j = " + j);
}

