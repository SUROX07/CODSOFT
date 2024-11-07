let testName='Surajit';

const welcome = document.querySelector('#welcome');
welcome.textContent='Welcome! '+testName;


const logOut = document.querySelector('#logOut');
logOut.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.href = 'index.html';
})


window.addEventListener("load", ()=>{
    Chart.register({
        id: 'shadowPlugin',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';  // Shadow color
          ctx.shadowBlur = 15;                      // Shadow blur amount
          ctx.shadowOffsetX = 4;                    // Horizontal offset
          ctx.shadowOffsetY = 4;                    // Vertical offset
        },
        afterDraw: (chart) => {
          chart.ctx.restore();
        }
      });

    const ctx = document.getElementById('attendanceChart').getContext('2d');
    const attendanceChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Present', 'Late', 'Absent'],
        datasets: [{
          data: [70, 15, 15],
          backgroundColor: ['#3b82f6', '#fbbf24', '#ef4444'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  });
