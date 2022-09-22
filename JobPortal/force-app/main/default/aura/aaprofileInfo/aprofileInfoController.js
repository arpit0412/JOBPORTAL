({
    doInit : function(component, event, helper) {
        
        var action = component.get("c.getProfileInfo");
            action.setCallback(this, function(response) {
                
                var state  = response.getState();
                if (state === "SUCCESS") {
                    var storeResponse = response.getReturnValue();
                 
                    
                    component.set("v.userInfo", storeResponse);
                  
                }
            });
            var str = JSON.stringify(action);
            console.log("action=====> " + str);
            $A.enqueueAction(action);
          
        }

        })

    
