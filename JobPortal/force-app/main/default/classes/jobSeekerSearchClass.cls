public with sharing class jobSeekerSearchClass {
    @AuraEnabled(Cacheable=true)
    public static List<Job_Recruiter__c> jobsearch(string searchJob)
    {
        List<Job_Recruiter__c> titleList=new List<Job_Recruiter__c>();
        if(searchJob!=NULL  && searchJob!=''){
        String handelSearchKey = searchJob + '%';
            
        list<Job_Recruiter__c> titleLis= [select Id,Job_Location__c,  Name, Company_Name__c,Email__c, Job_Posted_Date__c,Job_End_Date__c,Salary__c, Experience__c from Job_Recruiter__c where Name like:handelSearchKey ];
            return titleLis;
        }else{
            //titleList=NULL;
           // return titleList;
            return Null;
        }
           
    } 
    
    // Advanced Search
      @AuraEnabled
    public static List<Job_Seeker__c> adSearch(String advSearch){
        String aSearch = advSearch;
        List<Job_Seeker__c> titleList=new List<Job_Seeker__c>();
        if(aSearch == Null){
            return[Select Id,Experience__c,Expected_CTC__c,Last_Name__c,Name From Job_Seeker__c];
        }
        else if(aSearch != Null){
            
           List<Job_Seeker__c> lst = [Select Id,Experience__c,Expected_CTC__c,Last_Name__c,Name From Job_Seeker__c where Experience__c =: aSearch];
            System.debug(lst);
            return lst;
        }
       
        else
        {
          return Null;
            }
    }}