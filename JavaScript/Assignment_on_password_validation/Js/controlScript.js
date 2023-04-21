const password = prompt("Enter your password");

//Password validation program
if(password.length < 8 || password.length > 20){                        // Regular Exp. for Symbol 
    console.log("Password must be between 8 to 20 chars");  
}else if(!/\W/.test(password)){                                          // Regular Exp. for Symbol 
    console.log("Password must have a symbol."); 
}else if(!/\d/.test(password)){                                         // Regular Exp. for number              
    console.log("Password must have one number.")                       
}else if(!/[a-z A-Z]/.test(password)){                                  // Regular Exp. for letter
    console.log("Password should have atleast one letter.");    
}else if(!/[A-Z]/.test(password)){                                      // Regular Exp. for capital letter
    const password=prompt("Password must have one capital letter (A-Z)");     
    console.log("Now your password is valid."); 

}else{
    console.log("Your password is valid.");
}
