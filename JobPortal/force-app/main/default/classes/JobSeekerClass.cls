public class JobSeekerClass
{
    @AuraEnabled
    public static List<Job_Seeker__c> createJobSeekerRecord(String firstname,String lastname,String JobTitle,String coverLetter,String Experience,String email,integer Phone,String jobLocation,String skills)
    {
        List<Job_Seeker__c> lstSeek=new List<Job_Seeker__c>();
        if(firstname!=NULL)
        {
            Job_Seeker__c jSeek=new Job_Seeker__c();
            jSeek.Name=firstname;
            jSeek.Last_Name__c=lastname;
            //jSeek.Job_Title__c=JobTitle;
            jSeek.Cover_Letter__c=coverLetter;
            //jSeek.Experience__c=decimal.valueOf(Experience);
            jSeek.Email__c=email;
            jSeek.Phone__c=Phone;
            jSeek.Job_Skills__c=skills;
            jSeek.Job_Location__c=jobLocation;
            lstSeek.add(jSeek);
        }
        
    
    if (!lstSeek.isEmpty())
    {
        insert lstSeek;
        return lstSeek;
    }
        return NULL;
    }
    @AuraEnabled
    public static string saveResume(Job_Seeker__c resume, string file, string fileName){
        string ResumeId;
        try{
            insert resume;
            ResumeId = Resume.Id;
            if(file!= null || fileName!=''|| fileName!=''){
                string base64File = EncodingUtil.urlDecode(file, 'UTF-8');
                ContentVersion contentVersionRec = new ContentVersion();
                contentVersionRec.Title = fileName;
                ContentVersionRec.PathOnClient = '/' + fileName;
                ContentVersionRec.FirstPublishLocationId= Resume.Id;
                ContentVersionRec.VersionData = Encodingutil.base64Decode(base64File);
                Insert contentVersionRec;
            }
                
            }
        catch(Exception ex){
            system.debug('exception ===>' +ex.getMessage());
       		}
        return  ResumeId;
        }
    }