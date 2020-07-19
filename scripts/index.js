
var pointerRef;

function allPostsRedirect() {
	 window.location.href = "./html/postslist.html";
}      
function createPost() {
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
		item.style.pointerEvents="none";
	};
     var createPostmodal = document.getElementById("createPostModal");
     createPostmodal.style.display="block";	 
      
}      
function closePostModal(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
		item.style.pointerEvents="auto";
	};
	var createPostmodal = document.getElementById("createPostModal");
    createPostmodal.style.display="none";  
}		