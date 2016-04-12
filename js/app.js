// =================================
// Variables declaration
var unwrappedKeywords;
var keywords;
var wrappedKeywords;

var keywordsListBroad = [];
var keywordsListBroadModified = [];
var keywordsListPhrase = [];
var keywordsListExact = [];
var keywordsListFinal;

var choiceBroad;
var choiceBroadModified;
var choicePhrase;
var choiceExact;

var optionLowercase;

// Wrapping keywords (Main function)
$('#action-wrap').click(function () {

	// Getting text area
	keywords = $( '#unwrapped-keywords').val();

	// Splitting each keyword in array
	keywordsListBroad = keywords.split("\n");

	// Getting keywords choice values
	choiceBroad = $('#choice-broad').is(':checked');
	choiceBroadModified = $('#choice-broadmodified').is(':checked');
	choicePhrase = $('#choice-phrase').is(':checked');
	choiceExact= $('#choice-exact').is(':checked');
	
	// Getting options choice values
	optionLowercase = $('#option-lowercase').is(':checked');
	
	// Modifying keywords
	keywordsListFinal = "";
	for (var i = 0 ; i < keywordsListBroad.length ; i++) {
		if (choiceBroad === true) {
			keywordsListFinal += keywordsListBroad[i] + "\n";
		}
		if (choiceBroadModified === true) {
			keywordsListFinal += "+" + keywordsListBroad[i].replace(" "," +") + "\n";
		}
		if (choicePhrase === true) {
			keywordsListFinal += "\"" + keywordsListBroad[i] + "\"" + "\n";
		}
		if (choiceExact === true) {
			keywordsListFinal += "\[" + keywordsListBroad[i] + "\]" + "\n";
		}
	}

	if (optionLowercase === true) {
		keywordsListFinal = keywordsListFinal.toLowerCase();
	}

	$('#wrappedKeywords').val(keywordsListFinal);

})


// ======================================
// Zeroclipboard
// Check it out : https://github.com/zeroclipboard

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
