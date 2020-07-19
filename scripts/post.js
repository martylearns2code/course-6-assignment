var titleElement;
var postElement;
var editAndSaveButton;
var likesCounter=0;
var likesButton;
var likesComment;
var comments;
var commentAdded;
var pointerRef;

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
