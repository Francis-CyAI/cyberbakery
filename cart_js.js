var cartContainer = {
	chocolateCake: 0,
	cascadingCake: 0,
	peanutChocoCake: 0,
	funfettiCake: 0,
	cookieAndDoughnuts: 0,
	bostonDoughnuts: 0,
	bananaBread: 0,
	englishMuffins: 0,
	woolRollBread: 0,
	beagle: 0,
	clubSandwich: 0,
	nutellaCroissants: 0,
	miniVeganCroissants: 0
};

function projectNumber() {
    var number = (cartContainer.chocolateCake + cartContainer.cascadingCake + cartContainer.peanutChocoCake + cartContainer.funfettiCake + cartContainer.cookieAndDoughnuts + cartContainer.bostonDoughnuts + cartContainer.bananaBread + cartContainer.englishMuffins + cartContainer.woolRollBread + cartContainer.beagle + cartContainer.clubSandwich + cartContainer.nutellaCroissants + cartContainer.miniVeganCroissants);
        
        document.getElementById('totalQty').innerHTML = number;
}

function incrementQty(itemId) {
    if(itemId === 1) {
		cartContainer.chocolateCake += 1;
    } else if(itemId === 2) {
		cartContainer.cascadingCake += 1;     
    } else if(itemId === 3) {
		cartContainer.peanutChocoCake += 1;
    } else if(itemId === 4) {
		cartContainer.funfettiCake += 1;     
    } else if(itemId === 5) {
		cartContainer.cookieAndDoughnuts += 1;     
    } else if(itemId === 6) {
		cartContainer.bostonDoughnuts += 1;     
    } else if(itemId === 7) {
		cartContainer.bananaBread += 1;     
    } else if(itemId === 8) {
		cartContainer.englishMuffins += 1;     
    } else if(itemId === 9) {
		cartContainer.woolRollBread += 1;     
    } else if(itemId === 10) {
		cartContainer.beagle += 1;     
    } else if(itemId === 11) {
		cartContainer.clubSandwich += 1;     
    } else if(itemId === 12) {
		cartContainer.nutellaCroissants += 1;     
    } else if(itemId === 13) {
		cartContainer.miniVeganCroissants += 1;     
    }
    
};

function decrementQty(itemId) {
    if(itemId === 1) {
	if(cartContainer.chocolateCake > 0) {
	cartContainer.chocolateCake -= 1;
	}
    } else if(itemId === 2) {
    if(cartContainer.cascadingCake > 0) {
	cartContainer.cascadingCake -= 1;
	}    
    } else if(itemId === 3) {
    if(cartContainer.peanutChocoCake > 0) {
	cartContainer.peanutChocoCake -= 1;
	}
    } else if(itemId === 4) {
    if(cartContainer.funfettiCake > 0) {
	cartContainer.funfettiCake -= 1;
	}    
    } else if(itemId === 5) {
    if(cartContainer.cookieAndDoughnuts > 0) {
	cartContainer.cookieAndDoughnuts -= 1;
	}     
    } else if(itemId === 6) {
    if(cartContainer.bostonDoughnuts > 0) {
	cartContainer.bostonDoughnuts -= 1;
	}    
    } else if(itemId === 7) {
    if(cartContainer.bananaBread > 0) {
	cartContainer.bananaBread -= 1;
	}    
    } else if(itemId === 8) {
    if(cartContainer.englishMuffins > 0) {
	cartContainer.englishMuffins -= 1;
	}   
    } else if(itemId === 9) {
    if(cartContainer.woolRollBread > 0) {
	cartContainer.woolRollBread -= 1;
	}    
    } else if(itemId === 10) {
    if(cartContainer.beagle > 0) {
	cartContainer.beagle -= 1;
	}     
    } else if(itemId === 11) {
    if(cartContainer.clubSandwich > 0) {
	cartContainer.clubSandwich -= 1;
	}  
    } else if(itemId === 12) {
    if(cartContainer.nutellaCroissants > 0) {
	cartContainer.nutellaCroissants -= 1;
	}   
    } else if(itemId === 13) {
    if(cartContainer.miniVeganCroissants > 0) {
	cartContainer.miniVeganCroissants -= 1;
	}    
    }
    
};


function projectQty(itemId) {
    if(itemId === 1) {
    document.getElementById('cartItem1Output').innerHTML = cartContainer.chocolateCake;	
    
    } else if(itemId === 2) {
    document.getElementById('cartItem2Output').innerHTML = cartContainer.cascadingCake;   
    } else if(itemId === 3) {
    document.getElementById('cartItem3Output').innerHTML = cartContainer.peanutChocoCake;
    } else if(itemId === 4) {
    document.getElementById('cartItem4Output').innerHTML = cartContainer.funfettiCake;   
    } else if(itemId === 5) {
    document.getElementById('cartItem5Output').innerHTML = cartContainer.cookieAndDoughnuts;   
    } else if(itemId === 6) {
    document.getElementById('cartItem6Output').innerHTML = cartContainer.bostonDoughnuts;    
    } else if(itemId === 7) {
    document.getElementById('cartItem7Output').innerHTML = cartContainer.bananaBread;   
    } else if(itemId === 8) {
    document.getElementById('cartItem8Output').innerHTML = cartContainer.englishMuffins;     
    } else if(itemId === 9) {
    document.getElementById('cartItem9Output').innerHTML = cartContainer.woolRollBread;    
    } else if(itemId === 10) {
    document.getElementById('cartItem10Output').innerHTML = cartContainer.beagle;     
    } else if(itemId === 11) {
    document.getElementById('cartItem11Output').innerHTML = cartContainer.clubSandwich;     
    } else if(itemId === 12) {
    document.getElementById('cartItem12Output').innerHTML = cartContainer.nutellaCroissants;   
    } else if(itemId === 13) {
    document.getElementById('cartItem13Output').innerHTML = cartContainer.miniVeganCroissants;  
    }
}


var position = 1;

var cartItemTop = 0;

var  fromTop = ['0px', '120px', '270px', '430px', '570px', '720px', '870px', '1020px', '1170px', '1320px', '1470px', '1620px', '1770px', '1920px'];

function itemPositionPlus() {
	var value = fromTop[position];
	position += 1;	
	cartItemTop = value;
};


function addToCart(itemId) {

	itemPositionPlus();

	if(itemId === 1) {
		document.getElementById('cartItem1').style.opacity = '1';
	//	document.getElementById('cartItem1').style.zIndex = 'inherit';
		document.getElementById('cartItem1').style.top = cartItemTop;
	} else if(itemId === 2) {
		document.getElementById('cartItem2').style.opacity = '1';
	//	document.getElementById('cartItem2').style.zIndex = 'inherit';
		document.getElementById('cartItem2').style.top = cartItemTop;     
	} else if(itemId === 3) {
		document.getElementById('cartItem3').style.opacity = '1';
	//	document.getElementById('cartItem3').style.zIndex = 'inherit';
		document.getElementById('cartItem3').style.top = cartItemTop;
	} else if(itemId === 4) {
		document.getElementById('cartItem4').style.opacity = '1';
	//	document.getElementById('cartItem4').style.zIndex = 'inherit';
		document.getElementById('cartItem4').style.top = cartItemTop;    
	} else if(itemId === 5) {
		document.getElementById('cartItem5').style.opacity = '1';
	//	document.getElementById('cartItem5').style.zIndex = 'inherit';
		document.getElementById('cartItem5').style.top = cartItemTop;     
	} else if(itemId === 6) {
		document.getElementById('cartItem6').style.opacity = '1';
	//	document.getElementById('cartItem6').style.zIndex = 'inherit';
		document.getElementById('cartItem6').style.top = cartItemTop;    
	} else if(itemId === 7) {
		document.getElementById('cartItem7').style.opacity = 1;
	//	document.getElementById('cartItem7').style.zIndex = 'inherit';
		document.getElementById('cartItem7').style.top = cartItemTop;    
	} else if(itemId === 8) {
		document.getElementById('cartItem8').style.opacity = 1;
	//	document.getElementById('cartItem8').style.zIndex = 'inherit';
		document.getElementById('cartItem8').style.top = cartItemTop;    
	} else if(itemId === 9) {
		document.getElementById('cartItem9').style.opacity = '1';
	//	document.getElementById('cartItem9').style.zIndex = 'inherit';
		document.getElementById('cartItem9').style.top = cartItemTop;     
	} else if(itemId === 10) {
		document.getElementById('cartItem10').style.opacity = '1';
	//	document.getElementById('cartItem1').style.zIndex = 'inherit';
		document.getElementById('cartItem10').style.top = cartItemTop;     
	} else if(itemId === 11) {
		document.getElementById('cartItem11').style.opacity = '1';
	//	document.getElementById('cartItem11').style.zIndex = 'inherit';
		document.getElementById('cartItem11').style.top = cartItemTop;     
	} else if(itemId === 12) {
		document.getElementById('cartItem12').style.opacity = '1';
	//	document.getElementById('cartItem12').style.zIndex = 'inherit';
		document.getElementById('cartItem12').style.top = cartItemTop;     
	} else if(itemId === 13) {
		document.getElementById('cartItem13').style.opacity = '1';
	//	document.getElementById('cartItem13').style.zIndex = 'inherit';
		document.getElementById('cartItem13').style.top = cartItemTop;     
	}
	incrementQty(itemId);
	projectQty(itemId);
};



document.getElementById('cartItem1+btn').addEventListener('click', () => {
    incrementQty(1);
    projectQty(1);
    projectNumber();
});
document.getElementById('cartItem1-btn').addEventListener('click', () => {
    decrementQty(1);
    projectQty(1);
    projectNumber();
});

document.getElementById('cartItem2+btn').addEventListener('click', () => {
    incrementQty(2);
    projectQty(2);
    projectNumber();
});
document.getElementById('cartItem2-btn').addEventListener('click', () => {
    decrementQty(2);
    projectQty(2);
    projectNumber();
});

document.getElementById('cartItem3+btn').addEventListener('click', () => {
    incrementQty(3);
    projectQty(3);
    projectNumber();
});
document.getElementById('cartItem3-btn').addEventListener('click', () => {
    decrementQty(3);
    projectQty(3);
    projectNumber();
});

document.getElementById('cartItem4+btn').addEventListener('click', () => {
    incrementQty(4);
    projectQty(4);
    projectNumber();
});
document.getElementById('cartItem4-btn').addEventListener('click', () => {
    decrementQty(4);
    projectQty(4);
    projectNumber();
});

document.getElementById('cartItem5+btn').addEventListener('click', () => {
    incrementQty(5);
    projectQty(5);
    projectNumber();
});
document.getElementById('cartItem5-btn').addEventListener('click', () => {
    decrementQty(5);
    projectQty(5);
    projectNumber();
});

document.getElementById('cartItem6+btn').addEventListener('click', () => {
    incrementQty(6);
    projectQty(6);
    projectNumber();
});
document.getElementById('cartItem6-btn').addEventListener('click', () => {
    decrementQty(6);
    projectQty(6);
    projectNumber();
});

document.getElementById('cartItem7+btn').addEventListener('click', () => {
    incrementQty(7);
    projectQty(7);
    projectNumber();
});
document.getElementById('cartItem7-btn').addEventListener('click', () => {
    decrementQty(7);
    projectQty(7);
    projectNumber();
});

document.getElementById('cartItem8+btn').addEventListener('click', () => {
    incrementQty(8);
    projectQty(8);
    projectNumber();
});
document.getElementById('cartItem8-btn').addEventListener('click', () => {
    decrementQty(8);
    projectQty(8);
    projectNumber();
});

document.getElementById('cartItem9+btn').addEventListener('click', () => {
    incrementQty(9);
    projectQty(9);
    projectNumber();
});
document.getElementById('cartItem9-btn').addEventListener('click', () => {
    decrementQty(9);
    projectQty(9);
    projectNumber();
});

document.getElementById('cartItem10+btn').addEventListener('click', () => {
    incrementQty(10);
    projectQty(10);
    projectNumber();
});
document.getElementById('cartItem10-btn').addEventListener('click', () => {
    decrementQty(10);
    projectQty(10);
    projectNumber();
});

document.getElementById('cartItem11+btn').addEventListener('click', () => {
    incrementQty(11);
    projectQty(11);
    projectNumber();
});
document.getElementById('cartItem11-btn').addEventListener('click', () => {
    decrementQty(11);
    projectQty(11);
    projectNumber();
});

document.getElementById('cartItem12+btn').addEventListener('click', () => {
    incrementQty(12);
    projectQty(12);
    projectNumber();
});
document.getElementById('cartItem12-btn').addEventListener('click', () => {
    decrementQty(12);
    projectQty(12);
    projectNumber();
});

document.getElementById('cartItem13+btn').addEventListener('click', () => {
    incrementQty(13);
    projectQty(13);
    projectNumber();
});
document.getElementById('cartItem13-btn').addEventListener('click', () => {
    decrementQty(13);
    projectQty(13);
    projectNumber();
});

function submit() {

	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  		url = 'whatsapp://send?phone={tel}&text={info}';
  		} else {
  		url = 'https://web.whatsapp.com/send?phone={tel}&text={info}';
}
  		
  		var info = "Hi! I just checked out your template website, and I'd like to know more about your services. 😃";
  		
		var tel = +260769551576;
		
		url = url.replace('{tel}', tel).replace('{info}', info);
		
  		window.open(url);
	
};

document.getElementById('checkOut').addEventListener('click', () => {
    submit();
});