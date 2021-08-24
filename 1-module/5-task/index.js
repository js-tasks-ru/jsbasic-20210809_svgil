function truncate(str, maxlength) {
 let str = prompt(`Введите строку`,``);
 let maxlength = +prompt(`Введите максимальную длину ` , ``)
 if(str == undefined || str == ``){
   alert(`Строка не введена`);
 }else{
   truncate();
 }
 function truncate() {
   if (str.length >= maxlength) {
     return alert(str.slice(0 , maxlength-1) + `...`);
   }else{
     return alert(str);
   }
 }
}
