// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';

// interface PieChartProps {
//   data: {
//     is_human_written: number;
//     is_gpt_generated: string;
//     feedback_message: string;
//     gpt_generated_sentences: string[];
//     words_count: number;
//   };
// }

// const useChartData = (humanWrittenPercentage: number, gptGeneratedPercentage: number) => {
//   const [chartData, setChartData] = React.useState([
//     { id: 0, value: humanWrittenPercentage, label: 'Human Written' },
//     { id: 1, value: gptGeneratedPercentage, label: 'AI Generated' },
//   ]);

//   React.useEffect(() => {
//     setChartData([
//       { id: 0, value: humanWrittenPercentage, label: 'Human Written' },
//       { id: 1, value: gptGeneratedPercentage, label: 'AI Generated' },
//     ]);
//   }, [humanWrittenPercentage, gptGeneratedPercentage]);

//   return chartData;
// };

// const AIDetectorPieChart: React.FC<PieChartProps> = ({ data: { is_human_written, is_gpt_generated } }) => {
//   const humanWrittenPercentage = is_human_written;
//   const gptGeneratedPercentage = parseFloat(is_gpt_generated);

//   const chartData = useChartData(humanWrittenPercentage, gptGeneratedPercentage);

//   return (
//     <PieChart
//       series={[
//         {
//           data: chartData,
//           highlightScope: { faded: 'global', highlighted: 'item' },
//           faded: { innerRadius: 30, additionalRadius: -30 },
//         },
//       ]}
//       height={200}
//       colors={['rgb(2, 178, 175)', 'red']} 
//     />
//   );
// };

// export default AIDetectorPieChart;
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

interface ChartData {
  id: number;
  value: number;
  label: string;
}

interface PieChartProps {
  data: {
    is_human_written: number; 
    is_gpt_generated: string;
    feedback_message: string;
    gpt_generated_sentences: string[];
    words_count: number;
  };
}

const useChartData = (humanWrittenPercentage: number, gptGeneratedPercentage: number): ChartData[] => {
  const [chartData, setChartData] = React.useState<ChartData[]>([
    { id: 0, value: humanWrittenPercentage, label: 'Human Written' },
    { id: 1, value: gptGeneratedPercentage, label: 'AI Generated' },
  ]);

  React.useEffect(() => {
    setChartData([
      { id: 0, value: humanWrittenPercentage, label: 'Human Written' },
      { id: 1, value: gptGeneratedPercentage, label: 'AI Generated' },
    ]);
  }, [humanWrittenPercentage, gptGeneratedPercentage]);

  return chartData;
};

const AIDetectorPieChart: React.FC<PieChartProps> = ({ data: { is_human_written, is_gpt_generated } }) => {
  const humanWrittenPercentage = is_human_written;
  const gptGeneratedPercentage = parseFloat(is_gpt_generated);

  const chartData = useChartData(humanWrittenPercentage, gptGeneratedPercentage);

  return (
    <PieChart
      series={[
        {
          data: chartData,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      height={200}
      colors={['rgb(2, 178, 175)', 'red']}
    />
  );
};

export default AIDetectorPieChart;
