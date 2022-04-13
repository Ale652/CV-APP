import Formations from "../Formations";
import dataFormations from "../../data/FormationsDetails";

export const FormationsPages = () => {
    return (
        <div className="formations-page"  id="formations">
            <Formations datas={dataFormations}/>
        </div>
    );
  };