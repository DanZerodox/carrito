import * as React from 'react';
import Card from 'react-bootstrap/Card';

export class Footer extends React.Component{
    render(){
        return(
            <Card style={{boxShadow:'none'}}>
                <Card.Title>
                <p class="leyendapie">Compra tus productos JUMEX favoritos en línea en la Tienda de Jumex oficial en México. Nuevos productos y promociones increíbles: ¡solo lo mejor de Jumex! Jumex cuenta con los mejores productos para ti: prueba los nuevos sabores entre diferentes productos de alta calidad.</p>
                </Card.Title>
            </Card>
        );
    }
}