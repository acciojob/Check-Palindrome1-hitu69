function palindrome(str){
  var palin = str.toLowerCase();
	let i=0,j=i-1;
	while(i<j){
	// palin = str.charAt[i==j]
		if(str.charAt(i)==str.charAt(j)){
			i++;
			j--;
		}else {
			return false;
		}
		
	}
	return true;
}
module.exports = palindrome