import { LightningElement, track } from 'lwc';
import getAppliedJobs from '@salesforce/apex/jobSeekerAppliedJob.getAppliedJobs';

export default class AppliedJobs extends LightningElement {

   

//    ShowJobDetails='';
   
//    connectedCallback(){
//         getAppliedJobs()
//         .then(responce =>{
//             this.ShowJobDetails= responce;
//             console.log('responce is'+JSON.stringify(responce));
//         })
    
        
//    }
@track lst;
handleAppliedJobs()
{
    getAppliedJobs()
    .then(result =>{
        console.log('result is '+JSON.stringify(result));
        this.lst=result.map(function(item){
            return {jobTitle:item["job_Title__r"],seekerName:item["SeekerName__r"],id:item["Id"]}
            
        })
        
        console.log('lst');
        console.log(this.lst);
    })
    .catch(error =>{
        console.error(error);
    })
}

    

    }