let bgCanvas = null;
let bgRAF = null;
let bgTimer = null;
let bgCurrent = null;
let bgResizeHandler = null;

function initBackground(model, settings) {
    stopBackground();
    const container = document.getElementById('particles');
    bgCurrent = model;

    if (model === '1') {
        container.style.display = 'block';
        container.innerHTML = '';
        initParticles();
        return;
    }

    container.style.display = 'none';

    bgCanvas = document.createElement('canvas');
    bgCanvas.id = 'bgCanvas';
    Object.assign(bgCanvas.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
        zIndex: '0', pointerEvents: 'none', display: 'block'
    });
    document.body.prepend(bgCanvas);

    const ctx = bgCanvas.getContext('2d');
    const resize = () => { bgCanvas.width = window.innerWidth; bgCanvas.height = window.innerHeight; };
    resize();
    bgResizeHandler = resize;
    window.addEventListener('resize', resize);

    const models = {
        '2': startModel2, '3': startModel3,
        '4': startModel4, '5': startModel5, '6': startModel6
    };
    if (models[model]) models[model](ctx, { settings });
}

function stopBackground() {
    if (bgRAF) { cancelAnimationFrame(bgRAF); bgRAF = null; }
    if (bgTimer) { clearInterval(bgTimer); bgTimer = null; }
    if (bgResizeHandler) { window.removeEventListener('resize', bgResizeHandler); bgResizeHandler = null; }
    if (bgCanvas) { bgCanvas.remove(); bgCanvas = null; }
    bgCurrent = null;
}

function startAutoSwitch(settings) {
    if (bgTimer) clearInterval(bgTimer);
    bgTimer = setInterval(() => {
        const num = Math.floor(Math.random() * 6) + 1;
        initBackground(String(num), settings);
    }, 300000);
}

// -- Model 2: Grafo de Dados --
function startModel2(ctx, env) {
    const NODE_COUNT = 35, EDGE_DIST = 180;
    function W() { return ctx.canvas.width; }
    function H() { return ctx.canvas.height; }
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
            x: Math.random() * W(), y: Math.random() * H(),
            vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 3 + 2, phase: Math.random() * Math.PI * 2
        });
    }
    function draw() {
        ctx.clearRect(0, 0, W(), H());
        for (const n of nodes) {
            n.x += n.vx; n.y += n.vy;
            if (n.x < 0 || n.x > W()) n.vx *= -1;
            if (n.y < 0 || n.y > H()) n.vy *= -1;
        }
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < EDGE_DIST) {
                    const alpha = (1 - dist / EDGE_DIST) * 0.4;
                    ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(108, 92, 231, ${alpha})`; ctx.lineWidth = 1; ctx.stroke();
                }
            }
        }
        const now = Date.now() / 1000;
        for (const n of nodes) {
            const pulse = Math.sin(now * 2 + n.phase) * 0.3 + 0.7, r = n.r * pulse;
            const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
            grad.addColorStop(0, `rgba(108, 92, 231, ${0.3 * pulse})`);
            grad.addColorStop(1, 'rgba(108, 92, 231, 0)');
            ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = `rgba(162, 155, 254, ${pulse})`;
            ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill();
        }
        bgRAF = requestAnimationFrame(draw);
    }
    draw();
}

// -- Model 3: Data Stream --
function startModel3(ctx, env) {
    const chars = '0123456789ABCDEF{}[]<>|/\\&%$#@!?+=-><:;~';
    const fontSize = 14;
    function W() { return ctx.canvas.width; }
    function H() { return ctx.canvas.height; }
    const cols = Math.floor(W() / fontSize);
    const drops = [];
    for (let i = 0; i < cols; i++) drops[i] = Math.floor(Math.random() * -H() / fontSize);
    const speedMul = (env.settings?.model3Speed || 8) / 5;

    function draw() {
        ctx.clearRect(0, 0, W(), H());
        ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
            const x = i * fontSize, y = drops[i] * fontSize;
            for (let t = 0; t < 3; t++) {
                const ty = y - t * fontSize;
                if (ty < 0) continue;
                const char = chars[Math.floor(Math.random() * chars.length)];
                const alpha = t === 0 ? 0.9 : (1 - t / 3) * 0.4;
                ctx.fillStyle = t === 0 ? `rgba(162, 155, 254, ${alpha})` : `rgba(108, 92, 231, ${alpha})`;
                ctx.fillText(char, x, ty);
            }
            if (y > H() + 3 * fontSize && Math.random() > 0.975) drops[i] = 0;
            drops[i] += (0.02 + Math.random() * 0.04) * speedMul;
        }
        bgRAF = requestAnimationFrame(draw);
    }
    draw();
}

// -- Model 4: Grade 3D --
function startModel4(ctx, env) {
    const ROWS = 18, COLS = 18, OFFSET_Y = 80;
    function W() { return ctx.canvas.width; }
    function H() { return ctx.canvas.height; }
    const s = env.settings || {};
    const spacing = s.model4Zoom || 45;
    const tilt = (s.model4Tilt || 40) / 100;
    const cy = H() * ((s.model4Altura || 65) / 100);
    const offsetX = s.model4Lr || -100;

    const points = [];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            points.push({
                x: (c - COLS / 2) * spacing + offsetX,
                z: (r - ROWS / 2) * spacing + OFFSET_Y,
                r, c
            });
        }
    }
    const dataDots = [];
    for (let i = 0; i < 30; i++) {
        dataDots.push({
            r: Math.floor(Math.random() * (ROWS - 1)),
            c: Math.floor(Math.random() * (COLS - 1)),
            speed: 0.2 + Math.random() * 0.3,
            progress: Math.random(), phase: Math.random() * Math.PI * 2
        });
    }
    const cx = W() / 2;

    function project(x, z, time) {
        const scale = 600 / (600 + z);
        return {
            x: cx + x * scale + Math.sin(time * 0.1) * 10,
            y: cy + z * tilt * scale,
            scale
        };
    }

    function draw() {
        ctx.clearRect(0, 0, W(), H());
        const time = Date.now() / 1000;

        for (let r = 0; r < ROWS; r++) {
            ctx.beginPath();
            let started = false;
            for (let c = 0; c < COLS; c++) {
                const p = points[r * COLS + c];
                const pr = project(p.x, p.z, time);
                if (pr.scale < 0.1) continue;
                if (!started) { ctx.moveTo(pr.x, pr.y); started = true; }
                else ctx.lineTo(pr.x, pr.y);
            }
            if (started) { ctx.strokeStyle = 'rgba(108, 92, 231, 0.12)'; ctx.lineWidth = 0.8; ctx.stroke(); }
        }
        for (let c = 0; c < COLS; c++) {
            ctx.beginPath();
            let started = false;
            for (let r = 0; r < ROWS; r++) {
                const p = points[r * COLS + c];
                const pr = project(p.x, p.z, time);
                if (pr.scale < 0.1) continue;
                if (!started) { ctx.moveTo(pr.x, pr.y); started = true; }
                else ctx.lineTo(pr.x, pr.y);
            }
            if (started) { ctx.strokeStyle = 'rgba(162, 155, 254, 0.1)'; ctx.lineWidth = 0.6; ctx.stroke(); }
        }
        for (const d of dataDots) {
            d.progress += d.speed * 0.01;
            if (d.progress > 1) { d.progress = 0; d.r = Math.floor(Math.random() * (ROWS - 1)); d.c = Math.floor(Math.random() * (COLS - 1)); }
            const from = points[d.r * COLS + d.c], to = points[(d.r + 1) * COLS + d.c + 1];
            if (!from || !to) continue;
            const t = d.progress;
            const x = from.x + (to.x - from.x) * t, z = from.z + (to.z - from.z) * t;
            const pr = project(x, z, time);
            if (pr.scale > 0.1) {
                const pulse = Math.sin(time * 3 + d.phase) * 0.3 + 0.7, alpha = pr.scale * 0.6;
                const grad = ctx.createRadialGradient(pr.x, pr.y, 0, pr.x, pr.y, 8 * pr.scale);
                grad.addColorStop(0, `rgba(0, 206, 201, ${alpha * 0.5})`); grad.addColorStop(1, 'rgba(0, 206, 201, 0)');
                ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(pr.x, pr.y, 8 * pr.scale, 0, Math.PI * 2); ctx.fill();
                ctx.fillStyle = `rgba(0, 206, 201, ${alpha * pulse})`;
                ctx.beginPath(); ctx.arc(pr.x, pr.y, 3 * pr.scale * pulse, 0, Math.PI * 2); ctx.fill();
            }
        }
        bgRAF = requestAnimationFrame(draw);
    }
    draw();
}

// -- Model 5: Ondas de Dados --
function startModel5(ctx, env) {
    const WAVES = 5, PARTICLES_PER_WAVE = 30;
    function W() { return ctx.canvas.width; }
    function H() { return ctx.canvas.height; }
    const particles = [];
    for (let w = 0; w < WAVES; w++) {
        const yBase = (H() / (WAVES + 1)) * (w + 1);
        const amp = 20 + Math.random() * 50, freq = 0.008 + Math.random() * 0.015;
        const speed = 0.5 + Math.random() * 0.8, phase = Math.random() * Math.PI * 2;
        const colors = ['108,92,231', '162,155,254', '0,206,201', '253,121,168', '255,234,167'];
        const color = colors[w % colors.length];
        for (let p = 0; p < PARTICLES_PER_WAVE; p++) {
            particles.push({
                x: Math.random() * W(), yBase, amp, freq, speed,
                phase: phase + Math.random() * 0.5, color,
                size: 1 + Math.random() * 2.5
            });
        }
    }
    const colors2 = ['108,92,231', '162,155,254', '0,206,201', '253,121,168', '255,234,167'];

    function draw() {
        ctx.clearRect(0, 0, W(), H());
        const now = Date.now() / 1000;

        for (let w = 0; w < WAVES; w++) {
            const yBase = (H() / (WAVES + 1)) * (w + 1);
            const amp = 20 + w * 10, freq = 0.008 + w * 0.002, speed = 0.5 + w * 0.1, phase = w * 1.5;
            const color = colors2[w % colors2.length];
            ctx.beginPath();
            for (let x = 0; x <= W(); x += 2) {
                const y = yBase + Math.sin(x * freq + now * speed + phase) * amp;
                x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.strokeStyle = `rgba(${color}, 0.12)`; ctx.lineWidth = 1.5; ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, H());
            for (let x = 0; x <= W(); x += 2) {
                const y = yBase + Math.sin(x * freq + now * speed + phase) * amp;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(W(), H()); ctx.closePath();
            ctx.fillStyle = `rgba(${color}, 0.03)`; ctx.fill();
        }
        for (const p of particles) {
            p.x += 0.3 + p.speed * 0.5;
            if (p.x > W() + 20) p.x = -20;
            const y = p.yBase + Math.sin(p.x * p.freq + now * p.speed + p.phase) * p.amp;
            const pulse = Math.sin(now * 3 + p.x * 0.01) * 0.3 + 0.7, alpha = 0.2 + pulse * 0.5;
            const grad = ctx.createRadialGradient(p.x, y, 0, p.x, y, p.size * 6);
            grad.addColorStop(0, `rgba(${p.color}, ${alpha * 0.3})`); grad.addColorStop(1, `rgba(${p.color}, 0)`);
            ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(p.x, y, p.size * 6, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
            ctx.beginPath(); ctx.arc(p.x, y, p.size * pulse, 0, Math.PI * 2); ctx.fill();
        }
        bgRAF = requestAnimationFrame(draw);
    }
    draw();
}

// -- Model 6: Terminal de Dados --
function startModel6(ctx, env) {
    function H() { return ctx.canvas.height; }
    const commands = [
        { cmd: 'SELECT * FROM pipelines WHERE status = "running"', type: 'query' },
        { cmd: 'EXTRACT data FROM source_s3://landing-zone/', type: 'extract' },
        { cmd: 'TRANSFORM raw.orders -> dim.customers', type: 'transform' },
        { cmd: 'LOAD INTO dw.fact_sales PARTITION (year, month)', type: 'load' },
        { cmd: 'OPTIMIZE delta_table ZORDER BY (order_id)', type: 'opt' },
        { cmd: 'VACUUM delta_table RETAIN 168 HOURS', type: 'maintenance' },
        { cmd: 'ANALYZE TABLE fact_table COMPUTE STATISTICS', type: 'analyze' },
        { cmd: 'MERGE INTO target USING source ON key WHEN MATCHED THEN UPDATE', type: 'merge' },
        { cmd: 'CHECKPOINT streaming_query "realtime_sensors"', type: 'checkpoint' },
        { cmd: 'CACHE TABLE aggregated_metrics', type: 'cache' },
        { cmd: 'DESCRIBE HISTORY bronze.customers', type: 'history' },
        { cmd: '> Pipeline "etl_orders" completed (12m34s)', type: 'success' },
        { cmd: '> Streaming job "kafka_ingest" is RUNNING', type: 'info' },
        { cmd: '> Warning: backpressure detected on stream_03', type: 'warn' },
        { cmd: '> Schema evolution detected: adding column "event_ts"', type: 'info' },
        { cmd: '> Dataset "analytics.dashboard" refreshed', type: 'success' },
        { cmd: '> Running: dbt run --models +sales_mart', type: 'process' },
        { cmd: '> Airflow DAG: data_pipeline_3h #8741', type: 'process' },
        { cmd: '> Spark job: aggregate_metrics (stage 4/12)', type: 'process' },
        { cmd: '> Kafka offset: topic.sensors [partition 3: 89241]', type: 'info' },
        { cmd: '  |-> records/sec: 1,247 | lag: 312', type: 'data' },
        { cmd: '  |-> throughput: 2.4 MB/s | avg: 1.9 KB/rec', type: 'data' },
        { cmd: '  \u2514\u2500\u2500\u2500 execution time: 45.2s (42.1s avg)', type: 'data' },
        { cmd: '  \u2514\u2500\u2500\u2500 rows affected: 1,847,392', type: 'data' },
        { cmd: '# data_quality check: PASS (null_ratio: 0.02%)', type: 'quality' },
        { cmd: '# data_quality check: PASS (unique_constraint)', type: 'quality' },
        { cmd: '# data_quality check: WARN (freshness: 27min ago)', type: 'quality' },
        { cmd: '! ERROR: connection timeout to metastore (retry 2/3)', type: 'error' },
        { cmd: '! ERROR: disk quota exceeded on /data/staging', type: 'error' },
        { cmd: '  \u2514\u2500\u2500\u2500 retrying in 5s...', type: 'error' },
        { cmd: '  \u2514\u2500\u2500\u2500 retry 3/3 successful', type: 'success' },
    ];
    const FONT_SIZE = 13, LINE_HEIGHT = FONT_SIZE + 4;
    const MAX_VISIBLE = Math.floor(H() / LINE_HEIGHT) + 2;
    const queue = [];
    for (let i = 0; i < MAX_VISIBLE + 20; i++) queue.push(commands[Math.floor(Math.random() * commands.length)]);

    function getColor(type) {
        const map = {
            query: '108,92,231', extract: '0,206,201', transform: '162,155,254',
            load: '253,121,168', opt: '255,234,167', maintenance: '255,234,167',
            analyze: '162,155,254', merge: '108,92,231', checkpoint: '0,206,201',
            cache: '162,155,254', history: '108,92,231', success: '0,200,83',
            info: '100,180,255', warn: '255,200,0', process: '162,155,254',
            data: '128,128,128', quality: '0,206,201', error: '255,80,80'
        };
        return map[type] || '200,200,200';
    }

    function draw() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.font = FONT_SIZE + 'px Courier New, monospace';
        if (Math.random() < 0.08) {
            queue.push(commands[Math.floor(Math.random() * commands.length)]);
            if (queue.length > MAX_VISIBLE + 50) queue.splice(0, queue.length - MAX_VISIBLE - 20);
        }
        const startIdx = Math.max(0, queue.length - MAX_VISIBLE);
        const visible = queue.slice(startIdx, startIdx + MAX_VISIBLE);
        for (let i = 0; i < visible.length; i++) {
            const entry = visible[i], y = i * LINE_HEIGHT + LINE_HEIGHT;
            const ageFade = Math.min(1, (visible.length - i) / (visible.length * 0.3));
            const alpha = Math.max(0.03, 0.4 * ageFade);
            ctx.fillStyle = `rgba(${getColor(entry.type)}, ${alpha})`;
            ctx.fillText(entry.cmd, 20, y);
        }
        bgRAF = requestAnimationFrame(draw);
    }
    draw();
}
