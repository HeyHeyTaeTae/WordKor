window.onload = function() {
	console.log("Santity check!");

	// display date
	var dateCont = document.querySelector("#date");
	dateCont.innerHTML = new Date().toDateString();

	// grab containers for word info
	var wordCont = document.querySelector(".word-h1");
	var romanCont = document.querySelector(".romanization-h1");
	var englishTranslBtn = document.querySelector(".english-translation-button");
	var romanBtn = document.querySelector(".romanization-button");

	// grab random word from array
	var randWordObj = vocabList[Math.floor(Math.random() * vocabList.length)];
	var randWordKor = randWordObj.korean;
	var randWordTransl = randWordObj.translation;
	var randWordRoman = randWordObj.romanization;
	wordCont.innerHTML = randWordKor;
	
	// click toggle for romanization
	romanBtn.onclick = function() {
		if(romanCont.innerHTML === randWordRoman) {
			romanCont.innerHTML = "";
		} else {
			romanCont.innerHTML = randWordRoman;
		}
	}

	// click toggle for Korean -> English
	englishTranslBtn.onclick = function() {
		if(wordCont.innerHTML === randWordKor) {
			wordCont.innerHTML = randWordTransl;	
		} else {
			wordCont.innerHTML = randWordKor;
		}
	};
};

var vocabList = [
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

