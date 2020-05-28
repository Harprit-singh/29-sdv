var colors = new Array();               //create an array
var count = colors.push("A", "B");      //push two items
console.log(count);  //2
console.log(colors);// 

count = colors.push("black");           //push another item on
console.log(count);  //3
console.log(colors);

var item = colors.pop();                //get the last item
console.log(item);   
console.log(colors.length);  //2
console.log(colors);