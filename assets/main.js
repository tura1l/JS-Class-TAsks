// 1-ci tasks
// function  area(radius) {
//    return 3*radius*radius;
// }
// alert(area(Number(prompt("radiusu daxil edin."))));

//2-ci tasks
// function areaOfrectanguler(a,b) {
//    return a*b;
// }
// alert(areaOfrectanguler(prompt("Eni Daxil edin"),prompt("Uzunluqu daxil edin")));

//3-ci tasks
// function areaOfP(a,b,c){
//    return (a*b+a*c+b*c)*2;
// }
// alert(areaOfP(prompt("Eni Daxil edin"),prompt("Uzunluqu daxil edin"),prompt("Hundurluyu daxil edin")));

//4-ci tasks
// var radius=Number(prompt("Zehmet olmasa radiusu daxil edin"));
// function calculator(a,b,c){
//    return ((a+b+c)/2)*radius
// }
// alert(calculator(+prompt("Eni Daxil edin"),+prompt("Uzunluqu daxil edin"),+prompt("Hundurluyu daxil edin")))

//eolyimp task1
// var a = prompt("Zehmet olmasa ededi daxil edin");
// function space(a) {
//    if (a >= 10 && a < 100) {
//       var teklik = a % 10;
//       var onluq = (a - teklik) / 10;
//       result = (onluq + " " + teklik);
//       return result;
//    }
//    else {
//       alert("Eded verilen araliqa daxil deyil")
//    }
// }
// alert(space(a));

//tasks2
// function  pow(a){
//    if (a > 0) {
//       while (a % 2 == 0) {
//         a = a / 2;
//       }
//       if (a==1) {
//             alert("Yes")
//         }
//         else{
//          alert("No")
//         }
// } 
// }
// pow(prompt("a-ni daxil edin"));
// var say=0
// function bolunme(a) {
//    if (a>0 && a<50) {
//       for(a = a; a <= 50; a++){
//        if(a%3 == 0){
//          say++
//          console.log(say);
//        }
//    }
// }
//  else if (a>=50 && a<=100) {
//    for(a = a; a <= 100; a++){
//       if(a%5 == 0){
//          say++
//         console.log(say);
//       }
//  }
//  }
// }
// bolunme(prompt("Zehmet olmasa a-ni daxil edin"))

//Massivin ən kiçik elementini tapan proqram 
//     var array=[7,9,10,11,13];
    
//      function balaca(array) { 
//       var min = array[0] ;
//        for (let i = 1; i < array.length; i++) {
//          if(array[i] < min) {
//             min = array[i];
//            }
//          }    
//          return min;
//        }
// alert(balaca(array))

//Massivin ən boyuk elementini tapan proqram 
  // var array=[2,5,7,8,9009,45]
  // function max(array) {
  //   var max=array[0];
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i]>max) {
  //       max=array[i];
  //     }
  //   }
  //   return max;
  // }
  // alert(max(array))

  //Massivin cut yerde duran elementlerinin cemi
  // var array=[1,2,3,4,5,6,7,8]  
  // var cut;
  // var tek;
  // function sum(array) {
  //   var max=array[1];
  //   var min=array[0];
  //   for (let i = 1; i < array.length; i++) {
  //     if (i%2==0 && array[i] < min ) {
  //         min = array[i];
  //     }  
  //     else if (i%2 !=0 && array[i]>max) {
  //       max=array[i]
  //     } 
  //   }
  //   return max+min ;
  // }
  // alert(sum(array))

  //Verilmis ededin reqemlerinin ededi ortadini tapan funksiya
  // function average(num) {
  //   var say=0
  //   var cem=0
  //   while (num>0) {
  //     var teklik = num % 10;
  //     num = (num - teklik) / 10;
  //     var cem=cem+teklik
  //     say++
  //   } 
  //   return cem/say
  // }
  // alert(average(+prompt("Zehmet olmasa ededi daxil edin")))

  //Daxil edimis string deyerinde ardicil a ve l charlarinin olub olmadigini tapan proqram yazin.
  // function string(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i]=="a" && str[i+1]=="l") {
  //     return true
  //     }
  //   }
  //   return false
  // }
  // alert(string(prompt("Zehmet olmasa soz daxil edin.")))

  //Massivin ededlerin siralamaq
  // var array=[3,76,8,3,6,9,1] ;
  
  // function sortOfNumber(array){
  //   var yoxlama=array[0]
  //   for (var i = 0; i < array.length; i++) {
  //     for (var j = i+1; j < array.length; j++)
  //     {
  //       if (array[i]>array[j]) {
  //         yoxlama=array[i]
  //         array[i]=array[j];
  //         array[j]=yoxlama;
  //       }
  //     }
      
  //   }
  //   return array;
  // }
  // alert(sortOfNumber(array))


  //Massivden elemnt silmek
  // let obj = {
  //   arr : [1,5,7,98,89,4,2,234,6,8,94],
  //   remove : function() {
  //     return this.arr[this.arr.length--]
  //   }
  // }
  // obj.remove()
  // alert(obj.arr);