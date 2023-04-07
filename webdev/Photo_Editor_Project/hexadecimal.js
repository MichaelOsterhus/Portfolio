//convert byte value to hexadecimal

const hexValues = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f"
  };

  const toHex = function(num){
    let digitA;
    let digitB;
       if (num  < 16) {
        digitA = 0
        digitB = hexValues[num]
    } else {
        digitA = hexValues[Math.floor(num / 16)]
        digitB = hexValues[Math.floor(num % 16)]
    }
    return `#${digitA + digitB}`  
       
  }


  console.log(toHex(255))
  console.log(toHex(4))
  console.log(toHex(25))
  console.log(toHex(160))
  console.log(toHex(16))
