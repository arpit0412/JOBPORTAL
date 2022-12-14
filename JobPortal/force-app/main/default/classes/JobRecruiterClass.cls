public class JobRecruiterClass 
{
    @AuraEnabled
    public static List<Job_Recruiter__c> createJobRecruiterRecord(String compName,String jobTitle,String jobDesc,String jobPost,String jobEnd,String jobLoc,String exp,String ctc,String city,String State,String email,String phone,String address)
    {
        List<Job_Recruiter__c> lstJobRec = new List<Job_Recruiter__c>();
        if(compName != NULL)
        {
            Job_Recruiter__c jobrec=new Job_Recruiter__c();
            jobrec.Company_Name__c=compName;
            jobrec.Name=jobTitle;
            jobrec.Job_Description__c=jobDesc;
            jobrec.Job_Posted_Date__c=Date.valueOf(jobPost);
            jobrec.Job_End_Date__c=Date.valueOf(jobEnd);
            jobrec.Job_Location__c=jobLoc;
            jobrec.Experience__c=decimal.valueOf(exp);
            jobrec.Salary__c=decimal.valueOf(ctc);
            jobrec.City__c=city;
            jobrec.Email__c=email;
            jobrec.Phone__c=phone;
            jobrec.Address__c=address;
            jobrec.State__c= State;
            lstJobRec.add(jobrec);
        }
        if(!lstJobRec.isEmpty())
        {
            insert lstJobRec;
            return lstJobRec;
        }
        return NULL;
        
        
    }
}