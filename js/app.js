// =======================================================================
// Creating varaibles and arrays
var unwrappedKeywords, keywords, wrappedKeywords;

var keywordsList = [];
var keywordsListSplited = [];
var keywordsListFinal;

var choiceBroad, choiceBroadModified, choicePhrase, choiceExact;
var optionLowercase;

// =======================================================================
// UX

/*
$('#action-wrap').click(function () {
	$('#wrap-block').hide();
	$('#result-block').show();
})

$('#action-wrap-again').click(function () {
	$('#wrap-block').show();
	$('#result-block').hide();
})
*/

// =======================================================================
// Wrapping keywords (Main function)

$('#action-wrap').click(function () {

	// Getting text area
	keywords = $( '#unwrapped-keywords').val();

	// Getting keywords choice values
	choiceBroad = $('#choice-broad').is(':checked');
	choiceBroadModified = $('#choice-broadmodified').is(':checked');
	choicePhrase = $('#choice-phrase').is(':checked');
	choiceExact= $('#choice-exact').is(':checked');

	// Getting options choice values
	optionLowercase = $('#option-lowercase').is(':checked');

	// Lowercase option
	if (optionLowercase === true) {
		keywords = keywords.toLowerCase(); 
	}

	// Splitting each keyword in array
	keywordsList = keywords.split("\n");

	// Remove blank keywords
	keywordsList = keywordsList.filter(function(val){
		if( val == '' || val == NaN || val == undefined || val == null ){
	    		return false;
		}
		return true;
	});
	
	// Modifying keywords
	keywordsListFinal = "";
	console.log(keywordsList);

	for (var i = 0 ; i < keywordsList.length ; i++) {
		if (choiceExact === true) {
			keywordsListFinal += "\[" + keywordsList[i] + "\]" + "\n";
		}

		if (choicePhrase === true) {
			keywordsListFinal += "\"" + keywordsList[i] + "\"" + "\n";
		}
		
		if (choiceBroad === true) {
			keywordsListFinal += keywordsList[i] + "\n";
		}
	}
		
	if (choiceBroadModified === true) {
			
		// Adding +s
		for(var y = 0 ; y < keywordsList.length ; y++) {
 			keywordsList[y] = "+" + keywordsList[y].replace(/ /g," +");
			keywordsListFinal += keywordsList[y] + "\n";
			console.log(keywordsList);
		}
	}
	

	// Creating final list
	$('#wrappedKeywords').val(keywordsListFinal);	

})

// ============================================================================
// Zeroclipboard
// Check it out on github :  https://github.com/zeroclipboard

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( 'ready', function(event) {
	//console.log( 'ZeroClipboard loaded' );

	client.on( 'copy', function(event) {
		event.clipboardData.setData('text/plain', event.target.children.innerHTML);
	} );

	client.on( 'aftercopy', function(event) {
		console.log('Copied text to clipboard: ' + event.data['text/plain']);
	} );

} );

client.on( 'error', function(event) {
	// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	ZeroClipboard.destroy();
} );
