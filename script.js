function shortcut(s1, s2) {
  // your code here
	if(s1=''||s2=''){
		console.log("''");
	}
	for(i=0;i<s1.length;i++){
		console.log(s1[0]);
	}
	for(i=0;i<s2.length;i++){
		console.log(s2[0]);
	}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
