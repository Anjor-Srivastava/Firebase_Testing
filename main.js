//firebase configration
var firebaseConfig = {
    apiKey: "AIzaSyDWiILbJQB-olStJWTPKG9MaP3HboN2P84",
    authDomain: "tic-tac-toe-6b941.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-6b941-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-6b941",
    storageBucket: "tic-tac-toe-6b941.appspot.com",
    messagingSenderId: "334750067513",
    appId: "1:334750067513:web:e79834502456a26a1b96e8",
    measurementId: "G-YRJWXE0K0E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //global variables
  var database = firebase.database();
  var dev_name;

  //function for saving data
  function save() {
      var site_name = document.getElementById("site_Name").value;
      dev_name = document.getElementById("dev_Name").value;
      var test_num = document.getElementById("try_num").value;
      var language = document.getElementById("language").value;

      database.ref('test/' + dev_name).set({
          siteName : site_name,
          developer : dev_name,
          testNumber : test_num,
          lSitLanguage : language
      });

      alert('saved');
  }

  //function for retriving data
  function get() {
    database.ref('test/' + dev_name).on('value', function(snapshot) {
        var data = snapshot.val();
        console.log(data);
        console.log(data.siteName);
        console.log(data.developer);
        console.log(data.testNumber);
        console.log(data.lSitLanguage);
        console.log(" ");
    });
  }