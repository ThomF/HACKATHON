export class Vinyl {
    constructor(data){
        this.id = data.id
        this.user = data.user
        this.title = data.title
        this.mood = data.mood
        this.albumCover = data.albumCover
        this.artist = data.artist
        this.description = data.description
    }

    get vinylTemplate(){
        return`
        <div class="col-9 my-2">
          <div class="row mycard">
            <div class="col-5 p-0">
              <div class="img-fluid">
                <img class="albumCover" src="${this.albumCover}"
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
}