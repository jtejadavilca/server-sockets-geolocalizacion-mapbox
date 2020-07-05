import { Router, Request, Response, response } from 'express';
import MapboxData from '../classes/mapbox';
import Server from '../classes/server';
import  { mapboxData } from '../sockets/socket';
const routerMapbox = Router();



routerMapbox.get('/mapa', (req: Request, resp: Response) => {
    return resp.json(mapboxData.getMarcadores());
});

// routerMapbox.post('/mapa', (req: Request, resp: Response) => {
//     const nuevoMarcador = {...req.body};
//     console.log('nuevoMarcador', nuevoMarcador);
//     mapboxData.agregarMarcador(nuevoMarcador.id, nuevoMarcador);

//     const socket = Server.instance;
//     socket.getIO().emit('nuevo-marcador', nuevoMarcador);

//     return resp.json(nuevoMarcador);
// });

// routerMapbox.delete('/mapa/:id', (req: Request, resp: Response) => {
//     const id = req.params.id;

//     mapboxData.borrarMarcador( id );

//     const socket = Server.instance;
//     socket.getIO().emit('eliminar-marcador', id);

//     return resp.json();
// });

export default routerMapbox;