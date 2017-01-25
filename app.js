function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }

    function drawSongs(songList) {
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
    function onlyPlayOneIn(container) {
        container.addEventListener("play", function (event) {
            audio_elements = container.getElementsByTagName("audio")
            for (i = 0; i < audio_elements.length; i++) {
                audio_element = audio_elements[i];
                if (audio_element !== event.target) {
                    audio_element.pause();
                }
            }
        }, true);
    }
    document.addEventListener("DOMContentLoaded", function () {
        onlyPlayOneIn(document.body);
    });
}

var itunesCtrl = new ItunesController()



