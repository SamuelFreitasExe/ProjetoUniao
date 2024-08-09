import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoPizza = () => {
  // Dados para o primeiro gráfico (Fontes de Receita)
  const dataRevenue = {
    labels: ['Doações', 'Subsídios', 'Parcerias'],
    datasets: [
      {
        label: 'Fontes de Receita',
        data: [3000, 2000, 1000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const dataExpenses = {
    labels: ['Bolsas', 'Administração', 'Infraestrutura'],
    datasets: [
      {
        label: 'Áreas de Despesa',
        data: [4000, 1500, 500],
        backgroundColor: ['#4BC0C0', '#FF9F40', '#FFCD56'],
        hoverBackgroundColor: ['#4BC0C0', '#FF9F40', '#FFCD56'],
      },
    ],
  };

  const options = {
   plugins: {
     legend: {
       labels: {
         font: {
           size: 16,
         },
       },
     },
     tooltip: {
       titleFont: {
         size: 14,
       },
       bodyFont: {
         size: 12,
       },
     },
   },
 };

  return (
    <div className="grafico-container">
      <div className="grafico">
        <h3>Fontes de Receita</h3>
        <Pie data={dataRevenue} options={options} />
      </div>
      <div className="grafico">
        <h3>Áreas de Despesa</h3>
        <Pie data={dataExpenses} options={options} />
      </div>
    </div>
  );
};

export default GraficoPizza;