// Initialize Firebase (ADD YOUR OWN DATA)
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

// Listen for form submit
//document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm() {
  //e.preventDefault();

  // Get values
  var Fname = getInputVal('Fname');
  var Lname = getInputVal('Lname');
  var email = getInputVal('email');
  var password = getInputVal('password');

  if (email === "") {
    document.getElementById('err').style.display = 'block';
    document.getElementById("err").innerHTML = "email is empty!";
    setTimeout(function () {
      document.getElementById('err').style.display = 'none';
    }, 2000);
    return false;
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  if (validateEmail(email)) {
  } 
  else {
    document.getElementById('err').style.display = 'block';
    document.getElementById("err").innerHTML = "Enter valid email!";
    setTimeout(function () {
      document.getElementById('err').style.display = 'none';
    }, 2000);
    return false;
  }

  if (password.length < 6) {
    document.getElementById('err').style.display = 'block';
    document.getElementById("err").innerHTML = "Password must be more than 6!";
    setTimeout(function () {
      document.getElementById('err').style.display = 'none';
    }, 2000);
    return false;
  }

  if (Fname === "") {
    document.getElementById('err').style.display = 'block';
    document.getElementById("err").innerHTML = "fname";
    setTimeout(function () {
      document.getElementById('err').style.display = 'none';
    }, 2000);
    return false;
  }
  if (Lname === "") {
    document.getElementById('err').style.display = 'block';
    document.getElementById("err").innerHTML = "lname";
    setTimeout(function () {
      document.getElementById('err').style.display = 'none';
    }, 2000);
    return false;
  }

  //   var email = document.getElementById('email').value;

  //  usersRef.orderByChild('email').equalTo(email).on("value", function(snapshot) 
  //  {
  //   snapshot.forEach(snap => {
  //     const user = snap.val();
  //    if(email == user.email)
  //    {
  //     document.getElementById('err').style.display = 'block';
  //     document.getElementById("err").innerHTML = "Email already exist";
  //     setTimeout(function(){
  //       document.getElementById('err').style.display = 'none';
  //     },2000);
  //     return false;
  //    }
  //   }
  //   )


  // Save message
  saveUser(Fname, Lname, email, password);
  // Show alert
 
 
  document.cookie = "fname =" + Fname;
  // console.log(Fname);

  window.location='home.html';
}



// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveUser(Fname, Lname, email, password) {
  var newUserRef = usersRef.push();
  newUserRef.set({
    Firstname: Fname,
    Lastname: Lname,
    email: email,
    password: password,
  });
}

function logout(){
  document.cookie = "fname = ;";
  console.log("logout");
  window.location = 'Register.html';
}