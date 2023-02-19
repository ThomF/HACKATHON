import { appState } from "../AppState.js";
import { Vinyl } from "../Models/Vinyl.js";
import { vinylsService } from "../Services/VinylsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawVinyls() {
    let template = ''
    appState.vinyls.forEach(vinyl => template += vinyl.vinylTemplate)
    setHTML('vinyls', template);
}

function _drawActiveVinyl() {
    setHTML('modalContent', appState.activeVinyl.ActiveVinylTemplate)
}

function _drawVote() {
    const votes = appState.vinyls
    console.log("adding like")
    setText('vote', votes)
}

export class VinylsController {


    constructor() {
        console.log("Hello from the Vinyls Controller")
        this.getVinyls();
        appState.on('vinyls', _drawVinyls)
        appState.on('activeVinyl', _drawActiveVinyl)
        // appState.on('vinyls', _drawVote)

    }

    getVinylForm() {
        setHTML('vinylForm', Vinyl.createVinylForm())
    }

    async deleteVinyl(vinylId) {
        try {
            if (await Pop.confirm()) {
                bootstrap.Modal.getOrCreateInstance('#staticBackdrop').hide()
                await vinylsService.deleteVinyl(vinylId)

            }
        } catch (error) {
            console.log(error);
            Pop.error(error.message)
        }
    }

    async setActiveVinyl(vinylId) {
        try {
            await vinylsService.setActiveVinyl(vinylId);
        } catch (error) {
            console.log(error);
            Pop.error(error.message)
        }
    }

    async postVinyl() {
        try {
            window.event.preventDefault();
            let form = window.event.target;
            let vinylBody = getFormData(form)
            console.log("Playing Vinyl", vinylBody)
            await vinylsService.postVinyl(vinylBody);
        } catch (error) {
            console.error(error);
            Pop.error(error.message)
        }
    }

    async getVinyls() {
        try {
            let vinyls = await vinylsService.getVinyls();

        } catch (error) {
            console.error(error)
            // @ts-ignore
            Pop.error("Error", error.message)
        }
    }
}