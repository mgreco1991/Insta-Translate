$(document).ready(function(){

	var apiKey = "trnsl.1.1.20181209T034347Z.03a94dc6afb9a079.e8f6471c818b4f9ba7dd2112346f9a65309744ec";
	var runTranslationURLBase = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + apiKey;
	var fromLanguage;
	var toLanguage;

    $('#fromLang').on("change",function(){
        fromLanguage = $(this).val();
            if(fromLanguage === "en"){
            	$("#flagPicOne").css("background-image", "url(assets/images/england_flag.jpg)");
            } else if(fromLanguage === "ar"){
            	$("#flagPicOne").css("background-image", "url(assets/images/saudi_arabia_flag.png)");
            } else if(fromLanguage === "zh"){
            	$("#flagPicOne").css("background-image", "url(assets/images/china_flag.png)");
            } else if(fromLanguage === "fr"){
            	$("#flagPicOne").css("background-image", "url(assets/images/french_flag.jpg)");
            } else if(fromLanguage === "ga"){
            	$("#flagPicOne").css("background-image", "url(assets/images/ireland_flag.jpg)");
            } else if(fromLanguage === "de"){
            	$("#flagPicOne").css("background-image", "url(assets/images/german_flag.jpg)");
            } else if(fromLanguage === "hi"){
            	$("#flagPicOne").css("background-image", "url(assets/images/indian_flag.png)");
            } else if(fromLanguage === "it"){
            	$("#flagPicOne").css("background-image", "url(assets/images/italian_flag.jpg)");
            } else if(fromLanguage === "ja"){
            	$("#flagPicOne").css("background-image", "url(assets/images/japanese_flag.png)");
            } else if(fromLanguage === "ko"){
            	$("#flagPicOne").css("background-image", "url(assets/images/korean_flag.png)");
            } else if(fromLanguage === "fa"){
            	$("#flagPicOne").css("background-image", "url(assets/images/iran_flag.png)");
            } else if(fromLanguage === "ru"){
            	$("#flagPicOne").css("background-image", "url(assets/images/russian_flag.jpg)");
            } else if(fromLanguage === "es"){
            	$("#flagPicOne").css("background-image", "url(assets/images/spain_flag.jpg)");
            } else if(fromLanguage === "sw"){
            	$("#flagPicOne").css("background-image", "url(assets/images/swahili_flag.png)");
            } else if(fromLanguage === "vi"){
            	$("#flagPicOne").css("background-image", "url(assets/images/vietnam_flag.png)");
            }
    });

    $("#toLang").on("change", function(){
    	toLanguage = $(this).val();
    	    if(toLanguage === "en"){
            	$("#flagPicOne").css("background-image", "url(assets/images/england_flag.jpg)");
            } else if(toLanguage === "ar"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/saudi_arabia_flag.png)");
            } else if(toLanguage === "zh"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/china_flag.png)");
            } else if(toLanguage === "fr"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/french_flag.jpg)");
            } else if(toLanguage === "ga"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/ireland_flag.jpg)");
            } else if(toLanguage === "de"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/german_flag.jpg)");
            } else if(toLanguage === "hi"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/indian_flag.png)");
            } else if(toLanguage === "it"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/italian_flag.jpg)");
            } else if(toLanguage === "ja"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/japanese_flag.png)");
            } else if(toLanguage === "ko"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/korean_flag.png)");
            } else if(toLanguage === "fa"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/iran_flag.png)");
            } else if(toLanguage === "ru"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/russian_flag.jpg)");
            } else if(toLanguage === "es"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/spain_flag.jpg)");
            } else if(toLanguage === "sw"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/swahili_flag.png)");
            } else if(toLanguage === "vi"){
            	$("#flagPicTwo").css("background-image", "url(assets/images/vietnam_flag.png)");
            }
    });
	


	function runTranslation(getTranslationURL){
		$.ajax({
			url: getTranslationURL,
			method: "GET"
		})
		.done(function(translation){
			console.log(getTranslationURL);
			console.log(translation);
			$("#translatedText").text(translation.text);
		});
	}
	$("#translateTheText").on("click", function(){

		var textToTranslate = $("#translateText").val().trim();
		console.log(textToTranslate);

		var newURL = runTranslationURLBase + "&text=" + textToTranslate;

		fromLanguage = $("#fromLang").val();
		toLanguage = $("#toLang").val();

		var newURL = newURL + "&lang=" + fromLanguage + "-" + toLanguage;

		runTranslation(newURL);
	});
});

