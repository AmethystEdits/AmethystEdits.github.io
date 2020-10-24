//init area
let PlayerAPIKey = "";
let PlayerMoney = 2000;
let CoopTaxRate = 1.5;

/*    begin fucntion area     */

/* golden Tooth function: (MoneyAvailable(How much money target player is in possetion of),
EnchGoldPrice(Price of enchanted gold),NormGoldPrice(Price of regular gold),
PlayerAPIKey(Api key of target player),WolfToothPrice(Price of normal wolf teeth)) */
/*function GoldtoothFlipper(MoneyAvailable,EnchGoldPrice,NormGoldPrice,PlayerAPIKey,WolfToothPrice){*/
function GoldToothFlipper(PriceOfEnchGold,PriceOfGold,PriceOfWolfTeeth,MoneyAvailable){

}

/* Enderpearl flipperdoo: (PriceOfEPearls(Price of normal encanted ender pearls),
PriceOfEnchantedEPearls(price of ehcanted ender pearls),MoneyAvailable(How much money target player is in posseion of),
PlayerAPIKey(target player's api key)) \\ps ench e pearls sell for 200 at npc */
function EPearlFlipper(PriceOfEPearls,PriceOfEnchantedEPearls,MoneyAvailable){ //add playerapikey to used things
    let EPearlStatus1 = "";
    let EpearlsPreCalc = Math.floor(((CoopTaxRate/100)*PriceOfEPearls)+(Math.abs(PriceOfEPearls - 200)));
    let EpearlsFinalCalc = Math.floor(((CoopTaxRate/100)*PriceOfEPearls)+(Math.abs((PriceOfEPearls*20) - 200)));
    let EEpearlsFinalCalc = Math.floor(((CoopTaxRate/100)*PriceOfEnchantedEPearls)+(Math.abs(PriceOfEnchantedEPearls - 200)));
    if (EpearlsFinalCalc>EEpearlsFinalCalc){
        let Profit = (Math.abs(EpearlsFinalCalc-200))*(MoneyAvailable/EpearlsFinalCalc);
        if ((MoneyAvailable/EpearlsFinalCalc)>71680){
            let quotient = Math.floor((MoneyAvailable/EpearlsPreCalc)/71680);
            let remainder = Math.floor((MoneyAvailable/EpearlsPreCalc) % 71680);
            console.log("Normal ender pearls are best at this time, buy " + quotient + " buy order/s and " + remainder + " items for the last order for a estimated " + Profit + " coins of profit.");
        }
        else{
            console.log("Normal ender pearls crafted into enchanted ender pearls and sold to the npc are best right now, buy " + Math.floor(MoneyAvailable/EpearlsFinalCalc) +  "for a estimated " + Profit + " coins of profit.")
        }
        EPearlStatus1 = "EEPearl_superior";
    }
    else{
        console.log("Enchanted Ender Pearls have a higher margin than an Enchanted ender pearl from 20 normal enderpearls at this time, buy " + (MoneyAvailable/EEpearlsFinalCalc) + ".")
        EPearlStatus1 = "EPearl_superior";
    }
}
// use this ""var difference = function (a, b) { return Math.abs(a - b); }"" and get this working properly as this works off of highest cost and not lowest cost, use the number generated and difference it by 200 then sort by lowsest for the answer and round the end number for no decimals//done// and if in eccess of 71680 say 1 full order and (excess stuff)//done// add player api key usage to get the page to respond when youve been outbid by someone else on the bazaar and the exact price and orders neccisary for each of the prics to 7.5 and up to 10
console.warn("AE Build V0.8.9.2 loaded");