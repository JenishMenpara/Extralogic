
/* const array = ["jenish", ["jagat", "archit"],"heet",["ab","cd"]];
arr1 = [];
console.log("Normal:-",array)
//A.R
for (let i = array.length - 1; i >= 0; i--) {
    var revers = "";
    // S.R
    for (let a = array[i].length - 1; a >= 0;a--) {
        for (let J = array[i][a].length - 1; J >= 0; J--) {
            revers += array[i][a][J];   
            // console.log(revers)
        }
    }
      arr1.push(revers)
     //console.log(revers)
     
}console.log("rev:-",arr1); */

/*  */






const array = ["jenish", "jagat","abc", ["jaymeen",null, "mihir"], null, undefined,[]];
console.log("Main Array:-", array)



//  reverse array
function RA(a) {
    const reA = [];

    for (let i = a.length - 1; i >= 0; i--) {
            let reS = RS(a[i]);
            reA.push(reS);
    }
    return reA;
}
//  reverse string
function RS(s) {
    let reS = [];
    let reAarry = [];
    if (s == null) {
        if (s == undefined) {
            if (s == []) {
                return s; 
            }
            return s;
        }
        return s;
    } else {
        for (let i = s.length - 1; i >= 0; i--) {
            reS += s[i];
            reAarry.push(reS);
        }
        //console.log("revers array main:-", reAarry);
        return reS;
        
    }
}
//console.log("revers array:-", RS(array));
console.log("revers ALL:-", RA(array));
