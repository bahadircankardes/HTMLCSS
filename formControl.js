function checkTcNo(){
    let tc = document.getElementById("Tc");
    if(tc.value.length!= 11){
        let label = document.getElementById("lbltc");
        labelClassList = label.classList;
        labelClassList.add("text-danger");

        let tcspan = document.getElementById("tcwarning");
        tcspan.classList.add("text-danger");
        tcspan.innerText  = "TC No 11 karakter olmalidir.";
    }

    

    // alert("Tc No 11 karakter olmalıdır. Girilen TcNo:" + tc.value);

    // alert(labelClassList);
        
}

//document uzerinde event yakalama

document.addEventListener('keyup', function(e)
{
    console.log(e)
    checkTabPress(e);
});

function checkTabPress() 
{
    let activeElement =  document.activeElement;//Bulunduğum element
    console.log(activeElement);

    // console.log(activeElement.parentElement); // Log the parent element
    // console.log(activeElement.parentElement.children); // Log all children of the parent
        
    // let sonrakiEleman = activeElement.nextElementSibling; // Next sibling element
    // console.log(sonrakiEleman);

    // console.log(activeElement.parentElement.children[0]);

    if (activeElement.value == '' && activeElement.id=='Tc' && activeElement.value.length !=11)  
    {
        activeElement.parentElement.children[1].classList.add("text-danger");   
        activeElement.parentElement.children[1].innerText="TC No 11 Karakter olmalidir.";
    }
    
}

function checkPassword() 
{
    let password = document.getElementById("password");
    let span = document.getElementById("passwordwarning");
    span.classList.add("text-danger");
    if (password.value.length  < 5) 
    {
        span.innerText = "Password 5 karakterden az olamaz";
    }

    else if (password.value.length > 10) 
    {
        span.innerText = "Password 10 karakterden fazla olamaz";

    } 
    
    else 
    {
        
    }
}