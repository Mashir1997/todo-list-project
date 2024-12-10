let todoinput = document.getElementById("todo");
let text = document.querySelector(".text");
function todoadd(){
  if(todoinput.value==""){
    alert("please add some task")
  }
  else{
    let list = document.createElement("ul");
    list.innerHTML = `${todoinput.value}<i style="font-size:24px" class="fa">&#xf014;</i>`;
    text.appendChild(list);//show 
    todoinput.value = "";
    list.querySelector("i").addEventListener("click",remove);
    function remove(){
    list.remove();//remove the item from list
  }
    
  }
}