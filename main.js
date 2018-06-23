function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status==200)
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data= JSON.parse(text);
  console.log(data);
  fun_education(data.education);
});
var div2=document.getElementById("child2");
function fun_education(edu){

  var lis=document.createElement("h2");
  lis.textContent="Educational Qualifications";
  div2.appendChild(lis);
  var lists=document.createElement("hr");
  div2.appendChild(lists);

  //lis.hconte="educational qualifications";
var list=document.createElement("ul");
div2.appendChild(list);

for(var i=0;i<edu.length;i++){
  var listItem=document.createElement("li");

  listItem.textContent=edu[i].degree;
  list.appendChild(listItem);

  var listItem2=document.createElement("ul");
  listItem2.textContent=edu[i].Institute;
  list.appendChild(listItem2);

  var listItem3=document.createElement("ul");
  listItem3.textContent=edu[i].data;
  list.appendChild(listItem3);




}
}
