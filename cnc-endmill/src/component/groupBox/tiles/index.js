import * as styledTiles from "./styledTiles";

export const Tiles = ({ category }) => {
  return (
    <styledTiles.TilesContainer>
      <h3>{category.title}</h3>

      <img src={category.img} alt="endmill" />
    </styledTiles.TilesContainer>
  );
};
