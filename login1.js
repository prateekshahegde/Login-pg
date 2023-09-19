function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="prat" && password=="galaxy")
    {
      alert("login succesful");
      return false;
    }
    else{
        alert("login failed ");
    }
}