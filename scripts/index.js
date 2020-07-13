function allPostsRedirect() {
	 window.location.href = "C:/Users/hp/course-6-assignment/html/postslist.html";
}      
function createPost() {
     var createPostmodal = document.getElementById("createPostModal");
     createPostmodal.style.display="block";	 
      
}      
function closePostModal(){
	var createPostmodal = document.getElementById("createPostModal");
    createPostmodal.style.display="none";  
}		