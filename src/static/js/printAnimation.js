'use strict';


let hashtagsList;
let hashtagsCount = 0;
let symbCount = 1;

let getRandom = (min, max) => max + Math.random() * (max + 1 - min);


let printHashtag = (hashtagHTML, hashtags) => {
	hashtagsList = hashtags;
	let hashtag = hashtagsList[hashtagsCount];
	if(hashtagsCount >= hashtagsList.length){
		hashtagsCount = 0;
		printHashtag(hashtagHTML, hashtagsList);
	}else if(symbCount > hashtag.length){
		setTimeout(function() {
			deleteHashtag(hashtag, hashtagHTML)
		}, 5000);
		
	}else{
		setTimeout(function() {
			hashtagHTML.innerText = hashtag.slice(0, symbCount);
			symbCount++;
			printHashtag(hashtagHTML, hashtagsList)	
		}, getRandom(50, 200));
		
	}
		
}

let deleteHashtag = (word, hashtagHTML) => {
	if(symbCount == 0){
		hashtagsCount++;
		symbCount = 1;
		printHashtag(hashtagHTML, hashtagsList)
	}else{
		setTimeout(function() {
			symbCount--;
			hashtagHTML.innerText = word.slice(0, symbCount);
			deleteHashtag(word, hashtagHTML)	
		}, 100);
		
	}
	
}



// blink caret effect

let blinkCaret = (hashtagHTML) => {
	setInterval(() => hashtagHTML.classList.toggle('blink')
	, 500);
};

export {blinkCaret, printHashtag}
