// //when dropdown button is clicked toggles a class named show
function dropFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
}

//if the user clicks anywhere on the page the dropdown content disappears
window.onclick = function(event) {
    if  (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//When the user hits submit checks to see if name/mail/or message is empty 
//If any box is empty an error message is shown
//When all parameters are met displays a confirmation message
function validation(theForm){
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var feedback = document.getElementById("feedback").value;
        if( name ===''){
            alert("Please fill in your Name!");
            return false;
        }
        else if( email ===''){
            alert("Please fill in your E-mail!");
            return false;
        }
        else if( feedback ===''){
            alert("Please fill in your Message!");
            return false;
        }
        else{
            alert('Thank you, ' + name + ' your message: "' + feedback + '" has been sent to Betty Blu!')
            return true;
        }
}
