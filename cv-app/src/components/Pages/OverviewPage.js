import FormationsExperiences from "../FormationsExperiences";
import Profil from "../Profil";
// import { Preview } from "react-html2pdf";

export const OverviewPages = () => {
  return (
    // <Preview id={'cv-print'} >
      <div className="main" id="overview">
          <Profil />
          <FormationsExperiences />
      </div>
    // </Preview>
  );
};