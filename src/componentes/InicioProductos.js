import * as React from 'react';
import {BannerPrincipal} from '../componentes/BannerPrincipal';
import {Productos} from '../componentes/Productos';
import {Cabecera} from '../componentes/Cabecera';
export class InicioProductos extends React.Component{
    render(){
        return(
           <>
            <BannerPrincipal></BannerPrincipal>
            <Cabecera></Cabecera>
            <Productos></Productos>
           </>
        );
    }
}