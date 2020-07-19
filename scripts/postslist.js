//global variables to access various elements in the document at runtime

var newNode;
var parent;
var pointerRef;                    //variable to access the elements in the document by "name attribute"--used for setting the pointerEvents
    

//this function is executed on page load..intializes some of the global variables
//positions the fifth post in the center of the last row of the flex

function onLoadOfPage(){ 
     newNode=document.createElement('p');                //created a "para" child elemnt to pass on the post-id to be deleted to the deletemodal
     newNode.setAttribute("id","postClicked");   
     parent=document.getElementById('rUSure');
     parent.appendChild(newNode);                                     // child para element is appended to parent which is a element on delete modal
     newNode.style.display="none";                                   //the para element is invisible
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

//function called from the delete button on each of the post in the flex box
//pointer events are used to disable all the clickble elements in the parent window
//delete modal asking for confirmation to delete is displayed

function deletePost(id){
 
    pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="none";
	}; 
    newNode.innerHTML=id;
    var delModal=document.getElementById('deleteModal');
    delModal.style.display="block";  
}

//function invoked when user confirms to delete the selected post
//pointer events are set to normal to enable clicking on various elements of the form
//selected post deleted after the confirmation
//delete modal window closed
//remaining posts are rearranged such that if there are odd number of posts left
//then the last one is centered in the middle of the last row of the flex


function deleteConfirm(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="auto";                         //pointer events set to auto
	};
    var p = document.getElementById("postClicked");
    var postToDelete=document.getElementById(p.innerHTML);      //post to be deleted
    var delModal=document.getElementById('deleteModal');
    delModal.style.display="none";
    postToDelete.style.display="none";                          //deleting the post
    if(p!=="post5"){
       var r= document.getElementById("post5");
       r.style.margin="10px 10px 10px 10px";
    };
    const listItems = document.getElementById('flex').children;   //fetching the posts from the flex parent
    const listArray = Array.from(listItems);
    var ctr=0;
    var lastPostOnDisplay="post";  
    listArray.forEach((item) => {                                  //looping thru all posts which are still being displayed
       var k=item.getAttribute("id");
       var x =document.getElementById(k);
       if(x.style.display==="block"){
          ctr=ctr +1;
          lastPostOnDisplay=k;
       }   
  
   });
   if (ctr===3){
       var z=document.getElementById(lastPostOnDisplay);             //making appropriate changes to the post locations so that they are displayed properly
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

//function invoked when user wants not to delete the selected post
//pointer events set to normal
//delete modal window closed
//all the posts displayed as usual 

function deleteNot(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="auto";
	};
	var l = document.getElementById("deleteModal");
	l.style.display="none";
	const listItems = document.getElementById('flex').children;
    const listArray = Array.from(listItems);
    listArray.forEach((item) => {                                 //loops thru all the  post flex elements
         var post=item.getAttribute("id");
         var x =document.getElementById(post);
		 if(post==="post5"){
         x.style.display="block";                                //if 5th post then sets it to the middle of the last row 
		 x.style.margin="10px 300px 10px 300px";
		 }else{
		 x.style.display="block";                                //else normal positioning for the first two rows
         x.style.margin="10px 10px 10px 10px"; 		 
		 };
    });	
}

//function to load the post.html when the user wants to go to the post-details page
//on clicking the ellipsis dots on the individual post elements in the flex

function postDetails(){
	window.location.href = "../html/post.html";
	
}
