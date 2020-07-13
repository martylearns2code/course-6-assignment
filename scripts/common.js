// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function signUp(){
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
	var signUpmodal = document.getElementById("signUpModal");
    signUpmodal.style.display="none";  
}
function signIn(){
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
	var signInmodal = document.getElementById("signInModal");
    signInmodal.style.display="none";  
}
function parentDisable(){
	var signUpmodal = document.getElementById("signUpModal");
	if(signUpmodal.style.display==="block"){
	   signUpmodal.focus();
   }
   var signInmodal = document.getElementById("signInModal");
   if(signInmodal.style.display==="block"){
	   signInmodal.focus();
   }
}
