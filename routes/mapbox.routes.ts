import { Router, Request, Response } from 'express';
import MapboxData from '../classes/mapbox';

const routerMapbox = Router();

const mapboxData = new MapboxData();

routerMapbox.get('/marcadores', (req: Request, res: Response) => {

});