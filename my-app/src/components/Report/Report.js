// src/components/Report/Report.js
import './Report.css';

export function createReport() {
  // 1) Container chính
  const reportContainer = document.createElement('div');
  reportContainer.className = 'report-container';

  // 2) Date selector
  const dateContainer = document.createElement('div');
  dateContainer.className = 'date-selector';
  dateContainer.innerHTML = `
    <div class="date-arrow prev"><img src="/icons/arrow-left.svg" alt="Prev" /></div>
    <div class="date-info">
      <div class="date-text"></div>
      <div class="time-text"></div>
    </div>
    <div class="date-arrow next"><img src="/icons/arrow-right.svg" alt="Next" /></div>
  `;
  reportContainer.appendChild(dateContainer);

// 3) Body báo cáo
const bodyContainer = document.createElement('div');
bodyContainer.innerHTML = `
<script>
  document.querySelectorAll('.donut').forEach(el => {
    const percentText = el.parentElement.querySelector('.percent-text');
    const value = parseInt(percentText.textContent);
    el.style.setProperty('--pct', '0%');
    setTimeout(() => {
      el.style.setProperty('--pct', value + '%');
    }, 100);
  });
</script>


<div class="report-box success">
  <!-- Header của card -->
  <div class="card-header">
    <div class="card-title text text--h5">Field Coach Plan compliance</div>
    <div class="header-badge text text--body">W%: <span class="text text--body">20%</span></div>
  </div>
<div class="container">
    <!-- Left Panel -->
    <div class="left-panel">
        <div class="label-block">
            <div class="row">
                <div class="label">Chỉ tiêu</div>
                <div class="value">184</div>
            </div>
            <div class="row">
                <div class="label">Thực đạt</div>
                <div class="value">175</div>
            </div>
            <div class="row">
                <div class="label">% target</div>
                <div class="value">95%</div>
            </div>
        </div>
        <div class="a3ms-box">
            <div class="row">
                <div class="label">A3Ms</div>
                <div class="value">93%</div>
            </div>
        </div>
    </div>

    <!-- Middle Panel -->
    <div class="middle-panel">
        <div class="chart-area">
          <div class="donut" style="--pct: 0%;"></div>
          <div class="percent-text">95%</div>
        </div>
      <div class="month-change">
          <div class="warning-dot">
            <img src="/icons/Vector.svg" alt="Warning" />
          </div>
          <div class="month-change-text">
              <span>0%</span>
              <span> tháng trước</span>
          </div>
      </div>
    </div>

    <!-- Right Panel -->
    <div class="right-panel">
        <div class="percent-row">
            <div class="percent-value">90%</div>
            <div class="percent-value">95%</div>
            <div class="percent-value">95%</div>
        </div>
        <div class="bar-chart">
            <div class="bar t5"><div class="bar-inner"></div></div>
            <div class="bar t6"><div class="bar-inner"></div></div>
            <div class="bar t7"><div class="bar-inner"></div></div>
        </div>
        <div class="month-labels">
            <div class="month-label">T5</div>
            <div class="month-label">T6</div>
            <div class="month-label">T7</div>
        </div>
    </div>
</div>
</div>
<div class="space"></div>
            <div class="report-box error">
                    <div class="report-header">
                        <div class="report-title">SA đạt QC “Khá” (4 điểm)</div>
                        <div class="report-weight-box">
                            <div class="report-weight">W%: 20%</div>
                        </div>
                    </div>
                    <div class="report-body">
                        <!-- Cột trái -->
                        <div class="left-panel">
                            <div class="label-block">
                                <div class="row"><div class="label">Chỉ tiêu</div><div class="value">39</div></div>
                                <div class="row"><div class="label">Thực đạt</div><div class="value">31</div></div>
                                <div class="row"><div class="label">% target</div><div class="value">80%</div></div>
                            </div>
                            <div class="a3ms-box">
                                <div class="row"><div class="label">A3Ms</div><div class="value">42%</div></div>
                            </div>
                        </div>

                        <!-- Cột giữa: donut chart -->
                        <div class="middle-panel">
                            <div class="chart-area">
                                <div class="donut" style="--pct: 79%; --color-accent: #EA3829;"></div>
                                <div class="percent-text" style="color: #EA3829;">79%</div>
                            </div>
                            <div class="month-change">
                                <div class="warning-dot" style="border-color: #EA3829; width: 10.92px; height: 5.46px;">
                                  <img src="/icons/Vector (1).svg" alt="Donut Chart" />
                                </div>
                                <div class="month-change-text">
                                    <span style="color: #EA3829;">9%</span>
                                    <span> tháng trước</span>
                                </div>
                            </div>
                        </div>
                        <!-- Cột phải: biểu đồ cột -->
                        <div class="right-panel">
                            <div class="percent-row">
                                <div class="percent-value">85%</div>
                                <div class="percent-value">88%</div>
                                <div class="percent-value">79%</div>
                            </div>
                            <div class="bar-chart">
                                <div class="bar"><div class="bar-inner" style="height: 58.75px;"></div></div>
                                <div class="bar"><div class="bar-inner" style="height: 61.18px;"></div></div>
                                <div class="bar"><div class="bar-inner" style="height: 54.92px;"></div></div>
                            </div>
                            <div class="month-labels">
                                <div class="month-label">T5</div>
                                <div class="month-label">T6</div>
                                <div class="month-label">T7</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  <div class="space"></div>

<div class="report-box error">
    <div class="report-header">
        <div class="report-title">Focus Sale performance - all Bus</div>
        <div class="report-weight-box">
            <div class="report-weight">W%: 20%</div>
        </div>
    </div>
    <div class="report-body">
        <!-- Cột trái -->
        <div class="left-panel">
            <div class="label-block">
                <div class="row"><div class="label">Chỉ tiêu</div><div class="value">39</div></div>
                <div class="row"><div class="label">Thực đạt</div><div class="value">31</div></div>
                <div class="row"><div class="label">% target</div><div class="value">80%</div></div>
            </div>
            <div class="a3ms-box">
                <div class="row"><div class="label">A3Ms</div><div class="value">42%</div></div>
            </div>
        </div>

        <!-- Cột giữa: Donut Chart -->
        <div class="middle-panel">
            <div class="chart-area">
                <div class="donut" style="--pct: 79%; --color-accent: #EA3829;"></div>
                <div class="percent-text" style="color: #EA3829;">79%</div>
            </div>
            <div class="month-change">
                <div class="warning-dot" style="border-color: #E29800;"><img src="/icons/Vector (1).svg" alt="Warning" /></div>
                <div class="month-change-text">
                    <span style="color: #E29800;">0%</span>
                    <span> tháng trước</span>
                </div>
            </div>
        </div>

        <!-- Cột phải: Biểu đồ cột -->
        <div class="right-panel">
            <div class="percent-row">
                <div class="percent-value">85%</div>
                <div class="percent-value">88%</div>
                <div class="percent-value">79%</div>
            </div>
            <div class="bar-chart">
                <div class="bar"><div class="bar-inner" style="height: 58.75px;"></div></div>
                <div class="bar"><div class="bar-inner" style="height: 61.18px;"></div></div>
                <div class="bar"><div class="bar-inner" style="height: 54.92px;"></div></div>
            </div>
            <div class="month-labels">
                <div class="month-label">T5</div>
                <div class="month-label">T6</div>
                <div class="month-label">T7</div>
            </div>
        </div>
    </div>
</div>

<div class="space"></div>

<div class="report-box success">
    <div class="report-header">
        <div class="report-title">SA đạt Offtake Focus</div>
        <div class="report-weight-box">
            <div class="report-weight">W%: 20%</div>
        </div>
    </div>
    <div class="report-body">
        <!-- Cột trái -->
        <div class="left-panel">
            <div class="label-block">
                <div class="row"><div class="label">Chỉ tiêu</div><div class="value">184</div></div>
                <div class="row"><div class="label">Thực đạt</div><div class="value">175</div></div>
                <div class="row"><div class="label">% target</div><div class="value">95%</div></div>
            </div>
            <div class="a3ms-box">
                <div class="row"><div class="label">A3Ms</div><div class="value">93%</div></div>
            </div>
        </div>

        <!-- Cột giữa: Donut Chart -->
        <div class="middle-panel">
            <div class="chart-area">
                <div class="donut donut-green" style="--pct: 95%;"></div>
                <div class="percent-text">95%</div>
            </div>
            <div class="month-change">
                <div class="warning-dot" style="border-color: #008F5D;"><img src="/icons/Vector.svg" alt="Donut Chart" /></div>
                <div class="month-change-text">
                    <span style="color: #008F5D;">6%</span>
                    <span> tháng trước</span>
                </div>
            </div>
        </div>

        <!-- Cột phải: Bar chart -->
        <div class="right-panel">
            <div class="percent-row">
                <div class="percent-value">90%</div>
                <div class="percent-value">88%</div>
                <div class="percent-value">95%</div>
            </div>
            <div class="bar-chart">
                <div class="bar"><div class="bar-inner" style="height: 62.57px;"></div></div>
                <div class="bar"><div class="bar-inner" style="height: 61.13px;"></div></div>
                <div class="bar"><div class="bar-inner" style="height: 66.05px;"></div></div>
            </div>
            <div class="month-labels">
                <div class="month-label">T5</div>
                <div class="month-label">T6</div>
                <div class="month-label">T7</div>
            </div>
        </div>
    </div>
</div>
  

`;
reportContainer.appendChild(bodyContainer);
  // 4) References
  const refs = {
    dateText:    dateContainer.querySelector('.date-text'),
    timeText:    dateContainer.querySelector('.time-text'),
    prevBtn:     dateContainer.querySelector('.date-arrow.prev'),
    nextBtn:     dateContainer.querySelector('.date-arrow.next'),
    badgeVal:    bodyContainer.querySelector('.badge-value'),
    metricTarget:   bodyContainer.querySelector('.metric-target'),
    metricAchieved: bodyContainer.querySelector('.metric-achieved'),
    metricRate:     bodyContainer.querySelector('.metric-rate'),
    metricA3ms:     bodyContainer.querySelector('.metric-a3ms'),
    compliance:     bodyContainer.querySelector('.metric-compliance'),
    trendValue:     bodyContainer.querySelector('.trend-value'),
    chartFilled:    bodyContainer.querySelector('.chart-filled'),
    sparklineBox:   bodyContainer.querySelector('#sparkline-container'),
    dayLabels:      bodyContainer.querySelectorAll('.day-label'),
  };

  // 5) State & formatters
  let currentDate = new Date();
  const fmtDay  = d => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
  const fmtTime = d => `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;

//   const donutEl = bodyContainer.querySelector('.donut');
//     donutEl.style.setProperty('--pct', data.metrics.compliance + '%');
//     refs.percentText.textContent = data.metrics.compliance + '%';

  // 6) Date/Time update funcs
  function updateDateDisplay() { refs.dateText.textContent = fmtDay(currentDate); }
  function updateTimeDisplay() { refs.timeText.textContent = fmtTime(new Date()); }

  // 7) Prev/Next events with today‑limit
  refs.prevBtn.addEventListener('click', () => {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDateDisplay();
  });
  refs.nextBtn.addEventListener('click', () => {
    const today = new Date(), next = new Date(currentDate);
    next.setDate(next.getDate() + 1);
    if (next > today) {
      alert('Hiện tại đây là bản mới nhất');
    } else {
      currentDate = next;
      updateDateDisplay();
    }
  });

  // 8) Function to render data into UI
  function updateReport(data) {
    if (data.date) refs.dateText.textContent = data.date;
    if (data.time) refs.timeText.textContent = data.time;

    refs.badgeVal.textContent       = data.wPercent;
    refs.metricTarget.textContent   = data.metrics.target;
    refs.metricAchieved.textContent = data.metrics.achieved;
    refs.metricRate.textContent     = data.metrics.rate;
    refs.metricA3ms.textContent     = data.metrics.a3ms;
    refs.compliance.textContent     = data.metrics.compliance;
    refs.trendValue.textContent     = `${data.metrics.trend}%`;

    // Radial chart size
    const comp = parseFloat(data.metrics.compliance);
    if (!isNaN(comp)) {
      const base = 140; // px
      const sz = base * comp / 100;
      refs.chartFilled.style.width  = `${sz}px`;
      refs.chartFilled.style.height = `${sz}px`;
    }

    // Sparkline bars
    if (Array.isArray(data.sparkline)) {
      refs.sparklineBox.innerHTML = data.sparkline
        .map(v => `<div style="flex:1;margin:0 4px;background:#20BD89;height:${v}%"></div>`)
        .join('');
    }

    // Day labels
    if (Array.isArray(data.labels)) {
      refs.dayLabels.forEach((el, i) => el.textContent = data.labels[i] || '');
    }
  }

  // 9) Fetch & schedule updates
  async function fetchAndUpdate() {
    let data;
    try {
      const resp = await fetch('/api/report');
      if (!resp.ok || !resp.headers.get('content-type')?.includes('application/json')) {
        throw new Error('Not JSON');
      }
      data = await resp.json();
    } catch {
      // mock data
      data = {
        date: fmtDay(currentDate),
        time: fmtTime(new Date()),
        wPercent: '20%',
        metrics: { target:184, achieved:175, rate:'95%', a3ms:'93%', compliance:'75', trend:5 },
        sparkline: [30, 50, 80],
        labels: ['T5','T6','T7']
      };
    }
    updateReport(data);
  }

  // 10) Init and timers
  updateDateDisplay();
  updateTimeDisplay();
  setInterval(updateTimeDisplay, 1000);
  fetchAndUpdate();
  setInterval(fetchAndUpdate, 60 * 60 * 1000);

  return reportContainer;
}
