import { LightningElement, track , wire} from 'lwc'; 
import  Name_Field from '@salesforce/schema/Account.Name';
import sObjectName from '@salesforce/schema/Account';
import getContactList from '@salesforce/apex/ContactController.contactlist'; 
export default class HelloWorld extends LightningElement {
    @track greeting = 'Mhlangano'; 
    @track name = Name_Field;
    @track objName = sObjectName;
    @wire(getContactList) contact; 
    @track greeting = 'Mhlangano';   
    
    contacts = [
        {
            id:'001',
            Name:'John Smith',
            Title: 'Manager'
        },
        { 
            id:'002',
            Name:'Jabu Bulaza',
            Title: 'Sales Consultant'
        },
        {
            id:'003',
            Name:'Jason Zulu',
            Title: 'Senior Manager'
        }                
    ]
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}