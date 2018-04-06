//class fb profile
class FbProfile{
    private username:string;
    private email_id:string;
    private password:string;
    private birthday:string;
    private relationship_status:string;
    private photos:string[];
    private profile_pic:string[];
    private cover_pic:string[];
    private contact_number:string;
    private school:string;
    private highSchoolGraduation:string;
    private university:string;
    private collegeGraduationYear:string;
    private organisation:string;
    private address:string;
    private music_likes:string[];
    private friends:string[];
    private sports_likes:string[];
    private pages_liked:string[];
    private groups_joined:string[];
    private personalities_followed:string[];
    private check_ins:string[];

    constructor(_username:string,_email_id:string,_password:string,_friends:string[],_profile_pic:string[],_cover_pic:string[],_birthday?:string,_contactNumber?:string,_school?:string,
        _highSchoolGraduationYear?:string,_university?:string,_collegeGraduationYear?:string,
        _organisation?:string, _address?:string,_music_likes?:string[],_sports_likes?:string[],
        _pages_liked?:string[],_groups_joined?:string[],_personalities_followed?:string[],_check_ins?:string[]){

            this.username = _username;
            this.email_id = _email_id;
            this.password = _password;
            this.profile_pic = _profile_pic;
            this.cover_pic = _cover_pic;
            this.birthday = _birthday;
            this.contact_number = _contactNumber;
            this.school = _school;
            this.highSchoolGraduation = _highSchoolGraduationYear;
            this.university = _university;
            this.collegeGraduationYear = _collegeGraduationYear;
            this.organisation = _organisation;
            this.address = _address;
            this.music_likes = _music_likes;
            this.friends = _friends;
            this.sports_likes = _sports_likes;
            this.pages_liked = _pages_liked;
            this.groups_joined = _groups_joined;
            this.personalities_followed = _personalities_followed;
            this.check_ins = _check_ins;
        }
        //getter and setter functions
        
        getUsername(){
            return this.username;
        }

        changeUsername(username:string){
            this.username = username;
        }

        getEmailId(){
            return this.email_id;
        }

        setProfilePic(pic:string[]){
            this.profile_pic = pic;
        }
        
        changeProfilePic(pic:string[]){
            this.profile_pic =  pic;
        }

        showProfilePic(){
            return this.profile_pic;
        }

        setCoverPic(pic:string[]){
            this.cover_pic = pic;
        }

        changeCoverPic(pic:string[]){
            this.cover_pic = pic;
        }

        showCoverPic(){
            return this.cover_pic;
        }

        changePassword(password:string){
            this.password = password;
        }

        setBirthday(date:string){
            this.birthday = date;
        }

        getBirthday(){
            return this.birthday;
        }

        addFriends(friends:string[]){
            this.friends = this.friends.concat(friends);
        }

        getFriends(){
            return this.friends;
        }

        addRelationshipStatus(relationship:string){
            this.relationship_status = relationship;
        }

        showRelationshipStatus(){
            return this.relationship_status;
        }

        setContactNumber(contact:string){
            this.contact_number = contact;
        }
        
        changeContactNumber(contact:string){
            this.contact_number = contact;
        }

        addSchoolDetails(school:string){
            this.school = school;
        }

        getSchoolDetails(){
            return this.school;
        }

        getSchoolGraduation(){
            return this.highSchoolGraduation;
        }

        addCollegeDetails(college:string){
            this.university = college;
        }

        getCollegeDetails(){
            return this.university;
        }

        addOrganisationDetails(organisation:any){
            this.organisation = organisation;
        }

        getOrganisationDetails(){
            return this.organisation;
        }

        addAddress(address:string){
            this.address = address;
        }

        getAddress(){
            return this.address;
        }

        addMusicLikes(music_likes:string[]){
            this.music_likes = this.music_likes.concat(music_likes);
        }

        getMusicLikes(){
            return this.music_likes;
        }

        addSportsLikes(sports_likes:string[]){
            this.sports_likes = this.sports_likes.concat(sports_likes);
        }

        getSportsLikes(){
            return this.sports_likes;
        }

        addGroupsJoined(groups_joined:string[]){
          this.groups_joined = this.groups_joined.concat(groups_joined);  
        }

        getGroupsJoined(){
            return this.groups_joined;
        }

        addPersonalitiesFollowed(personalities_followed:string[]){
            this.personalities_followed = this.personalities_followed.concat(personalities_followed);
        }
        
        getPersonalitiesFollowed(){
            return this.personalities_followed;
        }

        getCheckIns(){
            return this.check_ins;
        }

        addCheckIns(checkIns:string[]){
            this.check_ins = this.check_ins.concat(checkIns);
        }

        addPhotos(photos:string[]){
            this.photos = this.photos.concat(photos);
        }

        getPhotos(){
            return this.photos;
        }
}

let myProfilePage = new FbProfile("AKA","abc@gmail.com","djvbhvdd",["a","b","c"],["profile-pic,jpeg","Height- 30","Width-60"],
["cover-pic.jpg","Height-200","width-150"],"12-01-1997","634572378","ABC Public School","2011","Delhi Tech University"
,"2015","Abc Private Ltd","123 Vasant Kunj Delhi",["Green Day","Mkto"],["Football","Cricket","Baseball"],
 ["Nike","Gucci"],["Python Programming group","CS54","Ethical Hacking GRoup"],["Steven Spielberg","David Schwimmer"]
,["Rajinder Dhaba","Ferrari World at Abu Dhabi"]);

console.log(`Username : ${myProfilePage.getUsername()}`);
console.log("Birthday: ",myProfilePage.getBirthday());
console.log("Address: ",myProfilePage.getAddress());
console.log("Email-id: ",myProfilePage.getEmailId());
console.log("Friends: ",myProfilePage.getFriends());
myProfilePage.addRelationshipStatus("committed");
console.log("Relationship Status: ",myProfilePage.showRelationshipStatus());
console.log("Profile Pic: ",myProfilePage.showProfilePic());
console.log("Cover Pic: ",myProfilePage.showCoverPic());
myProfilePage.addSportsLikes(["hockey","Rugby"]);
console.log("Sports Likes: ",myProfilePage.getSportsLikes());
console.log("School: ",myProfilePage.getSchoolDetails());
console.log("University: ",myProfilePage.getCollegeDetails());
myProfilePage.addGroupsJoined(["as","amazon"]);
console.log("Groups Joined: ",myProfilePage.getGroupsJoined());
console.log("Personalities followed: ",myProfilePage.getPersonalitiesFollowed());
console.log("Check-ins: ",myProfilePage.getCheckIns());
console.log("Music likes: ",myProfilePage.getMusicLikes());
myProfilePage.addFriends(["abc","def"]);
console.log("Friends: ",myProfilePage.getFriends());
console.log("No. of friends: ",myProfilePage.getFriends().length);




