// business logic

//global variable...
var sentanceLower= [];


// Logic for WORDS begin with VOWEL...
var beginVowel= function(sentance){
  // var sentanceLower= [];
  // sentanceLower= sentance.toLowerCase();
  var result;
  // if (sentanceLower[0]==='a' || sentanceLower[0]==='e' || sentanceLower[0]==='i' || sentanceLower[0]==='o' || sentanceLower[0]==='u'){
  result= sentance.concat('ay');
  return result;
// }else{
//   debugger;
//   result= beginconsonant(sentance);
//   return result;
// }
}
//Logic for words begin with consonants....
var beginconsonant= function(sentance){
  // sentanceLower= sentance.toLowerCase();
  var result, firstHalf, i, secHalf, pointer;
  firstHalf= [];
  secHalf=[];

 for (i=0; i< sentance.length; i=i+1)
  {

    if (sentanceLower[i]!=='a' && sentanceLower[i]!=='e' && sentanceLower[i]!=='i' && sentanceLower[i]!=='o' && sentanceLower[i]!=='u'){
      pointer=i;
    }else{

  break;
}
}
pointer= pointer+1;

for (i = 0; i < pointer; i++) {
  firstHalf.push(sentance[i]);
// alert(firstHalf);
}
for (i = pointer; i < sentance.length; i++) {
  secHalf.push(sentance[i]);
// alert(secHalf);
}
firstHalf=firstHalf.join("");
secHalf=secHalf.join("");
result=secHalf.concat(firstHalf + "ay");
// alert(result);
// result=result.join("");
return result;
}


//Logic for QU at the beginning of the words
if (sentance []

)

var beginQU = function(sentance) {

}







// user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var sentance = ($("input#sentance").val());
    sentanceLower= sentance.toLowerCase();
    if (sentanceLower[0]==='a' || sentanceLower[0]==='e' || sentanceLower[0]==='i' || sentanceLower[0]==='o' || sentanceLower[0]==='u'){
    result=beginVowel(sentance);
    return result;
  }else if (sentanceLower[0]==="q" && sentanceLower[1]==="u") {
    result=beginQU(sentance);
    return result;
  }else{
    result=beginconsonant(sentance);
    return result;
  }
    var result = beginVowel(sentance);

    $(".sentance").text(sentance);

    $(".result").text(result);

    $("#output").show();
  });
});
