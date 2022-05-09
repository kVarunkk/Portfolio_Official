var item1 = document.querySelector('.item1');
var item2 = document.querySelector('.item2');
var item3 = document.querySelector('.item3');

var mob1 = document.querySelector('.mob-li-1');
var mob2 = document.querySelector('.mob-li-2');
var mob3 = document.querySelector('.mob-li-3');

var display1 = document.querySelector('.about-me');
var display2 = document.querySelector('.container');
var display3 = document.querySelector('.hire-me');

var brand = document.querySelector('.brand');
var box2 = document.querySelector('.box2');



//for desktop
item1.addEventListener('click',()=>{
    display1.style.display = 'block';
    display2.style.display = 'none';
    display3.style.display = 'none';
    box2.style.backgroundColor = '#fcfcd4';
    brand.style.color = '#95b1b0';
    item1.style.color = '#4f9d9cba';
    item2.style.color = '#4f9d9c';
    item3.style.color = '#4f9d9c';
});

item2.addEventListener('click',()=>{
    display1.style.display = 'none';
    display2.style.display = 'block';
    display3.style.display = 'none';
    box2.style.backgroundColor = '#ffce9f';
    brand.style.color = '#5dbe7c';
    item1.style.color = '#4f9d9c';
    item2.style.color = '#4f9d9cba';
    item3.style.color = '#4f9d9c';
});

item3.addEventListener('click',()=>{
    display1.style.display = 'none';
    display2.style.display = 'none';
    display3.style.display = 'block';
    box2.style.backgroundColor = '#7391e8';
    brand.style.color = '#b9a89a';
    item1.style.color = '#4f9d9c';
    item2.style.color = '#4f9d9c';
    item3.style.color = '#4f9d9cba';
});




//for mobile
mob1.addEventListener('click',()=>{
    display1.style.display = 'block';
    display2.style.display = 'none';
    display3.style.display = 'none';
    box2.style.backgroundColor = '#fcfcd4';
    brand.style.color = '#95b1b0';
    mob1.style.color = '#4f9d9cba';
    mob2.style.color = '#4f9d9c';
    mob3.style.color = '#4f9d9c';
});

mob2.addEventListener('click',()=>{
    display1.style.display = 'none';
    display2.style.display = 'block';
    display3.style.display = 'none';
    box2.style.backgroundColor = '#ffce9f';
    brand.style.color = '#5dbe7c';
    mob1.style.color = '#4f9d9c';
    mob2.style.color = '#4f9d9cba';
    mob3.style.color = '#4f9d9c';
});

mob3.addEventListener('click',()=>{
    display1.style.display = 'none';
    display2.style.display = 'none';
    display3.style.display = 'block';
    box2.style.backgroundColor = '#7391e8';
    brand.style.color = '#b9a89a';
    mob1.style.color = '#4f9d9c';
    mob2.style.color = '#4f9d9c';
    mob3.style.color = '#4f9d9cba';
});



