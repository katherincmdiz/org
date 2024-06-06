import "./MiOrg.css"
const MiOrg = (props) => {
    console.log(props);

   // const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () => {
      //  console.log("Mostrar/Ocultar elemento", mostrar)
        //actualizarMostrar(mostrar)
    //}

    return  <section className="org-section">  
               <h3 className="title">Mi Organización</h3> 
               <img src="./img/data.png" alt="data" onClick={props.cambiarMostrar}/>
            </section >
}

export default MiOrg