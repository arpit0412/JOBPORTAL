import { LightningElement } from 'lwc';
import getProfileInfo from '@salesforce/apex/SeekerProfileInfo.getProfileInfo';

export default class ProfilePage extends LightningElement {

  showProfileDetails=''

  connectedCallback(){
    getProfileInfo()
    .then(Response=>{
        this.showProfileDetails = Response;
        
        console.log('Response'+JSON.stringify(Response))
    })
    

  }

    // get uppercasedFullName() {
    //     return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    // }
}