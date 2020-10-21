//init area
let PlayerAPIKey = "";
let MoneyAvailable = 2000;
/*    begin fucntion area     */

/* golden tooth function: (MoneyAvailable(How much money target player is in possetion of),
EnchGoldPrice(Price of enchanted gold),NormGoldPrice(Price of regular gold),
PlayerAPIKey(Api key of target player),WolfToothPrice(Price of normal wolf teeth)) */
/*function GoldtoothFlipper(MoneyAvailable,EnchGoldPrice,NormGoldPrice,PlayerAPIKey,WolfToothPrice){

}*/
/* Enderpearl flipperdoo: (PriceOfEPearls(Price of normal encanted ender pearls),
PriceOfEnchantedEPearls(price of ehcanted ender pearls),MoneyAvailable(How much money target player is in posseion of),
PlayerAPIKey(target player's api key)) \\ps ench e pearls sell for 200 at npc */
function EPearlFlipper(PriceOfEPearls,PriceOfEnchantedEPearls,MoneyAvailable){ //add playerapikey to used things
    let Epearlisine = PriceOfEPearls*20;
    let EPearlStatus1 = "";
    if (Epearlisine>PriceOfEPearls){
        console.log("Enchanted Ender Pearls have a higher margin than an Enchanted ender pearl from 20 normal enderpearls; flip the Enchanted Ender Pearls, not normal ones for now.")
        let EPearlStatus1 = "EEPearl_superior";
    }
    else{
        console.log("Normal ender pearls crafted into enchanted ednder pearls and sold to the npc are best right now")
        let EPearlStatus1 = "EPearl_superior";
    }

    if (EPearlStatus1=="EEPearl_superior"){
        console.log("You can afford " + (MoneyAvailable/PriceOfEnchantedEPearls) + " E pearls to flip");
    }
    else{
        console.log("You can afford " + (MoneyAvailable/Epearlisine) + " E pearls to flip");
    }

}
// use this ""var difference = function (a, b) { return Math.abs(a - b); }"" and get this working properly as this works off of highest cost and not lowest cost, use the number generated and difference it by 200 then sort by lowsest for the answer and round the end number for no decimals and if in eccess of 71680 say 1 full order and (excess stuff)
