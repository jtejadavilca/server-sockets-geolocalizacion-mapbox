import { Marcador } from './marcador';
export default class MapboxData {

    private marcadores: { [key: string]: Marcador } = {};

    constructor() {
          this.marcadores = {
            '1': new Marcador('1', 'Fernando', -75.75512993582937, 45.349977429009954, '#dd8fee'),
            '2': new Marcador('2', 'Amy', -75.75195645527508, 45.351584045823756, '#790af0'),
            '3': new Marcador('3', 'Orlando', -75.75900589557777, 45.34794635758547, '#19884b')
        };
    }

    agregarMarcador(id: string, nuevoMarcador: Marcador) {
        this.marcadores[id] = nuevoMarcador;
    }

    getMarcadores(): any {
        return this.marcadores;
    }

    borrarMarcador( id: string ): any {
        delete this.marcadores[id];
        return this.getMarcadores();
    }

    moverMarcador(id: string, marcador: Marcador) {
        this.marcadores[id].lng = marcador.lng;
        this.marcadores[id].lat = marcador.lat;
    }
}