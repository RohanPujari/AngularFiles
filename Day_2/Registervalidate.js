function Registervalidate()
{

   alert("hello");
    var user=document.getElementById("name").value;
    var ecode=document.getElementById("code").value;
    if(user == "")
      {
          document.getElementById("user-error").innerHTML="username is required"
     }
     else{
        document.getElementById("user-error").innerHTML=""
     }
     if(ecode == "")
      {
          document.getElementById("pass-error").innerHTML="code is required"
     }
     else{
        document.getElementById("pass-error").innerHTML=""
     }
   var radio=document.getElementsByName("rad").values;
   if(radio=="")
   {
      document.getElementById("radio-error").innerHTML="no domain selected";
   }
   else{
      document.getElementById("radio-error").innerHTML=""
   }

    var selday=document.getElementById("day").value;
   if(selday=="")
   {
      document.getElementById("day-error").innerHTML="nodomain selected";
   }

}