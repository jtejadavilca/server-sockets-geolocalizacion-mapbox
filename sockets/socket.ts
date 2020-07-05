import { Socket } from "socket.io";
import socketIO from 'socket.io';
import { Usuario } from '../classes/usuario';
import { UsuarioLista } from "../classes/usuarios-lista";
import MapboxData from '../classes/mapbox';
import { Marcador } from '../classes/marcador';

export const usuariosConectados = new UsuarioLista();
export const mapboxData = new MapboxData();

export const conectar = ( client: Socket, io: socketIO.Server ) => {
    const usuario = new Usuario( client.id );
    usuariosConectados.agregar( usuario );
}

export const desconectar = ( client: Socket, io: socketIO.Server ) => {
    client.on('disconnect', () => {
        const usuarioBorrado = usuariosConectados.borrarUsuario(client.id);
        io.emit('usuarios-activos', usuariosConectados.getLista());
    });
}

export const mensaje = ( client: Socket, io: socketIO.Server ) => {
    client.on('mensaje', (mensaje) => {
        io.emit('mensaje-nuevo', mensaje);
    });
}


export const mapaSockets = ( client: Socket, io: socketIO.Server ) => {

    client.on('nuevo-marcador', ( nuevoMarcador) => {
        mapboxData.agregarMarcador(nuevoMarcador.id, nuevoMarcador);
        // io.emit('nuevo-marcador', nuevoMarcador );
        client.broadcast.emit('nuevo-marcador', nuevoMarcador );
    });

    client.on('eliminar-marcador', ( id ) => {
        mapboxData.borrarMarcador(id);
        client.broadcast.emit('eliminar-marcador', id);
    });

    client.on('mover-marcador', (payload) => {
        mapboxData.moverMarcador(payload.id, payload);
        client.broadcast.emit('mover-marcador', payload);
    });

}