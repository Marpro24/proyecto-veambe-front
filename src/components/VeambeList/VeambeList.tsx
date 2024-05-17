import { useAppSelector } from "../../store/hooks";
import VeambreListStyled from "./VeambeListStyled";

const VeambeList = (): React.ReactElement => {
  const artworkState = useAppSelector((state) => state.veambeState);

  return (
    <VeambreListStyled>
      {artworkState.artwork.map((artwork) => (
        <li key={artwork._id}>{artwork.title}</li>
      ))}
    </VeambreListStyled>
  );
};

export default VeambeList;
