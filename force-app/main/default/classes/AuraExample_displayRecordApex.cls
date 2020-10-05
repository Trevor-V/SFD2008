public with sharing class AuraExample_displayRecordApex {
    public AuraExample_displayRecordApex() {

    }

    @AuraEnabled
    public static List<Contact> getContacts(Id recordID){
        return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact WHERE AccountId =:recordID];
    }
}
