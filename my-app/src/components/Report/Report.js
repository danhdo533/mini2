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
bodyContainer.className = 'highlight-card';
bodyContainer.innerHTML = `
  <!-- Header của card -->
  <div class="card-header">
    <div class="card-title text text--h5">Field Coach Plan compliance</div>
    <div class="header-badge text text--body">W%: <span class="text text--body">20%</span></div>
  </div>

  <!-- Metrics chính -->
  <div class="card-content">
    <div class="metrics">
      <div class="metric-row">
        <div class="label text text--body">Chỉ tiêu</div>
        <div class="value text text--body-bold metric-target">184</div>
      </div>
      <div class="metric-row">
        <div class="label text text--body">Thực đạt</div>
        <div class="value text text--body-bold metric-achieved">175</div>
      </div>
      <div class="metric-row">
        <div class="label text text--body">% target</div>
        <div class="value text text--body-bold metric-rate">95%</div>
      </div>
    </div>
    <div class="sub-badge">
      <div class="text text--body">A3Ms</div>
      <div class="text text--body-bold metric-a3ms">93%</div>
    </div>
  </div>

 <div class="chart-area">
  <div class="donut" style="--pct:95%;"></div>
  <div class="percent-text">95%</div>
  <div class="trend">
    <div class="dot warning"></div>
    <div class="text text--warning text--body-bold trend-value">0%</div>
    <div class="text text--body trend-label">với tháng trước</div>
  </div>
</div>

  <!-- Sparkline bars -->
  <div class="sparkline" id="sparkline-container">
    <div class="sparkbar"><div class="fill" style="height:90%"></div></div>
    <div class="sparkbar"><div class="fill" style="height:95%"></div></div>
    <div class="sparkbar"><div class="fill" style="height:95%"></div></div>
  </div>

  <!-- Nhãn dưới sparkline -->
  <div class="day-labels">
    <div class="bar-label text text--label">T5</div>
    <div class="bar-label text text--label">T6</div>
    <div class="bar-label text text--label">T7</div>
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
