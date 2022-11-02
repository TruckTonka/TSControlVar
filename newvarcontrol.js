    // Town Name and possible locations
    townName = "Tickles | BTB";
    townList = [
         {"x":298,"y":94},
         {"x":299,"y":92},
         {"x":299,"y":96},
         {"x":300,"y":98},
         {"x":298,"y":118},
         {"x":298,"y":117},
         {"x":298,"y":116},
         {"x":301,"y":100},
         {"x":431,"y":189},
         {"x":298,"y":115},
         {"x":431,"y":190},
         {"x":300,"y":112},
         {"x":427,"y":183},
         {"x":429,"y":185},
         {"x":302,"y":102},
         {"x":304,"y":108},
         {"x":309,"y":134},
         {"x":303,"y":103},
         {"x":304,"y":107},
         {"x":309,"y":133},
         {"x":304,"y":106},
         {"x":304,"y":104},
         {"x":304,"y":105},
         {"x":456,"y":189},
         {"x":446,"y":174},
         {"x":443,"y":172},
         {"x":446,"y":175},
         {"x":430,"y":178},
         {"x":452,"y":190},
         {"x":453,"y":187},
         {"x":342,"y":65},
         {"x":342,"y":66},
         {"x":461,"y":177},
         {"x":450,"y":187},
         {"x":451,"y":183},
         {"x":452,"y":184},
         {"x":460,"y":176},
         {"x":331,"y":62},
         {"x":331,"y":63},
         {"x":331,"y":64},
        ];
    
    // keepAmt is the amount that you do not want to sell
    // sellMin is the minimum amount needed before attempting to sell
    // setting a sellMin of 100 will ensure that the item is only sold in batches of 100 (e.g. via Freight Ship)
    // minGas is the minimum amount of gas to have before selling the item
    craftedItemsForSale = [
        {item: 'Stack_Box', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Party_Box', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Gift_Parcel', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Decorated_Cake', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Food_Parcel', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Cake', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Pumpkin_Pie', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Fabric_Box', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Supply_Box', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Sangria', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Uniforms', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Wool_Yarn', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Cabernet_Grapes', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Dough', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Cabernet_Sauvignon', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Jam', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Wax', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Honey', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Eggs', keepAmt: 2, sellMin: 0, minGas: 1},
        {item: 'Butter', keepAmt: 4, sellMin: 0, minGas: 1},
        {item: 'Ceramic_Bowl', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Lumber', keepAmt: 75, sellMin: 25, minGas: 1},
        {item: 'Cotton_Yarn', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Clay_Lump', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Cocoa', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Pumpkin', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Strawberries', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Peppermint', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Oak_Wood', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Sugar', keepAmt: 3, sellMin: 0, minGas: 1},
        {item: 'Salt', keepAmt: 2, sellMin: 0, minGas: 1},
        {item: 'Flour', keepAmt: 2, sellMin: 0, minGas: 1},
        {item: 'Brine', keepAmt: 1, sellMin: 0, minGas: 1},
        //{item: 'Wood', keepAmt: 15, sellMin: 25, minGas: 1},
        {item: 'Milk', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Cotton', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Wool', keepAmt: 2, sellMin: 0, minGas: 1},
        {item: 'Gasoline', keepAmt: 14, sellMin: 25, minGas: 1},
    ];
    
    trackingExclusionList = ["Energy", "Gasoline", "Petroleum", "Jet_Fuel", "Oak_Wood"];
    townNameToCheck = [
    ];
    
    //autoBuildFreq = 2;
    intervalToCheckInventory = 2;
    discordDMID = "TruckTonka | BTB#3487";
    //discordDMID = "Giggles | BTB#9315";
    //discordDMID = "NotSendToAnyone";
    
    jimmyAlertItem = "Uniforms";
    jimmyAlertInterval = 12;
    
    alertTasks = {
        //"jobMinutes":30,
        //"itemMinimum":{"Wooden_Box":1},
        //"rateMinimum":{"Uniforms":400},
        //"sellingItemMonitor":{"Jack_O_Lantern":27, "Pumpkin":27},
        //"rateMinimumAlarm":{"Jack_O_Lantern":150},
    };
    
    //Crafter Control and Monitor
    controlledCraftedItems = [
        //{item: 'Chromium', craftName:"Shallow_Chromium", min: 1, max: 2, buildings:["[55, 0, 75]"]},
        {item: "Energy", craftName:"Energy", min:2, max:4, ctrlCounter: 1},
        {item: "Lumber", craftName:"Lumber", min:5, max:8, ctrlCounter: 1, buildings:["[50, 0, 55]","[55, 0, 55]"]},
        {item: "Wooden_Box", craftName:"Wooden_Box", min:1, max:2, ctrlCounter: 1, buildings:["[60, 0, 55]"]},
        {item: "Oak_Barrel", craftName:"Oak_Barrel", min:1, max:2, ctrlCounter: 1, buildings:["[65, 0, 55]"]},
        {item: "Petroleum", craftName:"Petroleum", min:1, max: 2, ctrlCounter: 1},
        {item: "Water_Drum", craftName:"Water_Drum", min:2, max: 4, ctrlCounter: 1},
        {item: 'Chromium', craftName:"Shallow_Chromium", min: 1, max: 2, buildings:["[55, 0, 75]"]},
        {item: 'Limestone', craftName:"Shallow_Limestone", min: 1, max: 2, buildings:["[60, 0, 75]"]},
        {item: 'Silica', craftName:"Silica", min: 2, max: 4},
        //{item: 'Eggs', craftName:"Eggs", min: 4, max: 8, buildings:["[65, 0, 25]"]},
        {item: 'Wine_Bottle', craftName:"Wine_Bottle", min: 1, max: 2},
        {item: 'Candy_Canes', craftName:"Candy_Canes", min: 1, max: 2},
        {item: 'Chocolate_Bar', craftName:"Chocolate_Bar", min: 1, max: 2, buildings:["[15, 0, 45]"]},
        {item: 'Cabernet_Sauvignon', craftName:"Cabernet_Sauvignon", min: 1, max: 2, buildings:["[40, 0, 50]"]},
        {item: 'Sangria', craftName:"Sangria", min: 1, max: 2, buildings:["[25, 0, 75]"]},
        {item: 'Honey', craftName:"Honey", min: 1, max: 2, buildings:["[30, 0, 15]"]},
        {item: 'Jam', craftName:"Jam", min: 2, max: 4, buildings:["[30, 0, 50]"]},
        {item: 'Decorated_Cake', craftName:"Decorated_Cake", min: 1, max: 2, buildings:["[25, 0, 70]"]},
        {item: 'Cake', craftName:"Cake", min: 1, max: 2, buildings:["[35, 0, 65]"]},
        {item: 'Batter', craftName:"Batter", min: 3, max: 5, buildings:["[25, 0, 65]"]},
        {item: 'Pumpkin_Pie', craftName:"Pumpkin_Pie", min: 1, max: 2, buildings:["[25, 0, 55]"]},
    ];
    
    //pairCraftItems = {item1:"Wool", craftedItem1:"Wool_Yarn", item2:"Cotton", craftedItem2:"Cotton_Yarn", gap:9, buildings:["[50, 0, 45]"]};
    //const pairCraftItems = {item1:"Wool", craftedItem1:"Wool_Yarn", item2:"Cotton", craftedItem2:"Cotton_Yarn", gap:9, buildings:["[50, 0, 45]","[45, 0, 45]"]};
    
    exitWhen1GasLeft = false;
    
    //HotKey assignment
    //UpperCaseEBuilding = "Alfa_Fountain_Great";
    //UpperCaseEBuilding = "Rare_Tesla_Coil";
    //UpperCaseEBuilding = "Rare_Simplex_Sugarcane";
    //UpperCaseEBuilding = "Epic_Water_Tower";
    //UpperCaseEBuilding = "Legendary_Tesla_Coil";
    //UpperCaseEBuilding = "Rare_Water_Tower";
    UpperCaseEBuilding = "Legendary_Wheat_Stand";
    //UpperCaseEBuilding = "Legendary_Stylin_Ride";
    ////UpperCaseEBuilding = "Haunted_Front_Porch";
    //UpperCaseEBuilding = "CraneBot_Home";
    //UpperCaseEBuilding = "SaltyBot_Home";

    enableAutoBuild = false;
    enableAutoTap = true;    
    enforceBCItems = true;  
    enableKeyboardBuild = false;
    
    buildSeq = [
        //{"do":"RemoveAll","building":"Pasture"},
        //{"do":"RemoveAll","building":"Marsh"},
        //{"do":"RemoveAll","building":"Tree"},
        //{"do":"WaitCraft","craft":"Blue_Steel","qty":100},
        //{"do":"Craft","building":"Windmill","material":"Flour","x":20,"y":0,"min":15},
        //{"do":"Parse","expression":"enableAutoTap = true;"},
        //{"do":"Parse","expression":"autoBuildFreq = 5"},
        //{"do":"WaitAll"},
        //{"do":"WaitCraft","craft":"Blue_Steel","qty":100},
        //{"do":"Flush","building":"Trough","craft":"Feed","qty":99},
        //{"do":"Flush","building":"Warehouse","craft":"Energy","qty":19},
        //{"do":"Flush","building":"Silo","craft":"Sugarcane","qty":35},
        //{"do":"Flush","building":"Wood_Shed","craft":"Wood","qty":18},
        //{"do":"Place","building":"Tree_Farm","x":30,"y":20,"min":5,"force":true},
        

    
    
    
{"do":"WaitCraft","craft":"Blue_Steel","qty":100},  



    ];
    
//-----Anything changed within this segment will need to refresh the game to take effect:    
//-----Anything changed within this segment will need to refresh the game to take effect:    
