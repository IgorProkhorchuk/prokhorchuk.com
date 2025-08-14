document.addEventListener('DOMContentLoaded', function () {

    // --- Chart Options ---
    const commonChartOptions = {
        chart: {
            type: 'area',
            height: '100%',
            toolbar: { show: false },
            zoom: { enabled: false },
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            }
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        markers: { size: 0 },
        xaxis: {
            type: 'datetime',
            range: 60000, // 60 seconds
            labels: { show: false }
        },
        yaxis: {
            labels: {
                formatter: (value) => value.toFixed(1),
                style: { colors: '#8a90a3' }
            }
        },
        legend: { show: false },
        grid: {
            borderColor: '#2c3040',
            yaxis: { lines: { show: true } }
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            x: { format: 'HH:mm:ss' }
        }
    };

    // --- Chart Initialization ---
    let lastDate = new Date().getTime();
    let dataCpu = [];
    let dataMem = [];
    let dataNet = [];

    function generateInitialData(points) {
        for (let i = 0; i < points; i++) {
            let x = lastDate - (points - i) * 1000;
            dataCpu.push({ x, y: Math.random() * 40 + 10 });
            dataMem.push({ x, y: Math.random() * 8 + 4 });
            dataNet.push({ x, y: Math.random() * 500 + 100 });
        }
    }
    generateInitialData(30);

    const cpuChart = new ApexCharts(document.querySelector("#cpu-chart"), {
        ...commonChartOptions,
        series: [{ name: 'Cognitive Load', data: dataCpu }],
        colors: ['#7367f0'],
        yaxis: { min: 0, max: 100, tickAmount: 5, ...commonChartOptions.yaxis },
        tooltip: { y: { formatter: (val) => `${val.toFixed(1)}%` } }
    });
    cpuChart.render();

    const memChart = new ApexCharts(document.querySelector("#mem-chart"), {
        ...commonChartOptions,
        series: [{ name: 'Memory Recall', data: dataMem }],
        colors: ['#00cfe8'],
        yaxis: { min: 0, max: 16, tickAmount: 4, ...commonChartOptions.yaxis },
        tooltip: { y: { formatter: (val) => `${val.toFixed(1)} GB` } }
    });
    memChart.render();

    const netChart = new ApexCharts(document.querySelector("#net-chart"), {
        ...commonChartOptions,
        series: [{ name: 'Neural Link', data: dataNet }],
        colors: ['#28c76f'],
        yaxis: { min: 0, max: 1000, tickAmount: 5, ...commonChartOptions.yaxis },
        tooltip: { y: { formatter: (val) => `${val.toFixed(1)} kbps` } }
    });
    netChart.render();


    // --- Real-time Data Simulation ---
    setInterval(() => {
        lastDate += 1000;
        dataCpu.push({ x: lastDate, y: Math.random() * 40 + 10 });
        dataMem.push({ x: lastDate, y: Math.random() * 8 + 4 });
        dataNet.push({ x: lastDate, y: Math.random() * 500 + 100 });

        if (dataCpu.length > 60) {
            dataCpu.shift();
            dataMem.shift();
            dataNet.shift();
        }

        cpuChart.updateSeries([{ data: dataCpu }]);
        memChart.updateSeries([{ data: dataMem }]);
        netChart.updateSeries([{ data: dataNet }]);
    }, 1000);


    // --- Service Status ---
    const services = [
        { name: 'Frontal Lobe', status: 'ok' },
        { name: 'Limbic System', status: 'ok' },
        { name: 'Cerebellum', status: 'ok' },
        { name: 'Brainstem', status: 'ok' },
        { name: 'Temporal Lobe', status: 'ok' },
        { name: 'Hippocampus', status: 'ok' },
        { name: 'Neural Network', status: 'ok' }
    ];

    const serviceStatusEl = document.getElementById('service-status');

    function renderServices() {
        serviceStatusEl.innerHTML = '';
        services.forEach(s => {
            const statusClass = `status-${s.status}`;
            const statusText = s.status.toUpperCase();
            serviceStatusEl.innerHTML += `
                <li>
                    <span>${s.name}</span>
                    <span class="service-status-indicator ${statusClass}">${statusText}</span>
                </li>
            `;
        });
    }
    renderServices();

    // Simulate service status changes
    setInterval(() => {
        const serviceToChange = services[Math.floor(Math.random() * services.length)];
        const isOk = serviceToChange.status === 'ok';
        if (isOk && Math.random() < 0.1) { // 10% chance to go to 'warn'
            serviceToChange.status = 'warn';
        } else if (!isOk && Math.random() < 0.5) { // 50% chance to go back to 'ok'
            serviceToChange.status = 'ok';
        }
        renderServices();
    }, 5000);


    // --- Live Log Ticker ---
    const logTickerEl = document.getElementById('log-ticker');
    const logMessages = [
        { level: 'info', msg: "Processing sensory input: auditory..." },
        { level: 'info', msg: "Spontaneous memory recall: childhood vacation." },
        { level: 'ok', msg: "Subconscious routine 'breathing' is nominal." },
        { level: 'warn', msg: "High caffeine level detected. Jitteriness may occur." },
        { level: 'info', msg: "New idea synthesized. Storing in short-term memory." },
        { level: 'crit', msg: "Error: 'What was I saying?' - Stack overflow." },
        { level: 'info', msg: "Dream sequence initiated." },
        { level: 'special', msg: "Core identity accessed... (click for details)" }
    ];

    function addLogMessage() {
        const log = logMessages[Math.floor(Math.random() * logMessages.length)];
        const p = document.createElement('p');
        const time = new Date().toLocaleTimeString();
        p.innerHTML = `<span class="log-time">[${time}]</span> <span class="log-${log.level}">[${log.level.toUpperCase()}] ${log.msg}</span>`;
        
        if (log.level === 'special') {
            p.classList.add('log-special');
            p.addEventListener('click', () => openModal());
        }

        logTickerEl.appendChild(p);
        logTickerEl.scrollTop = logTickerEl.scrollHeight;

        // Limit number of log entries
        if (logTickerEl.children.length > 100) {
            logTickerEl.removeChild(logTickerEl.firstChild);
        }
    }
    setInterval(addLogMessage, 2500);
    for(let i=0; i<10; i++) addLogMessage(); // Pre-fill some logs


    // --- Modal Logic ---
    const modal = document.getElementById('contact-modal');
    const closeModalBtn = document.querySelector('.modal-close');

    function openModal() {
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});
