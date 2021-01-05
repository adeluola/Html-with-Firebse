var config = {
    apiKey: "AIzaSyA3s49AlP5o5kOVQ7gaZRWshh_j9PXFTdE",
      authDomain: "loginweb-70380.firebaseapp.com",
      databaseURL: "https://loginweb-70380-default-rtdb.firebaseio.com",
      projectId: "loginweb-70380",
      storageBucket: "loginweb-70380.appspot.com",
      messagingSenderId: "361073698112",
  };
  firebase.initializeApp(config);
  
  // Reference users collection
  var usersRef = firebase.database().ref('users');


  
   function readFilteredIssues() { 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
   usersRef.orderByChild('email').equalTo(email).on("value", function(snapshot) 
   {
    snapshot.forEach(snap => {
      const user = snap.val();
      if(email != user.email)
      {
        document.getElementById('err').style.display = 'block';
        document.getElementById("err").innerHTML = "Invalid Email or Password";
        setTimeout(function () {
          document.getElementById('err').style.display = 'none';
        }, 2000);

        return false;
      }
     if(password == user.password)
     {
        window.location='home.html';
     }
    else{
        document.getElementById('err').style.display = 'block';
        document.getElementById("err").innerHTML = "Invalid Email or Password";
        setTimeout(function () {
          document.getElementById('err').style.display = 'none';
        }, 2000);

        return false;
    }
    })
   }
   
   
    )

}
  
  
    // The rest of the code is the construction of the HTML elements we want rendered on the DOM

  