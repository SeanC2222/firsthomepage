var buttons = document.getElementsByClassName("buttonDiv");
var resume = document.getElementById("contentSectionResume");

var holdVariable = "";

var htmlContent;

for(var j = 0; j < buttons.length; j++){

	if (j == 0){
		htmlContent = "<div> <b>Welcome</b> to my homepage built on my own Node.js webserver hosted on a Raspberry Pi (formerly AWS EC2 instance)!"+
			      "I'm a recent graduate of the Oregon State University Computer Science Post-Bachelor progam (2016), looking for " +
			      "a career change from Radiation Safety into Software Engineering. </div><br>" +
			      "<div> <b>A little about myself:</b> " + 
			      "I was born and raised in the Seattle area and attended the University of Washington for my " + 
			      "initial B.S. degree in physics. I graduated from there in 2010, and moved onto " +
			      "working at the Puget Sound Naval Shipyard in radiation safety. I learned a lot and worked hard " +
			      "but decided in late 2014 that I wanted to go a new direction. I began my studies in computer " +
			      "science via the Oregon State University eCampus and found a job at Fred Hutchinson Cancer " +
			      "Research Center as a Sr. Radiation Safety Technician. I graduated with from OSU in Summer 2016 with a 4.0 " +
			      "with my second B.S. in computer science while working full time. I'm currently working at Fred Hutch while " +
			      "exploring my options in the Seattle area.</div><br>" +
			      "<div> <b>Personal hobbies of mine include:</b> cooking, playing my guitar, hanging with my cats, " +
			      "snowboarding, creating Arduino projects (I'm new to this!), exploring the Seattle food scene, " +
 			      "lifting weights, running, and cheering on the Huskies during football season! Go Dawgs! </div><br>" +
			      "<div> <b>Contact Info:</b> I can be contacted at <a href=\"mailto:sean-mulholland@hotmail.com\">" +
			      "sean-mulholland@hotmail.com </a></div><br>" +
			      "<br><br><img src=\"./public/documents/IMAG1321.jpg\" alt=\"Jack\" style=\"width:180px;height:320px\"> " +
			      "<img src=\"./public/documents/IMAG1350.jpg\" alt=\"Jack and Daniel\" style=\"width:320px;height:180px\">";
	} else if(j == 1){
	        htmlContent = "";
	        buttons[j].addEventListener('mouseover', function(){
		     resume.style.display = "inline";
	        });
	} else if (j == 2){
		htmlContent = "<div>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS-419_Senior_Capstone\">" + 
			      "Senior Capstone Project (C++)</a></span><br>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS_496-Mobile-Dev\">" + 
			      "Mobile & Cloud Development (Node.js/Express & Android)</a></span><br>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS_325-Algorithms\">" + 
			      "Algorithms (C++)</a></span><br>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS_261-Data-Structures\">" + 
			      "Data Structures (C)</a></span><br>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS_344-Operating-Systems\">" + 
			      "Operating Systems I (C)</a></span><br>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS_372-Introduction-to-Networks\">" + 
			      "Introduction to Networks (C/C++)</a></span><br>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS_290-Web-Development\">" + 
			      "Web Development (Node.js/Express, HTML/CSS/JS)</a></span></div>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS_161-Programming-Fundamentals-I\">" + 
			      "Programming Fundamentals I (C++)</a></span><br>" + 
			      "<span><a href=\"https://github.com/SeanC2222/CS_162-Programming-Fundamentals-II\">" + 
			      "Programming Fundamentals II (C++)</a></span><br>" +
			      "<span><a href=\"https://github.com/SeanC2222/CS-361-Project-B\">" + 
			      "Software Engineering I (JS)</a></span><br>" +
			      "<span><a href=\"https://github.com/SeanC2222/CS_362-Software-Engineering-II\">" + 
			      "Software Engineering II (C, Java)</a></span><br>";

	} else if (j == 3){
		htmlContent = "<div>" + 
			      "<span> This is a link to a \"How-To\" API documentation project I did for my Web Development" +
			      " class. The goal was to find an API that had poor documentation, and create a website that " + 
			      "provided documentation on how to use the API. The Oregon State Liquor Prices API I found " + 
			      "was selected because it is a RESTful API with a large, but tangible dataset. " + 
			      "This provided me the opportunity to familiarize myself with a scalable & data-centric " +
			      "software architecture without drowning in the theoretical terms or getting lost in " + 
			      "an overly large dataset. The terms in the documentation I provide may not be perfect, " +
			      "but I was able to create inline examples that leveraged the API while providing useful " +
			      "and usable information.</span><br><br>" +
			      "<span><a href=\"http://www.sean-mulholland.com/howTo290/intro\">Oregon State Liquor API How-To</a></span>";
	} else if (j == 4){
		htmlContent = "<div>" + 
			      "<span> This is a link to a \"How-To\" API documentation project I did for my Mobile/Cloud " +
			      "development class. The goal was to find a mobile or cloud library that may need supplementary " + 
			      "documentation and to write a guide on how to best use the library. I had been using Google's " +
			      "Volley API for an app I had been writing and remembered how tough it was juggling learning " +
			      "Android, let alone a brand new library. I wrote the guide with a brand new developer in mind " +
			      "but with enough depth that someone with some experience who wanted to use the library could " +
			      "learn some of the inner workings.<br><br>" + 
			      "I tried to link a good bit of source code and original documentation for relevant concepts " +
			      "throughout the guide, as well as weigh in on some of the strengths and weaknesses of the " + 
			      "library at appropriate points. The guide culminates with an example that incorpores all the " +
			      "important section into a functional application that can be loaded to an Android device or " + 
			      "emulator and run as is.</span><br><br>" +
			      "<span><a href=\"http://www.sean-mulholland.com/howToVolley/intro\">Google's Volley Library</a></span>";

	} else if (j == 5){
		htmlContent = "<div>" +
			      "<span> This section is currently being worked on. Refer to my GitHub for current code examples." +
			      "</span><br><br>" + 
			      "<span><a href=\"http://www.github.com/SeanC2222\">My GitHub</a></span>";
	} else {
		htmlContent = "I made an error. It was totally planned for.... But I made an error.";
	}

	var buttonFunction = buttonEventGenerator(buttons[j], htmlContent);
	buttonFunction();
}

function buttonEventGenerator(button, content){
	return function () {
		var tempButton = button;
		tempButton.addEventListener('mouseover', function(){
			if(tempButton.id != "resumeButton")
			   if(resume.style.display == "inline")
			      resume.style.display = "none";
			var contentText = document.getElementById("contentText");
			var contentTextParent = contentText.parentNode;
			holdVariable = contentText.textContent;
			if(contentText)
				contentTextParent.removeChild(contentText);
			var newContent = document.createElement("div");
			newContent.id = "contentText";
			newContent.innerHTML = content;
			contentTextParent.appendChild(newContent);
			newContent.style.width = "100%";
			if(tempButton.id == "introButton")
				if(newContent.clientHeight > document.getElementById("contentSection").clientHeight)
					newContent.style.overflow = "scroll";
			else
				newContent.style.overflow = "hidden";
				
			tempButton.style.backgroundColor = "#422ADE";
		});

		tempButton.addEventListener('mouseout', function(){
			var contentText = document.getElementById("contentText");
			//Changes content
			//contentText.textContent = holdVariable;
			tempButton.style.backgroundColor = "#22105D";
		});

	};
};

