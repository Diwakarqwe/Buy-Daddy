            
               function validateForm(){
                 var name=document.myform.pname.value;
                 var number=document.myform.pnumber.value;
                 var mail=document.myform.pemail.value;
                 var dob=document.myform.pdob.value;
                 
                 
                 if(name==null || name=="")
                 {
                    alert("Name Cannot Be Blank");
                    return false;
                 }

                 else if(number.length<10)
                 {
                    alert("Number Must Be Atleast 10 Characters Long");
                    return false;
                 }

                 if(mail==null || mail=="")
                 {
                  if(mail==null || mail=="")
                  {
                   alert("Enter Your Valid Mail ID And Tap The Verify Button");
                   return false;
                  }
                 }
                  
                 if(dob==null || dob=="")
                 {
                  if(dob==null || dob=="")
                 {
                  alert("enter the DOB");
                  return false;
                 }
                } 

                 else 
                 {
                  alert(name +" "+ "Thanks For Been Our Customer Happy Shopping");
                  return true;
                 }
            
               }

               function validateVerification(){
                  var mail=document.myform.pemail.value;

                  if(mail==null || mail=="")
                  {
                     alert("enter the valid mail ID to verify");
                     return flase;
                  }
                  
                  else (mail.match(/^([a-z A-Z 0-9]+)([@]+)([a-z A-Z]+)([\.])([a-z] {2,5})$/))
                  {
                     alert("Your Mail Has Been Verified");
                     return true;
                  }
               }


               function validateLogin(){
                  var name=document.myform1.loginname.value;
                  var password=document.myform1.ppassword.value;

                  if(name==null || name=="")
                  {
                     alert("Enter a Valid User ID or Name");
                     return false;
                  }

                  else if(password.length<6)
                  {
                     alert("Enter a Valid Password");
                     return false;
                  }

                  else
                  {
                     alert("You Have  Successfully Login");
                  }
               }


              
               
               
    
         