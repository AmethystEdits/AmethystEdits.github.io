//init area
let PlayerAPIKey = "";
let PlayerMoney = 2000;
let IGN = "AngxlsInTheSkyy";
let CoopTaxRate = 1.5;
let ActualBuildNumber = "0.8.9.8.7"
let BuildNumber = "AE\\HytoolsModule Build V" + ActualBuildNumber + " loaded";
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
    let Checker1 = 0;
    if (GoldFinalPrice>PriceOfGoldenTooth){
        Checker1++;
    }
    else if(EnchGoldFinalPrice>PriceOfGoldenTooth){
        Checker1++;
    }
    if (Checker1==2){
        console.warn("Gold Tooth crafting isn't profitable. Try again later, it might be profitable then.");
    }
    else{
        if (GoldFinalPrice<EnchGoldFinalPrice){
            let quotient = Math.floor((MoneyAvailable/GoldFinalPrice)/71680);
            let remainder = Math.floor((MoneyAvailable/GoldFinalPrice) % 71680);
            let Profit = Math.floor((Math.floor(Math.abs(GoldFinalPrice-PriceOfGoldenTooth)))*(MoneyAvailable/GoldFinalPrice));
            // console.log(quotient + "quotient," + remainder + " remainder, " + Profit + " profit, "); debug options
            // console.log(GPX160 + "gpx + " ,EnchGoldFinalPrice + "enchgoldfilapprice + " ,GoldFinalPrice + "elseblocc" );
            let GoldAmount=((quotient*71680)+remainder)*32;
            let WolfToothAmount=((quotient*71680)+remainder)*160;
            let quotient2 = Math.floor(GoldAmount/71680);
            let remainder2 = Math.floor(GoldAmount % 71680);
            let quotient3 = Math.floor(WolfToothAmount/71680);
            let remainder3 = Math.floor(WolfToothAmount % 71680);
            if (GoldAmount>71680){
                console.log("Buying the ingredients for gold teeth is profitable right now. Buy " + quotient2 + " full buy orders of REGUALAR gold, and " + remainder2 + " gold ingots in a seperate order.")
            }
            else{
                console.log("Buying the ingredients for gold teeth is profitable right now. Buy " + remainder2 + " gold ingots in a order.")
            }
            if(WolfToothAmount>71680){
                console.log("For the wolf teeth, Buy " + quotient3 + " full buy orders of REGUALAR Wolf Teeth, and " + remainder3 + " Wolf teeth in a seperate order.")
            }
            else{
                console.log("For the wolf teeth, Buy " + remainder3 + " Wolf teeth in a order.")
            }
            console.warn("The Golden Wolf Tooth Command was ran here. The estimated profit for it was " + Profit + " coins.")
            console.log("This calculation was done assuming the player here was " + IGN + " and the tax rate for the player crafting is " + CoopTaxRate + ".");
        }
        else{
            // console.log(GPX160 + "gpx + " ,EnchGoldFinalPrice + "enchgoldfilapprice + " ,GoldFinalPrice + "elseblocc" ) debug option
            let quotient = Math.floor((MoneyAvailable/EnchGoldFinalPrice)/71680);
            let remainder = Math.floor((MoneyAvailable/EnchGoldFinalPrice) % 71680);
            let Profit = Math.floor((Math.floor(Math.abs(EnchGoldFinalPrice-PriceOfGoldenTooth)))*(MoneyAvailable/EnchGoldFinalPrice));
            let EnchGoldAmount=((quotient*71680)+remainder)*32;
            let WolfToothAmount=((quotient*71680)+remainder)*160;
            let quotientOfEnchGold = Math.floor(EnchGoldAmount/71680);
            let remainderOfEnchGold = Math.floor(EnchGoldAmount % 71680);
            let quotientOfWolfteeth = Math.floor(WolfToothAmount/71680);
            let remainderOfWolfTeeth = Math.floor(WolfToothAmount % 71680);
            if (EnchGoldAmount>71680){
                console.log("Buying the ingredients for gold teeth is profitable right now. Buy " + quotientOfEnchGold + " full buy orders of ENCHANTED gold, and " + remainderOfEnchGold + " gold ingots in a seperate order.")
            }
            else{
                console.log("Buying the ingredients for gold teeth is profitable right now. Buy " + remainderOfEnchGold + " enchanted gold ingots in a order.")
            }
            if(WolfToothAmount>71680){
                console.log("For the wolf teeth, Buy " + quotientOfWolfteeth + " full buy orders of REGUALAR Wolf Teeth, and " + remainderOfWolfTeeth + " Wolf teeth in a seperate order.")
            }
            else{
                console.log("For the wolf teeth, Buy " + remainderOfWolfTeeth + " Wolf teeth in a order.")
            }
            console.warn("The Golden Wolf Tooth Command was ran here. The estimated profit for it was " + Profit + " coins.")
            console.log("This calculation was done assuming the player here was " + IGN + " and the tax rate for the player crafting is " + CoopTaxRate + ".");
        }
    }
}// Func "GoldToothFlipper" is at v0.9,v1 will occor when automatically taking the targetplayer's money is automatically detected along with the prices of every ietm listed. This is the final version for manual usage.

/* Enderpearl flipperdoo: (PriceOfEPearls(Price of normal encanted ender pearls),
PriceOfEnchantedEPearls(price of ehcanted ender pearls),MoneyAvailable(How much money target player is in posseion of),
PlayerAPIKey(target player's api key)) \\ps ench e pearls sell for 200 at npc */
function EPearlFlipper(PriceOfEPearls,PriceOfEnchantedEPearls,MoneyAvailable){ //add playerapikey to used things
    PriceOfEPearls = PriceOfEPearls+(CoopTaxRate/100)*PriceOfEPearls;
    PriceOfEnchantedEPearls = PriceOfEnchantedEPearls+(CoopTaxRate/100)*PriceOfEnchantedEPearls; // incorporate tax in the final calc
    let EPPX20 /*e pearl price times 20 */ = PriceOfEPearls*20;
    let Checker2 = 0;
    if(PriceOfEPearls>10){
        Checker2++;
    }
    else if(PriceOfEnchantedEPearls>200){
        Checker2++;
    }
    if(Checker2==2){
        console.warn("Ender Pearl Flipping isn't profitable right now. Try again later, it might be then.")
    }
    else{
        if (EPPX20<PriceOfEnchantedEPearls){
            let quotient = Math.floor((MoneyAvailable/PriceOfEPearls)/71680);
            let remainder = Math.floor((MoneyAvailable/PriceOfEPearls) % 71680);
            let Profit = Math.floor((Math.floor(Math.abs(PriceOfEPearls-10)))*(MoneyAvailable/PriceOfEPearls));
            if ((MoneyAvailable/PriceOfEPearls)>71680){
                console.log("Normal ender pearls are best at this time, buy " + quotient + " buy order/s of 71680 and " + remainder + " items for the last order for a estimated " + Profit + " coins of profit.");
            }
            else{
                console.log("Normal ender pearls crafted into enchanted ender pearls and sold to the npc are best right now, buy " + Math.floor(MoneyAvailable/PriceOfEPearls) +  " for a estimated " + Profit + " coins of profit.")
            }
        }
        else{
            let quotient = Math.floor((MoneyAvailable/PriceOfEnchantedEPearls)/71680);
            let remainder = Math.floor((MoneyAvailable/PriceOfEnchantedEPearls) % 71680);
            let Profit = Math.floor((Math.floor(Math.abs(PriceOfEnchantedEPearls-10)))*(MoneyAvailable/PriceOfEnchantedEPearls));
            if ((MoneyAvailable/PriceOfEnchantedEPearls)>71680){
                console.log("Enchanted ender pearls are best at this time, buy " + quotient + " buy order/s of 71680 and " + remainder + " items for the last order for a estimated " + Profit + " coins of profit.");
            }
            else{
                console.log("Enchanted ender pearls crafted into enchanted ender pearls and sold to the npc are best right now, buy " + Math.floor(MoneyAvailable/PriceOfEnchantedEPearls) +  " for a estimated " + Profit + " coins of profit.")
            }
        }
        console.log("This Calculation was done assuming the player was " + IGN + " (to grab money available) and with the assumed tax rate of " + CoopTaxRate + ", if these are wrong ping/dm/create a issue ticket on my github" )
    }
    
}// Func "EPearlFlipper" is at v0.9.5,v1 will occor when automatically taking the targetplayer's money is automatically detected along with the prices of every ietm listed. This is the final version for manual usage.

console.warn(BuildNumber);  //log build number into console
document.getElementById("BuildPinger").innerHTML=BuildNumber;  //change the text of hytools.html from the page broken message to the build number

/*-----------------------------------------         Explanation Area        -----------------------------------------*/
// use this ""var difference = function (a, b) { return Math.abs(a - b); }"" and get this working properly as this works off of highest cost and not lowest cost, use the number generated and difference it by 200 then sort by lowsest for the answer and round the end number for no decimals//done// and if in eccess of 71680 say 1 full order and (excess stuff)//done// add player api key usage to get the page to respond when youve been outbid by someone else on the bazaar and the exact price and orders neccisary for each of the prics to 7.5 and up to 10
/*exp/copypasta zone
               num1                   num2
(Math.abs(PriceOfTheing - NumberToCompare)) // find difference of
orientation of num1 and num2 dosent matter
---   ---   ---   ---   ---
PriceOfThing = PriceOfThing+(CoopTaxRate/100)*PriceOfThing; // incoporate tax
---   ---   ---   ---   ---
*/