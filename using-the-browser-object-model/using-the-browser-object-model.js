var msg = "<h2>broser window</h2><p>width: " + window.innerWidth + "</p>";
msg += "<P>hight: " + window.innerHeight + "</p>";
msg += "<h2>history</h2><p>item: " + window.history.length + "</P>";
msg += "<h2>screen</h2><p>width: " + window.screen.width + "</p>";
msg += "<p>height: " + window.screen.height + "</p>";
var el = document.getElementById("info");
el.innerHTML = msg;
alert("Current page: " + window.location);
