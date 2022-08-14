                //Simple functions

function changeW(ident1, val1) {
	//Width-changing function
	document.getElementById(ident1).style.width = val1;
}

function changeH(ident2, val2) {
	//Height-changing function
	document.getElementById(ident2).style.height = val2;
}

function changeO(ident3, val3) {
	//Opacity-changing function
	document.getElementById(ident3).style.opacity = val3;
}

function changeZ(ident4, val4) {
	//zIndex-changing function
	document.getElementById(ident4).style.zIndex = val4;
}

function changeWH(ident1, val1, ident2, val2) {
	//Width and Height - changing function
	changeW(ident1, val1);
	changeH(ident2, val2);
}

//Compound functions

function changeWHO(ident1, val1, ident2, val2, ident3, val3) {
	//Width, Height and Opacity - changing function
	if (ident1 === -1 && val1 === -1) {
        changeH(ident2, val2); 
		changeO(ident3, val3);
	} else if (ident2 === -1 && val2 === -1) {	
		changeW(ident1, val1);
		changeO(ident3, val3);
    } else {
		changeW(ident1, val1);
	    changeH(ident2, val2);
		changeO(ident3, val3);
	}
}

function changeWHZ(ident1, val1,ident2, val2, ident4, val4) {
	if (ident1 ===  -1 && val1 === -1) {
		changeH(ident2, val2);
		changeZ(ident4, val4);
	} else if (ident2 === -1 && val2 === -1) {
		changeW(ident1, val1);
		changeZ(ident4, val4);
	} else {
		changeW(ident1, val1);
	    changeH(ident2, val2);
		changeZ(ident4, val4);
	}
}

function changeWHOZ(ident1, val1, ident2, val2, ident3, val3, ident4, val4) {
	//Width, Height, Opacity and zIndex - changing function
	if (ident1 === -1 && val1 === -1) {
		if (ident2 === -1 && val2 === -1) { 
		    //If both Width and Height changes are not needed then change only Opacity and zIndex
			changeO(ident3, val3); 
		    changeZ(ident4, val4);
		} else {	
            //else change Height, Opacity and zIndex if only Width change is not needed			
			changeH(ident2, val2);
			changeO(ident3, ident3);
			changeZ(ident4, val4);
		}	
	} else if (ident1 != -1 && val1 != -1 && ident2 === -1 && val2 === -1) {
		changeW(ident1, val1);
		changeO(ident3, val3);
		changeZ(ident4, val4);
	} else {
		changeW(ident1, val1);
		changeH(ident2, val2);
		changeO(ident3, val3);
		changeZ(ident4, val4);
	}	
}	




const menu = document.getElementById('menu'); 
let box = document.querySelector('#menu');
let screenWidth = box.offsetWidth;
let twiceWidth = 2 * screenWidth;
let threeWidth = twiceWidth + screenWidth;

var colors = [
    '#000033',
    '#003333',
    '#003366',
    '#330033',
    '#660066',
    '#663399',
    '#666699',
    '#996699',
    '#99CC66',
    '#CC9999',
    '#CCCC00',
    '#CCCC66',
    '#CCFF33',
    '#FF0066',
    '#FF3333',
    '#FF6600',
    '#FF6666',
    '#FF9900',
    '#FFCC00',
    '#FFFF66'	
];

var makeWhite = (elementId) => { document.getElementById(elementId).style.color = 'white' };

function changeColorFor(elementId) {
	var colorPosition = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1)) + 0;
    var ids = [
		'cake_btn',
	    'donut_btn',
	    'bread_btn',
	    'other_btn'
	]
	
	for (var i = 0; i < 4; i++) {
        if (elementId != ids[i]) {
			makeWhite(ids[i]);
	    } else {
		    document.getElementById(ids[i]).style.color = colors[colorPosition];
		}
	}
    document.getElementById('hr1').style.color = colors[colorPosition];	
};	
	
	
	
var initial = 1;
document.getElementById('cake_btn').addEventListener('click', function() {
    if (initial != 0) {
	    menu.scrollLeft = 0;
		initial = 0;
    }
	changeColorFor('cake_btn');
});	
document.getElementById('donut_btn').addEventListener('click', function() {
    if (initial != screenWidth) { 
	menu.scrollLeft = screenWidth;
	initial = screenWidth;
    }
    changeColorFor('donut_btn');
});	
document.getElementById('bread_btn').addEventListener('click', function() {
    if (initial != twiceWidth) {
		menu.scrollLeft = twiceWidth;
		initial = twiceWidth;
	}
    changeColorFor('bread_btn');	
});	
document.getElementById('other_btn').addEventListener('click', function() {
    if (initial != threeWidth) {
	    menu.scrollLeft = threeWidth;
		initial = threeWidth;
	}
    changeColorFor('other_btn');	
});


	var line1 = {
	    topValue: '7px',
	    rightValue: '4px',
	    transformValue: 'rotate(-35deg)'
    };
    var line2 = {
	    widthValue: '11px',
	    topValue: '8px',
	    leftValue: '2px',
	    transformValue: 'rotate(60deg)'
    };

function transformButton(sectionBtn, firstLine, secondLine) {
	document.getElementById(firstLine).style.top = line1.topValue;
	document.getElementById(firstLine).style.right = line1.rightValue;
	document.getElementById(firstLine).style.transform = line1.transformValue;
	
	document.getElementById(secondLine).style.width = line2.widthValue;
	document.getElementById(secondLine).style.top = line2.topValue;
	document.getElementById(secondLine).style.left = line2.leftValue;
	document.getElementById(secondLine).style.transform = line2.transformValue;
	
	document.getElementById(sectionBtn).style.backgroundColor = '#2b3';
};
	

document.getElementById('sec1Item1_add_btn').addEventListener('click', ()=> {
	transformButton('sec1Item1_add_btn', 'sec1Item1_line1', 'sec1Item1_line2');
	addToCart(1);
	projectNumber();
});

document.getElementById('sec1Item2_add_btn').addEventListener('click', ()=> {
	transformButton('sec1Item2_add_btn', 'sec1Item2_line1', 'sec1Item2_line2');
	addToCart(2);
	projectNumber();
});

document.getElementById('sec1Item3_add_btn').addEventListener('click', ()=> {
	transformButton('sec1Item3_add_btn', 'sec1Item3_line1', 'sec1Item3_line2');
	addToCart(3);
	projectNumber();
});

document.getElementById('sec1Item4_add_btn').addEventListener('click', ()=> {
	transformButton('sec1Item4_add_btn', 'sec1Item4_line1', 'sec1Item4_line2');
	addToCart(4);
	projectNumber();
});

document.getElementById('sec2Item1_add_btn').addEventListener('click', ()=> {
	transformButton('sec2Item1_add_btn', 'sec2Item1_line1', 'sec2Item1_line2');
	addToCart(5);
	projectNumber();
});

document.getElementById('sec2Item2_add_btn').addEventListener('click', ()=> {
	transformButton('sec2Item2_add_btn', 'sec2Item2_line1', 'sec2Item2_line2');
	addToCart(6);
	projectNumber();
});

document.getElementById('sec3Item1_add_btn').addEventListener('click', ()=> {
	transformButton('sec3Item1_add_btn', 'sec3Item1_line1', 'sec3Item1_line2');
	addToCart(7);
	projectNumber();
});

document.getElementById('sec3Item2_add_btn').addEventListener('click', ()=> {
	transformButton('sec3Item2_add_btn', 'sec3Item2_line1', 'sec3Item2_line2');
	addToCart(8);
	projectNumber();
});

document.getElementById('sec3Item3_add_btn').addEventListener('click', ()=> {
	transformButton('sec3Item3_add_btn', 'sec3Item3_line1', 'sec3Item3_line2');
	addToCart(9);
	projectNumber();
});

document.getElementById('sec4Item1_add_btn').addEventListener('click', ()=> {
	transformButton('sec4Item1_add_btn', 'sec4Item1_line1', 'sec4Item1_line2');
	addToCart(10);
	projectNumber();
});

document.getElementById('sec4Item2_add_btn').addEventListener('click', ()=> {
	transformButton('sec4Item2_add_btn', 'sec4Item2_line1', 'sec4Item2_line2');
	addToCart(11);
	projectNumber();
});

document.getElementById('sec4Item3_add_btn').addEventListener('click', ()=> {
	transformButton('sec4Item3_add_btn', 'sec4Item3_line1', 'sec4Item3_line2');
	addToCart(12);
	projectNumber();
});

document.getElementById('sec4Item4_add_btn').addEventListener('click', ()=> {
	transformButton('sec4Item4_add_btn', 'sec4Item4_line1', 'sec4Item4_line2');
	addToCart(13);
	projectNumber();
});


document.getElementById('cart_btn').addEventListener('click', ()=> {
	if (screenWidth <= 600) {
		changeWHOZ('cart', '94%', -1, -1, 'cart', '1', 'cart', '4');
	} else {
		changeWHOZ('cart', '600px', -1, -1, 'cart', '1', 'cart', '4');
	}	
	changeWHOZ(-1, -1, -1, -1, 'generic_bg', '0.7', 'generic_bg', '3');
	changeWHOZ(-1, -1, -1, -1, 'submissionForm', 1, 'submissionForm', '4');
	document.getElementById('cart_btn').style.color = '#003366'/*Active*/;
	document.getElementById('confec_btn').style.color = 'rgb(100, 100, 70)'/*Not Active*/;
});
document.getElementById('exitCart_btn').addEventListener('click', ()=> {
	changeWHOZ('cart', '0px', -1, -1, 'cart', '0', 'cart', '-1');
	changeWHOZ(-1, -1, -1, -1, 'generic_bg', '0', 'generic_bg', '-1');
	changeWHOZ(-1, -1, -1, -1, 'submissionForm', 0, 'submissionForm', '-2');
	document.getElementById('cart_btn').style.color = 'rgb(100, 100, 70)'/*Not Active*/;
	document.getElementById('confec_btn').style.color = '#003366'/*Active*/;
});


document.getElementById('social_btn').addEventListener('click', ()=> { 
if (screenWidth <= 480) {
  changeWHOZ('social_bar', '60%', -1, -1, 'social_bar', '1', 'social_bar', '4');
} else {
  changeWHOZ('social_bar', '350px', -1, -1, 'social_bar', '1', 'social_bar', '4');
}
	
	changeWHOZ(-1, -1, -1, -1, 'generic_bg', '0.7', 'generic_bg', '3');
	document.getElementById('social_btn').style.color = '#003366'/*Active*/;
	document.getElementById('confec_btn').style.color = 'rgb(100, 100, 70)'/*Not Active*/;
});
document.getElementById('exitSocial_btn').addEventListener('click', ()=> {
	changeWHOZ('social_bar', '0%', -1, -1, 'social_bar', '0', 'social_bar', '-1');
	changeWHOZ(-1, -1, -1, -1, 'generic_bg', '0', 'generic_bg', '-1');
	document.getElementById('social_btn').style.color = 'rgb(100, 100, 70)'/*Not Active*/;
	document.getElementById('confec_btn').style.color = '#003366'/*Active*/;
});


document.getElementById('contact_btn').addEventListener('click', ()=> {
	changeWHOZ('contact_bar', '80%', -1, -1, 'contact_bar', '1', 'contact_bar', '4');
	changeWHOZ(-1, -1, -1, -1, 'generic_bg', '0.7', 'generic_bg', '3');
	document.getElementById('contact_btn').style.color = '#003366'/*Active*/;
	document.getElementById('confec_btn').style.color = 'rgb(100, 100, 70)'/*Not Active*/;
});
document.getElementById('exitContact_btn').addEventListener('click', ()=> {
	changeWHOZ('contact_bar', '0%', -1, -1, 'contact_bar', '0', 'contact_bar', '-1');
	changeWHOZ(-1, -1, -1, -1, 'generic_bg', '0', 'generic_bg', '-1');
	document.getElementById('contact_btn').style.color = 'rgb(100, 100, 70)'/*Not Active*/;
	document.getElementById('confec_btn').style.color = '#003366'/*Active*/;
});

document.getElementById('send_btn').addEventListener('click', () => {
    alert('Thank you for visiting our template website. You can get in touch with us through any of our social media protocols in the Social tab. Feel free to keep exploring!');
});

(changeWHOZ(-1, -1, -1, -1, 'submissionForm', 0, 'submissionForm', '-2'));
