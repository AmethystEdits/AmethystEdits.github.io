// /%!%!/ is the double check this works call, kapeesh
// compress with https://javascriptcompressor.com/
//use semi colons you buffoon
let AEHypixelModule = {
    version:"0.5.1",
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
            console.log("Please enter a username value into the value:");
            console.log("player.IGN");
            console.log("The path for this variable is:");
            console.log("AEHypixelModule.player.IGN");
            console.log("It is a string, chaning it should look like the function below:");
            console.log('AEHypixelModule.player.IGN = "*Insert player name here*"');
            console.log("Where *Insert Player name here* is an actual player name, such as Timedeo or PewDiePie");
            console.log("It isn't case sensitive, and once it has been called, should'nt have to be used ever again.");
            console.log("This was said as the framework can't get the UUID of a player without a username.");
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
        let grabItemRawJSON = await fetch("https://api.hypixel.net/skyblock/bazaar/product?key=" + this.APIKey + "&productId=" + name_of_item_in_full_caps);
        let ItemJSON = await grabItemRawJSON.json();
        if(this.logSuccessfulFunctionExecutions === true){
            console.log('Execution of "getItemBazaarData" went successfully, end data == ' + ItemJSON )
        };
        return await (ItemJSON);
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
let XYZEEFF = "";
let XYZEFFE = "";
async function XYUFF(){
    XYZEEFF = await fetch('https://amethystedits.github.io/AE%20Hypixel%20Framework/AEHFVersion.json');
    XYZEFFE = await XYZEEFF.json(); 
};
XYUFF();
if(CallVersion === true){
    let VERXXF = XYZEFFE.Version;
    if(VERXXF !== AEHypixelModule.version){
        console.log("Amethyst Engine // Hypixel Frame work has updated. Please visit "); // %!%!/ dont check this, add the link to my github realeas pagte
    }
    else{
        console.log("Amethyst Engine // Hypixel Frame Work is up to date.");
    };
}
else{
    let VERXXF = XYZEFFE.Version;
    if(VERXXF !== AEHypixelModule.version){
        VersionType = "Amethyst Engine // Hypixel Frame work has updated. Please visit "; // %!%!/ dont check this, add the link to my github realeas pagte
        RealVersion = VERXXF;
    }
    else{
        VersionType = "Amethyst Engine // Hypixel Frame Work is up to date.";
        RealVersion = VERXXF;
    };
};