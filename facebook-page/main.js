//class fb profile
var FbProfile = /** @class */ (function () {
    function FbProfile(_username, _email_id, _password, _friends, _profile_pic, _cover_pic, _birthday, _contactNumber, _school, _highSchoolGraduationYear, _university, _collegeGraduationYear, _organisation, _address, _music_likes, _sports_likes, _pages_liked, _groups_joined, _personalities_followed, _check_ins) {
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
    FbProfile.prototype.getUsername = function () {
        return this.username;
    };
    FbProfile.prototype.changeUsername = function (username) {
        this.username = username;
    };
    FbProfile.prototype.getEmailId = function () {
        return this.email_id;
    };
    FbProfile.prototype.setProfilePic = function (pic) {
        this.profile_pic = pic;
    };
    FbProfile.prototype.changeProfilePic = function (pic) {
        this.profile_pic = pic;
    };
    FbProfile.prototype.showProfilePic = function () {
        return this.profile_pic;
    };
    FbProfile.prototype.setCoverPic = function (pic) {
        this.cover_pic = pic;
    };
    FbProfile.prototype.changeCoverPic = function (pic) {
        this.cover_pic = pic;
    };
    FbProfile.prototype.showCoverPic = function () {
        return this.cover_pic;
    };
    FbProfile.prototype.changePassword = function (password) {
        this.password = password;
    };
    FbProfile.prototype.setBirthday = function (date) {
        this.birthday = date;
    };
    FbProfile.prototype.getBirthday = function () {
        return this.birthday;
    };
    FbProfile.prototype.addFriends = function (friends) {
        this.friends = this.friends.concat(friends);
    };
    FbProfile.prototype.getFriends = function () {
        return this.friends;
    };
    FbProfile.prototype.addRelationshipStatus = function (relationship) {
        this.relationship_status = relationship;
    };
    FbProfile.prototype.showRelationshipStatus = function () {
        return this.relationship_status;
    };
    FbProfile.prototype.setContactNumber = function (contact) {
        this.contact_number = contact;
    };
    FbProfile.prototype.changeContactNumber = function (contact) {
        this.contact_number = contact;
    };
    FbProfile.prototype.addSchoolDetails = function (school) {
        this.school = school;
    };
    FbProfile.prototype.getSchoolDetails = function () {
        return this.school;
    };
    FbProfile.prototype.getSchoolGraduation = function () {
        return this.highSchoolGraduation;
    };
    FbProfile.prototype.addCollegeDetails = function (college) {
        this.university = college;
    };
    FbProfile.prototype.getCollegeDetails = function () {
        return this.university;
    };
    FbProfile.prototype.addOrganisationDetails = function (organisation) {
        this.organisation = organisation;
    };
    FbProfile.prototype.getOrganisationDetails = function () {
        return this.organisation;
    };
    FbProfile.prototype.addAddress = function (address) {
        this.address = address;
    };
    FbProfile.prototype.getAddress = function () {
        return this.address;
    };
    FbProfile.prototype.addMusicLikes = function (music_likes) {
        this.music_likes = this.music_likes.concat(music_likes);
    };
    FbProfile.prototype.getMusicLikes = function () {
        return this.music_likes;
    };
    FbProfile.prototype.addSportsLikes = function (sports_likes) {
        this.sports_likes = this.sports_likes.concat(sports_likes);
    };
    FbProfile.prototype.getSportsLikes = function () {
        return this.sports_likes;
    };
    FbProfile.prototype.addGroupsJoined = function (groups_joined) {
        this.groups_joined = this.groups_joined.concat(groups_joined);
    };
    FbProfile.prototype.getGroupsJoined = function () {
        return this.groups_joined;
    };
    FbProfile.prototype.addPersonalitiesFollowed = function (personalities_followed) {
        this.personalities_followed = this.personalities_followed.concat(personalities_followed);
    };
    FbProfile.prototype.getPersonalitiesFollowed = function () {
        return this.personalities_followed;
    };
    FbProfile.prototype.getCheckIns = function () {
        return this.check_ins;
    };
    FbProfile.prototype.addCheckIns = function (checkIns) {
        this.check_ins = this.check_ins.concat(checkIns);
    };
    FbProfile.prototype.addPhotos = function (photos) {
        this.photos = this.photos.concat(photos);
    };
    FbProfile.prototype.getPhotos = function () {
        return this.photos;
    };
    return FbProfile;
}());
var myProfilePage = new FbProfile("AKA", "abc@gmail.com", "djvbhvdd", ["a", "b", "c"], ["profile-pic,jpeg", "Height- 30", "Width-60"], ["cover-pic.jpg", "Height-200", "width-150"], "12-01-1997", "634572378", "ABC Public School", "2011", "Delhi Tech University", "2015", "Abc Private Ltd", "123 Vasant Kunj Delhi", ["Green Day", "Mkto"], ["Football", "Cricket", "Baseball"], ["Nike", "Gucci"], ["Python Programming group", "CS54", "Ethical Hacking GRoup"], ["Steven Spielberg", "David Schwimmer"], ["Rajinder Dhaba", "Ferrari World at Abu Dhabi"]);
console.log("Username : " + myProfilePage.getUsername());
console.log("Birthday: ", myProfilePage.getBirthday());
console.log("Address: ", myProfilePage.getAddress());
console.log("Email-id: ", myProfilePage.getEmailId());
console.log("Friends: ", myProfilePage.getFriends());
myProfilePage.addRelationshipStatus("committed");
console.log("Relationship Status: ", myProfilePage.showRelationshipStatus());
console.log("Profile Pic: ", myProfilePage.showProfilePic());
console.log("Cover Pic: ", myProfilePage.showCoverPic());
myProfilePage.addSportsLikes(["hockey", "Rugby"]);
console.log("Sports Likes: ", myProfilePage.getSportsLikes());
console.log("School: ", myProfilePage.getSchoolDetails());
console.log("University: ", myProfilePage.getCollegeDetails());
myProfilePage.addGroupsJoined(["as", "amazon"]);
console.log("Groups Joined: ", myProfilePage.getGroupsJoined());
console.log("Personalities followed: ", myProfilePage.getPersonalitiesFollowed());
console.log("Check-ins: ", myProfilePage.getCheckIns());
console.log("Music likes: ", myProfilePage.getMusicLikes());
myProfilePage.addFriends(["abc", "def"]);
console.log("Friends: ", myProfilePage.getFriends());
console.log("No. of friends: ", myProfilePage.getFriends().length);
