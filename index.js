window.onload = function() {
	console.log("Santity check!");
	
	// display date
	var dateCont = document.querySelector("#date");
	dateCont.innerHTML = new Date().toDateString();

	// grab containers for word info
	var wordCont = document.querySelector(".word-h1");
	var currentWordKor = document.querySelector(".word-h1");
	var romanCont = document.querySelector(".word-romanization-h1");

	// grab random word from array
	var randWordObj = wordList[Math.floor(Math.random() * wordList.length)];
	var randWordKor = randWordObj.korean;
	var randWordTransl = randWordObj.translation;
	var randWordRoman = randWordObj.romanization;
	wordCont.innerHTML = randWordKor;
	
	// click toggle for romanization
	romanCont.onclick = function() {
		if(this.innerHTML === randWordRoman) {
			this.innerHTML = "Click for romanization";
		} else {
			this.innerHTML = randWordRoman;
		}
	}

	// click toggle for Korean -> English
	currentWordKor.onclick = function() {
		if(this.innerHTML === randWordKor) {
			this.innerHTML = randWordTransl;	
		} else {
			this.innerHTML = randWordKor;
		}
	};
};

var wordList = [
				{korean:"자기",
				translation:"Darling",
				romanization:"(Jya-gi)"},

				{korean:"사랑",
				translation:"Love",
				romanization:"(Sa-rahng)"},

				{korean:"커피",
				translation:"Coffee",
				romanization:"(Kuh-pee)"},

				{korean:"고양이",
				translation:"Cat",
				romanization:"(Goh-yahng-ee)"},

				{korean:"뽀뽀",
				translation:"Kiss",
				romanization:"(Bboh-bboh)"},

				{korean:"딸기",
				translation:"Strawberry",
				romanization:"(Thahl-gi)"},

				{korean:"학교",
				translation:"School",
				romanization:"(Hahk-giyo)"},

				{korean:"강아지",
				translation:"Puppy",
				romanization:"(Gahng-ah-gee)"},

				{korean:"친구",
				translation:"Friend",
				romanization:"(Ching-goo)"},

				{korean:"사탕",
				translation:"Candy",
				romanization:"(Sah-tahng)"},

				{korean:"설탕",
				translation:"Sugar",
				romanization:"(Seohl-tahng)"}
				];

