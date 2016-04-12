// =================================
// Variables declaration
var unwrappedKeywords;
var keywords;
var wrappedKeywords;

var keywordsListBroad = [];
var keywordsListBroadModified = [];
var keywordsListPhrase = [];
var keywordsListExact = [];
var keywordFinal = [];
var stringFinal;

console.log(unwrappedKeywords);
console.log(keywords);
console.log(wrappedKeywords);


// Wrapping keywords (Main function)
$('#action-wrap').click(function () {

	// Getting text area
	keywords = $( '#unwrapped-keywords').val();
	//console.log('keywords:', keywords);

	// Splitting each keyword in array
	keywordsListBroad = keywords.split("\n");
	//console.log(keywordsListBroad);

	// Modifying keywords
	stringFinal = "";
	for (var i = 0 ; i < keywordsListBroad.length ; i++) {
		//keywordsListPhrase[i] = "\""+keywordsListBroad[i]+"\"";
		//keywordsListExact[i] = "\["+keywordsListBroad[i]+"\]";
		//keywordsListBroadModified[i] = "+"+keywordsListBroad[i].replace(" "," +");
		stringFinal += "\""+keywordsListBroad[i]+"\"" + "\n"
		+"\["+keywordsListBroad[i]+"\]" + "\n"
		+"+"+keywordsListBroad[i].replace(" "," +") + "\n";
	}
	// console.log('keywordsListPhrase:',keywordsListPhrase);
	// console.log('keywordsListExact:',keywordsListExact);
	// console.log('keywordsListBroadModified:',keywordsListBroadModified);

	//var keywordFinal = keywordsListBroad.concat(keywordsListBroadModified, keywordsListPhrase, keywordsListExact);
	console.log('final:',stringFinal);

	$('#wrappedKeywords').val(stringFinal);

})


// ======================================
// Zeroclipboard
// Check it out : https://github.com/zeroclipboard

var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( 'ready', function(event) {
	console.log( 'ZeroClipboard loaded' );

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
