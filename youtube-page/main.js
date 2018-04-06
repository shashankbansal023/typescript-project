//video class
var Video = /** @class */ (function () {
    function Video(_title, _creator, _videoSummary, _category, _videoQualityAvailable, _views, _likes, _dislikes, _comments, _shares, _subtitlesAvailable) {
        this.title = _title;
        this.creator = _creator;
        this.videoSummmary = _videoSummary;
        this.category = _category;
        this.subtitlesAvailable = _subtitlesAvailable;
        this.videoQualityAvailable = _videoQualityAvailable;
        this.views = _views;
        this.likes = _likes;
        this.dislikes = _dislikes;
        this.comments = _comments;
        this.shares = _shares;
    }
    //getter functions
    Video.prototype.getCategory = function () {
        console.log("category : " + this.category);
    };
    Video.prototype.getCreator = function () {
        console.log("Youtube Channel: " + this.creator);
    };
    Video.prototype.getTitle = function () {
        console.log("Title : " + this.title);
    };
    Video.prototype.getVideoSummary = function () {
        console.log("Video Summary : " + this.videoSummmary);
    };
    Video.prototype.getNumberOfViews = function () {
        if (this.views != null) {
            console.log("This video got " + this.views + " views");
        }
        else {
            console.log("No views..");
        }
    };
    Video.prototype.getSimilarVideos = function () { };
    ;
    Video.prototype.isTrending = function () {
        if (this.views > 1000000 && this.views != null) {
            this.is_trending = true;
            console.log("This video is trending");
        }
        else {
            this.is_trending = false;
            console.log("This video is not trending");
        }
    };
    Video.prototype.getNumberOfLikes = function () {
        console.log("This video got " + this.likes + " likes");
    };
    Video.prototype.getNumberOfDislikes = function () {
        console.log("This video got " + this.dislikes + " dislikes");
    };
    Video.prototype.getComments = function () {
        if (this.comments != null) {
            console.log("People commented " + this.comments + " times on this video");
        }
        else {
            console.log("No comments on this video");
        }
    };
    Video.prototype.getShares = function () {
        if (this.shares != null) {
            console.log("This video is shared " + this.shares + " times");
        }
        else {
            console.log("This video is not shared.");
        }
    };
    Video.prototype.VideoQualityAvailable = function () {
        if (this.videoQualityAvailable != null) {
            console.log(this.videoQualityAvailable.length + " video quality available:\n " + this.videoQualityAvailable);
        }
        else {
            console.log("Video quality not available");
        }
    };
    Video.prototype.isSubtitlesAvailable = function () {
        if (this.subtitlesAvailable != null) {
            console.log("There are " + this.subtitlesAvailable.length + " subtitles available:");
            console.log(this.subtitlesAvailable);
        }
        else {
            console.log("No subtitles available");
        }
    };
    //setter functions
    Video.prototype.addNumberOfViews = function (views) {
        this.views += views;
    };
    Video.prototype.addNumberOfLikes = function (likes) {
        this.likes += likes;
    };
    Video.prototype.addNumberofComments = function (comments) {
        this.comments += comments;
    };
    Video.prototype.addNumberOfDislikes = function (dislikes) {
        this.dislikes += dislikes;
    };
    Video.prototype.addNumberOfShares = function (shares) {
        this.shares += shares;
    };
    return Video;
}());
var newVideo = new Video("Prank 101", "Sxv Videos", "It is about the introduction about how to play pranks", "Entertainment", ["144p", "360p", "480p"], 123345, 1003, 123, 4000, 12, ["english", "french", "Korean"]);
newVideo.getCategory();
newVideo.getTitle();
newVideo.getCreator();
newVideo.getVideoSummary();
newVideo.getNumberOfViews();
newVideo.getNumberOfLikes();
newVideo.getNumberOfDislikes();
newVideo.getComments();
newVideo.getShares();
newVideo.isSubtitlesAvailable();
newVideo.isTrending();
