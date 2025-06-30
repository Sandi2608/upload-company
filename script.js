// Fungsi scroll tombol Jelajahi
function scrollToSection() {
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
}

// ===== Bar Chart: Jumlah Proyek per Mitra =====
const barCtx = document.getElementById('partnershipChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Premier Oil', 'Medco E&P', 'Petronas'],
    datasets: [{
      label: 'Jumlah Proyek',
      data: [12, 8, 10],
      backgroundColor: ['#4e79a7', '#f28e2c', '#e15759'] // soft dark colors
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      },
      title: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    }
  }
});

// ===== Pie Chart: Distribusi Persentase Proyek =====
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Premier Oil', 'Medco', 'Petronas'],
    datasets: [{
      data: [12, 8, 10],
      backgroundColor: ['#6c757d', '#adb5bd', '#ced4da']
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#ffffff' }
      }
    }
  }
});

// ===== Line Chart: Tren Proyek per Tahun =====
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'Total Proyek',
      data: [5, 9, 13, 17],
      borderColor: '#17a2b8',
      backgroundColor: 'rgba(23,162,184,0.3)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#ffffff'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#ffffff' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      y: {
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  }
});
