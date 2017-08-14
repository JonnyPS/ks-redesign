
console.log('hello js world');

var sideBarBlue = '#03366b';
var sideBarGreen = '#6c9e30';
var sideBarOrange = '#f37021';
var sideBarLightBlue = '#00a0e4';



// var box = document.getElementsByClassName("box");
// console.log( box );
var content = document.getElementsByClassName("content");
console.log( content );

for (i = 0; i < content.length; i++) {
	content[i].onmouseover = function() {
		var colorId = this.parentElement.id;
		//get h3 tag and change colour
		for ( i = 0; i < this.childNodes.length; i++ ) {
			childrenNodes = this.childNodes[i];
			if(childrenNodes.nodeName == 'H3') {
				console.log(childrenNodes);
				console.log(colorId);
				childrenNodes.className += ' ' + colorId + '-text';
			}
		}
	}
}

for (i = 0; i < content.length; i++) {
	content[i].onmouseout = function() {
		var colorId = this.parentElement.id;
		//get h3 tag and change colour
		for ( i = 0; i < this.childNodes.length; i++ ) {
			childrenNodes = this.childNodes[i];
			if(childrenNodes.nodeName == 'H3') {
				console.log(childrenNodes);
				console.log(colorId);
				childrenNodes.classList.remove(colorId + '-text');
			}
		}
	}
}



