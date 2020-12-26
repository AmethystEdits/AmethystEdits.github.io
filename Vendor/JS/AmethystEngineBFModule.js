//init area
let Player={
    APIKey:"",
    Money:0,
    IGN:"AngxlsInTheSkyy",
    UUID:"",
    Profile:"",
}
let Debug={
    timesCalled:{
        second:0,
        secondTen:0,
        minute:0,
        minuteTen:0,
        hour:0,
        ever:0
    },
    activate: function(){
        setInterval(() => {
            console.table(this.timesCalled)
        }, 1000);
    },
    activateOnce: function(){
        console.table(this.timesCalled)
    },
    plusOne: function (){
        let x = this.timesCalled;
        x.second++;
        x.secondTen++;
        x.minute++;
        x.minuteTen++;
        x.hour++;
        x.ever++;
    },
    beginResetter: function(){
        setInterval(() => {
            this.timesCalled.second = 0;
        }, 1000);
        setInterval(() => {
            this.timesCalled.secondTen = 0;
        }, 10000);
        setInterval(() => {
            this.timesCalled.minute = 0;
        }, 60000);
        setInterval(() => {
            this.timesCalled.minuteTen = 0;
        }, 600000);
        setInterval(() => {
            this.timesCalled.hour = 0;
        }, 3600000);
    }
}

// Prices for these
let EnderPearlPrice=0;
let EnchantedEnderPearlPrice=0;
let GoldPrice=0;
let EnchantedGoldPrice=0;
let WolfToothPrice=0;
let GoldToothPrice=0;

// Extra Vals
let MoneyGrabbingForState=0;

let EnderPearlObject1={ //enderpearl object list
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:0,
}
let EnderPearlObject2={
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:0,
}
let EnderPearlObject3={
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:0,
}
let EnderPearlObject4={
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:0,
}
let EnderPearlObject5={
    MoneyPP:0,
    FullOrders:0,
    SeperateItems:0,
    Profit:0,
    EnchantedSuperior:0,
}

//Gold Tooth Object List
let GoldToothObject1={
    EnchantedSuperior:0,
    PricePerWolfTooth:0,
    PricePerGoldIngot:0,
    SeperateWolfToothItems:0,
    FullOrderWolfTeethItems:0,
    SeperateGoldIngotItems:0,
    FullOrderGoldIngotsItems:0,
    Profit:0,
}
let GoldToothObject2={
    EnchantedSuperior:0,
    PricePerWolfTooth:0,
    PricePerGoldIngot:0,
    SeperateWolfToothItems:0,
    FullOrderWolfTeethItems:0,
    SeperateGoldIngotItems:0,
    FullOrderGoldIngotsItems:0,
    Profit:0,
}
let GoldToothObject3={
    EnchantedSuperior:0,
    PricePerWolfTooth:0,
    PricePerGoldIngot:0,
    SeperateWolfToothItems:0,
    FullOrderWolfTeethItems:0,
    SeperateGoldIngotItems:0,
    FullOrderGoldIngotsItems:0,
    Profit:0,
}
let GoldToothObject4={
    EnchantedSuperior:0,
    PricePerWolfTooth:0,
    PricePerGoldIngot:0,
    SeperateWolfToothItems:0,
    FullOrderWolfTeethItems:0,
    SeperateGoldIngotItems:0,
    FullOrderGoldIngotsItems:0,
    Profit:0,
}
let GoldToothObject5={
    EnchantedSuperior:0,
    PricePerWolfTooth:0,
    PricePerGoldIngot:0,
    SeperateWolfToothItems:0,
    FullOrderWolfTeethItems:0,
    SeperateGoldIngotItems:0,
    FullOrderGoldIngotsItems:0,
    Profit:0,
}


let CoopTaxRate = 1.5;
let ActualBuildNumber = "0.9.7.1"
let BuildNumber = "Amethyst Engine >>::<< HytoolsModule Build V" + ActualBuildNumber + " loaded // Catch/Debug Update";

/*----------     Begin Hypixel Skybock Bazaar grabbing area     ----------*/

async function startEngine(Your_Name_In_Game,Hypixel_API_Key,Your_Profile_Youre_Gonna_Flip_On){
    Player.IGN=Your_Name_In_Game;
    Player.APIKey=Hypixel_API_Key;
    //Player UUID after the functions are inited
    Player.Profile = Your_Profile_Youre_Gonna_Flip_On

    /*------------------------------     Begin Funcs inside a func chaos     ------------------------------*/
    // GetUUID Function
    async function GetUUID(){ //Get UUID of player for later usage
        try {
            let MojangJSONRaw = await fetch("https://cors-anywhere.herokuapp.com/" + "https://api.mojang.com/users/profiles/minecraft/" + Player.IGN)
            Debug.plusOne();
            let FormattedMojangJSON = await MojangJSONRaw.json()
            let PlayerUUID= await FormattedMojangJSON.id;
            console.log(PlayerUUID)
            return PlayerUUID;
        } catch {
            Debug.activateOnce();
            debugger;
        }
    }

    // GetAndRepaceData Function
    async function GetAndReplaceData(){
        //Begin
        //Grab how much money the player has
        let RawPlayerJSON = await fetch('https://api.hypixel.net/skyblock/profiles?key=' + Player.APIKey + '&uuid=' + Player.UUID);
        Debug.plusOne();
        let FormattedPlayerJSON = await RawPlayerJSON.json();
        console.log(FormattedPlayerJSON)
        for(let i=0;await FormattedPlayerJSON.profiles[MoneyGrabbingForState].cute_name !== Player.Profile;MoneyGrabbingForState++){}
        Player.Money= Math.floor(await FormattedPlayerJSON.profiles[MoneyGrabbingForState].members[Player.UUID].coin_purse);
    
        //Grab Ender Pearl Data
        let GrabEnderPearlJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + Player.APIKey + "&productId=ENDER_PEARL");
        Debug.plusOne();
        let EnderPearlJson = await GrabEnderPearlJSON.json()
        EnderPearlPrice = await (EnderPearlJson.product_info.buy_summary[0].pricePerUnit)+0.1;
        let GrabEnchantedEnderPearlJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + Player.APIKey + "&productId=ENCHANTED_ENDER_PEARL");
        Debug.plusOne();
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
        if (EnderPearlObject1.EnchantedSuperior === 1){
            document.getElementById("IsEnchanted1").innerHTML="Yes"
        }
        else{
            document.getElementById("IsEnchanted1").innerHTML="No"
        }
        document.getElementById("PerItem1").innerHTML=EnderPearlObject1.MoneyPP;
        document.getElementById("FullOrders1").innerHTML=EnderPearlObject1.FullOrders;
        document.getElementById("SeperateItems1").innerHTML=EnderPearlObject1.SeperateItems;
        document.getElementById("Profit1").innerHTML=EnderPearlObject1.Profit;
        
        /*------------------------------     Object 2     ------------------------------*/
        if (EnderPearlObject2.EnchantedSuperior === 1){
            document.getElementById("IsEnchanted2").innerHTML="Yes"
        }
        else{
            document.getElementById("IsEnchanted2").innerHTML="No"
        }
        document.getElementById("PerItem2").innerHTML=EnderPearlObject2.MoneyPP;
        document.getElementById("FullOrders2").innerHTML=EnderPearlObject2.FullOrders;
        document.getElementById("SeperateItems2").innerHTML=EnderPearlObject2.SeperateItems;
        document.getElementById("Profit2").innerHTML=EnderPearlObject2.Profit;
        
        /*------------------------------     Object 3     ------------------------------*/
        if (EnderPearlObject3.EnchantedSuperior === 1){
            document.getElementById("IsEnchanted3").innerHTML="Yes"
        }
        else{
            document.getElementById("IsEnchanted3").innerHTML="No"
        }
        document.getElementById("PerItem3").innerHTML=EnderPearlObject3.MoneyPP;
        document.getElementById("FullOrders3").innerHTML=EnderPearlObject3.FullOrders;
        document.getElementById("SeperateItems3").innerHTML=EnderPearlObject3.SeperateItems;
        document.getElementById("Profit3").innerHTML=EnderPearlObject3.Profit;
        
        /*------------------------------     Object 4     ------------------------------*/
        if (EnderPearlObject4.EnchantedSuperior === 1){
            document.getElementById("IsEnchanted4").innerHTML="Yes"
        }
        else{
            document.getElementById("IsEnchanted4").innerHTML="No"
        }
        document.getElementById("PerItem4").innerHTML=EnderPearlObject4.MoneyPP;
        document.getElementById("FullOrders4").innerHTML=EnderPearlObject4.FullOrders;
        document.getElementById("SeperateItems4").innerHTML=EnderPearlObject4.SeperateItems;
        document.getElementById("Profit4").innerHTML=EnderPearlObject4.Profit;
        
        /*------------------------------     Object 5     ------------------------------*/
        if (EnderPearlObject5.EnchantedSuperior === 1){
            document.getElementById("IsEnchanted5").innerHTML="Yes"
        }
        else{
            document.getElementById("IsEnchanted5").innerHTML="No"
        }
        document.getElementById("PerItem5").innerHTML=EnderPearlObject5.MoneyPP;
        document.getElementById("FullOrders5").innerHTML=EnderPearlObject5.FullOrders;
        document.getElementById("SeperateItems5").innerHTML=EnderPearlObject5.SeperateItems;
        document.getElementById("Profit5").innerHTML=EnderPearlObject5.Profit;
        
        //Gold tooth flipper area
        let GrabGoldIngotJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + Player.APIKey + "&productId=GOLD_INGOT");
        Debug.plusOne();
        let GoldIngotJSON = await GrabGoldIngotJSON.json()
        GoldPrice = await (GoldIngotJSON.product_info.buy_summary[0].pricePerUnit)+0.1;
        let GrabEnchantedGoldJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + Player.APIKey + "&productId=ENCHANTED_GOLD");
        Debug.plusOne();
        let EnchantedGoldJSON = await GrabEnchantedGoldJSON.json()
        EnchantedGoldPrice = await (EnchantedGoldJSON.product_info.buy_summary[0].pricePerUnit)+0.1;
        let GrabWolfToothJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + Player.APIKey + "&productId=WOLF_TOOTH");
        Debug.plusOne();
        let WolfToothJSON = await GrabWolfToothJSON.json()
        WolfToothPrice = await (WolfToothJSON.product_info.buy_summary[0].pricePerUnit)+0.1;
        let GrabGoldToothJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + Player.APIKey + "&productId=GOLDEN_TOOTH");
        Debug.plusOne();
        let GoldToothJSON = await GrabGoldToothJSON.json()
        GoldToothPrice = await (GoldToothJSON.product_info.buy_summary[0].pricePerUnit)+0.1;

        //Call the function
        GoldToothFlipper((EnchantedGoldPrice + 0.2),(GoldPrice+0.2),(WolfToothPrice+0.2),GoldToothPrice,Player.Money,1)
        GoldToothFlipper((EnchantedGoldPrice + 0.1),(GoldPrice+0.1),(WolfToothPrice+0.1),GoldToothPrice,Player.Money,2)
        GoldToothFlipper(EnchantedGoldPrice,GoldPrice,WolfToothPrice,GoldToothPrice,Player.Money,3)
        GoldToothFlipper((EnchantedGoldPrice - 0.1),(GoldPrice-0.1),(WolfToothPrice-0.1),GoldToothPrice,Player.Money,4)
        GoldToothFlipper((EnchantedGoldPrice - 0.2),(GoldPrice-0.2),(WolfToothPrice-0.2),GoldToothPrice,Player.Money,5)

        
        /*------------------------------     Object 1     ------------------------------*/
        if (GoldToothObject1.EnchantedSuperior==1){
            document.getElementById("1Enchanted").innerHTML="Yes"
        }
        else{
            document.getElementById("1Enchanted").innerHTML="No"
        }
        document.getElementById("1WolfToothPrice").innerHTML=GoldToothObject1.PricePerWolfTooth
        document.getElementById("1GoldPrice").innerHTML=GoldToothObject1.PricePerGoldIngot
        document.getElementById("1SeperateWolfTeeth").innerHTML=GoldToothObject1.SeperateWolfToothItems
        document.getElementById("1FullOrderWolfTeeth").innerHTML=GoldToothObject1.FullOrderWolfTeethItems
        document.getElementById("1SeperateGold").innerHTML=GoldToothObject1.SeperateGoldIngotItems
        document.getElementById("1FullOrdersGold").innerHTML=GoldToothObject1.FullOrderGoldIngotsItems
        document.getElementById("1Profit").innerHTML=GoldToothObject1.Profit
        
        /*------------------------------     Object 2     ------------------------------*/
        if (GoldToothObject2.EnchantedSuperior==1){
            document.getElementById("2Enchanted").innerHTML="Yes"
        }
        else{
            document.getElementById("2Enchanted").innerHTML="No"
        }
        document.getElementById("2WolfToothPrice").innerHTML=GoldToothObject2.PricePerWolfTooth
        document.getElementById("2GoldPrice").innerHTML=GoldToothObject2.PricePerGoldIngot
        document.getElementById("2SeperateWolfTeeth").innerHTML=GoldToothObject2.SeperateWolfToothItems
        document.getElementById("2FullOrderWolfTeeth").innerHTML=GoldToothObject2.FullOrderWolfTeethItems
        document.getElementById("2SeperateGold").innerHTML=GoldToothObject2.SeperateGoldIngotItems
        document.getElementById("2FullOrdersGold").innerHTML=GoldToothObject2.FullOrderGoldIngotsItems
        document.getElementById("2Profit").innerHTML=GoldToothObject2.Profit

        /*------------------------------     Object 3     ------------------------------*/
        if (GoldToothObject3.EnchantedSuperior==1){
            document.getElementById("3Enchanted").innerHTML="Yes"
        }
        else{
            document.getElementById("3Enchanted").innerHTML="No"
        }
        document.getElementById("3WolfToothPrice").innerHTML=GoldToothObject3.PricePerWolfTooth
        document.getElementById("3GoldPrice").innerHTML=GoldToothObject3.PricePerGoldIngot
        document.getElementById("3SeperateWolfTeeth").innerHTML=GoldToothObject3.SeperateWolfToothItems
        document.getElementById("3FullOrderWolfTeeth").innerHTML=GoldToothObject3.FullOrderWolfTeethItems
        document.getElementById("3SeperateGold").innerHTML=GoldToothObject3.SeperateGoldIngotItems
        document.getElementById("3FullOrdersGold").innerHTML=GoldToothObject3.FullOrderGoldIngotsItems
        document.getElementById("3Profit").innerHTML=GoldToothObject3.Profit

        /*------------------------------     Object 4     ------------------------------*/
        if (GoldToothObject4.EnchantedSuperior==1){
            document.getElementById("4Enchanted").innerHTML="Yes"
        }
        else{
            document.getElementById("4Enchanted").innerHTML="No"
        }
        document.getElementById("4WolfToothPrice").innerHTML=GoldToothObject4.PricePerWolfTooth
        document.getElementById("4GoldPrice").innerHTML=GoldToothObject4.PricePerGoldIngot
        document.getElementById("4SeperateWolfTeeth").innerHTML=GoldToothObject4.SeperateWolfToothItems
        document.getElementById("4FullOrderWolfTeeth").innerHTML=GoldToothObject4.FullOrderWolfTeethItems
        document.getElementById("4SeperateGold").innerHTML=GoldToothObject4.SeperateGoldIngotItems
        document.getElementById("4FullOrdersGold").innerHTML=GoldToothObject4.FullOrderGoldIngotsItems
        document.getElementById("4Profit").innerHTML=GoldToothObject4.Profit

        /*------------------------------     Object 5     ------------------------------*/
        if (GoldToothObject5.EnchantedSuperior==1){
            document.getElementById("5Enchanted").innerHTML="Yes"
        }
        else{
            document.getElementById("5Enchanted").innerHTML="No"
        }
        document.getElementById("5WolfToothPrice").innerHTML=GoldToothObject5.PricePerWolfTooth
        document.getElementById("5GoldPrice").innerHTML=GoldToothObject5.PricePerGoldIngot
        document.getElementById("5SeperateWolfTeeth").innerHTML=GoldToothObject5.SeperateWolfToothItems
        document.getElementById("5FullOrderWolfTeeth").innerHTML=GoldToothObject5.FullOrderWolfTeethItems
        document.getElementById("5SeperateGold").innerHTML=GoldToothObject5.SeperateGoldIngotItems
        document.getElementById("5FullOrdersGold").innerHTML=GoldToothObject5.FullOrderGoldIngotsItems
        document.getElementById("5Profit").innerHTML=GoldToothObject5.Profit
    }

    /*------------------------------     Function-Dependant Values Area     ------------------------------*/
    Player.UUID = await GetUUID();
    GetAndReplaceData();
    Debug.beginResetter();
    setInterval(GetAndReplaceData,5000);
}
/*    begin fucntion area     */
function GoldToothFlipper(PriceOfEnchGold,PriceOfGold,PriceOfWolfTeeth,PriceOfGoldenTooth,MoneyAvailable,ObjectValue){
    CleanGoldPrice = PriceOfGold;
    PriceOfGold = CleanGoldPrice+(CoopTaxRate/100)*CleanGoldPrice;
    CleanEnchGoldPrice=PriceOfEnchGold;
    PriceOfEnchGold = CleanEnchGoldPrice+(CoopTaxRate/100)*CleanEnchGoldPrice;
    CleanWolfTeethPrice = PriceOfWolfTeeth;
    PriceOfWolfTeeth = CleanWolfTeethPrice+(CoopTaxRate/100)*CleanWolfTeethPrice;
    let GPX160 /* gold price time 160 to convert from gold ingot toenchanted golden ingot */ = PriceOfGold*160;
    let EnchGoldFinalPrice = (PriceOfEnchGold*32)+(PriceOfWolfTeeth*128);
    let GoldFinalPrice = (GPX160*32)+(PriceOfWolfTeeth*128);
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
            let GoldAmount=((quotient*71680)+remainder)*(32*160);
            let WolfToothAmount=((quotient*71680)+remainder)*128;
            let quotient2 = Math.floor(GoldAmount/71680);
            let remainder2 = Math.floor(GoldAmount % 71680);
            let quotient3 = Math.floor(WolfToothAmount/71680);
            let remainder3 = Math.floor(WolfToothAmount % 71680);

            if(GoldAmount>71680 && WolfToothAmount>71680){
                console.log("GoldToothFlipper.Regular: FullOrders.Gold == " + quotient2 + ", SeperateItems.gold == " + remainder2 + ", FullOrders.WolfTeeth == " + quotient3 + ", SeperateItems.WolfTeeth == " + remainder3 + ", Profit expected == " + Profit + ".")
            }
            else if(GoldAmount<71680 && WolfToothAmount>71680){
                console.log("GoldToothFlipper.Regular: FullOrders.Gold == 0, SeperateItems.Gold == " + remainder2 + ", FullOrders.WolfTeeth == " + quotient3 + ", SeperateItems.WolfTeeth == " + remainder3 + ", Profit Expected == " + Profit + ".")
            }
            else if(GoldAmount<71680 && WolfToothAmount<71680){
                console.log("GoldToothFlipper.Regular: FullOrders.Gold == 0, SeperateItems.Gold == " + remainder2 + ", FullOrders.WolfTeeth == 0, SeperateItems.WolfTeeth == " + remainder3 + ", Profit Expected == " + Profit + ".")
            }
            else{
                console.warn("No available if / else if slot for CodeWrite Automation Update Regualr gold area. Sub Module == GoldenTooth Flipper")
            }

            if (ObjectValue===1){
                GoldToothObject1.EnchantedSuperior=0;
                GoldToothObject1.PricePerWolfTooth= Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject1.PricePerGoldIngot=Math.round(CleanGoldPrice * 10)/10;
                GoldToothObject1.SeperateWolfToothItems=remainder3;
                GoldToothObject1.FullOrderWolfTeethItems=quotient3;
                GoldToothObject1.SeperateGoldIngotItems=remainder2;
                GoldToothObject1.FullOrderGoldIngotsItems=quotient2;
                GoldToothObject1.Profit=Profit;
            }
            else if (ObjectValue===2){
                GoldToothObject2.EnchantedSuperior=0;
                GoldToothObject2.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject2.PricePerGoldIngot=Math.round(CleanGoldPrice * 10)/10;
                GoldToothObject2.SeperateWolfToothItems=remainder3;
                GoldToothObject2.FullOrderWolfTeethItems=quotient3;
                GoldToothObject2.SeperateGoldIngotItems=remainder2;
                GoldToothObject2.FullOrderGoldIngotsItems=quotient2;
                GoldToothObject2.Profit=Profit;
            }
            else if (ObjectValue===3){
                GoldToothObject3.EnchantedSuperior=0;
                GoldToothObject3.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject3.PricePerGoldIngot=Math.round(CleanGoldPrice * 10)/10;
                GoldToothObject3.SeperateWolfToothItems=remainder3;
                GoldToothObject3.FullOrderWolfTeethItems=quotient3;
                GoldToothObject3.SeperateGoldIngotItems=remainder2;
                GoldToothObject3.FullOrderGoldIngotsItems=quotient2;
                GoldToothObject3.Profit=Profit;
            }
            else if (ObjectValue===4){
                GoldToothObject4.EnchantedSuperior=0;
                GoldToothObject4.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject4.PricePerGoldIngot=Math.round(CleanGoldPrice * 10)/10;
                GoldToothObject4.SeperateWolfToothItems=remainder3;
                GoldToothObject4.FullOrderWolfTeethItems=quotient3;
                GoldToothObject4.SeperateGoldIngotItems=remainder2;
                GoldToothObject4.FullOrderGoldIngotsItems=quotient2;
                GoldToothObject4.Profit=Profit;
            }
            else if (ObjectValue===5){
                GoldToothObject5.EnchantedSuperior=0;
                GoldToothObject5.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject5.PricePerGoldIngot=Math.round(CleanGoldPrice * 10)/10;
                GoldToothObject5.SeperateWolfToothItems=remainder3;
                GoldToothObject5.FullOrderWolfTeethItems=quotient3;
                GoldToothObject5.SeperateGoldIngotItems=remainder2;
                GoldToothObject5.FullOrderGoldIngotsItems=quotient2;
                GoldToothObject5.Profit=Profit;
            }
            else{
                console.log("Invalid object number entered into gold tooth flipper. object value == " + ObjectValue)
            }
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

            if(EnchGoldAmount>71680 && WolfToothAmount>71680){
                console.log("GoldToothFlipper.Enchanted: FullOrders.Gold == " + quotientOfEnchGold + ", SeperateItems.gold == " + remainderOfEnchGold + ", FullOrders.WolfTeeth == " + quotientOfWolfteeth + ", SeperateItems.WolfTeeth == " + remainderOfWolfTeeth + ", Profit expected == " + Profit + ".")
            }
            else if(EnchGoldAmount<71680 && WolfToothAmount>71680){
                console.log("GoldToothFlipper.Enchanted: FullOrders.Gold == 0, SeperateItems.Gold == " + remainderOfEnchGold + ", FullOrders.WolfTeeth == " + quotientOfWolfteeth + ", SeperateItems.WolfTeeth == " + remainderOfWolfTeeth + ", Profit Expected == " + Profit + ".")
            }
            else if(EnchGoldAmount<71680 && WolfToothAmount<71680){
                console.log("GoldToothFlipper.Enchanted: FullOrders.Gold == 0, SeperateItems.Gold == " + remainderOfEnchGold + ", FullOrders.WolfTeeth == 0, SeperateItems.WolfTeeth == " + remainderOfWolfTeeth + ", Profit Expected == " + Profit + ".")
            }
            else{
                console.warn("No available if / else if slot for CodeWrite Automation Update Enchgold area. Sub Module == GoldenTooth Flipper")
            }

            if (ObjectValue===1){
                GoldToothObject1.EnchantedSuperior=1;
                GoldToothObject1.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject1.PricePerGoldIngot=Math.round(CleanEnchGoldPrice * 10)/10;
                GoldToothObject1.SeperateWolfToothItems=remainderOfWolfTeeth;
                GoldToothObject1.FullOrderWolfTeethItems=quotientOfWolfteeth;
                GoldToothObject1.SeperateGoldIngotItems=remainderOfEnchGold;
                GoldToothObject1.FullOrderGoldIngotsItems=quotientOfEnchGold;
                GoldToothObject1.Profit=Profit;
            }
            else if (ObjectValue===2){
                GoldToothObject2.EnchantedSuperior=1;
                GoldToothObject2.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject2.PricePerGoldIngot=Math.round(CleanEnchGoldPrice * 10)/10;
                GoldToothObject2.SeperateWolfToothItems=remainderOfWolfTeeth;
                GoldToothObject2.FullOrderWolfTeethItems=quotientOfWolfteeth;
                GoldToothObject2.SeperateGoldIngotItems=remainderOfEnchGold;
                GoldToothObject2.FullOrderGoldIngotsItems=quotientOfEnchGold;
                GoldToothObject2.Profit=Profit;
            }
            else if (ObjectValue===3){
                GoldToothObject3.EnchantedSuperior=1;
                GoldToothObject3.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject3.PricePerGoldIngot=Math.round(CleanEnchGoldPrice * 10)/10;
                GoldToothObject3.SeperateWolfToothItems=remainderOfWolfTeeth;
                GoldToothObject3.FullOrderWolfTeethItems=quotientOfWolfteeth;
                GoldToothObject3.SeperateGoldIngotItems=remainderOfEnchGold;
                GoldToothObject3.FullOrderGoldIngotsItems=quotientOfEnchGold;
                GoldToothObject3.Profit=Profit;
            }
            else if (ObjectValue===4){
                GoldToothObject4.EnchantedSuperior=1;
                GoldToothObject4.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject4.PricePerGoldIngot=Math.round(CleanEnchGoldPrice * 10)/10;
                GoldToothObject4.SeperateWolfToothItems=remainderOfWolfTeeth;
                GoldToothObject4.FullOrderWolfTeethItems=quotientOfWolfteeth;
                GoldToothObject4.SeperateGoldIngotItems=remainderOfEnchGold;
                GoldToothObject4.FullOrderGoldIngotsItems=quotientOfEnchGold;
                GoldToothObject4.Profit=Profit;
            }
            else if (ObjectValue===5){
                GoldToothObject5.EnchantedSuperior=1;
                GoldToothObject5.PricePerWolfTooth=Math.round(CleanWolfTeethPrice * 10)/10;
                GoldToothObject5.PricePerGoldIngot=Math.round(CleanEnchGoldPrice * 10)/10;
                GoldToothObject5.SeperateWolfToothItems=remainderOfWolfTeeth;
                GoldToothObject5.FullOrderWolfTeethItems=quotientOfWolfteeth;
                GoldToothObject5.SeperateGoldIngotItems=remainderOfEnchGold;
                GoldToothObject5.FullOrderGoldIngotsItems=quotientOfEnchGold;
                GoldToothObject5.Profit=Profit;
            }
            else{
                console.log("Invalid object number entered into gold tooth flipper. object value == " + ObjectValue)
            }
        }
    }
    console.log("----------------------------------->>     GoldToothFlipper Call Finished     <<------------------------------")
}// Func "GoldToothFlipper" is at v1

function EPearlFlipper(PriceOfEPearls,PriceOfEnchantedEPearls,MoneyAvailable,ObjectValue){ //add playerapikey to used things
    CleanEPearls = PriceOfEPearls;
    PriceOfEPearls = CleanEPearls+(CoopTaxRate/100)*CleanEPearls;
    CleanEEPearls = PriceOfEnchantedEPearls;
    PriceOfEnchantedEPearls = CleanEEPearls+(CoopTaxRate/100)*CleanEEPearls; // incorporate tax in the final calc
    let EPPX20 /*e pearl price times 20 */ = PriceOfEPearls*20;
    if (EPPX20<PriceOfEnchantedEPearls){
        let quotient = Math.floor((MoneyAvailable/PriceOfEPearls)/71680);
        let remainder = Math.floor((MoneyAvailable/PriceOfEPearls) % 71680);
        let Profit = Math.floor((Math.abs(PriceOfEPearls-10))*(MoneyAvailable/PriceOfEPearls));
        if ((MoneyAvailable/PriceOfEPearls)>71680){
            console.log("EPearlFlipper.Normal: Full Orders == " + quotient + ", Seperate Items == " + remainder + ", Profit == " + Profit + ".");
        }
        else{
            console.log("EPEarlFlipper.Normal: Full Orders == 0, Seperate Items = " + Math.floor(MoneyAvailable/PriceOfEPearls) + ", Profit == " + Profit + ".")
        }
        if (ObjectValue===1) {
            EnderPearlObject1.MoneyPP = Math.round(CleanEPearls * 10)/10;
            EnderPearlObject1.FullOrders = quotient;
            EnderPearlObject1.SeperateItems = remainder;
            EnderPearlObject1.Profit = Profit;
            EnderPearlObject1.EnchantedSuperior=0;
        }
        else if(ObjectValue===2){
            EnderPearlObject2.MoneyPP = Math.round(CleanEPearls * 10)/10;
            EnderPearlObject2.FullOrders = quotient;
            EnderPearlObject2.SeperateItems = remainder;
            EnderPearlObject2.Profit = Profit;
            EnderPearlObject2.EnchantedSuperior=0;
        }
        else if(ObjectValue===3){
            EnderPearlObject3.MoneyPP = Math.round(CleanEPearls * 10)/10;
            EnderPearlObject3.FullOrders = quotient;
            EnderPearlObject3.SeperateItems = remainder;
            EnderPearlObject3.Profit = Profit;
            EnderPearlObject3.EnchantedSuperior=0;
        }
        else if(ObjectValue===4){
            EnderPearlObject4.MoneyPP = Math.round(CleanEPearls * 10)/10;
            EnderPearlObject4.FullOrders = quotient;
            EnderPearlObject4.SeperateItems = remainder;
            EnderPearlObject4.Profit = Profit;
            EnderPearlObject4.EnchantedSuperior=0;
        }
        else if(ObjectValue===5){
            EnderPearlObject5.MoneyPP = Math.round(CleanEPearls * 10)/10;
            EnderPearlObject5.FullOrders = quotient;
            EnderPearlObject5.SeperateItems = remainder;
            EnderPearlObject5.Profit = Profit;
            EnderPearlObject5.EnchantedSuperior=0;
        }
        else{
            console.warn("Invalid Object Value has been entered into module EnderPearlFlipper. ObjectValue == " + ObjectValue + ", Enchanted Ender Pearls here. Report this bug to my github as it is really breaking the HyTools system.")
        }
    
    }
    else{
        let quotient = Math.floor((MoneyAvailable/PriceOfEnchantedEPearls)/71680);
        let remainder = Math.floor((MoneyAvailable/PriceOfEnchantedEPearls) % 71680);
        let Profit = Math.floor((Math.abs(PriceOfEnchantedEPearls-10))*(MoneyAvailable/PriceOfEnchantedEPearls));
        if ((MoneyAvailable/PriceOfEnchantedEPearls)>71680){
            console.log("EnderPearlFlipper.Enchanted: Full Orders == " + quotient + ", Seperate Items == " + remainder + ", Profit == " + Profit + ".");
        }
        else{
            console.log("EnderPearlFlipper.Enchanted: Full Orders == 0, Seperate Items == " + Math.floor(MoneyAvailable/PriceOfEnchantedEPearls) + ", Profit == " + Profit)
        }
        if(ObjectValue===1){
            EnderPearlObject1.MoneyPP = Math.round(CleanEEPearls * 10)/10;
            EnderPearlObject1.FullOrders = quotient;
            EnderPearlObject1.SeperateItems = remainder;
            EnderPearlObject1.Profit = Profit;
            EnderPearlObject1.EnchantedSuperior=1;
        }
        else if(ObjectValue===2){
            EnderPearlObject2.MoneyPP = Math.round(CleanEEPearls * 10)/10;
            EnderPearlObject2.FullOrders = quotient;
            EnderPearlObject2.SeperateItems = remainder;
            EnderPearlObject2.Profit = Profit;
            EnderPearlObject2.EnchantedSuperior=1;
        }
        else if(ObjectValue===3){
            EnderPearlObject3.MoneyPP = Math.round(CleanEEPearls * 10)/10;
            EnderPearlObject3.FullOrders = quotient;
            EnderPearlObject3.SeperateItems = remainder;
            EnderPearlObject3.Profit = Profit;
            EnderPearlObject3.EnchantedSuperior=1;
        }
        else if(ObjectValue===4){
            EnderPearlObject4.MoneyPP = Math.round(CleanEEPearls * 10)/10;
            EnderPearlObject4.FullOrders = quotient;
            EnderPearlObject4.SeperateItems = remainder;
            EnderPearlObject4.Profit = Profit;
            EnderPearlObject4.EnchantedSuperior=1;
        }
        else if(ObjectValue===5){
            EnderPearlObject5.MoneyPP = Math.round(CleanEEPearls * 10)/10;
            EnderPearlObject5.FullOrders = quotient;
            EnderPearlObject5.SeperateItems = remainder;
            EnderPearlObject5.Profit = Profit;
            EnderPearlObject5.EnchantedSuperior=1;
        }
    }
    console.log("----------------------------------->>     EPearlFlipper Call Finished     <<------------------------------")
}// Func "EPearlFlipper" is at v1.0



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
---   ---   ---   ---   ---*/