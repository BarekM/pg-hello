function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function bussinessCard() {

	info =  'Hi, I am your bussiness card :-)' + '\n' +
			'=====' + '\n' +
			'Name    : Jan Kowalski' + '\n' + 
			'Surname : Kowalski'  + device.cordova + '\n' + 
			'Group: 1211' + device.platform + '\n' + 
			'City    : Krakow'     + device.uuid     + '\n';

	navigator.notification.alert(info);
	
}
