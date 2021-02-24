let testOb1 = [
    {
        money:12031234,
        profile:"Watermelon",
        helm:"Lapis Helmet",
        chest:"Lapis Chestplate",
        legging:"Lapis Leggings",
        boots:"Lapis Boots"
    },
    {
        money:38476345,
        profile:"Cucumber",
        helm:"Strong Dragon Helmet",
        chest:"Strong Dragon Chestplate",
        legging:"Strong Dragon Leggings",
        boots:"Strong Dragon Boots"
    }
];
let placeholders = {
    profileSelecters:{
        actual:{
            
        },
        upTo:0
    }
};  
let statusHolder=0; //used
let profileSelects = 0; //used
let usedPlaceholder1 = undefined;
let currentSelect = 0;
let selected = [];
let username = "";
let apiki = "";
function next() {
    if (statusHolder === 0){
        if(document.getElementById('textinput1').value ===""){
            let newWarning = document.createElement('p');

            newWarning.setAttribute('class','fillInWarning');
            newWarning.setAttribute('id','warning1');
            newWarning.innerHTML="Please enter a valid minecraft username.";
            
            document.getElementById('MCUsernameInput').append(newWarning);
        }
        else{
            document.cookie = "username=" + document.getElementById("textinput1").value + ";";
            // add cookie for username

            document.getElementById("MCUsernameInput").remove();
            //remove askUsername's elements
            
            let HiKey = document.getElementById('APIKeyInput')
            let newLabel = document.createElement('label');
            let newInput = document.createElement('input');
            let br = document.createElement('br');
            //create elements

            newInput.setAttribute('type','text');
            newInput.setAttribute('id','input2')
            newLabel.setAttribute('for','input2');
            newLabel.innerHTML = "Your APIKey";
            newLabel.setAttribute('id','label1');
            //set attributes

            HiKey.append(newLabel);
            HiKey.append(newInput);
            //append / add them to the div
            statusHolder++;
        }
    }
    else if(statusHolder===1){
        if(document.getElementById('input2').value === ""){
            let newWarning = document.createElement('p');

            newWarning.setAttribute('class','fillInWarning');
            newWarning.setAttribute('id','warning1');
            newWarning.innerHTML="Please enter a valid Hypixel API key.";
            
            document.getElementById('APIKeyInput').append(newWarning);
        }
        else{
            document.cookie = "apikey=" + document.getElementById("input2").value + ";";
            //save apikey to cookie

            document.getElementById('APIKeyInput').remove();
            //remove past elements

            
            for(let i = 0; profileSelects < testOb1.length; profileSelects++){
                let base = document.getElementById('profileSelect');
                let info = testOb1[profileSelects];

                usedPlaceholder1 = "newDiv" + currentSelect;
                currentSelect++;
                
                let newDiv = document.createElement('div');
                newDiv.setAttribute('class','madeDiv');
                newDiv.setAttribute('id',usedPlaceholder1);
                newDiv.addEventListener('click',() => {
                    const newx = usedPlaceholder1;
                    let x = document.getElementById(newx);
                    selected.push(x)
                })
                base.append(newDiv);
                base = newDiv;

                let newTitle = document.createElement('h6');
                newTitle.setAttribute('class','newTitle');
                newTitle.innerHTML = "Profile: " + info.profile;
                base.append(newTitle);

                let displayMoney = document.createElement('p');
                displayMoney.setAttribute('class','newDisplay');
                displayMoney.innerHTML = "Coins: " + info.money;
                base.append(displayMoney);

                let Dhelm = document.createElement('p');
                let Dchest = document.createElement('p');
                let Dleg = document.createElement('p');
                let Dboots = document.createElement('p');
                Dhelm.setAttribute('class','newDisplay');
                Dchest.setAttribute('class','newDisplay');
                Dleg.setAttribute('class','newDisplay');
                Dboots.setAttribute('class','newDisplay');
                Dhelm.innerHTML = "Helmet currently equipped: " + info.helm;
                Dchest.innerHTML = "Chestplate currently equipped: " + info.chest;
                Dleg.innerHTML = "Leggings currently equipped: " + info.legging;
                Dboots.innerHTML = "Boots currently equipped: " + info.boots;
                base.append(Dhelm);
                base.append(Dchest);
                base.append(Dleg);
                base.append(Dboots);
            }
        }
    }
    else{
        console.warn("die");
    }
}
function nexter(){console.log("nexter called")};