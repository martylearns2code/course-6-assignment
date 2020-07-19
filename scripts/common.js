
     
 var pointerRef;      //variable to access the elements in the document by "name attribute"--used for setting the pointerEvents

//called when the user wants to sign up by clicking on the sign-up button from homepage and all the other html pages in the application
//disables the pointerEvents for all the clickable elements on the page concerned
//displays the Sign-up-modal 
    
function signUp(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="none";
	};
    var signInmodal = document.getElementById("signInModal");
    signInmodal.style.display="none";  
    var signUpmodal = document.getElementById("signUpModal");
    signUpmodal.style.display="block";
    var name = document.getElementById("name-signup");
    name.defaultvalue="Enter your name";    
    var username = document.getElementById("username-signup");
    username.defaultvalue="Enter your username";    
    var pword = document.getElementById("password-signup");
    pword.defaultvalue="Enter your password";    
    var confirmpw = document.getElementById("confirmpw-signup");
    confirmpw.defaultvalue="Re-enter your password";
   
} 

//called when the user wants to exit from the sign-up-modal
//enables pointerEvents of the elements of the page concerned

  
function closeSignUpModal(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="auto";
	};
	var signUpmodal = document.getElementById("signUpModal");
    signUpmodal.style.display="none";  
}

//called when the user wants to sign in by clicking on the sign-in button from homepage and all the other html pages in the application
//disables the pointerEvents for all the clickable elements on the page concerned
//displays the Sign-in-modal 

function signIn(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="none";
	};
   var signUpmodal = document.getElementById("signUpModal");
   signUpmodal.style.display="none";  
   var signInmodal = document.getElementById("signInModal");
   signInmodal.style.display="block";
   var username = document.getElementById("username-signin");
   username.defaultvalue="Enter your username";    
   var pword = document.getElementById("password-signin");
   pword.defaultvalue="Enter your password";    
      
}

//called when the user wants to exit from the sign-in-modal
//enables pointerEvents of the elements of the page concerned

function closeSignInModal(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		item.style.pointerEvents="auto";
	};
	var signInmodal = document.getElementById("signInModal");
    signInmodal.style.display="none";  
}

