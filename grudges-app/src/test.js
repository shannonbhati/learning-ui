var str = "8/2/2"

var result ;

var left = 0;

var inDivide = false;

for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === "/") {
        if (!inDivide) {
            inDivide = true;
        }
        else {
            result = result ? result / left : left
            left = 0;
        }
    } else {
        left = left * 10 + element;
    }

}

console.log(result)


