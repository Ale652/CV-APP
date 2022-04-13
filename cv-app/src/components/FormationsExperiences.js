import React from 'react';
import "./FormationsExperiences.css";
import DataFormations from '../data/Formations';
import Formations from './Formations';
import DataExperiences from '../data/Experiences';
import Experiences from './Experiences';



function FormationsExperiences(){

    return(
        /**it is a fragment <>  </>*/
        <> 
            <Formations datas={DataFormations}/>
            <Experiences datas={DataExperiences}/>
        </>
    )
        
}

export default FormationsExperiences