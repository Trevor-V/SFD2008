({
	doFun : function(component,event,helper){
		var startAction = component.get('c.getAllValue');
        
        startAction.setCallback(this,function(response){
            var state = response.getState();
            if(state==='SUCCESS'){
                component.set('v.Value',response.getReturnValue());
            }
            else{
                console.log(JSON.stringify(response.getErrors()));
            }
        });
        $A.enqueueAction(startAction);
	},
})