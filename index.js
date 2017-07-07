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
	var categoryBtn = document.querySelector(".category-button");
	var categoryDrop = document.querySelector(".category-dropmenu");
	var foodCategory = document.querySelector(".food-category");

	// grab random word from array
	var randWordObj = vocabList[Math.floor(Math.random() * vocabList.length)];
	var randWordKor = randWordObj.korean;
	var randWordTransl = randWordObj.translation;
	var randWordRoman = randWordObj.romanization;
	wordCont.innerHTML = randWordKor;

	// grab random word from food array
	var randFoodWord = foodList[Math.floor(Math.random() * foodList.length)];
	var randFoodKor = randFoodWord.korean;


	
	// click toggle for romanization
	romanBtn.onclick = function() {
		if(romanCont.innerHTML === randWordRoman) {
			romanCont.innerHTML = "";
		} else {
			romanCont.innerHTML = randWordRoman;
		}
	};

	// click toggle for Korean -> English
	englishTranslBtn.onclick = function() {
		if(wordCont.innerHTML === randWordKor) {
			wordCont.innerHTML = randWordTransl;	
		} else {
			wordCont.innerHTML = randWordKor;
		}
	};

	// click hide/show for category drop
	categoryBtn.onclick = function() {
		if(categoryDrop.classList.contains("hidden-status")) {
			categoryDrop.classList.remove("hidden-status");
			categoryDrop.classList.add("show-status");
		} else {
			categoryDrop.classList.remove("show-status");
			categoryDrop.classList.add("hidden-status");
		}
	};

	// click render for food category
	foodCategory.onclick = function() {
		wordCont.innerHTML = randFoodKor;
	}


};

var vocabList = [
				{korean:"자기",
				translation:"Darling",
				romanization:"(Jya-gi)",
				category:"relationship"},

				{korean:"사랑",
				translation:"Love",
				romanization:"(Sa-rahng)",
				category:"relationship"},

				{korean:"커피",
				translation:"Coffee",
				romanization:"(Kuh-pee)",
				category:"food"},

				{korean:"고양이",
				translation:"Cat",
				romanization:"(Goh-yahng-ee)",
				category:"animals"},

				{korean:"뽀뽀",
				translation:"Kiss",
				romanization:"(Bboh-bboh)",
				category:"relationship"},

				{korean:"딸기",
				translation:"Strawberry",
				romanization:"(Thahl-gi)",
				category:"food"},

				{korean:"학교",
				translation:"School",
				romanization:"(Hahk-giyo)",
				category:"education"},

				{korean:"강아지",
				translation:"Puppy",
				romanization:"(Gahng-ah-gee)",
				category:"animals"},

				{korean:"친구",
				translation:"Friend",
				romanization:"(Ching-goo)",
				category:"relationship"},

				{korean:"사탕",
				translation:"Candy",
				romanization:"(Sah-tahng)",
				category:"food"},

				{korean:"설탕",
				translation:"Sugar",
				romanization:"(Seohl-tahng)",
				category:"food"},
				
				{korean:"사과",
				translation:"Apple",
				romanization:"(Sah-guah)",
				category:"food"},

				{korean:"소고기",
				translation:"Beef",
				romanization:"(Soh-goh-gi)",
				category:"food"},

				{korean:"양파",
				translation:"Onion",
				romanization:"(Yahng-pah)",
				category:"food"},

				{korean:"마늘",
				translation:"Garlic",
				romanization:"(Mah-neul)",
				category:"food"},

				{korean:"파",
				translation:"Green Onion",
				romanization:"(Pah)",
				category:"food"},

				{korean:"두부",
				translation:"Tofu",
				romanization:"(Doo-boo)",
				category:"food"},

				{korean:"우유",
				translation:"Milk",
				romanization:"(Ooo-yoo)",
				category:"food"},

				{korean:"만두",
				translation:"Dumplings",
				romanization:"(Mahn-doo)",
				category:"food"},

				{korean:"김치",
				translation:"Kimchi",
				romanization:"(Gim-chee)",
				category:"food"},

				{korean:"밥",
				translation:"Rice",
				romanization:"(Bahp)",
				category:"food"}
			    ]



















