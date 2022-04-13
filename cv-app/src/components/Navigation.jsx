import { NavButton } from "./NavButton";
import "./Navigation.css";

export const Navigation = () => {
    return (
      <div className="header-navigation">
        <NavButton label="Overview" path="/overview" />
        <NavButton label="Profile" path="/profile" />
        <NavButton label="Experiences" path="/experiences" />
        <NavButton label="Formations" path="/formations" />
        <NavButton label="Projects" path="/projects" />
        <NavButton label="ContactMe" path="/contactme" />
      </div>
    );
  };