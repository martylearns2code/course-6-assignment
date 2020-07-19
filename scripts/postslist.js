var newNode;
var parent;
var pointerRef;
    


function onLoadOfPage(){ 
     newNode=document.createElement('p');
     newNode.setAttribute("id","postClicked");
     parent=document.getElementById('rUSure');
     parent.appendChild(newNode);
     newNode.style.display="none";
     const listItems = document.getElementById('flex').children;
     const listArray = Array.from(listItems);
     listArray.forEach((item) => {
         var post=item.getAttribute("id");
         var x =document.getElementById(post);
         if(post==="post5"){
            var x=document.getElementById(post);
            x.style.margin="10px 300px 10px 300px";
         }  
    });	
}

function deletePost(id){
 // alert("clicked");
  pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
		item.style.pointerEvents="none";
	}; 
  newNode.innerHTML=id;
  var delModal=document.getElementById('deleteModal');
  //var hidePage=document.getElementById('hidePage');
 // hidePage.style.display="block"; 
  delModal.style.display="block";  
}

function deleteConfirm(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
		item.style.pointerEvents="auto";
	};
//  alert("clicked");
  var p = document.getElementById("postClicked");
//  alert(p.innerHTML);
  var postToDelete=document.getElementById(p.innerHTML);
  var delModal=document.getElementById('deleteModal');
  delModal.style.display="none";
  postToDelete.style.display="none";
  if(p!=="post5"){
    var r= document.getElementById("post5");
    r.style.margin="10px 10px 10px 10px";
  };
  const listItems = document.getElementById('flex').children;
  const listArray = Array.from(listItems);
  var ctr=0;
  var lastPostOnDisplay="post";  
  listArray.forEach((item) => {
     var k=item.getAttribute("id");
     var x =document.getElementById(k);
     if(x.style.display==="block"){
        ctr=ctr +1;
        lastPostOnDisplay=k;
     }   
  
   });
   if (ctr===3){
       var z=document.getElementById(lastPostOnDisplay);
       z.style.margin="10px 300px 10px 300px";
   }; 
   if (ctr===2){
       var b=document.getElementById(lastPostOnDisplay);
       b.style.margin="10px 10px 10px 10px";
   }; 
   if (ctr===1){
       var m=document.getElementById(lastPostOnDisplay);
       m.style.margin="10px 300px 10px 300px";
   }; 
}
function deleteNot(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
		item.style.pointerEvents="auto";
	};
	var l = document.getElementById("deleteModal");
	l.style.display="none";
	const listItems = document.getElementById('flex').children;
    const listArray = Array.from(listItems);
    listArray.forEach((item) => {
         var post=item.getAttribute("id");
         var x =document.getElementById(post);
		 if(post==="post5"){
         x.style.display="block";
		 x.style.margin="10px 300px 10px 300px";
		 }else{
		 x.style.display="block";
         x.style.margin="10px 10px 10px 10px"; 		 
		 };
    });	
}
function postDetails(){
	window.location.href = "../html/post.html";
	
}
