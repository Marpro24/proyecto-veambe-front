import VeambeList from "../../components/VeambeList/VeambeList";
import HomepageStyled from "./HomepageStyled";

const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <img
        className="hero"
        src="/images/Veambe header logo.png"
        alt="logo veambe"
      />

      <VeambeList />
    </HomepageStyled>
  );
};

export default Homepage;
