  let fnameError = document.getElementById("fname-error")
    let lnameError = document.getElementById("lname-error")
    let emailError = document.getElementById("email-error")
    let numberError = document.getElementById("number-error")
    let hometowError = document.getElementById("hometown-error")
    let occupError = document.getElementById("occup-error")


    // const createImage=document.createElement("img")
    // createImage.setAttribute("img", "circle-check-soli-full.svg")
    // createImage.style.height="25px"
    // createImage.style.width="25px"

    let isfnameCorrect=false, islnameCorrect=false, isemailCorrect=false, isnumberCorrect=false, ishomeTownCorrect=false, isOccupCorrect=false;

    let selctValue = document.querySelector("form")


    const emailCheck = (a) => {
      return /^\S+@\S+\.\S+$/.test(a)
    }

    const NameCheck = (e) => {
      return /^[a-zA-Z]{4,}$/g.test(e)
    }

    const showError = ((Dis) => {
      Dis.style.display = "contents";
      Dis.style.color = "red"
    })


    const ageCheck = (a => {
      if (a < 100) {
        return false;
      }
    })



    const buttonClick=(event=>{
      console.log("Button is clicked.");
    })


    const selectFunction=(e)=>{
           if (e.target.id == 'fName') {
        if (!(NameCheck(e.target.value))) {
          isfnameCorrect=false;
          showError(fnameError);
        }
        else {
          fnameError.style.display = "none"
          isfnameCorrect=true;
        } 
      }
      if (e.target.id == 'lName') {
        if (!(NameCheck(e.target.value))) {
          islnameCorrect=false;
          showError(lnameError);
        }
        else {
          islnameCorrect=true;
          lnameError.style.display = "none"
        }
      }



      if (e.target.id == "Email") {
        if (!(emailCheck(e.target.value))) {
          isemailCorrect=false;
          showError(emailError);
        }
        else {
          isemailCorrect=true;
          emailError.style.display = "none"
        }
      }
      if (e.target.id == "Age") {
        if (e.target.value > 100 || e.target.value < 14) {
          isnumberCorrect=false;
          showError(numberError);
        }
        else {
          isnumberCorrect=true;
          numberError.style.display = "none"
        }
      }
      if (e.target.id == "HomeTown") {
        if (!(NameCheck(e.target.value))) {
          ishomeTownCorrect=false;
          showError(hometowError);
        }
        else {
          ishomeTownCorrect=true;
          hometowError.style.display = "none"
        }
      }

      if (e.target.id == "Occupation") {
        if (!(NameCheck(e.target.value))) {
          isOccupCorrect=false;
          showError(occupError);
        }
        else {
          isOccupCorrect=true;
          occupError.style.display = "none"
        }
      }
    }

    selctValue.addEventListener('keyup',(e)=>selectFunction(e) )
    


    const checkAllDone=(e, storeEvent)=>{

      if(isfnameCorrect==false){
        showError(fnameError)
        return;
      }
      if(lnameError==false){
        showError(lnameError)
        return;
      }
      if(isemailCorrect==false){
        showError(emailError)
        return;
      }
      if(isnumberCorrect==false){
        showError(numberError)
        return;
      }
      if(ishomeTownCorrect==false){
        showError(hometowError)
        return;
      }
      if(isOccupCorrect==false){
        showError(occupError)
        return;
      }

      if(isfnameCorrect==true && islnameCorrect==true && isemailCorrect==true && isnumberCorrect==true && ishomeTownCorrect==true && isOccupCorrect==true){
          alert("You're successfuly completed a form.")
          location.reload()
      }
    }

    selctValue.addEventListener('click', (e)=>{
      let storeEvent=e;
      if(e.target.tagName=='BUTTON'){
        checkAllDone(e.target, storeEvent)
      }
    })

    

