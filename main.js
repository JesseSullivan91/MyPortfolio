    function formValidation  ()
    {

    var name = document.forms["RegForm"]["name"];
    var phone = document.forms["RegForm"]["phone"];                
    var email = document.forms["RegForm"]["email"];
    var message = document.forms["RegForm"]["message"];    

    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

     if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 


    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (message.value == "")                 
    { 
        window.alert("Please leave a message."); 
        message.focus(); 
        return false; 
    } 

      if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 

    return true; 
}