const firebaseConfig = {
        apiKey: "AIzaSyDUx1mRoYdxN9m9YCjaK8yR2gjG7mFcm4k",
        authDomain: "myfirstproject-4d489.firebaseapp.com",
        databaseURL: "https://myfirstproject-4d489-default-rtdb.firebaseio.com",
        projectId: "myfirstproject-4d489",
        storageBucket: "myfirstproject-4d489.appspot.com",
        messagingSenderId: "326563276575",
        appId: "1:326563276575:web:61537dce999920b860b22a"
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