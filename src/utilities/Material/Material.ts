import { CSSProperties } from "react";
import { MaterialCreateInfo } from './Material.d';

/**
 * Creates CSSstyle rules aproximating a real world material
 * - Glass
 * - Fabric
 */
const Material = (createInfo: MaterialCreateInfo): CSSProperties => {
  //Figure out what material we are creating
  const materialType = createInfo.material;

  switch (materialType) {
    case 'glass':
      const {
        tint,
        opacity
      } = createInfo;

      return {
        backgroundColor: tint,
        opacity: opacity,
      };
    case 'fabric':
      const {
        color,
      } = createInfo;
      return {
        backgroundColor: color,
      };
  };
};

export default Material;