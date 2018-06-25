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
  fun_career(data.CareerObjective);
  fun_education(data.education);
  fun_achieve(data.Achievments);
  fun_tech(data.TechnicalSkills);

});
var div2=document.getElementById("child2");
function fun_career(career){
  var list3=document.createElement("h2");
  list3.textContent="CareerObjective";
  div2.appendChild(list3);
  var listt=document.createElement("hr");
  div2.appendChild(listt);

  var list=document.createElement("ul");
  div2.appendChild(list);
  var list6=document.createElement("p");
  list6.textContent=career.info;
  list.appendChild(list6);
  var listts=document.createElement("hr");
  div2.appendChild(listts);

}
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
function fun_achieve(ach)
{
  var hori=document.createElement("h2");
  hori.textContent="Achievments";
  div2.appendChild(hori);
  var head=document.createElement("hr");
  div2.appendChild(head);

  var list=document.createElement("ul");
  div2.appendChild(list);

  for(var i=0;i<ach.length;i++){
    var listite=document.createElement("li");
    listite.innerHTML=ach[i].name;
    list.appendChild(listite);

}
}
function fun_tech(skills)
{
  var horiz=document.createElement("h2");
  horiz.textContent="Technical Skills";
  div2.appendChild(horiz);
  var heads=document.createElement("hr");
  div2.appendChild(heads);
  var tr="";
  var table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0;i<skills.length;i++)
  {
    tr+="<tr><td>"+skills[i].name+"</td><td>"+skills[i].Data+"</td></tr>"
  }
  table.innerHTML=tr;
}
