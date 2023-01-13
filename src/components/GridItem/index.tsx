import React from "react";
import { GridItemType } from "../../types/GridItemType";
import * as C from "./styles";
import b7Svg from "../../svgs/b7.svg";
import { items } from "../../data/items";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container
      onClick={onClick}
      showBackground={item.permanentShown || item.shown}
    >
      {item.permanentShown === false && item.shown === false && (
        <C.Icon src={b7Svg} alt="icon B7web" opacity={0.1} />
      )}

      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt="item icone" />
      )}
    </C.Container>
  );
};

export default GridItem;
