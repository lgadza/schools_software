// import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';

// const ParabolicGraph: React.FC = () => {
//   const [x, setX] = useState([] as number[]);
//   const [y, setY] = useState([] as number[]);

//   useEffect(() => {
//     // Generate x values (e.g., from -10 to 10)
//     const xValues = Array.from({ length: 100 }, (_, i) => i - 50);

//     // Calculate y values (parabolic function y = x^2)
//     const yValues = xValues.map((x) => x ** 2);

//     setX(xValues);
//     setY(yValues);
//   }, []);

//   return (
//     <div>
//       <h2>Parabolic Graph</h2>
//       <Plot
//         data={[
//           {
//             x: x,
//             y: y,
//             type: 'scatter',
//             mode: 'lines',
//             name: 'y = x^2',
//           },
//         ]}
//         layout={{
//           title: 'Parabolic Graph (y = x^2)',
//           xaxis: { title: 'x' },
//           yaxis: { title: 'y' },
//         }}
//       />
//     </div>
//   );
// };

// export default ParabolicGraph;
