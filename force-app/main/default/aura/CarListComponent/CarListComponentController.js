({
    //Add the default Car to the Carlist on load
    doInit : function(component, event, helper) {
        console.log("DID THE COMPONENT");
        var car = component.get('v.car');
        console.log('Default Car?: '+car);
    },
    
    saveCar : function(component, event, helper){
        //Get fields by Name
        var curCar = {};
        curCar.Make = component.get('v.inMake');
        curCar.Model = component.get('v.inModel');
        curCar.Year = component.get('v.inYear');
        var garage = component.get('v.carList');

        garage.push(curCar);

        console.log('carList populates? '+JSON.stringify(garage));
        component.set("v.carList",garage);

        //Clear values using Name 
        //component.set('v.carList',garage);
        component.set('v.inMake','');
        component.set('v.inModel','');
        component.set('v.inYear','');
    },

    sort : function(component,event,helper){
        var col = event.srcElement.dataset.col;
        helper.sort(component,col);
    },

})