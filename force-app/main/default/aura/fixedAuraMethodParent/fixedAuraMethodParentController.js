/* auraMethodCallerController.js */
({
    //Synchronous method
    callAuraMethod : function(component, event, helper) {
        var childCmp = component.find("child");
        // call the aura:method in the child component
        var auraMethodResult = childCmp.logParam("message sent by parent component");
        console.log("auraMethodResult: " + auraMethodResult);
    },

    //Asynchronous method
    callAuraMethodServerTrip : function(component,event,helper){
        var childCmp = component.find('child');
        //call the aura:method in the child component
        childCmp.echo(function(result){
            console.log('callback for aura:method was executed');
            console.log('result:: '+result);
        });
    },
})