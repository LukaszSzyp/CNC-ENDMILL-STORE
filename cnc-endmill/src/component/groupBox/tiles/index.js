import * as styledTiles from "./styledTiles";

export const Tiles = ({ title, imgURL }) => {
  return (
    <styledTiles.TilesContainer>
      <h3>{title}</h3>

      <img src={imgURL} alt="endmill" />
    </styledTiles.TilesContainer>
  );
};
