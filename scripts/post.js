var headerElement = document.getElementById("titleOfPost");
var textElement = document.getElementById("contents");
var buttonElement;
var likesForPostCounter=0;

function onLoadOfPage(){
   
}
function editPost(){
	alert("clicked");
	buttonElement=document.getElementById("editAndSave");
	var operation=buttonElement.innerHTML;
	if(operation=="Edit"){
	
	textElement=document.getElementById("contents");
	textElement.readOnly=false;
	textElement.style.borderStyle="solid";
	textElement.style.borderColor="pink";
	headerElement=document.getElementById("titleOfPost");
	headerElement.setAttribute("contentEditable","true");
	headerElement.style.borderStyle="solid";
	headerElement.style.borderColor="pink";
	buttonElement.setAttribute("class","fa fa-save");
	buttonElement.innerHTML="Save";
	}else{
	buttonElement.setAttribute("class","fa fa-edit");
	buttonElement.innerHTML="Edit";
    var updatedTitle= headerElement.innerHTML;
	headerElement.innerHTML=updatedTitle;
    textElement.innerHTML=textElement.value;
    headerElement.setAttribute("contentEditable","false");
    textElement.readOnly=true;
    headerElement.style.borderStyle="none";	
	headerElement.style.borderColor="none";
	textElement.style.borderColor="black";
		
	}
}
