// /%!%!/ is the double check this works call, kapeesh
// compress with https://javascriptcompressor.com/
//use semi colons you buffoon
let AEHypixelModule = {
    logSuccessfulFunctionExecutions: false,
    APIKey:"",
    player:{
        IGN:"",
        UUID:"",
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

}
