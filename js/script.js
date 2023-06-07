var timer = null;
var countdownNumber = 10;
var changeState = function (state){
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById ('countdown').innerHTML = countdownNumber;

	//countdown
	if (state==2) {
		timer = setInterval(function () {
			countdownNumber = countdownNumber-1;
			document.getElementById ('countdown').innerHTML = countdownNumber;
			if (countdownNumber<=-1) {				
				changeState(3);
			}
		},500);
		
	}else if (state==3) {
		var success = setTimeout(function ()
			{
				var randomNumber = Math.round(Math.random()*10);
				console.log('randomNumber',randomNumber)
				//success
				if (randomNumber>1) {
					changeState(4);
				//failure
				}else {
					changeState(5);
				}
			}, 2000);
	};
}

























/*var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;
		if(currentClassName== 'cool') {
			document.getElementById ('cool').className = 'cool red';
		} else {
			document.getElementById ('cool').className = 'cool';
		}
	//document.getElementById ('cool').className = 'cool red';
}
var SayMyName = function (name) {
	alert('My name is: '+name);
}
var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat1','seat2','seat3','seat4'],
			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			}
		};
		console.log('Hello there');*/