window.onload = function() {
	console.log("Santity check!");
	var dateCont = document.querySelector("#date");
	dateCont.innerHTML = new Date().toDateString();
	var wordCont = document.querySelector(".word-h1");
	var randWord = wordList[Math.floor(Math.random() * wordList.length)];
	wordCont.innerHTML = randWord;
};



var wordList = [{korean:"자기",
				translation:"Darling"},
				{korean:"사랑",
				translation:"Love"},
				{korean:"커피",
				translation:"Coffee"},
				{korean:"고양이",
				translation:"Cat"},
				{korean:"뽀뽀",
				translation:"Kiss"},
				{korean:"딸기",
				translation:"Strawberry"},
				{korean:"학교",
				translation:"School"},
				{korean:"강아지",
				translation:"Puppy"},
				{korean:"친구",
				translation:"Friend"},
				{korean:"사탕",
				translation:"Candy"},
				{korean:"설탕",
				translation:"Sugar"];

