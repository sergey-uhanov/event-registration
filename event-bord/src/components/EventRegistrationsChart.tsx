import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,   
  LinearScale,      
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const EventRegistrationsChart = ({ eventId }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Registrations per Day',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:6060/visitors/registrations-by-day/${eventId}`);
        
        const dates = data.map(item => item.date);
        const counts = data.map(item => item.count);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: 'Registrations per Day',
              data: counts,
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data', error);
      }
    };

    fetchData();
  }, [eventId]);

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Days',  
        },
      },
      y: {
        beginAtZero: true, 
        title: {
          display: true,
          text: 'Number of Registrations',  
        },
        ticks: {
          stepSize: 1, 
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default EventRegistrationsChart;
