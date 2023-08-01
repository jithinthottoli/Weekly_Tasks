const firebaseConfig = {
    apiKey: "AIzaSyBS3khQGA-IWhB0PwPZhdps-k_3b1yMJ0E",
    authDomain: "contactform-77f96.firebaseapp.com",
    databaseURL: "https://contactform-77f96-default-rtdb.firebaseio.com",
    projectId: "contactform-77f96",
    storageBucket: "contactform-77f96.appspot.com",
    messagingSenderId: "250581735343",
    appId: "1:250581735343:web:e10a09d7a42f1dfc48415a"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    console.log(name, emailid, msgContent);
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };