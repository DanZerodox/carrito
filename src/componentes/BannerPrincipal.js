import React from 'react';
import '../App.css';
function ResponsiveImage( { src, width, height, widthdinamic, sumar } ) {
    return (
      <div
        style={
            { 
                width    
            }
        }
        className="responsive-image">
        <div style={ {
            paddingBottom: ( height / width * 100 ) + '%',
          } } />
        <img
          src={ src }
          className="responsive-image__image" />
      </div>
    );
  }
  
export class BannerPrincipal extends React.Component{
constructor(props){
    super(props);
    this.state={
        height:0,
        heightview:90,
        sumar:0
    }
}
    render(){
        return(
          <><div style={{height:this.state.heightview+"px", top:0}}></div>
            <ResponsiveImage
            src={require("../images/banner.png")}
            width={ 2200 }
            height={ 200 }
            widthdinamic={this.state.height}
            sumar={this.state.sumar}
            />
          </>
        );
    }

    componentDidMount() {  
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        const height = window.innerWidth;
        
        if(height<1150){
            this.setState({ heightview:0 },()=>{console.log(this.state.height)});
        }else{
            this.setState({ heightview:110 },()=>{console.log(this.state.height)});

        }
    }
}