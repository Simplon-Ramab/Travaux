
var contact = "exemple";
var pwd = "test";

// plus pratique mais tu dois le transformer dans le bon format
// var data = { contact : contact, pwd : pwd };

var data = "?login="+login+"?password="+password;

$.ajax({
  type: "POST",
  url: "login.php",
  data: data,
}).done(function(data) {
    console.log("success",data );
});
