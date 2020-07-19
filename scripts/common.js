// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
     
 var pointerRef;
    
function signUp(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
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
  
function closeSignUpModal(){
	alert("clicked");
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
		item.style.pointerEvents="auto";
	};
	var signUpmodal = document.getElementById("signUpModal");
    signUpmodal.style.display="none";  
}
function signIn(){
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
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
function closeSignInModal(){
	alert("clicked");
	pointerRef=document.getElementsByName("pointerRef");
	for(let item of pointerRef){
		alert(item.id);
		item.style.pointerEvents="auto";
	};
	var signInmodal = document.getElementById("signInModal");
    signInmodal.style.display="none";  
}

