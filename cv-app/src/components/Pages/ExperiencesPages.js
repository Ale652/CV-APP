import ExperiencesDetails from "../Experiences";
import DataExperiences from "../../data/ExperiencesDetails";

export const ExperiencesPages = () => {
    return (
      <div className="experiences-page"  id="experiences">
        <ExperiencesDetails datas={DataExperiences}/>
      </div>
    );
  };