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

    // height
    display1.style.height = '100%';
    display2.style.height = '0%';
    display3.style.height = '0%';

    // transform
    display1.style.transform = 'scale(1)';
    display2.style.transform = 'scale(0)';
    display3.style.transform = 'scale(0)';

    // color
    box2.style.backgroundColor = '#fcfcd4';
    brand.style.color = '#95b1b0';
    item1.style.color = '#4f9d9cba';
    item2.style.color = '#4f9d9c';
    item3.style.color = '#4f9d9c';
});

item2.addEventListener('click',()=>{
   
    // height
    display1.style.height = '0%';
    display2.style.height = '85%';
    display3.style.height = '0%';

    // transform
    display1.style.transform = 'scale(0)';
    display2.style.transform = 'scale(1)';
    display3.style.transform = 'scale(0)';

    // margin
    display2.style.marginTop = '8%';

    // color
    box2.style.backgroundColor = '#ffce9f';
    brand.style.color = '#5dbe7c';
    item1.style.color = '#4f9d9c';
    item2.style.color = '#4f9d9cba';
    item3.style.color = '#4f9d9c';
});

item3.addEventListener('click',()=>{
    
    // height
    display1.style.height = '0%';
    display2.style.height = '0%';
    display3.style.height = '100%';

    // transform
    display1.style.transform = 'scale(0)';
    display2.style.transform = 'scale(0)';
    display3.style.transform = 'scale(1)';

    // margin
    display2.style.marginTop = '0%';

    // color
    box2.style.backgroundColor = '#7391e8';
    brand.style.color = '#b9a89a';
    item1.style.color = '#4f9d9c';
    item2.style.color = '#4f9d9c';
    item3.style.color = '#4f9d9cba';
});




//for mobile
mob1.addEventListener('click',()=>{
    

    display1.style.height = '100%';
    display2.style.height = '0%';
    display3.style.height = '0%';

    display1.style.transform = 'scale(1)';
    display2.style.transform = 'scale(0)';
    display3.style.transform = 'scale(0)';
    
    box2.style.backgroundColor = '#fcfcd4';
    brand.style.color = '#95b1b0';
    mob1.style.color = '#4f9d9cba';
    mob2.style.color = '#4f9d9c';
    mob3.style.color = '#4f9d9c';
});

mob2.addEventListener('click',()=>{
   

    display1.style.height = '0%';
    display2.style.height = '85%';
    display3.style.height = '0%';

    display1.style.transform = 'scale(0)';
    display2.style.transform = 'scale(1)';
    display3.style.transform = 'scale(0)';

    display2.style.marginTop = '8%';

    box2.style.backgroundColor = '#ffce9f';
    brand.style.color = '#5dbe7c';
    mob1.style.color = '#4f9d9c';
    mob2.style.color = '#4f9d9cba';
    mob3.style.color = '#4f9d9c';
});

mob3.addEventListener('click',()=>{
    

    display1.style.height = '0%';
    display2.style.height = '0%';
    display3.style.height = '100%';

    display1.style.transform = 'scale(0)';
    display2.style.transform = 'scale(0)';
    display3.style.transform = 'scale(1)';

    display2.style.marginTop = '0%';

    box2.style.backgroundColor = '#7391e8';
    brand.style.color = '#b9a89a';
    mob1.style.color = '#4f9d9c';
    mob2.style.color = '#4f9d9c';
    mob3.style.color = '#4f9d9cba';
});


// for pop

var bar = document.querySelector('.fa-bars');
var popup = document.querySelector('.pop');

bar.addEventListener('mouseover', ()=>{
    popup.style.transform = 'scale(1)';
});

bar.addEventListener('mouseout', ()=>{
    popup.style.transform = 'scale(0)';
});

popup.addEventListener('mouseover',()=>{
     popup.style.transform= 'scale(1)'; 
});

popup.addEventListener('mouseout',()=>{
    popup.style.transform = 'scale(0)'; 
});

