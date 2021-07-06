// /%!%!/ is the double check this works call, kapeesh
// compress with https://javascriptcompressor.com/
//Noob's ModVersion
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
    debugging:false,
    AEPlaceholders={
        VersionType:'',
        RealVersion:'',
        CallVersion:true,
        AE3:"",
        AE2:"",
        async AE4(){
            this.AE3 = await fetch('https://amethystedits.github.io/AEHypixelFramework/AEHFVersion.json');
            this.AE2 = await this.AE3.json(); 
        }
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
            console.log("It is a string");
            console.log("Where *Insert Player name here* is an actual player name, such as Timedeo");
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
    async getItemBazaarData(name_of_item_in_full_caps=""){
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
    incorporateTax: function(tax_rate=0,item_price=0){
        this.IntegerPlaceHolder = item_price+(tax_rate/100)*item_price;
        let x = this.IntegerPlaceHolder;
        this.resetPlaceholders();
        return x;
    },
    find_buy_orders: function(Item_Amount=0,Amount_of=0){
        let quotient = Math.floor(Item_Amount/Amount_of);
        let remainder = Math.floor(Item_Amount % Amount_of);
        let x = {
            full_orders:quotient,
            seperate_items:remainder,
        };
        return x;
    },
    async getMoneyAvailable(ProfileName=""){
        let ProfileCuteName = "";
        // debugging things ingnore
        //check that a proper profile name has been entered
        if (ProfileName === ""){
            if(this.player.profile == ""){
                console.log('AEHypixelFramework.player.profile == ""; Insert something into the Profile value for this function, or set "AEHypixelFramework.player.profile" to a profile name with proper capitilisation ( for eample instead of typing watermelon type Watermelon).');
            }
            else{
                ProfileCuteName = ProfileName;
            };
        }
        else{
            ProfileCuteName = ProfileName;
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
AEHypixelModule.AEPlaceholders.AE4();
if(AEHypixelModule.AEPlaceholders.CallVersion === true){
    let AE9 = AEHypixelModule.AEPlaceholders.AE2.Version;
    if(AE9 !== AEHypixelModule.Version){
        console.log("Amethyst Engine // Hypixel Frame work has updated to V" + AEHypixelModule.AEPlaceholders.AE2.Version + "."); // %!%!/ dont check this, add the link to my github realeas pagte
    }
    else{
        console.log("Amethyst Engine // Hypixel Frame Work is up to date.");
    };
}
else{
    let AE9 = AEHypixelModule.AEPlaceholders.AE2.Version;
    if(AE9 !== AEHypixelModule.Version){
        AEHypixelModule.AEPlaceholders.VersionType = "Amethyst Engine // Hypixel Frame work has updated. Please visit "; // %!%!/ dont check this, add the link to my github realeas pagte
        AEHypixelModule.AEPlaceholders.RealVersion = AE9;
    }
    else{
        AEHypixelModule.AEPlaceholders.VersionType = "Amethyst Engine // Hypixel Frame Work is up to date.";
        AEHypixelModule.AEPlaceholders.RealVersion = AE9;
    };
};