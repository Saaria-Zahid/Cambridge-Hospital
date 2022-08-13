
var fname = ""; 
var lname ="";
document.getElementById("error").innerText ="Please Fill Fileds First!"
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("submit").style.visibility = "hidden";

    document.getElementById("fname").addEventListener("keyup",function(){
         
      var newname = document.getElementById("fname").value;
       console.log(newname.length)
      if(newname.length>=3){

          document.getElementById("submit").style.visibility = "visible";
          document.getElementById("error").innerText =""
        }
        else{
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("error").innerText ="Please Fill Fields First!"
              
        } 
    })
    document.getElementById("lname").addEventListener("keyup",function(){
        var newname = document.getElementById("lname").value;
        console.log(newname.length)
       if(newname.length>=3){
 
           document.getElementById("submit").style.visibility = "visible";
           document.getElementById("error").innerText =""
         }
         else{
            document.getElementById("submit").style.visibility = "hidden";
            document.getElementById("error").innerText ="Please Fill Fields First!"
         } 
     })

    document.getElementById("submit").addEventListener("click" , function(e){
   e.preventDefault();
    fname  = document.getElementById("fname").value;
     lname  = document.getElementById("lname").value;
    document.getElementById("modalp").innerText =fname + " " + lname + " " + "please Confirm ! You want to submit this form ?"

})

document.getElementById("ok").addEventListener("click" , function(){
    window.open("feedback.html","_self")
})



function okclick (){
    document.getElementById("ok")
    alert(fname + " " + lname + " " + "Your Form is Submitted Sucsessfully")
}
