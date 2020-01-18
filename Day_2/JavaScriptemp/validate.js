function validateform()
{
      var user=document.getElementById("username").value;
      var pass=document.getElementById("password").value;

      if(user != "" || pass !="")
      {

          document.getElementById("frm").submit();
     }
    else{

        alert("user name pass sholud not be empty")
    }
}