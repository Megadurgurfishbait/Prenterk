import React, {Component, Fragment} from 'react';
export default class Items extends Component {


      renderMyText = () => {
            // Listi af tenglum fyrir Vörur listann. 
            const list = [
                  {id: "Nafnspjold", name: "Nafnspjöld"},
                  {id: "Reikningar", name: "Reikningar"},
                  {id: "Jolakort", name: "Jólakort"},
                  {id: "Servettur", name: "Servéttur"},
                  {id: "Salmaskrar", name: "Sálmaskrár"},
                  {id: "BlodOgTimarit", name: "Blöð og Tímarit"},
                  {id: "Bodskort", name: "Boðskort"}
            ];

      
                  return(list.map((values, index) => (
                        <button key={index} id={values.id} onClick={this.props.myClick} >  {values.name} </button>
                  )))
          }

      render() {
            return (
                  <Fragment>
                        {this.renderMyText()}
                  </Fragment>
            )
      }
}
