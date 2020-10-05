/* auraMethodController.js */
({
    //For synchronous method
    logParam : function(cmp, event) {
        var params = event.getParam('arguments');
        if (params) {
            var message = params.message;
            console.log("message: " + message);
            return message;
        }
    },

    //for asynchronous method
    echo : function(component,event,helper){
        var params = event.getParam('arguments');
        var callback;

        if(params){
            callback = params.callback;
        }

        var action = component.get('c.serverEcho');
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS"){
                console.log('From server: '+response.getReturnValue());
                //return doesn't work for async server action calls
                //Use response.getReturnValue() to call the callback passed into aura:method
                if(callback) callback(response.getReturnValue());
            }
            else if(state === "INCOMPLETE"){
                console.log('Call stopped unexpectantly');
            }
            else if(state === "ERROR"){
                var errors = response.getError();
                if(errors){
                    if(errors[0] && errors[0].message){
                        console.log('Error message: '+errors[0].message);
                    }
                    else {
                        console.log('Unknown error occurred');
                    }
                }
            }
        });
        $A.enqueueAction(action);
    }
})