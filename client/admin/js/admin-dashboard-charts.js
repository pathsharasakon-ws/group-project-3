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

  // Line Chart: Sales by Category
  const ctxCategoryLine = document.getElementById('categoryLineChart')?.getContext('2d');
  if (ctxCategoryLine) {
    new Chart(ctxCategoryLine, {
      type: 'line',
      data: {
        labels: ['เสื้อ', 'เดรส', 'กระโปรง/กางเกง', 'Lookbook Sets'],
        datasets: [{
          label: 'ยอดขาย (บาท)',
          data: [51380, 32110, 25690, 19270],
          borderColor: '#ec4899',
          backgroundColor: 'rgba(236, 72, 153, 0.12)',
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#ec4899',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          borderWidth: 2.5,
          tension: 0.35,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `ยอดขาย: ฿${context.parsed.y.toLocaleString('th-TH')}`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 10 }, maxRotation: 35, minRotation: 0 }
          },
          y: {
            beginAtZero: true,
            grid: { color: '#f3f4f6' },
            ticks: {
              font: { size: 10 },
              callback: (value) => `฿${value / 1000}k`
            }
          }
        }
      }
    });
  }
});
