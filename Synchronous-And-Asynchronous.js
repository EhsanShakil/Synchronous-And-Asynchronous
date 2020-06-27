//Synchronous & Asynchronous Programming

//What does synchronous and asynchronous means?

//Synchronous means you can only execute one thing at a time

//Asynchronous means you can execute multiple thing at a time 
//without waiting to complete the first execution in order to move into next one.

//Synchronous Code

console.log("number 1") 			//This will run first 

console.log("number 2") 			//This will run second

console.log("number 3") 			//This will run third

//Asynchronous Code

const asynchronous1 = () => {
	setTimeout(() => {
	console.log("Number 1")
	}, 3000)
}
asynchronous1()						//This will run third

const asynchronous2 = () => {
	setTimeout(() => {
	console.log("Number 2")
	}, 2000)
}
asynchronous2()						//This will run second

const asynchronous3 = () => {
	setTimeout(() => {
	console.log("Number 3")
	}, 1000)
}
asynchronous3()  					//This will run first 