"using strict";
let totalMoney = 100000000000; //Total Money of Bill Gates
//**** CHOSING THE BUY BUTTONS ELEMENTS FROM HTML FILE ****//
const btn1El = document.querySelector(".myButton");
const btn2El = document.querySelector(".myButton2");
const btn3El = document.querySelector(".myButton3");
const btn4El = document.querySelector(".myButton4");
const btn5El = document.querySelector(".myButton5");
const btn6El = document.querySelector(".myButton6");
const btn7El = document.querySelector(".myButton7");
const btn8El = document.querySelector(".myButton8");
const btn9El = document.querySelector(".myButton9");
const btn10El = document.querySelector(".myButton10");
const btn11El = document.querySelector(".myButton11");
const btn12El = document.querySelector(".myButton12");
const btn13El = document.querySelector(".myButton13");
const btn14El = document.querySelector(".myButton14");
const btn15El = document.querySelector(".myButton15");
const btn16El = document.querySelector(".myButton16");
const btn17El = document.querySelector(".myButton17");
const btn18El = document.querySelector(".myButton18");
const btn19El = document.querySelector(".myButton19");
const btn20El = document.querySelector(".myButton20");
const btn21El = document.querySelector(".myButton21");
const btn22El = document.querySelector(".myButton22");
const btn23El = document.querySelector(".myButton23");
const btn24El = document.querySelector(".myButton24");
const btn25El = document.querySelector(".myButton25");
const btn26El = document.querySelector(".myButton26");
const btn27El = document.querySelector(".myButton27");
const btn28El = document.querySelector(".myButton28");
const btn29El = document.querySelector(".myButton29");
const btn30El = document.querySelector(".myButton30");
const btn31El = document.querySelector(".myButton31");
const btn32El = document.querySelector(".myButton32");
const btn33El = document.querySelector(".myButton33");
const btn34El = document.querySelector(".myButton34");
const btn35El = document.querySelector(".myButton35");
const btn36El = document.querySelector(".myButton36");
const btn37El = document.querySelector(".myButton37");
const btn38El = document.querySelector(".myButton38");
const btn39El = document.querySelector(".myButton39");
const btn40El = document.querySelector(".myButton40");
const btn41El = document.querySelector(".myButton41");
const btn42El = document.querySelector(".myButton42");
const btn43El = document.querySelector(".myButton43");
const btn44El = document.querySelector(".myButton44");
const btn45El = document.querySelector(".myButton45");
const moneyLabel = document.querySelector(".moneyValue");

//**** CHOSING THE TEXT AREA ELEMENTS FROM HTML FILE ****//
const btn1Text = document.querySelector(".bigmac3");
const btn2Text = document.querySelector(".flipflop3");
const btn3Text = document.querySelector(".cola3");
const btn4Text = document.querySelector(".movie3");
const btn5Text = document.querySelector(".book3");
const btn6Text = document.querySelector(".lobster3");
const btn7Text = document.querySelector(".game3");
const btn8Text = document.querySelector(".amazon3");
const btn9Text = document.querySelector(".netflix3");
const btn10Text = document.querySelector(".shoe3");
const btn11Text = document.querySelector(".airpod3");
const btn12Text = document.querySelector(".console3");
const btn13Text = document.querySelector(".drone3");
const btn14Text = document.querySelector(".phone3");
const btn15Text = document.querySelector(".bike3");
const btn16Text = document.querySelector(".kitten3");
const btn17Text = document.querySelector(".puppy3");
const btn18Text = document.querySelector(".auto3");
const btn19Text = document.querySelector(".horse3");
const btn20Text = document.querySelector(".farm3");
const btn21Text = document.querySelector(".bag3");
const btn22Text = document.querySelector(".tab3");
const btn23Text = document.querySelector(".wine3");
const btn24Text = document.querySelector(".ring3");
const btn25Text = document.querySelector(".boat3");
const btn26Text = document.querySelector(".rolex3");
const btn27Text = document.querySelector(".ford3");
const btn28Text = document.querySelector(".tesla3");
const btn29Text = document.querySelector(".truck3");
const btn30Text = document.querySelector(".ferrari3");
const btn31Text = document.querySelector(".home3");
const btn32Text = document.querySelector(".gold3");
const btn33Text = document.querySelector(".hamburger3");
const btn34Text = document.querySelector(".super3");
const btn35Text = document.querySelector(".yacht3");
const btn36Text = document.querySelector(".tank3");
const btn37Text = document.querySelector(".formal3");
const btn38Text = document.querySelector(".helicopter3");
const btn39Text = document.querySelector(".mansion3");
const btn40Text = document.querySelector(".make3");
const btn41Text = document.querySelector(".plane3");
const btn42Text = document.querySelector(".lisa3");
const btn43Text = document.querySelector(".sky3");
const btn44Text = document.querySelector(".ship3");
const btn45Text = document.querySelector(".basket3");

//**** SETTINGS THE PRICE OF HTML ELEMENTS ****//
const bigMac = 2;                       const flipFlops = 3;                        const cocaCola = 5;
const movieTicket = 12;                 const book = 15;                            const lobsterDinner = 45;
const videoGame = 60;                   const amazonEcho = 99;                      const netflixYear = 100;
const airJordanShoe = 125;              const airpods = 199;                        const gamingConsole = 299;
const drone = 350;                      const smartPhone = 699;                     const bike = 800;
const kitten = 1500;                    const puppy = 1500;                         const autoRickshaw = 2300;
const horse = 2500;                     const acreOfFarm = 3000;                    const handBag = 5500;
const hotTub = 6000;                    const luxuryWine = 7000;                    const diamondRing = 10000;
const jetSki = 12000;                   const rolex = 15000;                        const fordCar = 30000;
const teslaCar = 75000;                 const monsterTruck = 150000;                const ferrariCar = 250000;
const singleFamilyHome = 300000;        const goldBar = 700000;                     const buyMcDonalds = 700000;
const superbowlAd = 5250000;            const yacht = 7500000;                      const m1Tank = 8000000;
const formula1Car = 15000000;           const apacheHelicopter = 31000000;          const mansionHouse = 45000000;
const makeMovie = 100000000;            const boeingPlane = 148000000;              const monaLisaPicture = 780000000;
const skyscraperHome = 850000000;       const cruiseShip = 930000000;               const nbaBasketTeam = 2120000000;


//CALCULATE THE TOTAL MONEY - AN OBJECT USER SELECT

const calculateThePrice = function (buySomething) {
  totalMoney = totalMoney - buySomething;
  moneyLabel.textContent = `$ ${totalMoney}`;
};

const calculateThePriceFromText = function (togetherBuy, buySomething2, minusProduct) {
  let multipleThings = (togetherBuy * buySomething2) - minusProduct;
  totalMoney = totalMoney - multipleThings;
  moneyLabel.textContent = `$ ${totalMoney}`;
};

// ADD CLICK EVENT TO BUY BUTTONS//
btn1El.addEventListener("click", function () {  
  calculateThePrice(bigMac);
  calculateThePriceFromText(btn1Text.value, bigMac, bigMac);    
});

btn2El.addEventListener("click", function () {
  calculateThePrice(flipFlops);
  calculateThePriceFromText(btn2Text.value, flipFlops, flipFlops); 
});

btn3El.addEventListener("click", function () {
  calculateThePrice(cocaCola);
  calculateThePriceFromText(btn3Text.value, cocaCola, cocaCola); 
});
btn4El.addEventListener("click", function () {
  calculateThePrice(movieTicket);
  calculateThePriceFromText(btn4Text.value, movieTicket, movieTicket)
});
btn5El.addEventListener("click", function () {
  calculateThePrice(book);
  calculateThePriceFromText(btn5Text.value, book, book)  
});
btn6El.addEventListener("click", function () {
  calculateThePrice(lobsterDinner);
  calculateThePriceFromText(btn6Text.value, lobsterDinner, lobsterDinner)  
});
btn7El.addEventListener("click", function () {
  calculateThePrice(videoGame);
  calculateThePriceFromText(btn7Text.value, videoGame, videoGame)  
});
btn8El.addEventListener("click", function () {
  calculateThePrice(amazonEcho);
  calculateThePriceFromText(btn8Text.value, amazonEcho, amazonEcho)
});
btn9El.addEventListener("click", function () {
  calculateThePrice(netflixYear);
  calculateThePriceFromText(btn9Text.value, netflixYear, netflixYear)
});
btn10El.addEventListener("click", function () {
  calculateThePrice(drone);
  calculateThePriceFromText(btn10Text.value, drone, drone)
});
btn11El.addEventListener("click", function () {
  calculateThePrice(smartPhone);
  calculateThePriceFromText(btn11Text.value, smartPhone, smartPhone)
});
btn12El.addEventListener("click", function () {
  calculateThePrice(bike);
  calculateThePriceFromText(btn12Text.value, bike, bike)
});
btn13El.addEventListener("click", function () {
  calculateThePrice(kitten);
  calculateThePriceFromText(btn13Text.value, kitten, kitten)
});
btn14El.addEventListener("click", function () {
  calculateThePrice(puppy);
  calculateThePriceFromText(btn14Text.value, puppy, puppy)
});
btn15El.addEventListener("click", function () {
  calculateThePrice(autoRickshaw);
  calculateThePriceFromText(btn15Text.value, autoRickshaw, autoRickshaw)
});
btn16El.addEventListener("click", function () {
  calculateThePrice(horse);
  calculateThePriceFromText(btn16Text.value, horse, horse)
});
btn17El.addEventListener("click", function () {
  calculateThePrice(acreOfFarm);
  calculateThePriceFromText(btn17Text.value, acreOfFarm, acreOfFarm)
});
btn18El.addEventListener("click", function () {
  calculateThePrice(handBag);
  calculateThePriceFromText(btn18Text.value, handBag, handBag)
});
btn19El.addEventListener("click", function () {
  calculateThePrice(hotTub);
  calculateThePriceFromText(btn19Text.value, hotTub, hotTub)
});
btn20El.addEventListener("click", function () {
  calculateThePrice(luxuryWine);
  calculateThePriceFromText(btn20Text.value, luxuryWine, luxuryWine)
});
btn21El.addEventListener("click", function () {
  calculateThePrice(diamondRing);
  calculateThePriceFromText(btn21Text.value, diamondRing, diamondRing)
});
btn22El.addEventListener("click", function () {
  calculateThePrice(jetSki);
  calculateThePriceFromText(btn22Text.value, jetSki, jetSki)
});
btn23El.addEventListener("click", function () {
  calculateThePrice(rolex);
  calculateThePriceFromText(btn23Text.value, rolex, rolex)
});
btn24El.addEventListener("click", function () {
  calculateThePrice(fordCar);
  calculateThePriceFromText(btn24Text.value, fordCar, fordCar)
});
btn25El.addEventListener("click", function () {
  calculateThePrice(teslaCar);
  calculateThePriceFromText(btn25Text.value, teslaCar, teslaCar)
});
btn26El.addEventListener("click", function () {
  calculateThePrice(monsterTruck);
  calculateThePriceFromText(btn26Text.value, monsterTruck, monsterTruck)
});
btn27El.addEventListener("click", function () {
  calculateThePrice(ferrariCar);
  calculateThePriceFromText(btn27Text.value, ferrariCar, ferrariCar)
});
btn28El.addEventListener("click", function () {
  calculateThePrice(singleFamilyHome);
  calculateThePriceFromText(btn28Text.value, singleFamilyHome, singleFamilyHome)
});
btn29El.addEventListener("click", function () {
  calculateThePrice(goldBar);
  calculateThePriceFromText(btn29Text.value, goldBar, goldBar)
});
btn30El.addEventListener("click", function () {
  calculateThePrice(buyMcDonalds);
  calculateThePriceFromText(btn30Text.value, buyMcDonalds, buyMcDonalds)
});
btn31El.addEventListener("click", function () {
  calculateThePrice(superbowlAd);
  calculateThePriceFromText(btn31Text.value, superbowlAd, superbowlAd)
});
btn32El.addEventListener("click", function () {
  calculateThePrice(yacht);
  calculateThePriceFromText(btn32Text.value, yacht, yacht)
});
btn33El.addEventListener("click", function () {
  calculateThePrice(m1Tank);
  calculateThePriceFromText(btn33Text.value, m1Tank, m1Tank)
});
btn34El.addEventListener("click", function () {
  calculateThePrice(formula1Car);
  calculateThePriceFromText(btn34Text.value, formula1Car, formula1Car)
});
btn35El.addEventListener("click", function () {
  calculateThePrice(apacheHelicopter);
  calculateThePriceFromText(btn35Text.value, apacheHelicopter, apacheHelicopter)
});
btn36El.addEventListener("click", function () {
  calculateThePrice(mansionHouse);
  calculateThePriceFromText(btn36Text.value, mansionHouse, mansionHouse)
});
btn37El.addEventListener("click", function () {
  calculateThePrice(makeMovie);
  calculateThePriceFromText(btn37Text.value, makeMovie, makeMovie)
});
btn38El.addEventListener("click", function () {
  calculateThePrice(boeingPlane);
  calculateThePriceFromText(btn38Text.value, boeingPlane, boeingPlane)
});
btn39El.addEventListener("click", function () {
  calculateThePrice(monaLisaPicture);
  calculateThePriceFromText(btn39Text.value, monaLisaPicture, monaLisaPicture)
});
btn40El.addEventListener("click", function () {
  calculateThePrice(skyscraperHome);
  calculateThePriceFromText(btn40Text.value, skyscraperHome, skyscraperHome)
});
btn41El.addEventListener("click", function () {
  calculateThePrice(cruiseShip);
  calculateThePriceFromText(btn41Text.value, cruiseShip, cruiseShip)
});
btn42El.addEventListener("click", function () {
  calculateThePrice(nbaBasketTeam);
  calculateThePriceFromText(btn42Text.value, nbaBasketTeam, nbaBasketTeam)
});
btn43El.addEventListener("click", function () {
  calculateThePrice(airJordanShoe);
  calculateThePriceFromText(btn43Text.value, airJordanShoe, airJordanShoe)
});
btn44El.addEventListener("click", function () {
  calculateThePrice(airpods);
  calculateThePriceFromText(btn44Text.value, airpods, airpods)
});
btn45El.addEventListener("click", function () {
  calculateThePrice(gamingConsole);
  calculateThePriceFromText(btn45Text.value, gamingConsole, gamingConsole)
});

if(totalMoney <= 0){
  document.getElementById("myButton").style.visibility = "hidden";  
}