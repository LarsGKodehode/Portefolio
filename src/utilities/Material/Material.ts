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
        backgroundColor: `rgba(${tint.join(",")}, ${opacity})`,
        border: `1px solid rgba(${tint.join(",")}, 0.4)`,
        backdropFilter: 'blur(6px)',
      };
    case 'fabric':
      const {
        color,
      } = createInfo;
      return {
        backgroundColor: `rgb(${color.join(" ")})`,
      };
  };
};

export default Material;