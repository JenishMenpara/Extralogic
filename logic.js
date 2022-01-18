
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






const array = ["jenish", "jagat","abc", ["jaymeen",null, "mihir","jay"], null, undefined,[]];

//take value from user
/* const array = [];

console.log("Main Array:-", array)
for(let g=0; g<=2; g++){
    array[g]= prompt("Enter Array:-");
    array.push([g]);
}
console.log(array); */



//  reverse array
function RA(a) {
    const reA = [];

    for (let i = a.length - 1; i >= 0; i--) {
        //if array is array
        if (Array.isArray(a[i])) {
			let narra = RA(a[i]);
			reA.push(narra);
		} else {
            let reS = RS(a[i]);
            reA.push(reS);
        }
    }
    return reA;
}
//  reverse string
function RS(s) {
    let reS = [];
    const reAarry = [];
    if (s == null) {
        /* if (s == undefined) {
            if (s == []) {
                return s; 
            }
            return s;
        } */
        return s;
    } else {
        for (let i = s.length - 1; i >= 0; i--) {
            reS += s[i];
            reAarry.push(reS);
        }
        //console.log("revers string :-", reS);//only revesre string  one by one
        return reS;
        
    }
}
console.log("revers only array:-", RS(array));//only revesre main array not revers his string
console.log("revers ALL:-", RA(array));//revesre array and inside string
