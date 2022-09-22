import { LightningElement } from 'lwc';
import getAppliedJobs from '@salesforce/apex/jobSeekerAppliedJob.getSavedJobs';
export default class SavedJobs extends LightningElement {

    showSavedDetails =''

   connectedCallback(){
        getAppliedJobs()
        .then(responce =>{
            this.showSavedDetails =responce
            console('responce'+JSON.stringify(responce));

        })
    }


    
}