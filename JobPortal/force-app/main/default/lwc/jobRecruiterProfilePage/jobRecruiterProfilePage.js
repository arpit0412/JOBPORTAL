import { createRecord } from 'lightning/uiRecordApi';
import { LightningElement ,wire} from 'lwc';
import createJobRecruiterRecord from '@salesforce/apex/JobRecruiterClass.createJobRecruiterRecord';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 import {getPicklistValues } from 'lightning/uiObjectInfoApi';
 import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Job_Object from '@salesforce/schema/Job_Recruiter__c';
import State_R from '@salesforce/schema/Job_Recruiter__c.State__c';
import City_R from '@salesforce/schema/Job_Recruiter__c.City__c';
// import Job_Type from '@salesforce/schema/Job_Recruiter__c.Job_Type__c';



export default class ProfilePage extends LightningElement {
    
   //  jobtype ;
   //  @wire(getObjectInfo, { objectApiName: Job_Object })
   //  jobInfo;

   //   @wire(getPicklistValues,{
   //   recordTypeId: '$jobInfo.data.defaultRecordTypeId', 
   //      fieldApiName: Job_Type
   //      })
   //      Job_TypePicklist;
 
   //      handleJobtype(event)
   //      {
   //         this.jobtype = event.target.value;
   //      }


   compName='';
   jobTitle='';
   jobDesc='';
   jobPost='';
   jobEnd='';
   jobLoc='';
   exp='';
   ctc='';
   city='';
   state= '';
   email='';
   phone='';
   address='';

   handleCompName(event)
   {
      this.compName=event.target.value;
   }
   handleJobTitle(event)
   {
      this.jobTitle=event.target.value;
   }
   handleJobDesc(event)
   {
      this.jobDesc=event.target.value;
   }
   handleJobPostedDate(event)
   {
      this.jobPost=event.target.value;
   }
   handleJobEndDate(event)
   {
      this.jobEnd=event.target.value;
   }
   handleJobLocation(event)
   {
      this.jobLoc=event.target.value;
   }
   handleExperience(event)
   {
      this.exp=event.target.value;
   }
   handleCtc(event)
   {
      this.ctc=event.target.value;
   }
    handleCity(event)
    {
       this.city=event.target.value;
       console.log("City",this.city)
    }

   handleEmail(event)
   {
      this.email=event.target.value;
   }
   handlePhone(event)
   {
      this.phone=event.target.value;
   }
   handleAddress(event)
   {
      this.address=event.target.value;
   }


   handleSave()
   {
     
      createJobRecruiterRecord({compName:this.compName,jobTitle:this.jobTitle,jobDesc:this.jobDesc,jobPost:this.jobPost,jobEnd:this.jobEnd,jobLoc:this.jobLoc,exp:this.exp,ctc:this.ctc,city:this.city,State:this.state,email:this.email,phone:this.phone,address:this.address})
      .then(result => {
         console.log('result is '+JSON.stringify(result));
         this.showToast();
      })
      .catch(error =>{
         console.log('error '+JSON.stringify(error));
      })
   }
 showToast(){
   const event=new ShowToastEvent({
      title:'Success',
      message:'Record successfully created !!!',
      variant:'success'
   });
   this.dispatchEvent(event);
   
   this.handleClear();
}

//picklist 
@wire(getObjectInfo, {objectApiName: Job_Object })
        jobReInfo;
    
          cityOptions;
          stateOptions;
         
        @wire(getPicklistValues, {recordTypeId: '$jobReInfo.data.defaultRecordTypeId', 
        fieldApiName:City_R })
        cityFieldInfo({ data, error }) {
            if (data) this.cityFieldData = data;
        }
        @wire(getPicklistValues, {recordTypeId:'$jobReInfo.data.defaultRecordTypeId',
         fieldApiName: State_R})
        stateFieldInfo({ data, error }) {
            if (data) this.stateOptions = data.values;
            console.log("State Options", this.stateOptions);
        }
        handleStateChange(event) {
            this.state = event.target.value;
            console.log("State",this.state)
            let key = this.cityFieldData.controllerValues[event.target.value];
             console.log("City Field Data",key);
            this.cityOptions = this.cityFieldData.values.filter(opt => opt.validFor.includes(key));
            console.log("City Field Data",this.cityOptions);
            
        }

        handleClear()
        {   
         this.compName='';
         this.jobTitle='';
         this.jobDesc='';
         this.jobPost='';
         this.jobEnd='';
         this.jobLoc='';
         this.exp='';
         this.ctc='';
         this.city='';
         this.state= '';
         this.email='';
         this.phone='';
         this.address='';
        }

    }