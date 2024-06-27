import HomepageStyled from "./HomepageStyled";

const Homepage = (): React.ReactElement => {
  return (
    <HomepageStyled>
      <img
        className="hero"
        src="/images/Veambe header logo.png"
        alt="logo veambe"
      />
    </HomepageStyled>
  );
};

export default Homepage;
