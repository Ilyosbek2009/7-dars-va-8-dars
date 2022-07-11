let local = document.querySelector(".local_page");
let span = document.querySelector(".ili");
let btn = document.querySelector(".sssssssss"),
 wrap = document.querySelector(".salalal"),
 wrapp = document.querySelector(".wrapperr");

btn.addEventListener("click", function () {
    local.style.transform = "translateX(0px)";
});
span.addEventListener("click", function () {
    local.style.transform = "translateX(400px)"
});
wrap.addEventListener("click", function () {
    wrapp.style.display = "block";
});
wrap.addEventListener("dblclick", function () {
    wrapp.style.display = "none";
});
let btn222 = document.querySelector("#btnnn222"),
 btn33 = document.querySelector(".bnbnbnbnbn"),
 ppp = document.querySelector(".salsalsalsalaslas");

 btn222.addEventListener("click",function () {
    ppp.value ++;
    p.value ++;
});
btn33.addEventListener("click",function () {
    ppp.value --;
    p.value --;
    if(ppp.value <= 0, p.value <= 0){
        ppp.value = 0;
        p.value = 0;
    }
    // else{
    //     pp.value = parseInt(ppp.value) - 1;
    // }
});
let btn21 = document.querySelector(".btnnnb2"),
    inp2 = document.querySelector(".salsalsalsalaslasa"),
    btn22 = document.querySelector(".bnbnbnbnbnnnss");

btn21.addEventListener("click", function () {
    inp2.value ++;
    pppp2.value ++;
});
btn22.addEventListener("click", function () {
    inp2.value --;
    pppp2.value --;
    if (inp2.value <= 0, pppp2.value <= 0) {
        inp2.value = 0;
        pppp2.value =0;
    }
});

let btn44 = document.querySelector(".btnnnnd2"),
btn55 = document.querySelector(".bnbnbndsddsbnbn"),
pp = document.querySelector(".salsalsdfdffdfalsalaslas");

btn44.addEventListener("click",function () {
    pp.value ++;
    pp2.value ++;
});
btn55.addEventListener("click",function () {
    pp.value --;
    pp2.value --;
    if(pp.value <= 0, pp2.value <= 0){
        pp.value = 0;
        pp2.value = 0;
    }
    // else{
    //     pp.value = parseInt(pp.value) - 1;
    // }
});
let section_1 = document.querySelector(".section_1"),
section_2 = document.querySelector(".section_2"),
section_3 = document.querySelector(".section_3"),
section_4 = document.querySelector(".section_4");

const data = [
    {
        img: "./img/p1 1.png",
        p:"BAMBOO WHITE TEE",
        button:"add"
    },
    {
        img: "./img/p2 1.png",
        p:"WHITE DROP SHOULDER TEE",
        button:"add"
    },
    {
        img: "./img/p3 1.png",
        p:"WHITE SPORT SHIRT",
        button:"add"
    },
    {
        img: "./img/p4 1.png",
        p:"BAMBOO GREY GREEN",
        button:"add"
    },
    {
        img: "./img/p5 1.png",
        p:"GREY EVERYDAY HOODIE",
        button:"add"
    },
    {
        img: "./img/p6 1.png",
        p:"GREY GREEN OVERSIZED HOODIE W MASK",
        button:"add"
    },
    
    
];
data.map((item)=>{
    section_1.innerHTML += `
    <div class="div_1">
        <img src="${item.img}" alt="">
        <p>${item.p}</p>
        <button class="sala">${item.button}</button>
    </div>
    `;
}
);
data.map((item)=>{
    section_2.innerHTML += `
    <div class="div_1">
        <img src="${item.img}" alt="">
        <p>${item.p}</p>
        <button class="sala">${item.button}</button>
    </div>
    `;
}
);
data.map((item)=>{
    section_3.innerHTML += `
    <div class="div_1">
        <img src="${item.img}" alt="">
        <p>${item.p}</p>
        <button class="sala">${item.button}</button>
    </div>
    `;
}
);
data.map((item)=>{
    section_4.innerHTML += `
    <div class="div_1">
        <img src="${item.img}" alt="">
        <p>${item.p}</p>
        <button class="sala">${item.button}</button>
    </div>
    `;
}
);



let p = document.querySelector(".inputbek"),
    img = document.querySelector(".sasalloom"),
    img2 = document.querySelector(".imgwm2"),
    pp2 = document.querySelector(".inininline"),
    pppp2 = document.querySelector(".ininnininiiinin");


