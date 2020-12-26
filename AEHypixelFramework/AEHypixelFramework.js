// /%!%!/ is the double check this works call, kapeesh
// compress with https://javascriptcompressor.com/
//use semi colons you buffoon
let AEHypixelModule = {
    version:"0.5.0",
    logSuccessfulFunctionExecutions: false,
    APIKey:"",
    player:{
        IGN:"",
        UUID:"",
        profile:"",
        JSON:"",
        money:0,
    },
    TextPlaceHolder:"",
    IntegerPlaceHolder:0,
    resetPlaceholders: function(){
        this.TextPlaceHolder="";
        this.IntegerPlaceHolder=0;
    },
    async getPlayerUUID(){
        if (this.player.IGN==""){
            console.warn("Unsuccessful execturion of 'getPlayerUUID' function");
            console.log("Please enter a username value into the value:");
            console.log("player.IGN");
            console.log("The path for this variable is:");
            console.log("AEHypixelModule.player.IGN");
            console.log("It is a string, chaning it should look like the function below:");
            console.log('AEHypixelModule.player.IGN = "*Insert player name here*"');
            console.log("Where *Insert Player name here* is an actual player name, such as Timedeo or PewDiePie");
            console.log("It isn't case sensitive, and once it has been called, should'nt have to be used ever again as the uuid never changes..");
        }
        else{
            let MojangJSONRaw = await fetch("https://cors-anywhere.herokuapp.com/" + "https://api.mojang.com/users/profiles/minecraft/" + this.player.IGN);
            let FormattedMojangJSON = await MojangJSONRaw.json();
            PlayerUUID = await FormattedMojangJSON.id;
            this.player.UUID = PlayerUUID;
            if(this.logSuccessfulFunctionExecutions === true){
                console.log('Execution of "getPlayerUUID went successfully, player UUID == "' + this.player.UUID + '"');
            };
        }
    },
    async getItemBazaarData(name_of_item_in_full_caps){
        if(this.APIKey === ""){
            console.warn("Unsuccessful execution of 'getItemBazaarData' function")
            console.log("No API key has been provided, path = 'AEHypixelFramework.APIKey' (string)")
        }
        else{
            let grabItemRawJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + this.APIKey + "&productId=" + name_of_item_in_full_caps);
            let ItemJSON = await grabItemRawJSON.json();
            if(this.logSuccessfulFunctionExecutions === true){
                console.log('Execution of "getItemBazaarData" went successfully, end data == ' )
                console.log(ItemJSON)
            };
            return await (ItemJSON); //   /%!%!/ not sure if return await is a viable thing
        }
        
    }, //double check this works (/%!%!/)
    incorporateTax: function(tax_rate,price_of_item_to_have_tax_added_to_self){
        this.IntegerPlaceHolder = price_of_item_to_have_tax_added_to_self+(tax_rate/100)*price_of_item_to_have_tax_added_to_self;
        let x = this.IntegerPlaceHolder;
        this.resetPlaceholders();
        return x;
    },
    find_buy_orders: function(Item_Amount,Amount_of){
        let quotient = Math.floor(Item_Amount/Amount_of);
        let remainder = Math.floor(Item_Amount % Amount_of);
        let x = {
            full_orders:quotient,
            seperate_items:remainder,
        };
        return x;
    },
    async getMoneyAvailable(Profile_With_Proper_capitilisation_optional_input_empty_string_for_already_input){
        let ProfileCuteName = "";
        // debugging things ingnore
        //check that a proper profile name has been entered
        if (Profile_With_Proper_capitilisation_optional_input_empty_string_for_already_input === ""){
            if(this.player.profile == ""){
                console.log('AEHypixelFramework.player.profile == ""; Insert something into the Profile value for this function, or set "AEHypixelFramework.player.profile" to a profile name with proper capitilisation ( for eample instead of typing watermelon type Watermelon).');
            }
            else{
                ProfileCuteName = Profile_With_Proper_capitilisation_optional_input_empty_string_for_already_input;
            };
        }
        else{
            ProfileCuteName = Profile_With_Proper_capitilisation_optional_input_empty_string_for_already_input;
        };

        //check that a username or uuid already exists
        if(this.player.IGN == "" || this.player.UUID == ""){
            console.log('No player name or player UUID has been entered yet; the path for the IGN is "AEHypixelFramework.player.IGN", the path for the uuid is either "AEHypixelFramework.player.UUID" or by running the "getUUID" function located at "AEHypixelFramework.getUUID". if you eneter a usename, the getUUID function will be called and the player.UUID var will be called. if you need it to be empty, call the getUUID function, copy the player.UUID var to your own and set player.UUID to "" as it is a string.');
        }
        else{ //when all other things above are succesfull
            let RawPlayerJSON = await fetch('https://api.hypixel.net/skyblock/profiles?key=' + this.APIKey + '&uuid=' + this.player.UUID);
            this.player.JSON = await RawPlayerJSON.json();
            for(let i=0;await this.player.JSON.profiles[this.IntegerPlaceHolder].cute_name !== Player.Profile;this.IntegerPlaceHolder++){};
            let rawPlayerMoney= Math.floor(await FormattedPlayerJSON.profiles[this.IntegerPlaceHolder].members[this.player.UUID].coin_purse);
            this.player.money = rawPlayerMoney;
            if(this.logSuccessfulFunctionExecutions === true){
                console.log("Player Money == " + this.player.money);
                console.log("fetched JSON file == ");
                console.log(this.player.JSON);
            };
        };

    }

};
let VersionType = "";
let RealVersion = "";
let CallVersion = true;
let AE1 = "";
let AE3 = "";
let AE2 = "";
async function AE4(){
    AE3 = await fetch('https://amethystedits.github.io/AEHypixelFramework/AEHFVersion.json');
    AE2 = await AE3.json(); 
};
AE4();
if(CallVersion === true){
    let AE9 = AE2.Version;
    if(AE9 !== AEHypixelModule.Version){
        console.log("Amethyst Engine // Hypixel Frame work has updated. Please visit "); // %!%!/ dont check this, add the link to my github realeas pagte
    }
    else{
        console.log("Amethyst Engine // Hypixel Frame Work is up to date.");
    };
}
else{
    let AE9 = AE2.Version;
    if(AE9 !== AEHypixelModule.Version){
        VersionType = "Amethyst Engine // Hypixel Frame work has updated. Please visit "; // %!%!/ dont check this, add the link to my github realeas pagte
        RealVersion = AE9;
    }
    else{
        VersionType = "Amethyst Engine // Hypixel Frame Work is up to date.";
        RealVersion = AE9;
    };
};
console.log("Amethyst Engine Hypixel Skyblock Module version V" + AEHypixelModule.version + " loaded.");