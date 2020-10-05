public class funController{

    @AuraEnabled
    public static Decimal getAllValue(){
            AggregateResult opps = [SELECT SUM(Amount) FROM Opportunity WHERE OwnerID=:UserInfo.getUserId()];
            return (Decimal)opps.get('expr0');
        
    }

}