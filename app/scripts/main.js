
console.log('hello js world');

var sideBarBlue = '#03366b';
var sideBarGreen = '#6c9e30';
var sideBarOrange = '#f37021';
var sideBarLightBlue = '#00a0e4';




var content = document.getElementsByClassName("content");
console.log( content );

for (i = 0; i < content.length; i++) {
	content[i].onmouseover = function() {
		// console.log( this )


		// get h3 tag and change colour
		for ( i = 0; i < this.childNodes.length; i++ ) {
			
		    childrenNodes = this.childNodes[i];
		    if(childrenNodes.nodeName == 'H3') {
		    	// console.log( childrenNodes.id )
		    	childrenNodes.style.color = '#00a0e4';
		    }
		}


		// get h3 tag and change colour
		// for ( i = 0; i < this.childNodes.length; i++ ) {
		//     childrenNodes = this.childNodes[i];
		//     if(childrenNodes.nodeName == 'H3') {
		//     	// console.log( childrenNodes.id )
		//     	childrenNodes.style.color = '#00a0e4';
		//     }
		// }


	}
}



// for (i = 0; i < pubHeader.length; i++) {
//   pubHeader[i].onmouseout = function() {
//     console.log('out: ' + pubHeader[i]);
//   }
// }