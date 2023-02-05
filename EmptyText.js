function emptyText(){
    let pwd=document.forms["loginform"]["pwd"].value;
    let email=document.forms["loginform"]["email"].value;
       if(pwd=="" || email==""){
        alert("Both email and password are mandatory");
        //return false;
        location.replace;
       }
       else{
        alert("Login successful");
       window.location.href="D:\Blog_Assignment_Khyati\index.html";
       }
    
}

function blogSubmit(){
    var ask = window.alert("Successfully submitted");
    if (ask) {
        window.location.href = "D:/Blog_Assignment_Khyati/index.html";
    }
    
}

function createUser(form){
    
    let pwd=form.pwd.value
    let cpwd=form.cpwd.value
    
    if(pwd!=cpwd){
        alert("Both passwords should match");
        
    }
    else{
        alert("User created succesfully");
        window.location.href="D:\Blog_Assignment_Khyati\index.html";
    }
}
