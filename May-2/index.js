 var arr = [1,2,3,4,5,6,7];
 var sum = 0;
 for (var i of arr){
    sum = sum+i;
 } 
 console.log(sum);

var a =[1,2,3] ;
var b = [4,5];
console.log(a + "," + b);


var array = [1,2,3,4,5]
var array1 =[3,4,5,6,7]
for(var i = 0;i <=array.length;i++) {
    for (var j = 0;j<=array1.length;j++)
    {
        if(array[i] == array1[j]){
            console.log(array[i]);
        }
    }   
}
