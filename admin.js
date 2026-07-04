const ICONS = {
    whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    globe: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
};

let isRegisterMode = false;

function openLogin() {
    document.getElementById('loginModal').classList.add('active');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginError').style.display = 'none';
    document.getElementById('loginSuccess').style.display = 'none';
    isRegisterMode = false;
    document.getElementById('loginSubmitBtn').textContent = 'Entrar';
    document.getElementById('loginToggle').textContent = 'Criar nova conta';
    setTimeout(() => document.getElementById('loginEmail').focus(), 100);
}

document.getElementById('loginPassword').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitLogin();
});
document.getElementById('loginEmail').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitLogin();
});
document.getElementById('loginModal').addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLogin();
});

function closeLogin() {
    document.getElementById('loginModal').classList.remove('active');
}

function toggleLoginMode(e) {
    e.preventDefault();
    isRegisterMode = !isRegisterMode;
    const btn = document.getElementById('loginSubmitBtn');
    const toggle = document.getElementById('loginToggle');
    const err = document.getElementById('loginError');
    const suc = document.getElementById('loginSuccess');
    err.style.display = 'none';
    suc.style.display = 'none';
    if (isRegisterMode) {
        btn.textContent = 'Registrar';
        toggle.textContent = 'Já tenho conta, fazer login';
    } else {
        btn.textContent = 'Entrar';
        toggle.textContent = 'Criar nova conta';
    }
}

async function submitLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errEl = document.getElementById('loginError');
    const sucEl = document.getElementById('loginSuccess');
    errEl.style.display = 'none';
    sucEl.style.display = 'none';

    if (!email || !password) {
        errEl.textContent = 'Preencha email e senha';
        errEl.style.display = 'block';
        return;
    }

    const allowed = ['sousaportoflaviano@gmail.com', 'sousaportoflaviano@hotmail.com'];
    if (!allowed.includes(email.toLowerCase())) {
        errEl.textContent = 'Esse usuário não tem autorização para o login';
        errEl.style.display = 'block';
        return;
    }

    if (isRegisterMode) {
        const { data, error } = await supabaseClient.auth.signUp({ email, password });
        if (error) {
            errEl.textContent = error.message;
            errEl.style.display = 'block';
            return;
        }
        sucEl.textContent = 'Conta criada! Verifique seu email para confirmar.';
        sucEl.style.display = 'block';
        isRegisterMode = false;
        document.getElementById('loginSubmitBtn').textContent = 'Entrar';
        document.getElementById('loginToggle').textContent = 'Criar nova conta';
    } else {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) {
            errEl.textContent = error.message;
            errEl.style.display = 'block';
            return;
        }
        closeLogin();
        openAdmin();
    }
}

function openAdmin() {
    document.getElementById('adminModal').classList.add('active');
    renderAdmin();
}

function closeAdmin() {
    document.getElementById('adminModal').classList.remove('active');
    renderPortfolio();
}

const TAB_RENDERERS = {};

function renderAdmin() {
    const tabs = [
        { id: 'personal', label: 'Dados Pessoais' },
        { id: 'objective', label: 'Objetivo' },
        { id: 'education', label: 'Formação' },
        { id: 'experience', label: 'Experiência' },
        { id: 'skills', label: 'Qualificações' },
        { id: 'habilities', label: 'Habilidades' },
        { id: 'contacts', label: 'Contatos' },
        { id: 'typing', label: 'Frases Digitadas' },
        { id: 'background', label: 'Fundo' },
        { id: 'password', label: 'Senha' }
    ];
    const tabNav = document.getElementById('adminTabs');
    tabNav.innerHTML = tabs.map(t =>
        `<button class="admin-tab" data-tab="${t.id}">${t.label}</button>`
    ).join('');

    const first = tabNav.querySelector('.admin-tab');
    if (first) first.classList.add('active');

    tabNav.addEventListener('click', e => {
        const btn = e.target.closest('.admin-tab');
        if (!btn) return;
        tabNav.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderAdminTab(btn.dataset.tab);
    });

    renderAdminTab('personal');
}

function renderAdminTab(tabId) {
    const data = loadData();
    const container = document.getElementById('adminContent');
    if (TAB_RENDERERS[tabId]) {
        TAB_RENDERERS[tabId](data, container);
    }
}

TAB_RENDERERS.personal = (data, container) => {
    const p = data.personal;
    container.innerHTML = `
        <div class="admin-field">
            <label>Nome</label>
            <input class="modal-input" id="af_name" value="${esc(p.name)}">
        </div>
        <div class="admin-field">
            <label>Idade</label>
            <input class="modal-input" id="af_age" value="${esc(p.age)}">
        </div>
        <div class="admin-field">
            <label>Endereço</label>
            <input class="modal-input" id="af_address" value="${esc(p.address)}">
        </div>
        <div class="admin-field">
            <label>Telefone (exibido)</label>
            <input class="modal-input" id="af_phone" value="${esc(p.phone)}">
        </div>
        <div class="admin-field">
            <label>E-mail</label>
            <input class="modal-input" id="af_email" value="${esc(p.email)}">
        </div>
        <div class="admin-field">
            <label>Usuário GitHub</label>
            <input class="modal-input" id="af_github" value="${esc(p.github)}">
        </div>
        <button class="modal-btn modal-btn-primary" onclick="savePersonal()">Salvar</button>
    `;
};

TAB_RENDERERS.objective = (data, container) => {
    container.innerHTML = `
        <div class="admin-field">
            <label>Objetivo</label>
            <textarea class="modal-input modal-textarea" id="af_objective" rows="3">${esc(data.objective)}</textarea>
        </div>
        <button class="modal-btn modal-btn-primary" onclick="saveObjective()">Salvar</button>
    `;
};

TAB_RENDERERS.education = (data, container) => {
    let html = `<div style="margin-bottom:1rem"><button class="modal-btn modal-btn-primary" onclick="addEducation()">+ Adicionar Formação</button></div>`;
    data.education.forEach((item, i) => {
        html += `
            <div class="admin-list-item">
                <div class="admin-list-fields">
                    <input class="modal-input admin-list-input" id="edu_year_${i}" value="${esc(item.year)}" placeholder="Ano">
                    <input class="modal-input admin-list-input" id="edu_degree_${i}" value="${esc(item.degree)}" placeholder="Curso">
                    <input class="modal-input admin-list-input" id="edu_inst_${i}" value="${esc(item.institution)}" placeholder="Instituição">
                </div>
                <button class="modal-btn modal-btn-danger" onclick="removeEducation(${i})">Remover</button>
            </div>`;
    });
    html += `<button class="modal-btn modal-btn-primary" onclick="saveEducation()" style="margin-top:0.5rem">Salvar Alterações</button>`;
    container.innerHTML = html;
};

TAB_RENDERERS.experience = (data, container) => {
    let html = `<div style="margin-bottom:1rem"><button class="modal-btn modal-btn-primary" onclick="addExperience()">+ Adicionar Experiência</button></div>`;
    data.experience.forEach((item, i) => {
        html += `
            <div class="admin-list-item">
                <div class="admin-list-fields">
                    <input class="modal-input admin-list-input" id="exp_role_${i}" value="${esc(item.role)}" placeholder="Cargo">
                    <input class="modal-input admin-list-input" id="exp_company_${i}" value="${esc(item.company)}" placeholder="Empresa">
                    <input class="modal-input admin-list-input" id="exp_period_${i}" value="${esc(item.period)}" placeholder="Período">
                    <textarea class="modal-input admin-list-input modal-textarea" id="exp_desc_${i}" rows="2" placeholder="Descrição">${esc(item.description)}</textarea>
                </div>
                <button class="modal-btn modal-btn-danger" onclick="removeExperience(${i})">Remover</button>
            </div>`;
    });
    html += `<button class="modal-btn modal-btn-primary" onclick="saveExperience()" style="margin-top:0.5rem">Salvar Alterações</button>`;
    container.innerHTML = html;
};

TAB_RENDERERS.skills = (data, container) => {
    let html = `<div style="margin-bottom:1rem"><button class="modal-btn modal-btn-primary" onclick="addSkill()">+ Adicionar Qualificação</button></div>`;
    data.skills.forEach((item, i) => {
        html += `
            <div class="admin-list-item">
                <div class="admin-list-fields">
                    <input class="modal-input admin-list-input" id="sk_year_${i}" value="${esc(item.year)}" placeholder="Ano">
                    <input class="modal-input admin-list-input" id="sk_name_${i}" value="${esc(item.name)}" placeholder="Nome">
                    <input class="modal-input admin-list-input" id="sk_source_${i}" value="${esc(item.source)}" placeholder="Fonte">
                </div>
                <button class="modal-btn modal-btn-danger" onclick="removeSkill(${i})">Remover</button>
            </div>`;
    });
    html += `<button class="modal-btn modal-btn-primary" onclick="saveSkills()" style="margin-top:0.5rem">Salvar Alterações</button>`;
    container.innerHTML = html;
};

const ICON_OPTIONS = [
    'python','powerbi','microsoftfabric','microsoftexcel','microsoft',
    'postgresql','mysql','mongodb','sqlite','redis','amazondynamodb',
    'javascript','typescript','java','csharp','cplusplus','go','rust','kotlin','php',
    'html5','css3','tailwindcss',
    'nodedotjs','react','nextdotjs','angular','vuedotjs','flutter',
    'git','github','gitlab',
    'docker','kubernetes','linux',
    'amazonaws','microsoftazure','googlecloud','terraform',
    'pandas','numpy','pytorch','tensorflow',
    'apachespark','apacheairflow','dbt',
    'tableau','graphql','openai',
    'wireshark','burpsuite','grafana','prometheus',
    'nginx','apache','dotnet','bootstrap','sass','eslint','prettier',
    'jest','cypress','webpack','vite','babel','figma','notion','jira','confluence',
    'ubuntu','debian','centos','alpinelinux','nginx','apache','tomcat',
    'jenkins','ansible','vagrant','packer','consul','vault','elasticsearch',
    'kibana','logstash','rabbitmq','kafka','celery','fastapi','flask','django',
    'spring','hibernate','swagger','postman','insomnia','yarn','npm','pnpm',
    'instagram','facebook','twitter','linkedin','whatsapp','discord','slack','telegram',
    'raspberrypi','arduino','unity','unrealengine','blender',
    'oracle','sqlserver','mariaodb','firebase','supabase',
    'fabric','fabriccolor',
];

const LOCAL_ICONS_HAB = ['fabric','fabriccolor','microsoftfabric'];
function iconUrlHab(slug) {
    return LOCAL_ICONS_HAB.includes(slug)
        ? '/' + slug + '.svg'
        : 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/' + slug + '.svg';
}

TAB_RENDERERS.habilities = (data, container) => {
    const habs = data.habilities || [];
    let html = `<div style="margin-bottom:1rem"><button class="modal-btn modal-btn-primary" onclick="addHability()">+ Adicionar Habilidade</button></div>
    <datalist id="iconList">${ICON_OPTIONS.map(s => `<option value="${s}">${s}</option>`).join('')}</datalist>`;
    habs.forEach((item, i) => {
        html += `
            <div class="admin-list-item">
                <div class="admin-list-fields">
                    <input class="modal-input admin-list-input" id="hab_name_${i}" value="${esc(item.name)}" placeholder="Nome">
                    <div style="display:flex;gap:0.4rem;align-items:center">
                        <input class="modal-input admin-list-input" id="hab_icon_${i}" value="${esc(item.icon || '')}" placeholder="Icone" list="iconList" style="flex:1">
                        <div id="hab_preview_${i}" style="${item.icon ? 'width:20px;height:20px;flex-shrink:0;background:#6c5ce7;mask-size:contain;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;mask-image:url(' + iconUrlHab(escAttr(item.icon)) + ');-webkit-mask-image:url(' + iconUrlHab(escAttr(item.icon)) + ')' : 'display:none'}"></div>
                        <input class="modal-input admin-list-input" id="hab_level_${i}" value="${item.level || 0}" placeholder="Nível" type="number" min="0" max="100" style="width:70px">
                    </div>
                </div>
                <button class="modal-btn modal-btn-danger" onclick="removeHability(${i})">Remover</button>
            </div>`;
    });
    html += `<button class="modal-btn modal-btn-primary" onclick="saveHabilities()" style="margin-top:0.5rem">Salvar Alterações</button>`;
    container.innerHTML = html;
    habs.forEach((_, i) => {
        const input = document.getElementById(`hab_icon_${i}`);
        const preview = document.getElementById(`hab_preview_${i}`);
        if (input && preview) {
            input.addEventListener('input', () => {
                const slug = input.value.trim();
                if (slug) {
                    const url = "url(" + iconUrlHab(slug) + ")";
                    preview.style.maskImage = url;
                    preview.style.webkitMaskImage = url;
                    preview.style.display = '';
                } else {
                    preview.style.display = 'none';
                }
            });
        }
    });
};

TAB_RENDERERS.contacts = (data, container) => {
    let html = `<div style="margin-bottom:1rem"><button class="modal-btn modal-btn-primary" onclick="addContact()">+ Adicionar Contato</button></div>`;
    data.contacts.forEach((item, i) => {
        html += `
            <div class="admin-list-item">
                <div class="admin-list-fields">
                    <select class="modal-input admin-list-input" id="cont_icon_${i}">
                        ${['whatsapp','email','github','linkedin','globe'].map(ic =>
                            `<option value="${ic}" ${item.icon === ic ? 'selected' : ''}>${ic}</option>`
                        ).join('')}
                    </select>
                    <input class="modal-input admin-list-input" id="cont_label_${i}" value="${esc(item.label)}" placeholder="Texto">
                    <input class="modal-input admin-list-input" id="cont_url_${i}" value="${esc(item.url)}" placeholder="URL">
                </div>
                <button class="modal-btn modal-btn-danger" onclick="removeContact(${i})">Remover</button>
            </div>`;
    });
    html += `<button class="modal-btn modal-btn-primary" onclick="saveContacts()" style="margin-top:0.5rem">Salvar Alterações</button>`;
    container.innerHTML = html;
};

TAB_RENDERERS.typing = (data, container) => {
    let html = `<div style="margin-bottom:1rem"><button class="modal-btn modal-btn-primary" onclick="addTypingPhrase()">+ Adicionar Frase</button></div>`;
    data.typedPhrases.forEach((phrase, i) => {
        html += `
            <div class="admin-list-item">
                <input class="modal-input" id="tp_${i}" value="${esc(phrase)}" placeholder="Frase" style="flex:1">
                <button class="modal-btn modal-btn-danger" onclick="removeTypingPhrase(${i})">Remover</button>
            </div>`;
    });
    html += `<button class="modal-btn modal-btn-primary" onclick="saveTypingPhrases()" style="margin-top:0.5rem">Salvar Alterações</button>`;
    container.innerHTML = html;
};

TAB_RENDERERS.background = (data, container) => {
    const s = data.backgroundSettings || {};
    const model = data.backgroundModel || 'random';
    const models = ['1','2','3','4','5','6','random'];
    container.innerHTML = `
        <div class="admin-field">
            <label>Modelo de Fundo</label>
            <select class="modal-input" id="bg_model" style="width:100%">
                ${models.map(m =>
                    `<option value="${m}" ${model === m ? 'selected' : ''}>${m === 'random' ? 'Aleatório' : 'Modelo ' + m}</option>`
                ).join('')}
            </select>
        </div>
        <div id="bgSettings" style="margin-top:1rem">
            <div class="bg-setting" data-for="3" style="display:${model === '3' || model === 'random' ? 'block' : 'none'}">
                <div class="admin-field">
                    <label>Velocidade (Modelo 3)</label>
                    <input class="modal-input" type="range" id="bg_m3speed" min="1" max="30" value="${s.model3Speed || 8}" style="width:100%;accent-color:#6c5ce7">
                    <span style="font-size:0.8rem;color:var(--text-secondary)" id="bg_m3speed_val">${s.model3Speed || 8}</span>
                </div>
            </div>
            <div class="bg-setting" data-for="4" style="display:${model === '4' || model === 'random' ? 'block' : 'none'}">
                <div class="admin-field">
                    <label>Altura (Modelo 4)</label>
                    <input class="modal-input" type="range" id="bg_m4altura" min="30" max="90" value="${s.model4Altura || 65}" style="width:100%;accent-color:#6c5ce7">
                </div>
                <div class="admin-field">
                    <label>Inclinação (Modelo 4)</label>
                    <input class="modal-input" type="range" id="bg_m4tilt" min="10" max="80" value="${s.model4Tilt || 40}" style="width:100%;accent-color:#6c5ce7">
                </div>
                <div class="admin-field">
                    <label>Zoom (Modelo 4)</label>
                    <input class="modal-input" type="range" id="bg_m4zoom" min="25" max="80" value="${s.model4Zoom || 45}" style="width:100%;accent-color:#6c5ce7">
                </div>
                <div class="admin-field">
                    <label>L/R (Modelo 4)</label>
                    <input class="modal-input" type="range" id="bg_m4lr" min="-200" max="200" value="${s.model4Lr || -100}" style="width:100%;accent-color:#6c5ce7">
                </div>
            </div>
        </div>
        <button class="modal-btn modal-btn-primary" onclick="saveBackground()" style="margin-top:1rem">Salvar</button>
    `;
    const modelSelect = document.getElementById('bg_model');
    modelSelect.addEventListener('change', () => {
        document.querySelectorAll('.bg-setting').forEach(el => el.style.display = 'none');
        const v = modelSelect.value;
        if (v === '3' || v === 'random') document.querySelector('[data-for="3"]').style.display = 'block';
        if (v === '4' || v === 'random') document.querySelector('[data-for="4"]').style.display = 'block';
    });
    const speedInp = document.getElementById('bg_m3speed');
    if (speedInp) speedInp.addEventListener('input', () => {
        document.getElementById('bg_m3speed_val').textContent = speedInp.value;
    });
};

TAB_RENDERERS.password = (data, container) => {
    container.innerHTML = `
        <div class="admin-field">
            <label>Nova Senha</label>
            <input class="modal-input" type="password" id="af_password" placeholder="Nova senha" autocomplete="new-password">
        </div>
        <div class="admin-field">
            <label>Confirmar Senha</label>
            <input class="modal-input" type="password" id="af_password2" placeholder="Confirmar senha" autocomplete="new-password">
        </div>
        <p id="pwdError" style="color:#e74c3c;font-size:0.85rem;display:none;"></p>
        <p id="pwdSuccess" style="color:#2ecc71;font-size:0.85rem;display:none;"></p>
        <button class="modal-btn modal-btn-primary" onclick="savePasswordAdmin()">Alterar Senha</button>
    `;
};

function esc(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}
function escAttr(s) {
    return s.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function savePersonal() {
    const data = loadData();
    data.personal.name = document.getElementById('af_name').value;
    data.personal.age = document.getElementById('af_age').value;
    data.personal.address = document.getElementById('af_address').value;
    data.personal.phone = document.getElementById('af_phone').value;
    data.personal.email = document.getElementById('af_email').value;
    data.personal.github = document.getElementById('af_github').value;
    saveData(data);
    renderPortfolio();
}

function saveObjective() {
    const data = loadData();
    data.objective = document.getElementById('af_objective').value;
    saveData(data);
    renderPortfolio();
}

function addEducation() {
    const data = loadData();
    data.education.push({ year: '', degree: '', institution: '' });
    saveData(data);
    renderAdminTab('education');
}

function removeEducation(i) {
    const data = loadData();
    data.education.splice(i, 1);
    saveData(data);
    renderAdminTab('education');
    renderPortfolio();
}

function addExperience() {
    const data = loadData();
    data.experience.push({ role: '', company: '', period: '', description: '' });
    saveData(data);
    renderAdminTab('experience');
}

function removeExperience(i) {
    const data = loadData();
    data.experience.splice(i, 1);
    saveData(data);
    renderAdminTab('experience');
    renderPortfolio();
}

function addSkill() {
    const data = loadData();
    data.skills.push({ year: '', name: '', source: '' });
    saveData(data);
    renderAdminTab('skills');
}

function removeSkill(i) {
    const data = loadData();
    data.skills.splice(i, 1);
    saveData(data);
    renderAdminTab('skills');
    renderPortfolio();
}

function addContact() {
    const data = loadData();
    data.contacts.push({ id: 'c' + Date.now(), label: '', url: '', icon: 'globe' });
    saveData(data);
    renderAdminTab('contacts');
}

function removeContact(i) {
    const data = loadData();
    data.contacts.splice(i, 1);
    saveData(data);
    renderAdminTab('contacts');
    renderPortfolio();
}

function addTypingPhrase() {
    const data = loadData();
    data.typedPhrases.push('');
    saveData(data);
    renderAdminTab('typing');
}

function removeTypingPhrase(i) {
    const data = loadData();
    data.typedPhrases.splice(i, 1);
    saveData(data);
    renderAdminTab('typing');
    renderPortfolio();
    initTypingEffect();
}

function getListValues(prefix, fields) {
    const data = loadData();
    const list = data[prefix];
    if (!list) return;
    list.forEach((_, i) => {
        fields.forEach(f => {
            const el = document.getElementById(`${prefix}_${f}_${i}`);
            if (el) list[i][f] = el.value;
        });
    });
    saveData(data);
}

function saveEducation() {
    const data = loadData();
    data.education.forEach((_, i) => {
        const year = document.getElementById(`edu_year_${i}`);
        const degree = document.getElementById(`edu_degree_${i}`);
        const inst = document.getElementById(`edu_inst_${i}`);
        if (year) data.education[i].year = year.value;
        if (degree) data.education[i].degree = degree.value;
        if (inst) data.education[i].institution = inst.value;
    });
    saveData(data);
    renderPortfolio();
}

function saveExperience() {
    const data = loadData();
    data.experience.forEach((_, i) => {
        const role = document.getElementById(`exp_role_${i}`);
        const company = document.getElementById(`exp_company_${i}`);
        const period = document.getElementById(`exp_period_${i}`);
        const desc = document.getElementById(`exp_desc_${i}`);
        if (role) data.experience[i].role = role.value;
        if (company) data.experience[i].company = company.value;
        if (period) data.experience[i].period = period.value;
        if (desc) data.experience[i].description = desc.value;
    });
    saveData(data);
    renderPortfolio();
}

function saveSkills() {
    const data = loadData();
    data.skills.forEach((_, i) => {
        const year = document.getElementById(`sk_year_${i}`);
        const name = document.getElementById(`sk_name_${i}`);
        const source = document.getElementById(`sk_source_${i}`);
        if (year) data.skills[i].year = year.value;
        if (name) data.skills[i].name = name.value;
        if (source) data.skills[i].source = source.value;
    });
    saveData(data);
    renderPortfolio();
}

function addHability() {
    const data = loadData();
    if (!data.habilities) data.habilities = [];
    data.habilities.push({ name: '', level: 0, icon: '' });
    saveData(data);
    renderAdminTab('habilities');
}

function removeHability(i) {
    const data = loadData();
    if (!data.habilities) return;
    data.habilities.splice(i, 1);
    saveData(data);
    renderAdminTab('habilities');
    renderPortfolio();
}

function saveHabilities() {
    const data = loadData();
    if (!data.habilities) return;
    data.habilities.forEach((_, i) => {
        const name = document.getElementById(`hab_name_${i}`);
        const icon = document.getElementById(`hab_icon_${i}`);
        const level = document.getElementById(`hab_level_${i}`);
        if (name) data.habilities[i].name = name.value;
        if (icon) data.habilities[i].icon = icon.value.trim();
        if (level) data.habilities[i].level = Math.min(100, Math.max(0, parseInt(level.value) || 0));
    });
    saveData(data);
    renderPortfolio();
}

function saveContacts() {
    const data = loadData();
    data.contacts.forEach((_, i) => {
        const icon = document.getElementById(`cont_icon_${i}`);
        const label = document.getElementById(`cont_label_${i}`);
        const url = document.getElementById(`cont_url_${i}`);
        if (icon) data.contacts[i].icon = icon.value;
        if (label) data.contacts[i].label = label.value;
        if (url) data.contacts[i].url = url.value;
    });
    saveData(data);
    renderPortfolio();
}

function saveTypingPhrases() {
    const data = loadData();
    data.typedPhrases.forEach((_, i) => {
        const el = document.getElementById(`tp_${i}`);
        if (el) data.typedPhrases[i] = el.value;
    });
    saveData(data);
    renderPortfolio();
    initTypingEffect();
}

function saveBackground() {
    const data = loadData();
    data.backgroundModel = document.getElementById('bg_model').value;
    data.backgroundSettings = data.backgroundSettings || {};
    const s = data.backgroundSettings;
    const m3 = document.getElementById('bg_m3speed');
    if (m3) s.model3Speed = Number(m3.value);
    const m4a = document.getElementById('bg_m4altura');
    if (m4a) s.model4Altura = Number(m4a.value);
    const m4t = document.getElementById('bg_m4tilt');
    if (m4t) s.model4Tilt = Number(m4t.value);
    const m4z = document.getElementById('bg_m4zoom');
    if (m4z) s.model4Zoom = Number(m4z.value);
    const m4l = document.getElementById('bg_m4lr');
    if (m4l) s.model4Lr = Number(m4l.value);
    saveData(data);
    renderPortfolio();
}

async function savePasswordAdmin() {
    const p1 = document.getElementById('af_password').value;
    const p2 = document.getElementById('af_password2').value;
    const errEl = document.getElementById('pwdError');
    const sucEl = document.getElementById('pwdSuccess');
    errEl.style.display = 'none';
    sucEl.style.display = 'none';
    if (!p1) {
        errEl.textContent = 'Digite a nova senha';
        errEl.style.display = 'block';
        return;
    }
    if (p1 !== p2) {
        errEl.textContent = 'Senhas não conferem';
        errEl.style.display = 'block';
        return;
    }
    if (p1.length < 6) {
        errEl.textContent = 'Mínimo de 6 caracteres';
        errEl.style.display = 'block';
        return;
    }
    const { error } = await supabaseClient.auth.updateUser({ password: p1 });
    if (error) {
        errEl.textContent = error.message;
        errEl.style.display = 'block';
        return;
    }
    document.getElementById('af_password').value = '';
    document.getElementById('af_password2').value = '';
    sucEl.textContent = 'Senha alterada com sucesso!';
    sucEl.style.display = 'block';
}

function updateAuthStatus(session) {
}

async function logout() {
    await supabaseClient.auth.signOut();
    closeAdmin();
    renderPortfolio();
}

document.addEventListener('DOMContentLoaded', () => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
            loadData();
            renderPortfolio();
        }
    });
});

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.altKey && e.metaKey && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        const btn = document.getElementById('loginSubmitBtn');
        if (btn && btn.textContent === 'Entrar') {
            openLogin();
        }
    }
});
