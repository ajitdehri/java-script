function register(){
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const email = document.getElementById("email").value;


    if (validation(name, roll, email)) {

        const table = `<tr>
              <td>${name}</d>
              <td>${roll}</d>
              <td>${email}</d>
              </tr>`
        document.getElementById("tableValue").innerHTML += table;

         refressForm();

    }

}


function validation(name, roll, email) {

    if (name == "" && roll=="" &&email=="") {
      document.getElementById("name").setAttribute("style", "border:2px solid red");
        document.getElementById("roll").setAttribute("style", "border:2px solid red");
         document.getElementById("email").setAttribute("style", "border:2px solid red");
         return false;

   }
     return true;
        
}

function refressForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("email").value = "";


    document.getElementById("name").removeAttribute("style");
    document.getElementById("roll").removeAttribute("style");
    document.getElementById("email").removeAttribute("style");


 }


