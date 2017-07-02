window.onload = function() {
	console.log("Santity check!");
	var dateCont = document.querySelector("#date");
	console.log(dateCont);
	dateCont.innerHTML = new Date().toDateString();
	var wordCont = document.querySelector(".word-h1");
	var randWord = wordList[Math.floor(Math.random() * wordList.length)];
	wordCont.innerHTML = randWord;
};



var wordList = ["자기", "사랑", "커피", "고양이", "뽀뽀", "딸기", "학교", "강아지", "친구", "사탕", "설탕"];

