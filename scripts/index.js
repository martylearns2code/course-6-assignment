
var pointerRef;           //global variable to access the elements in the document by "name attribute"--used for setting the pointerEvents




//called when user wants to see all the posts from the home page

function allPostsRedirect() {
	 window.location.href = "./html/postslist.html";                             //redirecting to postslist.html
} 

//called when the user wants to create a post from the home page
     
function createPost() {
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="none";                                        //setting pointer-events to none for all the clickable elements on the document
	};
     var createPostmodal = document.getElementById("createPostModal");          //displaying the create a post modal on clicking the create post button
     createPostmodal.style.display="block";	 
     var title = document.getElementById("title");
     title.defaultvalue="Enter title of your post";
     title.value=title.defaultValue; 	 
     var contents = document.getElementById("contents");
     contents.defaultvalue="Enter contents of your post";
     contents.value=contents.defaultValue;	 
} 

//called when user wants to exit from the create post modal
     
function closePostModal(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="auto";                                       //setting the pointer-events to auto
	};
	var createPostmodal = document.getElementById("createPostModal");
    createPostmodal.style.display="none";                                      //closing the create post modal  
}		