//init area
let PlayerAPIKey = "";
let PlayerMoney = 2000;
let IGN = "AngxlsInTheSkyy";
let CoopTaxRate = 1.5;

/*    begin fucntion area     */

/* golden Tooth function: (MoneyAvailable(How much money target player is in possetion of),
EnchGoldPrice(Price of enchanted gold),NormGoldPrice(Price of regular gold),
PlayerAPIKey(Api key of target player),WolfToothPrice(Price of normal wolf teeth)) */
/*function GoldtoothFlipper(MoneyAvailable,EnchGoldPrice,NormGoldPrice,PlayerAPIKey,WolfToothPrice){*/
function GoldToothFlipper(PriceOfEnchGold,PriceOfGold,PriceOfWolfTeeth,PriceOfGoldenTooth,MoneyAvailable){
    PriceOfGold = PriceOfGold+(CoopTaxRate/100)*PriceOfGold;
    PriceOfEnchGold = PriceOfEnchGold+(CoopTaxRate/100)*PriceOfEnchGold;
    PriceOfWolfTeeth = PriceOfWolfTeeth+(CoopTaxRate/100)*PriceOfWolfTeeth;
    let GPX160 /* gold price time 160 to convert from gold ingot toenchanted golden ingot */ = PriceOfGold*160;
    let EnchGoldFinalPrice = (PriceOfEnchGold*32)+(PriceOfWolfTeeth*320);
    let GoldFinalPrice = (GPX160*32)+(PriceOfWolfTeeth*320);
    if (GoldFinalPrice<EnchGoldFinalPrice){
        
    }

}

/* Enderpearl flipperdoo: (PriceOfEPearls(Price of normal encanted ender pearls),
PriceOfEnchantedEPearls(price of ehcanted ender pearls),MoneyAvailable(How much money target player is in posseion of),
PlayerAPIKey(target player's api key)) \\ps ench e pearls sell for 200 at npc */
function EPearlFlipper(PriceOfEPearls,PriceOfEnchantedEPearls,MoneyAvailable){ //add playerapikey to used things
    let EPearlStatus1 = "";
    PriceOfEPearls = PriceOfEPearls+(CoopTaxRate/100)*PriceOfEPearls;
    PriceOfEnchantedEPearls = PriceOfEnchantedEPearls+(CoopTaxRate/100)*PriceOfEnchantedEPearls; // incorporate tax in the final calc
    let EPPX20 /*e pearl price times 20 */ = PriceOfEPearls*20;
    if (EPPX20<PriceOfEnchantedEPearls){
        let quotient = Math.floor((MoneyAvailable/PriceOfEPearls)/71680);
        let remainder = Math.floor((MoneyAvailable/PriceOfEPearls) % 71680);
        let Profit = Math.floor((Math.floor(Math.abs(PriceOfEPearls-10)))*(MoneyAvailable/PriceOfEPearls));
        if ((MoneyAvailable/PriceOfEPearls)>71680){
            console.log("Normal ender pearls are best at this time, buy " + quotient + " buy order/s of 71680 and " + remainder + " items for the last order for a estimated " + Profit + " coins of profit.");
        }
        else{
            console.log("Normal ender pearls crafted into enchanted ender pearls and sold to the npc are best right now, buy " + Math.floor(MoneyAvailable/PriceOfEPearls) +  "for a estimated " + Profit + " coins of profit.")
        }
        EPearlStatus1 = "EEPearl_superior";
    }
    else{
        console.log("Enchanted Ender Pearls have a higher margin than an Enchanted ender pearl from 20 normal enderpearls at this time, buy " + (MoneyAvailable/PriceOfEnchantedEPearls) + ".")
        EPearlStatus1 = "EPearl_superior";
    }
    console.log("This Calculation was done assuming the player was " + IGN + " and with the assumed tax rate of " + CoopTaxRate + ", if these are wrong ping/dm/create a issue ticket on my github" )
} // Func "EPearlFlipper" is at v0.9,v1 will occor when automatically taking the targetplayer's money and tax rate and detecting and telling the website to say that its happened. this is the final version for manual
// use this ""var difference = function (a, b) { return Math.abs(a - b); }"" and get this working properly as this works off of highest cost and not lowest cost, use the number generated and difference it by 200 then sort by lowsest for the answer and round the end number for no decimals//done// and if in eccess of 71680 say 1 full order and (excess stuff)//done// add player api key usage to get the page to respond when youve been outbid by someone else on the bazaar and the exact price and orders neccisary for each of the prics to 7.5 and up to 10
console.warn("AE\\HytoolsModule Build V0.8.9.2 loaded");
/*exp/copypasta zone
               num1                   num2
(Math.abs(PriceOfEnchantedEPearls - 200)) // find difference of
orientation of num1 and num2 dosent matter
---   ---   ---   ---   ---
PriceOfThing = PriceOfThing+(CoopTaxRate/100)*PriceOfThing; // incoporate tax
---   ---   ---   ---   ---
*/