public with sharing class ContactController {
    @AuraEnabled
    public static List<Contact> contactlist() {
        return [Select Id, Name, Email, Title, Phone From Contact LIMIT 5];
    }
}
