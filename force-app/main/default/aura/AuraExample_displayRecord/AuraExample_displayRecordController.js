// AuraExample_displayRecordController.js
({
    doInit : function(component, event, helper) {
        //Insert after the Contact table

        //This sets the Columns for the table
        component.set("v.Columns",[
            {type:'button', typeAttributes:{
                iconName:'utility:view',
                label:'View',
                name:'View',
                disabled:false,
                value:'view'
            }},
            {type:'button',typeAttributes:{
                iconName: 'utility:edit',
                label: 'Edit', 
                name: 'Edit', 
                title: 'Edit', 
                disabled: false, 
                value: 'edit'
            }},
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"},
            {label:"Phone", fieldName:"Phone", type:"phone"}
        ]);


        // get the action from the component
        var action = component.get("c.getContacts"); // c. references the Apex server-side controller method

        // Set the parameters
        action.setParams({
            recordId: component.get("v.recordId")
        });

        // Set the callback (aka get the results).
        action.setCallback(this, function(data){
            component.set("v.Contacts", data.getReturnValue()); //populate the attribute with the results
        });
        $A.enqueueAction(action); //This actually fires your action/event. Everything before this defines the action/event


    },

    handleBtn : function(component,event,helper){
        var action = event.getParam('action').name;//Get name of button that fired the action
  		var row = event.getParam('row').Id;//Get Id of the row the button is on
        


        if(action=='Edit'){
            alert('Edit');//for debugging
            var editEvent = $A.get("e.force:editRecord");//navs us to the edit screen
            editEvent.setParams({
                "recordId": row //tells Lightning which record we want to edit
            });
            editEvent.fire();//fire our component event
        }else if(action=='View'){
            alert('View');
            var viewEvent = $A.get("e.force:navigateToURL");//navs us to the view page
            viewEvent.setParams({
                "url":'/'+row //tells lightning which url to nav to
            });
            viewEvent.fire();//fire our component event
        }

    },
})