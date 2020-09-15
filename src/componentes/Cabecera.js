import * as React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
export class Cabecera extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ocultar:false
        }
    }
    render(){
        return(
            <div style={{ padding: '20px 75px', display: "flex", alignItems: "center" }}>
            <div style={{ flex: 1, fontSize: 24 }}>
              {this.state.ocultar==false?
                <div>Productos Populares</div>  
                :null
              }    
            </div>
            <FormControlLabel
            control={
              <Checkbox
                color="primary"
                                
              />
            }
            label="Filtrar"
          />
            <Select
                style={{width:222}}
            >
            <MenuItem value={"lh"}>del más caro al más barato</MenuItem>
            <MenuItem value={"hl"}>del más barato al más caro</MenuItem>
          </Select>
            </div>
        );
    }
    componentDidMount() {  
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        const height = window.innerWidth;
        
        if(height<1150){
            this.setState({ ocultar:true });
        }else{
            this.setState({ ocultar:false });

        }
    }
}