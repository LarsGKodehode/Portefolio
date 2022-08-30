import { CSSProperties } from "styled-components";

// Color types
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface CustomSVGProps {
  width: number,
  height?: number,
  fill: Color,
};

interface CustomSVGElement extends JSX.Element {};

function CustomSVG(props: CustomSVGProps): CustomSVGElement {
  // Destructuring wanted variables
  const {
    width,
    fill,
  } = props;
  const height = props.height ? props.height : props.width;

  // Animate

  // Constructing custom props
  const svgStyle: CSSProperties = {};
  const svgProps = {
    width: `${width * 4}`,
    height: `${height * 4}`,
    xmlns: "http://www.w3.org/2000/svg",
    style: svgStyle,
  };

  const circleProps = {
    cx: `${width / 2}`,
    cy: `${height / 2}`,
    r: `${width / 2}`,
    fill: `${fill}`,
  };
  // Animation for constructed element
  const animationProps = {
    attributeName: "r",
    values: `
      ${width / 3};
      ${width / 2};
      ${width / 3};
      `,
    dur: "2s",
    repeatCount: "indefinite"
  };
  const animationProps2 = {
    attributeName: "cx",
    values: `
      ${width};
      ${width * 2};
      ${width};
      `,
    dur: "4s",
    repeatCount: "indefinite"
  };

  

  // Return component
  return(
    <svg {...svgProps} >
      <circle {...circleProps} >
        <animate {...animationProps} />
        <animate {...animationProps2} />
      </circle>
    </svg>
  );
};

export default CustomSVG;

export type {
  Color,
  CustomSVGProps,
  CustomSVGElement,
};