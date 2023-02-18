import { appState } from "../AppState.js";
import { Vinyl } from "../Models/Vinyl.js";
import { server } from "./AxiosService.js";

class VinylsService{
    async deleteVinyl(vinylId) {
        const res = await server.delete('api/vinyls/' + vinylId)
        console.log("Removing Vinyl", res.data);
        appState.vinyls = appState.vinyls.filter(vinyl => vinyl.id != vinylId)
    }

    async setActiveVinyl(vinylId) {
        console.log("VinylId", vinylId);
        let vinyl = appState.vinyls.find(v => v.id == vinylId)
        console.log("Setting Active Vinyl", vinyl);
        appState.activeVinyl = vinyl;
    }

    async postVinyl(vinylBody) {
        const res = await server.post('api/vinyls', vinylBody)
        console.log("Playing Vinyl", res.data);
        appState.vinyls.push(new Vinyl(res.data))
        appState.emit('vinyls')
    }

    async getVinyls() {
        const res = await server.get('api/vinyls');
        console.log("Getting Vinyls", res.data);
        appState.vinyls = res.data.map(v => new Vinyl(v))
        console.log("Got Vinyls", appState.vinyls)
    }

}

export const vinylsService = new VinylsService()