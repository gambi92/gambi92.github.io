var content=document.getElementById("content");
var page = [
	"<h1>My CV</h1>"+
	"<iframe src='cv-eng.pdf' frameborder='0'></iframe>"+
	"<iframe src='cv.pdf' frameborder='0'></iframe>"

	,
	
	"<h1>Youtube Player widget (alpha 0.85)</h1>"+
	"<div class='download'><a target='_blank' href='https://drive.google.com/open?id=0B4s4meoU8uLuY0NYcHBWT1lqWDg'>Download</a></div>"+
	"<div class='download'><a target='_blank' href='https://github.com/gambi92/Youtube-Watcher'>Source</a></div>"+
	"<h3>Just drop a video and watch it while doing other things</h3>"+
	"<h3></h3>"+
	"<img class='presentations' src='images/dragdrop_animation.gif'>"+
	
	"<h3>Features:</h3>"+
		"<ul>"+
			"<li>Can play Youtube videos (just drop them in)</li>"+
			"<li>Uses CEFSharp's Chromium webbrowser to show the videos</li>"+
			"<li>Uses Youtube API to control the videos</li>"+
		"</ul>"+

	"<h3>Changelog:</h3>"+
		"<ul>"+
			"<li>alpha 0.85"+
				"<ul>"+
					"<li>Added automatic ad skipper on Youtube Videos</li>"+
					"<li>Updated CefSharp (version 57)</li>"+
				"</ul>"+
			"</li>"+
			"<li>alpha 0.84"+
				"<ul>"+
					"<li>Added setting: you can change how much the volume indicator steps</li>"+
					"<li>Added full exception handling</li>"+
				"</ul>"+
			"</li>"+
			"<li>alpha 0.83"+
				"<ul>"+
					"<li>Video loader rewrited (now uses Youtube API)</li>"+
					"<li>Added volume control on form window</li>"+
					"<li>Added playlist support</li>"+
					"<li>Added youtu.be support</li>"+
				"</ul>"+
			"</li>"+
			"<li>alpha 0.82"+
				"<ul>"+
					"<li>New style (rounded corners)</li>"+
					"<li>Added new settings option: always on top</li>"+
				"</ul>"+
			"</li>"+
			"<li>alpha 0.81"+
				"<ul>"+
					"<li>Added settings menu</li>"+
				"</ul>"+
			"</li>"+
		"</ul>"+
	
	"<h3></h3>"
	,
	
	"<h1>Picture viewer (alpha version, no exception handling)</h1>"+
	"<div class='download'><a target='_blank' href='https://drive.google.com/file/d/0B4s4meoU8uLuSUxnbDJaQUgwblE/view?usp=sharing'>Download</a></div>"+
	"<div class='download'><a target='_blank' href='https://github.com/gambi92/Picture-Viewer'>Source</a></div>"+
	"<h3>This is a lightweight picture viewer! It barely uses any resources. You have to associate the program with a file type!</h3>"+
		
	"<h3>Features:</h3>"+
		"<ul>"+
			"<li>Can load all sorts of images</li>"+
			"<li>Preloads the previous and next image in the background, so you can view it faster (multi threading)</li>"+
			"<li>Uses minimal system resource</li>"+
		"</ul>"+
	"<h3></h3>"+
	"<h3>Upcoming features:</h3>"+
		"<ul>"+
			"<li>Zooming</li>"+
			"<li>Drag & Drop support</li>"+
			"<li>Playing animated images</li>"+
			"<li>Picture browser</li>"+
			"<li>Image modifiers (rotate, flip, etc)</li>"+
			"<li>Handling exceptions</li>"+
		"</ul>"+
	"<h3></h3>"+
	"<h3>Known issues:</h3>"+
		"<ul>"+
			"<li>Can't play gifs!</li>"+
			"<li>If a picture was dropped into the exe file it won't show it immediately because it always loads the whole folder and then sort it by date!</li>"+
			"<li>Missing exception handling can cause errors if a picture deleted after it was loaded into the program!!!</li>"+
		"</ul>"
	,

	"<h1>Basic API for air measuring hardware</h1>"+
	"<div class='download'><a target='_blank' href='https://drive.google.com/file/d/1F73-5ALRjZG3U2fnpHWHv2HvcmWcJES-/view?usp=sharing'>Download Postman collection file</a></div>"+
	"<div class='download'><a target='_blank' href='http://gambinodaniel.nhely.hu/sensor/measurings.php'>Watch the last measurements here</a></div>"+
	"<h3>Basic API: You can POST JSON data that can contain temperature, humidity, dust particle count and air quality to this API and it saves the data to a MySQL database.</h3>"+
		

	"<h3>Address:</h3>"+
	"http://gambinodaniel.nhely.hu/sensor"+
	"<h3>Raw data format:</h3>"+
	"{\"temp\":\"0\",\"humid\":\"0\",\"dustpart\":\"0\",\"airquality\":\"0\",\"postcount\":\"0\"}"

	
	,
	
	"<h1>Phonebook (ASP.NET Core with Angular)</h1>"+
	"<div class='download'><a target='_blank' href='https://gitlab.com/gdani14/phonebook'>Phonebook Source</a></div>"+
	"<div class='download'><a target='_blank' href='https://gitlab.com/gdani14/randomdatagenerator'>Random Data generator Source</a></div>"+
	"<h3>A Phonebook web application with ASP.NET Core based HTTP API backend and Angular frontend. You can import csv data for testing, you can generate data with the RandomDataGenerator application (C# console application).</h3>"+
	"<h3>I made this project in 1 week, to test (and show) how much I can learn, I did this without any Angular knowledge and with only .NET Windows Forms Application experience. In this 1 week I did not have time to make the UI pretty. :)  I could have done it later, but this project is for showing how much I can learn in a week!</h3>"+
	"<h3></h3>"
	
	
	,
	
	"<h1>Lottery number guesser AI (Python, Tensorflow)</h1>"+
	//"<div class='download'><a target='_blank' href='https://gitlab.com/gdani14/phonebook'>Phonebook Source</a></div>"+
	"<h3>WARNING! This is a funny project!</h3>"+
	"<h3>I taught a tensorflow model some lottery numbers from the past (data available at https://www.szerencsejatek.hu/) made some calculations with them (how many times was a certain number selected at a given point in time), added these calculations to the model and asked it to predict the next lottery numbers.</h3>"+
	"<h3>I did not win! :D</h3>"


	,


	"<h1>OITM (Országos IT Megmérettetés) 2022</h1>"+
	"<h3>This is a National competition in Hungary. I participated in 11 category, here are my certificates (english and hungarian).</h3>"+
	"<h3>In the category: \".NET development with C#\" I got in the TOP 25, so I will get my exact placement and my certificate in-person at 2023 february!</h3>"+
	"<div class='multiLanguageCertificates'>"+
	"<iframe src='/certs/webdev_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/webdev_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/pythoncloud_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/pythoncloud_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/php_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/php_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/languageindependentdev_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/languageindependentdev_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/mobiledev_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/mobiledev_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/ai_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/ai_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/javaspring_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/javaspring_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/industry4csharp_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/industry4csharp_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/javaefficient_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/javaefficient_oklevel.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/excel_certificate.pdf' frameborder='0'></iframe>"+
	"<iframe src='/certs/excel_oklevel.pdf' frameborder='0'></iframe>"+
	"</div>"
];
 
var index = Number(getCookie("pageIndex"));
if(index>=0 && index<page.length) {
	loadPage(document.getElementById(index));
} else {
	loadPage(document.getElementsByTagName("li")[1], 1);
}

function loadPage(currentElement) {
	var number = Number(currentElement.id);
	if(number>=0 && number<page.length) {
		var activeElements = document.getElementsByClassName("active");
		var j=activeElements.length;
		for(i=0;i<j;i++) {
			activeElements[i].className="notactive";
		}
		currentElement.className="active";
		content.innerHTML=page[number];
		setCookie("pageIndex", number, 1);
	}
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
