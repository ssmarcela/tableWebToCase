public with sharing class CaseHandler {
    @AuraEnabled(cacheable=true)
    public static List<Case> getCases() {
  
        return [SELECT Id, CaseNumber, SuppliedName, Status, ReclamationType__c, TransactionCode__c, TransactionValue__c, Decisao__c
        FROM Case
        WHERE Origin = 'Web'
        AND Decisao__c = null
        AND ReclamationType__c IN ('Compra no cartão não reconhecida', 'Pix enviado por engano', 'Transação desconhecida')];

    }

    @AuraEnabled
    public static void handleCaseApproval(String caseId, Boolean isApproved) {

        Case caseToUpdate = [SELECT Id, SuppliedEmail, Decisao__c, Status FROM Case WHERE Id = :caseId LIMIT 1];

        caseToUpdate.Status = isApproved ? 'Aprovado' : 'Rejeitado';
        caseToUpdate.Decisao__c = isApproved ? 'Aprovado' : 'Rejeitado';
        update caseToUpdate;
}
}