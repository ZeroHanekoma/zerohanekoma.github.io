//this whole script was fuckin slapped together from a rudimentary understanding of C#.
//and fuckin stolen

function init() {
	generateQuote();
	updateClock(); // initial call
}

//quote stuff

//thank you to the anon on /wg/ who taught me how to make the quotes.js not integrated into this script file.  that bloat was insane.

const generateQuote = function() {
    //the quotes are pulled from quotes.js in the same folder.
	//if it's not there this shit will break.
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = "\"" + quotes[arrayIndex].quote + "\"";
    document.getElementById("author").innerHTML = "- " + quotes[arrayIndex].author;
}


//this script was moved out of index.html into this javascript file.
//because i hate keeping scripts in my html files.

//document.getElementById("main").innerHTML = Date();
function updateClock() {
	var days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
	var m = new Date();
	var dateString =
	(days[ m.getDay() ]) + " " +
	("0" + (m.getMonth()+1)).slice(-2) +"/"+
	("0" + m.getDate()).slice(-2) + "/" +
	m.getFullYear() +" "+
	("0" + m.getHours()).slice(-2) + ":" +
	("0" + m.getMinutes()).slice(-2) + ":" +
	("0" + m.getSeconds()).slice(-2);
	
	// set the content of the element with the ID time to the formatted string
	document.getElementById('time').innerHTML = dateString;
	// call this function again in 1000ms
	setTimeout(updateClock, 1000);
}

//greeting
var myDate = new Date();
var hrs = myDate.getHours();

var greet;
var subGreet;

if (hrs < 12){
    greet = 'おはよう！';}
else if (hrs >= 12 && hrs <= 17){
    greet = 'こんにちは！';}
else if (hrs >= 17 && hrs <= 24){
    greet = 'こんばんは！';}


document.getElementById('lblGreetings').innerHTML =
    '<b>' + greet + '</b>';