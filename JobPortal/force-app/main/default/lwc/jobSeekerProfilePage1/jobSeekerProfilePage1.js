import { LightningElement, wire } from 'lwc';
import createJobSeekerRecord from '@salesforce/apex/JobSeekerClass.createJobSeekerRecord';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import jobSeekerObj from '@salesforce/schema/Job_Seeker__c';
import jobSkills_c from '@salesforce/schema/Job_Seeker__c.Job_Skills__c';

export default class JobSeekerProfilePage1 extends LightningElement {
    rdoGender='';
    get options()
    {
        return [
            {label:'Male',value:'male'},
            {label:'Female',value:'female'}
        ];
    }
    value='';
    get options()
    {
        return 
    }


    firstname = '';
    lastname = '';
    dtDOB;
    JobTitle = '';
    coverLetter='';
    Experience;
    email='';
    //JobSkills = '';
    Phone;
    jobLocation='';
    skills = '';

    handleFirstName(event){
    this.firstname=event.target.value;
    let a=this.firstname;
    console.log('first name'+a);

    }

    handleLastName(event){
        this.lastname=event.target.value;
        let b=this.lastname;
        console.log('last name'+b);

    }
    handleDOB(event)
    {
        this.dtDOB=event.target.value;
        let c=this.dtDOB;
        console.log('DOB type'+typeof(c));
        console.log('DOB'+c);

    }

    handleJobTitle(event){
        this.JobTitle= event.target.value;
        let d=this.JobTitle;
        console.log('JobTitle type'+typeof(d));
        console.log('JobTitle'+c);

    }
    handleCoverLetter(event)
    {
        this.coverLetter=event.target.value;
        let e=this.coverLetter;
        console.log('cover type'+typeof(e));
        console.log('DOB'+e);

    }

    handleExperience(event){
        this.Experience = event.target.value;
        var currExp=parseFloat(this.Experience);
        let f=currExp;
        console.log('exp type'+typeof(f));
        console.log('exp'+f);

    }
    handleEmail(event)
    {
        this.email=event.target.value;
        let g=this.email;
        console.log('email type'+typeof(g));
        console.log('email'+g);

    }

    // handleJobSkills(event){
    //     this.JobSkills = event.target.value;
        
    // }

    handlePhone(event){
        this.Phone =event.target.value;
        let h=this.Phone;
        console.log('phone type'+typeof(h));
        console.log('phone'+h);

        
    }
    handleJobLocation(event)
    {
        this.jobLocation=event.target.value;
        let i=this.jobLocation;
        console.log('JobLocation type'+typeof(i));
        console.log('JobLocation'+i);

    }
    handleChangeSkills(event)
    {
        this.skills = event.detail.value;
    }

   
    @wire(getObjectInfo, { objectApiName: jobSeekerObj })
                seekerInfo;

    @wire(getPicklistValues,{
        recordTypeId:'$seekerInfo.data.defaultRecordTypeId',
        fieldApiName: jobSkills_c})
        jobSkills;
    
    
    handleSubmit(event){
        createJobSeekerRecord({firstname:this.firstname,lastname:this.lastname,coverLetter:this.coverLetter,Experience:this.currExp,email:this.email,Phone:this.Phone,jobLocation:this.jobLocation})
        .then(result => {
            console.log('result '+JSON.stringify(result));    
        })
        .catch(error =>{
            console.log('error '+JSON.stringify(error));
        })

    }


}