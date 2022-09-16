    // Town Name and possible locations
    townName = "";
    townList = [
         ];
    
    // keepAmt is the amount that you do not want to sell
    // sellMin is the minimum amount needed before attempting to sell
    // setting a sellMin of 100 will ensure that the item is only sold in batches of 100 (e.g. via Freight Ship)
    // minGas is the minimum amount of gas to have before selling the item
    craftedItemsForSale = [
        {item: 'Decorated_Cake', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Cake', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Batter', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Chocolate_Bar', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Candy_Canes', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Butter', keepAmt: 3, sellMin: 0, minGas: 1},
        {item: 'Sugar', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Milk', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Salt', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Flour', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Eggs', keepAmt: 1, sellMin: 0, minGas: 1},
        {item: 'Peppermint', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Cocoa', keepAmt: 0, sellMin: 0, minGas: 1},
        {item: 'Brine', keepAmt: 9, sellMin: 0, minGas: 1},
        {item: 'Sugarcane', keepAmt: 9, sellMin: 0, minGas: 1},
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
        //"itemMinimum":{"Gasoline":8},
        //"rateMinimum":{"Uniforms":400},
        //"sellingItemMonitor":{"Candy_Canes":15},
        //"rateMinimumAlarm":{"Candy_Canes":165},
    };
    
    //Crafter Control and Monitor
    controlledCraftedItems = [
        //{item:"Lumber", min:5, max:10, buildings:["[45, 0, 55]", "[45, 0, 45]"]},
        {item: "Petroleum", min: 1, max: 2, ctrlCounter: 1},
    ];
    
    //pairCraftItems = {item1:"Wool", craftedItem1:"Wool_Yarn", item2:"Cotton", craftedItem2:"Cotton_Yarn", gap:9, buildings:["[50, 0, 45]"]};
    //const pairCraftItems = {item1:"Wool", craftedItem1:"Wool_Yarn", item2:"Cotton", craftedItem2:"Cotton_Yarn", gap:9, buildings:["[50, 0, 45]","[45, 0, 45]"]};
    
    exitWhen1GasLeft = false;
    
    //HotKey assignment
    //UpperCaseEBuilding = "Alfa_Fountain_Great";
    //UpperCaseEBuilding = "Rare_Tesla_Coil";
    //UpperCaseEBuilding = "Simplex_Sugarcane";
    UpperCaseEBuilding = "Water_Tower";
    //UpperCaseEBuilding = "Legendary_Tesla_Coil";
    //UpperCaseEBuilding = "Rare_Water_Tower";
    //UpperCaseEBuilding = "Legendary_Wheat_Stand";
    //UpperCaseEBuilding = "Legendary_Stylin_Ride";
    ////UpperCaseEBuilding = "Haunted_Front_Porch";
    //UpperCaseEBuilding = "CraneBot_Home";
    //UpperCaseEBuilding = "SaltyBot_Home";

    enableAutoBuild = false;
    enableAutoTap = true;    
    enforceBCItems = false;  
    enableKeyboardBuild = true;
    
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
     
