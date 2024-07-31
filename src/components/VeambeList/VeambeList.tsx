import veambesApiMock from "../../data/VeambesApiMock";
import VeambeCard from "../VeambeCard/VeambeCard";
import VeambeListStyled from "./VeambeListStyled";

const VeambeList = (): React.ReactElement => {
  return (
    <VeambeListStyled>
      {veambesApiMock.map((artwork) => (
        <li key={artwork._id}>
          <VeambeCard artwork={artwork} />
        </li>
      ))}
    </VeambeListStyled>
  );
};

export default VeambeList;
