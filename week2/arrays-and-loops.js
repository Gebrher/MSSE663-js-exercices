// #1 Take an array of numbers and make them strings
function stringItUp(arr) {
	var output =arr.map((value)=>{
		
		return value.toString();
	}
	
	);
    
   return output;
}
  
console.log(stringItUp([2, 5, 100]));
// output: ["2", "5", "100"]

// #2 Make an array of strings of the names
function namesOnly(arr) {
		var output = arr.map((value)=>{
		return value.name;
	});
	return output;
}

console.log(
	namesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// #3 Filter the output array from #2.
function oldOnesOnly(arr) {
	// your code here
	var output = arr.map((value)=>{
		 
			 return value.age;
		 
	});
	 
	output = output.filter((value)=>{
		return value >=80;
	});
	return output;
}
console.log(
	oldOnesOnly([
		{
			name: 'Angelina Jolie',
			age: 80,
		},
		{
			name: 'Eric Jones',
			age: 2,
		},
		{
			name: 'Paris Hilton',
			age: 5,
		},
		{
			name: 'Kayne West',
			age: 16,
		},
		{
			name: 'Bob Ziroll',
			age: 100,
		},
	])
);
// output: [80, 100]
