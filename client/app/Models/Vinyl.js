export class Vinyl {
    constructor(data){
        this.id = data.id
        this.user = data.user
        this.title = data.title
        this.mood = data.mood
        this.albumCover = data.albumCover
        this.artist = data.artist
        this.description = data.description
        this.vinylVoter = data.vinylVoter
    }

    get vinylTemplate(){
        return`
        <div class="col-9 col-md-5 my-2">
          <div class="row mycard smallmycard">
            <div class="col-5 p-0">
              <div class="img-fluid">
                <img class="albumCover smallalbumCover" src="${this.albumCover}"
                  alt="picture">
              </div>
            </div>
            <div class="col-7">
              <div class="">
                <h5>${this.title}</h5>
                <h6>${this.description}</h6>
              </div>
            </div>
          </div>
        </div>
        `
    }


    static createVinylForm(){
        return /*html*/ `
        <div class="row my-2">
        <div class="col-md-8 col-11 m-auto">
          <form onsubmit="app.vinylsController.postVinyl()">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label>Song Title</label>
                  <input type="title" required class="form-control"  name="title" id="title" placeholder="Song Title">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Artist</label>
                  <input type="artist" required class="form-control" name="artist" id="artist" placeholder="Artist">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label>Album Cover URL</label>
                  <input type="albumCover" required class="form-control" name="albumCover" id="albumCover" placeholder="Album Cover URL">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="mood">Mood</label>
                  <select required class="form-control" name="mood" id="mood">
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="angry">Angry</option>
                    <option value="melancholy">Melancholy</option>
                    <option value="trippy">Trippy</option>
                    <option value="sullen">Sullen</option>
                    <option value="ambient">Ambient</option>
                    <option value="depressed">Depressed</option>
                    <option value="joyful">Joyful</option>
                    <option value="excited">Excited</option>
                    <option value="hype">Hype</option>
                    <option value="euphoric">Euphoric</option>
                    <option value="drunk">Drunk</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="description">When should you listen to this song?</label>
              <input required class="form-control" name="description" id="description"> 
            </div>
            <div class="row">
              <div class="col-6">
                <button class="btn btn-primary">submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        `
    }
}