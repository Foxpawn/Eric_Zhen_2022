
var numberToPhonetic = function(num) {
	/* Helper Function that turns one number into phonetic equivalent */
	var nums = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'] //make an array to store single digit
	var result = '' //initialize result string
	var numtostr= num.toString() //convert input number to str
	var temp = 0 //temp variable to store changing string digit back to integer digit
	for(i=0; i< numtostr.length; i++){ //iterate through string digit by digit
		temp = parseInt(numtostr[i]) //convert string digit back to integer digit
		result = result + nums[temp] //look for number in the stored array we made and add to result
	}
	return result	
}
var arrayToWords = function(arr){
	/* function to return array of integers to strings of phonetic equivalent */
	var ans = [] //initialize answer array

	for (x=0; x<arr.length; x++){ //iterate through input array and use our helper function
		ans.push(numberToPhonetic(arr[x]))
	}
	ans = ans.join(',') 
	//I wasn't sure about the output, the pdf earlier requested an array of strings. However, this output shows the one in picture.
	return ans

};



    


