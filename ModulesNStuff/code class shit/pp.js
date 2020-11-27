let Getit = await fetch('https://api.hypixel.net/skyblock/bazaar/product?key=6eeb433c-ceeb-4700-8ad7-8cf21c7d9caf&productId=ENDER_PEARL');
                let getItData = await Getit.json();
                console.log(getItData.product_info.buy_summary[0].pricePerUnit)