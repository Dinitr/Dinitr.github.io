/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
 	function Order(ValueText) {
	   var NewWin = window.open('order.html');
		setTimeout(function () {
	        wrt(NewWin, ValueText);
	    },1000);
	}
	function wrt(ValueObj, ValText) {
		var obj=ValueObj.document.getElementById('message-form3-1l');
		if (obj) {
		    obj.innerHTML=ValText;
        return;
	    }
	}

