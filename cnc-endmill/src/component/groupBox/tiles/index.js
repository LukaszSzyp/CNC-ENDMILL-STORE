import * as styledTiles from "./styledTiles";

export const Tiles = ({ title, img }) => {
  return (
    <styledTiles.TilesContainer>
      <h3>{title}</h3>

      <img src={img} alt="endmill" />
    </styledTiles.TilesContainer>
  );
};
