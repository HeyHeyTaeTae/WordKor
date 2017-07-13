window.onload = function() {
	console.log("Santity check!");

	// display date
	var dateCont = document.querySelector("#date");
	dateCont.innerHTML = new Date().toDateString();

	// dropdown menu variables
	var categoryBtn = document.querySelector(".category-button");
	var categoryDrop = document.querySelector(".category-dropmenu");
	var allDropmenuLi = document.getElementsByClassName(".drop-li");

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

	// click event delegation for category li
	var setCategoryClick = function () {
		document.getElementById("category-list").addEventListener("click", function(e) {
			if(e.target && e.target.nodeName === "LI") {
				var category = e.target.textContent;

				var categoryVocabList = vocabList.filter(function(word) {
					return word.category === category;
				});
				setWord(categoryVocabList, setBtnEvent);
			}
		});
	}

	// sets word in word container
	var setWord = function(array, callback) {
		var wordCont = document.querySelector(".word-h1");
		var word = array[Math.floor(Math.random() * array.length)];
		var wordKor = word.korean;
		wordCont.innerHTML = wordKor;
		// invoke callback to set click events for buttons
		callback(word, wordCont);
	};

	var setBtnEvent = function(word, container) {
		var englishTranslBtn = document.querySelector(".english-translation-button");
		var romanBtn = document.querySelector(".romanization-button");
		// click toggle for romanization
		var romanCont = document.querySelector(".romanization-h1");
		romanBtn.onclick = function() {
			if(romanCont.innerHTML === word.romanization) {
				romanCont.innerHTML = "";
			} else {
				romanCont.innerHTML = word.romanization;
			}
		};

		// click toggle for Korean -> English
		englishTranslBtn.onclick = function() {
			console.log(container);
			if(container.innerHTML === word.korean) {
				container.innerHTML = word.translation;	
			} else {
				container.innerHTML = word.korean;
			}
		};
	}
	setWord(vocabList, setBtnEvent);
	setCategoryClick();
};

var vocabList = [
				{korean:"자기",
				translation:"Darling",
				romanization:"(Jya-gi)",
				category:"Relationship"},

				{korean:"사랑",
				translation:"Love",
				romanization:"(Sa-rahng)",
				category:"Relationship"},

				{korean:"커피",
				translation:"Coffee",
				romanization:"(Kuh-pee)",
				category:"Food"},

				{korean:"고양이",
				translation:"Cat",
				romanization:"(Goh-yahng-ee)",
				category:"Animals"},

				{korean:"뽀뽀",
				translation:"Kiss",
				romanization:"(Bboh-bboh)",
				category:"Relationship"},

				{korean:"딸기",
				translation:"Strawberry",
				romanization:"(Thahl-gi)",
				category:"Food"},

				{korean:"학교",
				translation:"School",
				romanization:"(Hahk-giyo)",
				category:"Education"},

				{korean:"강아지",
				translation:"Puppy",
				romanization:"(Gahng-ah-gee)",
				category:"Animals"},

				{korean:"친구",
				translation:"Friend",
				romanization:"(Ching-goo)",
				category:"Relationship"},

				{korean:"사탕",
				translation:"Candy",
				romanization:"(Sah-tahng)",
				category:"Food"},

				{korean:"설탕",
				translation:"Sugar",
				romanization:"(Seohl-tahng)",
				category:"Food"},
				
				{korean:"사과",
				translation:"Apple",
				romanization:"(Sah-guah)",
				category:"Food"},

				{korean:"소고기",
				translation:"Beef",
				romanization:"(Soh-goh-gi)",
				category:"Food"},

				{korean:"양파",
				translation:"Onion",
				romanization:"(Yahng-pah)",
				category:"Food"},

				{korean:"마늘",
				translation:"Garlic",
				romanization:"(Mah-neul)",
				category:"Food"},

				{korean:"파",
				translation:"Green Onion",
				romanization:"(Pah)",
				category:"Food"},

				{korean:"두부",
				translation:"Tofu",
				romanization:"(Doo-boo)",
				category:"Food"},

				{korean:"우유",
				translation:"Milk",
				romanization:"(Ooo-yoo)",
				category:"Food"},

				{korean:"만두",
				translation:"Dumplings",
				romanization:"(Mahn-doo)",
				category:"Food"},

				{korean:"김치",
				translation:"Kimchi",
				romanization:"(Gim-chee)",
				category:"Food"},

				{korean:"밥",
				translation:"Rice",
				romanization:"(Bahp)",
				category:"Food"}
			  ]



















