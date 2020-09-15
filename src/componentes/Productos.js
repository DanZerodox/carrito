import * as React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import * as Constantes from '../constantes/Constantes';

export class Productos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productos: []
        }
    }
    render(){
        return(
            <div className="row">
                {
                     this.state.productos.map(item=>(
                        <Card className='card' style={{ width: 260, height: 290, margin: 10, display: "inline-block" }}>
                            <CardActionArea>
                                <CardMedia style={{height:135, width:80, position:'relative',left:85}} image={Constantes.CONEXION_PRODUCCION+"Content/Assets/Images/"+item.ArtSku+".png"}>

                                </CardMedia>
                                <CardContent style={{ height: 50 }}>
                                    <div
                                    style={{
                                        marginLeft: 5,
                                        fontWeight: "bold",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}
                                    >
                                    {item.ArtDes}
                                    </div>
                                    <div style={{ margin: 5 }}>Precio: ${item.ArtPVenta}.00 x 1 Caja</div>
                                    <div style={{ color: "#1a9349", fontWeight: "bold", margin: 5 }}>
                                            SKU: {item.ArtSku}
                                    </div>    
                                </CardContent>
                                <CardActions
                                    style={{ display: "flex", alignItems: "center", height: 45, padding:'8px 15px' }}
                                    >
                                     <Button
                                        size="small"
                                        style={{ marginRight: 87 }}
                                        onClick={() => {
                                        this.props.history.push("/details/");
                                        }}
                                     >
                                        {" "}
                                        Detalles
                                    </Button>   
                                    <Tooltip title="Agregar al Carrito">
                                    <IconButton
                                    size="small"                                   
                                    color="success"
                                    aria-label="Agregar al Carrito"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>								
                                    </IconButton>
                                </Tooltip> 
                                </CardActions>
                            </CardActionArea>                               
                        </Card>
                    ))
                }
            </div>
        );
    }

    componentDidMount(){
        this.CargarProductos().then(item=>{
            this.setState({
                productos:item[0]
            },()=>{
                console.log(this.state.productos);
            })
        });     
    }

    Califacion(unit){
        var califacion=unit
        var html=[];
        for(var i = 1; i < 6; i++){
            if(i<=califacion){
                var j= 5-i;
                html.push(<input type="radio" class="rating-input" id={"rating-input-1-"+j} name="rating-input-1"/>);
                html.push(<label for={"rating-input-1-"+j} class={"rating-star1"}></label>);
            }
            else{
             var j= 5-i;
             html.push(<input type="radio" class="rating-input" id={"rating-input-1-"+j} name="rating-input-1"/>);
             html.push(<label for={"rating-input-1-"+j} class={"rating-star"}></label>);
            }
        }
       return html
 
     }

     CargarProductos(){
        var pro=[];
        const posturl=Constantes.CONEXION_PRODUCCION+"api/Articulo/sugeridos";
        var result= new Promise(function(resolve,reject){
            fetch(posturl,{
                method: 'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(
                (res)=>res.json()
            )
            .catch(error=>console.log('Error',error))
            .then(resp=>{
                pro.push(resp);
                resolve(pro);
            })
        });

        return result;
    }

}