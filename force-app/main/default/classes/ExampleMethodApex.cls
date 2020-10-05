public with sharing class ExampleMethodApex {
    @AuraEnabled
    public static string serverEcho(){
        return ('Hello From the otherside');
    }
}
