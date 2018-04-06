//video class

class Video{

    private title:string;
    private creator:string;
    private views:number;
    private likes:number;
    private is_trending:boolean;
    private dislikes:number;
    private shares:number;
    private comments:number;
    private videoSummmary:string;
    private category:string;
    private subtitlesAvailable:string[];
    private videoQualityAvailable:string[];

    constructor(_title : string,_creator : string ,_videoSummary : string, _category:string,_videoQualityAvailable:string[],
        _views?:number,_likes?:number,_dislikes?:number,_comments?:number,_shares?:number,_subtitlesAvailable?:string[],
        ){
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
    getCategory(){
        console.log(`category : ${this.category}`);
    }

    getCreator(){
        console.log(`Youtube Channel: ${this.creator}`);
    }

    getTitle(){
        console.log(`Title : ${this.title}`);
    }

    getVideoSummary(){
        console.log(`Video Summary : ${this.videoSummmary}`);
    }

    getNumberOfViews(){
        if(this.views != null){
            console.log(`This video got ${this.views} views`);
        }
        else{
            console.log("No views..")
        }
    }

    getSimilarVideos(){};

    isTrending(){
        if(this.views > 1000000 && this.views != null){
            this.is_trending = true;
            console.log("This video is trending");
        }
        else{
            this.is_trending = false;
            console.log("This video is not trending");
        }
    }

    getNumberOfLikes(){
        console.log(`This video got ${this.likes} likes`);
    }

    getNumberOfDislikes(){
        console.log(`This video got ${this.dislikes} dislikes`);
    }

    getComments(){
        if(this.comments!=null){
            console.log(`People commented ${this.comments} times on this video`);
        }
        else{
            console.log("No comments on this video")
        }
    }

    getShares(){
        if(this.shares!=null){
            console.log(`This video is shared ${this.shares} times`);
        }
        else{
            console.log("This video is not shared.")
        }
    }

    VideoQualityAvailable(){
        if(this.videoQualityAvailable!= null){
            console.log(`${this.videoQualityAvailable.length} video quality available:\n ${this.videoQualityAvailable}`);
        }
        else{
            console.log("Video quality not available")
        }
    }

    isSubtitlesAvailable(){
        if(this.subtitlesAvailable != null){
            console.log(`There are ${this.subtitlesAvailable.length} subtitles available:`);
             console.log(this.subtitlesAvailable);
        }
        else{
            console.log("No subtitles available")
        }
    }

    //setter functions
    addNumberOfViews(views:number){
        this.views += views;
    }

    addNumberOfLikes(likes:number){
        this.likes+= likes;
    }

    addNumberofComments(comments:number){
        this.comments+=comments;
    }

    addNumberOfDislikes(dislikes:number){
        this.dislikes += dislikes;
    }

    addNumberOfShares(shares:number){
        this.shares+=shares;
    }
}

let newVideo = new Video("Prank 101","Sxv Videos","It is about the introduction about how to play pranks","Entertainment",
["144p","360p","480p"],123345,1003,123,4000,12,["english","french","Korean"]);

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

