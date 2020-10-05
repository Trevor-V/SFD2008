public with sharing class WeatherRemote {

    @@RemoteAction
    public static void findAcc() {
        return [SELECT ID, Name, Location__c, Phone FROM Account WHERE LastViewedDate !=null ORDER BY LastViewedDate DESC LIMIT 10;]
    }

