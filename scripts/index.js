function allPostsRedirect() {
	 window.location.href = "./html/postslist.html";
}      
function createPost() {
     var createPostmodal = document.getElementById("createPostModal");
     createPostmodal.style.display="block";	 
      
}      
function closePostModal(){
	var createPostmodal = document.getElementById("createPostModal");
    createPostmodal.style.display="none";  
}		