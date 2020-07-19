//global variables for accessing various elements in the document

var titleElement;                                       //to access the title of the document which is a header in this case
var postElement;                                        //to access the post element
var editAndSaveButton;                                  //to access the edit and save btn
var likesCounter=0;                                     //to keep track of number of likes
var likesButton;                                        //to access the likes btn
var likesComment;                                       //to access the para that is the comment of the number of likes
var comments;                                           //to access the comments text area
var commentAdded;                                       //to keep track of comment added
var pointerRef;                                         //to set the pointer events


//called when the user wants to edit the selected post and clicks on the edit btn
//makes the title of the post and the contents of the post editable
//replaces the edit btn with the save btn
//disables the sign-up and sign-in btn while in save mode
//when the user clicks on save,updates the title and contents of the post
//displays the edit btn in place of save btn
//makes the signup and sign in btn enabled again

function editPost(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		if(item.id=="sign-Up-Button"|| item.id=="sign-In-Button"){
		item.style.pointerEvents="none";
	};
	};
	editAndSaveButton=document.getElementById("editAndSave");
	var operation=editAndSaveButton.innerHTML;
	if(operation=="Edit"){
	
	postElement=document.getElementById("contents");
	postElement.readOnly=false;
	postElement.style.borderStyle="solid";
	postElement.style.borderColor="pink";
	titleElement=document.getElementById("titleOfPost");
	titleElement.setAttribute("contentEditable","true");
	titleElement.style.borderStyle="solid";
	titleElement.style.borderColor="pink";
	editAndSaveButton.setAttribute("class","fa fa-save");
	editAndSaveButton.innerHTML="Save";
	}else{
	editAndSaveButton.setAttribute("class","fa fa-edit");
	editAndSaveButton.innerHTML="Edit";
    var updatedTitle= titleElement.innerHTML;
	titleElement.innerHTML=updatedTitle;
    postElement.innerHTML=postElement.value;
    titleElement.setAttribute("contentEditable","false");
    postElement.readOnly=true;
    titleElement.style.borderStyle="none";	
	titleElement.style.borderColor="none";
	postElement.style.borderColor="black";
	for(let item of pointerRef){
		if(item.id=="sign-Up-Button"|| item.id=="sign-In-Button"){
		item.style.pointerEvents="auto";
	    };
	};
		
	}
}

//called when the user likes a post displayed
//manages the likes btn and likes comment elements and how they are displayed
//keeps track of number of likes and displays the same

function likesForPost(){
	if(likesCounter==0){
		likesCounter=likesCounter+1;
		likesButton=document.getElementById("likesButton");
		likesButton.innerHTML="Liked";
		likesComment=document.getElementById("likesComment");
		likesComment.innerHTML="1 person likes this!";
		
	}else{
		likesCounter = likesCounter + 1;
		likesComment.innerHTML= likesCounter + " people like this!";
		
	}
		
}

//called when the user comments on a post
//displays the comments added by the user dynamically on the page in the comments section
//displays the comments with the latest on top of the section

function commentsOnPost(){
	comments = document.getElementById("comments");
	var commentAdded=document.createElement('p');
	commentAdded.style.backgroundColor="white";
	commentAdded.innerHTML=comments.value;
	commentAdded.paddingBottom="15px";
	commentAdded.paddingTop="15px";
	var addComments=document.getElementById("addComments");
	addComments.style.borderStyle="groove";
	addComments.style.borderColor="#ebebe0";
	addComments.appendChild(commentAdded);
    comments.defaultValue="Leave a comment...";
	comments.value=comments.defaultValue;
	
	
}
