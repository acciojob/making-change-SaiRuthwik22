const makeChange = (c) => {
  // your name here
	let den = ["q","d","n","p"]
let cur =[25,10,5,1]
let obj = {}

for(let i=0;i<den.length;i++){
    let count = 0
    while(c>=cur[i]){
        c -= cur[i]
        count+=1
    }
    obj[den[i]]=count
}
return obj
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
