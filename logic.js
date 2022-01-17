
const array = ["jenish", ["jagat", "archit"],"heet",["ab","cd"]];
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
     
}console.log("rev:-",arr1);

/*  */




/* const array = ["jenish",["jaymeen","mihir"]];
console.log("normal array :-",array);

function rev(a)
{
    const array2=[];
	for (let i = a.length - 1; i >= 0; i--) 
    {
		let revStr = "";

		// If array in array took help(jagat)
		if (Array.isArray(a[i])) {
            rev(a[i]);
        } else {
			for (let s = a[i].length - 1; s >= 0; s--) {
				revStr += a[i][s];	
			}
            array2.push(revStr)
		}
	}console.log(array2);
}
rev(array);
 */
