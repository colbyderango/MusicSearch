function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList){
    console.log(songList);
    // This is where you task begins
//    var songLibrary = document.getElementById('song-list')
     
      for (var i = 0; i < songList.length; i++) {
          
          var item = songList[i];
      
        document.getElementById('song-list').innerHTML += 
            `<div class= "container-fluid">
             <div class="row">
                <div class="col-sm-8 col-sm-offset-2">
                <div class="well well-lg well-style" >       
                 <h1>${item.title}</h1>
                    <img src=${item.albumArt}>
                       <h2> ${item.artist}</h2>
                           <h4> ${item.collection}</h4>
                              <p> ${item.price}</p>
                                       <audio controls preload="none">
                                       <source src="${item.preview}" type="audio/mp4">
                                       </audio>
                </div>
                </div>
            </div>
        </div> 
        </div>`
   
         
         
           
 
    
    
  }
  }
  }

var itunesCtrl = new ItunesController()



