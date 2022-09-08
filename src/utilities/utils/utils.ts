import React, { useEffect } from 'react';

import { Dimensions } from './utils.d';

/**
 * 
 * @param container React Refrence
 * @link stackoverflow: https://stackoverflow.com/a/60978633
 */
// export const useContainerDimensions = (
//   container: React.RefObject<HTMLElement>
//   ):
//   any
//   | null => {
//   // Get dimensions of container
//   const getDimensions = (): Dimensions => {
//     return {
//       width: container.current.offsetWidth,
//       height: container.current.offsetHeight,
//     };
//   };

//   // Store them in state
//   const [dimensions, setDimensions] = React.useState<Dimensions>({width: 0, height: 0});

//   // Handle resize event
//   useEffect(() => {
//     // Set new dimensions
//     const handleResize = () => {
//       setDimensions(getDimensions());
//     };

//     // Check if !null
//     if(container.current !== null) {
//       setDimensions(getDimensions());
//     };
    
//   }, [container]);
// };