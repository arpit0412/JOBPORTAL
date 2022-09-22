({
  doInit : function(component) {
        var action = component.get('c.getSeekerInfo');

        action.setCallback(this, function(response){
           var state = response.getState();
           var res = response.getReturnValue();
           component.set('v.seekers', res);
           var res1 = JSON.stringify(res);
           
           
            if(state ==='SUCCESS'){
                console.log('state---' +state);
               console.log('responceee --' +res1);
                
   }
   
   
        } );
      
        $A.enqueueAction(action);

    },
    
    handleClick : function(component, event){
        component.set("v.show", true);
        
          let selecteditem=event.currentTarget;
        //  let Id=selecteditem.dataset.id;
          
          
          let Name=selecteditem.dataset.name;
          let Cname=selecteditem.dataset.cname;
         let Location=selecteditem.dataset.location;
         let Email=selecteditem.dataset.email;
         let JobPostedDate=selecteditem.dataset.jobposteddate;
         let JobEndDate=selecteditem.dataset.jobenddate;
         let Salary=selecteditem.dataset.salary;
         let Experience=selecteditem.dataset.experience;
         let State=selecteditem.dataset.state;
         let  City=selecteditem.dataset.city;
        
         
      
         
 
        
     
          component.set("v.Name" ,Name);
          component.set("v.Cname",Cname);
          component.set("v.Location",Location);
          component.set("v.Email",Email);
          component.set("v.JobPostedDate",JobPostedDate);
          component.set("v.JobEndDate",JobEndDate);
          component.set("v.Salary",Salary);
          component.set("v.Experience",Experience);
          component.set("v.State",State);
          component.set("v.City",City);

          console.log("acsf" +Name);
          // component.set("v.recordId",recordId);
          // component.set("v.Id",Id);
        
 
        //   console.log('id' +Id);
 
        //   console.log('recruiter '+UserId);
        //    console.log('record  '+Id);
        
        
         
 
     },

    //     var action = component.get('c.getSeekerList');
    //     action.setCallback(this, function(response){
    //         var  state = response.getState();
    //         console.log('state----'+state);
    //         if(state === 'SUCCESS'){
    //             var res = response.getReturnValue();
    //             component.set('v.seekDetails', res);
                
    //         }
    //     })
    //     var newRes = JSON.stringify(res);
    //             console.log('newRes----' +newRes);
    //             $A.enqueueAction(action);
    // }
}

    )
