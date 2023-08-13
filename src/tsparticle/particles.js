import Confparticle from './confgpartect';
import Cp2 from './confgpartects2';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";



function Parti() {
      const particlesInit = useCallback(async engine => {
            await loadFull(engine);
        }, []);
    
        const particlesLoaded = useCallback(async container => {
            await console.log(container);
        }, []);
    return (
      <div>
      <Particles  id="tsparticles"
           init={particlesInit}
           loaded={particlesLoaded}
           options={Confparticle}/>
           </div>
    );
  }
  
  export default Parti;