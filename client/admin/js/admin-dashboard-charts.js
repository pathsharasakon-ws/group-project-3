let salesChartInstance = null;

const salesTrendData = {
  weekly: {
    labels: ['สัปดาห์ที่ 1', 'สัปดาห์ที่ 2', 'สัปดาห์ที่ 3', 'สัปดาห์ที่ 4'],
    data: [18000, 32000, 25000, 53450],
    bgColors: [
      'rgba(59, 130, 246, 0.4)',
      'rgba(59, 130, 246, 0.6)',
      'rgba(59, 130, 246, 0.5)',
      'rgba(37, 99, 235, 0.9)'
    ]
  },
  monthly: {
    labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.'],
    data: [85000, 92000, 110000, 98000, 125000, 140000, 118000, 128450],
    bgColors: 'rgba(59, 130, 246, 0.7)'
  }
};

function switchSalesTrend(viewType) {
  if (!salesChartInstance) return;
  const current = salesTrendData[viewType];
  salesChartInstance.data.labels = current.labels;
  salesChartInstance.data.datasets[0].data = current.data;
  salesChartInstance.data.datasets[0].backgroundColor = current.bgColors;
  salesChartInstance.update();
}

document.addEventListener('DOMContentLoaded', () => {
  // Bar Chart
  const ctxBar = document.getElementById('salesBarChart')?.getContext('2d');
  if (ctxBar) {
    salesChartInstance = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: salesTrendData.weekly.labels,
        datasets: [{
          label: 'ยอดขาย (บาท)',
          data: salesTrendData.weekly.data,
          backgroundColor: salesTrendData.weekly.bgColors,
          borderColor: '#2563eb',
          borderWidth: 1.5,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { callback: (val) => '฿' + (val / 1000) + 'k', font: { size: 10 } },
            grid: { color: '#f3f4f6' }
          },
          x: { ticks: { font: { size: 10 } }, grid: { display: false } }
        }
      }
    });
  }

  // Doughnut Chart
  const ctxDoughnut = document.getElementById('categoryDoughnutChart')?.getContext('2d');
  if (ctxDoughnut) {
    new Chart(ctxDoughnut, {
      type: 'doughnut',
      data: {
        labels: ['เสื้อ (Tops)', 'เดรส (Dresses)', 'กระโปรง/กางเกง', 'Lookbook Sets'],
        datasets: [{
          data: [40, 25, 20, 15],
          backgroundColor: ['#3b82f6', '#ec4899', '#8b5cf6', '#f59e0b'],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { boxWidth: 10, font: { size: 10 }, padding: 12 }
          }
        },
        cutout: '65%'
      }
    });
  }
});