import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import JOBSEEKER from '@salesforce/schema/Job_Seeker__c';
import STATE from '@salesforce/schema/Job_Seeker__c.State__c';
import CITY from '@salesforce/schema/Job_seeker__c.City__c';

export default class DependentPicklist extends LightningElement {

    @wire (getObjectInfo, {objectApiName : 	Job_Seeker__c})
    JobSeekerInfo;
    StateOptions;
    CityOptions;

    @wire (getPicklistValues, {recordTypeId : '$objectInfo.data.defaultRecordTypeId', fieldApiName: STATE})
       StateFieldInfo({ error,data })
        {    if(data){
            this.StateFieldInfo = data;
              }
              else if(error){

              }
     }

     @wire (getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName :CITY})
        CityFieldInfo({ error,data })
        {       if(data){
            this.CityFieldInfo = data;
        }
        
     }
     handleStateChange(event){
        let key = this.cityFieldData.controllerValues[event.target.value];
        this.CityOptions = this.cityFieldData.values.filter(opt =>opt.validfor.includes(key));
     }

    // selectedPicklistValue = []
    // picklistLevelfourDetails =[
    //     {apiName : 'country', label :'JobRecruiter Country', selectedValue: ''},
    //     {apiName : 'state__c', label :'JobRecruiter state', selectedValue: '' },
    //     {apiName : 'city__c', label :'JobRecruiter city', selectedValue: ''   },
    //     {apiName : 'street__c', label :'JobRecruiter street', selectedValue: ''}

    // ]
    // picklistLevelHandler =[
    //     this.selectedPicklistValue = detail.target.value
    // ]

}