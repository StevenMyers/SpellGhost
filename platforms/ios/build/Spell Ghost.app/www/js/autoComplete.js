// Search for a word by the prefix from the Search Box
function searchWordByPrefix() {
    // Get the prefix we are searching
    var prefix = document.getElementById("searchBox").value;
    
    if ((prefix == null) || (prefix.length < 3)) {
	// For small words, don't load any files clear the suggestions box
	document.getElementById("suggestions").innerHTML = "";
    } else {
	// Get the file to load
	var wordFile = "resources/words/" + prefix.substring(0,2)+ ".csv"
	$.get(wordFile,function(data){
	    // Start building a list of the 
	    var output = "";
	    var lines = data.split('\n');
	    $.each(lines, function(){
	        var words = this.split(',');
	        if (words[0].match("^"+prefix)) {
		    output += '<li>' +  words[0] + '</li>';
		}
	    });
	    if (output.length != 0) {
		output = '<ul>' + output + '</ul';
	    }
	    document.getElementById("suggestions").innerHTML = output;
	}, 'text');
    }
}