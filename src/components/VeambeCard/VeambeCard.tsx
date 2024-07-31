import { VeambeStructure } from "../../store/features/veambe/types";
import VeambeCardStyled from "./VeambeCardStyled";

interface VeambeCardProps {
  artwork: VeambeStructure;
}

const VeambeCard = ({
  artwork: { image, category },
}: VeambeCardProps): React.ReactElement => {
  return (
    <VeambeCardStyled>
      <img
        className="veambe-card__image"
        src={image}
        alt={category}
        width="500"
        height="500"
      />
      <h2 className="veambe-card__category">{category}</h2>
    </VeambeCardStyled>
  );
};

export default VeambeCard;
