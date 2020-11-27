//init area
let Player={
    APIKey:"",
    Money:2000,
    IGN:"AngxlsInTheSkyy",
    UUID:"",
    Profile:"",
}

// Prices for these
let EnderPearlPrice=0;
let EnchantedEnderPearlPrice=0;
let GoldPrice=0;
let EnchantedGoldPrice=0;
let WolfToothPrice=0;
let EnchantedWolfToothPrice=0;

// Extra Vals
let MoneyGrabbingForState=0;

let EnderPearlObject1={ //enderpearl object list
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:false,
}
let EnderPearlObject2={
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:false,
}
let EnderPearlObject3={
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:false,
}
let EnderPearlObject4={
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:false,
}
let EnderPearlObject5={
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:false,
}

let CoopTaxRate = 1.5;
let ActualBuildNumber = "0.8.9.8.8"
let BuildNumber = "AE\\HytoolsModule Build V" + ActualBuildNumber + " loaded";

/*----------     Begin Hypixel Skybock Bazaar grabbing area     ----------*/






async function startEngine(Your_Name_In_Game,Hypixel_API_Key,Your_Profile_Youre_Gonna_Flip_On){
    Player.IGN=Your_Name_In_Game;
    Player.APIKey=Hypixel_API_Key;
    //Player UUID after the functions are inited
    Player.Profile = Your_Profile_Youre_Gonna_Flip_On

    /*------------------------------     Begin Funcs inside a func chaos     ------------------------------*/
    // GetUUID Function
    async function GetUUID(){ //Get UUID of player for later usage
        let MojangJSONRaw = await fetch("https://cors-anywhere.herokuapp.com/" + "https://api.mojang.com/users/profiles/minecraft/" + Player.IGN)
        let FormattedMojangJSON = await MojangJSONRaw.json()
        let PlayerUUID= await FormattedMojangJSON.id;
        console.log(PlayerUUID)
        return PlayerUUID;
    }

    // GetAndRepaceData Function
    async function GetAndReplaceData(){
        //Begin
        //Grab how much money the player has
        let RawPlayerJSON = await fetch('https://api.hypixel.net/skyblock/profiles?key=' + Player.APIKey + '&uuid=' + Player.UUID);
        let FormattedPlayerJSON = await RawPlayerJSON.json();
        for(let i=0;await FormattedPlayerJSON.profiles[MoneyGrabbingForState].cute_name !== Player.Profile;MoneyGrabbingForState++){}
        Player.Money= Math.floor(await FormattedPlayerJSON.profiles[MoneyGrabbingForState].members[Player.UUID].coin_purse);
    
        //Grab Ender Pearl Data
        let GrabEnderPearlJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + Player.APIKey + "&productId=ENDER_PEARL");
        let EnderPearlJson = await GrabEnderPearlJSON.json()
        EnderPearlPrice = await (EnderPearlJson.product_info.buy_summary[0].pricePerUnit)+0.1;
        let GrabEnchantedEnderPearlJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + Player.APIKey + "&productId=ENCHANTED_ENDER_PEARL");
        let EnchantedEnderPearlJSON = await GrabEnchantedEnderPearlJSON.json()
        EnchantedEnderPearlPrice = await (EnchantedEnderPearlJSON.product_info.buy_summary[0].pricePerUnit)+0.1;
    
        //Begin Calling The Flipper, and changing thhe values on the html file
        EPearlFlipper((EnderPearlPrice+0.2),(EnchantedEnderPearlPrice+0.2),Player.Money,1); //Flipper: EP1
        EPearlFlipper((EnderPearlPrice+0.1),(EnchantedEnderPearlPrice+0.1),Player.Money,2); //Flipper: EP2
        EPearlFlipper(EnderPearlPrice,EnchantedEnderPearlPrice,Player.Money,3); //Flipper: EP3
        EPearlFlipper((EnderPearlPrice-0.1),(EnchantedEnderPearlPrice-0.1),Player.Money,4); //Flipper: EP4
        EPearlFlipper((EnderPearlPrice-0.2),(EnchantedEnderPearlPrice-0.2),Player.Money,5); //Flipper: EP5
    
        //Begin Changing the values of the HTML file
        /*------------------------------     Object 1     ------------------------------*/
        document.getElementById("IsEnchanted1").innerHTML=EnderPearlObject1.EnchantedSuperior;
        document.getElementById("PerItem1").innerHTML=EnderPearlObject1.MoneyPP;
        document.getElementById("FullOrders1").innerHTML=EnderPearlObject1.FullOrders;
        document.getElementById("SeperateItems1").innerHTML=EnderPearlObject1.SeperateItems;
        document.getElementById("Profit1").innerHTML=EnderPearlObject1.Profit;
        
        /*------------------------------     Object 2     ------------------------------*/
        document.getElementById("IsEnchanted2").innerHTML=EnderPearlObject2.EnchantedSuperior;
        document.getElementById("PerItem2").innerHTML=EnderPearlObject2.MoneyPP;
        document.getElementById("FullOrders2").innerHTML=EnderPearlObject2.FullOrders;
        document.getElementById("SeperateItems2").innerHTML=EnderPearlObject2.SeperateItems;
        document.getElementById("Profit2").innerHTML=EnderPearlObject2.Profit;
        
        /*------------------------------     Object 3     ------------------------------*/
        document.getElementById("IsEnchanted3").innerHTML=EnderPearlObject3.EnchantedSuperior;
        document.getElementById("PerItem3").innerHTML=EnderPearlObject3.MoneyPP;
        document.getElementById("FullOrders3").innerHTML=EnderPearlObject3.FullOrders;
        document.getElementById("SeperateItems3").innerHTML=EnderPearlObject3.SeperateItems;
        document.getElementById("Profit3").innerHTML=EnderPearlObject3.Profit;
        
        /*------------------------------     Object 4     ------------------------------*/
        document.getElementById("IsEnchanted4").innerHTML=EnderPearlObject4.EnchantedSuperior;
        document.getElementById("PerItem4").innerHTML=EnderPearlObject4.MoneyPP;
        document.getElementById("FullOrders4").innerHTML=EnderPearlObject4.FullOrders;
        document.getElementById("SeperateItems4").innerHTML=EnderPearlObject4.SeperateItems;
        document.getElementById("Profit4").innerHTML=EnderPearlObject4.Profit;
        
        /*------------------------------     Object 5     ------------------------------*/
        document.getElementById("IsEnchanted5").innerHTML=EnderPearlObject5.EnchantedSuperior;
        document.getElementById("PerItem5").innerHTML=EnderPearlObject5.MoneyPP;
        document.getElementById("FullOrders5").innerHTML=EnderPearlObject5.FullOrders;
        document.getElementById("SeperateItems5").innerHTML=EnderPearlObject5.SeperateItems;
        document.getElementById("Profit5").innerHTML=EnderPearlObject5.Profit;
        
    }

    /*------------------------------     Function-Dependant Values Area     ------------------------------*/
    Player.UUID = await GetUUID();
    GetAndReplaceData()
    setInterval(GetAndReplaceData,3000)
}
/*    begin fucntion area     */
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
            let WolfToothAmount=((quotient*71680)+remainder)*128;
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
            console.log("This calculation was done assuming the player here was " + Player.IGN + " and the tax rate for the player crafting is " + CoopTaxRate + ".");
        }
        else{
            // console.log(GPX160 + "gpx + " ,EnchGoldFinalPrice + "enchgoldfilapprice + " ,GoldFinalPrice + "elseblocc" ) debug option
            let quotient = Math.floor((MoneyAvailable/EnchGoldFinalPrice)/71680);
            let remainder = Math.floor((MoneyAvailable/EnchGoldFinalPrice) % 71680);
            let Profit = Math.floor((Math.floor(Math.abs(EnchGoldFinalPrice-PriceOfGoldenTooth)))*(MoneyAvailable/EnchGoldFinalPrice));
            let EnchGoldAmount=((quotient*71680)+remainder)*32;
            let WolfToothAmount=((quotient*71680)+remainder)*128;
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
            console.log("This calculation was done assuming the player here was " + Player.IGN + " and the tax rate for the player crafting is " + CoopTaxRate + ".");
        }
    }
}// Func "GoldToothFlipper" is at v0.9,v1 will occor when automatically taking the targetplayer's money is automatically detected along with the prices of every ietm listed. This is the final version for manual usage.

function EPearlFlipper(PriceOfEPearls,PriceOfEnchantedEPearls,MoneyAvailable,ObjectValue){ //add playerapikey to used things
    CleanEPearls = PriceOfEPearls;
    PriceOfEPearls = CleanEPearls+(CoopTaxRate/100)*CleanEPearls;
    CleanEEPearls = PriceOfEnchantedEPearls;
    PriceOfEnchantedEPearls = CleanEEPearls+(CoopTaxRate/100)*CleanEEPearls; // incorporate tax in the final calc
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
        console.log("ObjectValue == " + ObjectValue)
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
            if (ObjectValue===1) {
                EnderPearlObject1.MoneyPP = Math.round(CleanEPearls * 10)/10;
                EnderPearlObject1.FullOrders = quotient;
                EnderPearlObject1.SeperateItems = remainder;
                EnderPearlObject1.Profit = Profit;
                EnchantedSuperior:false;
            }
            else if(ObjectValue===2){
                EnderPearlObject2.MoneyPP = Math.round(CleanEPearls * 10)/10;
                EnderPearlObject2.FullOrders = quotient;
                EnderPearlObject2.SeperateItems = remainder;
                EnderPearlObject2.Profit = Profit;
                EnchantedSuperior:false;
            }
            else if(ObjectValue===3){
                EnderPearlObject3.MoneyPP = Math.round(CleanEPearls * 10)/10;
                EnderPearlObject3.FullOrders = quotient;
                EnderPearlObject3.SeperateItems = remainder;
                EnderPearlObject3.Profit = Profit;
                EnchantedSuperior:false;
            }
            else if(ObjectValue===4){
                EnderPearlObject4.MoneyPP = Math.round(CleanEPearls * 10)/10;
                EnderPearlObject4.FullOrders = quotient;
                EnderPearlObject4.SeperateItems = remainder;
                EnderPearlObject4.Profit = Profit;
                EnchantedSuperior:false;
            }
            else if(ObjectValue===5){
                EnderPearlObject5.MoneyPP = Math.round(CleanEPearls * 10)/10;
                EnderPearlObject5.FullOrders = quotient;
                EnderPearlObject5.SeperateItems = remainder;
                EnderPearlObject5.Profit = Profit;
                EnchantedSuperior:false;
            }
            else{
                console.warn("Invalid Object Value has been entered into module EnderPearlFlipper. ObjectValue == " + ObjectValue + ", Enchanted Ender Pearls here. Report this bug to my github as it is really breaking the HyTools system.")
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
            if(ObjectValue===1){
                EnderPearlObject1.MoneyPP = Math.round(CleanEEPearls * 10)/10;
                EnderPearlObject1.FullOrders = quotient;
                EnderPearlObject1.SeperateItems = remainder;
                EnderPearlObject1.Profit = Profit;
                EnchantedSuperior:true;
            }
            else if(ObjectValue===2){
                EnderPearlObject2.MoneyPP = Math.round(CleanEEPearls * 10)/10;
                EnderPearlObject2.FullOrders = quotient;
                EnderPearlObject2.SeperateItems = remainder;
                EnderPearlObject2.Profit = Profit;
                EnchantedSuperior:true;
            }
            else if(ObjectValue===3){
                EnderPearlObject3.MoneyPP = Math.round(CleanEEPearls * 10)/10;
                EnderPearlObject3.FullOrders = quotient;
                EnderPearlObject3.SeperateItems = remainder;
                EnderPearlObject3.Profit = Profit;
                EnchantedSuperior:true;
            }
            else if(ObjectValue===4){
                EnderPearlObject4.MoneyPP = Math.round(CleanEEPearls * 10)/10;
                EnderPearlObject4.FullOrders = quotient;
                EnderPearlObject4.SeperateItems = remainder;
                EnderPearlObject4.Profit = Profit;
                EnchantedSuperior:true;
            }
            else if(ObjectValue===5){
                EnderPearlObject5.MoneyPP = Math.round(CleanEEPearls * 10)/10;
                EnderPearlObject5.FullOrders = quotient;
                EnderPearlObject5.SeperateItems = remainder;
                EnderPearlObject5.Profit = Profit;
                EnchantedSuperior:true;
            }
        }
        console.log("This Calculation was done assuming the player was " + Player.IGN + " (to grab money available) and with the assumed tax rate of " + CoopTaxRate + ", if these are wrong ping/dm/create a issue ticket on my github" )
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

// take numbers +>
// run through flipper as if >it were the values of +0.1,+0.2,-0.1,-0.2,same +>
// change innerHTML values +>
// announce the new update



// take numbers, added which type val
// chnage EnderPearlObject*val*
// run seperate func that changes every value on the table of the html file
// setInterval(FunctioName,TimeinMS) is how to update shit every blah blah blah
