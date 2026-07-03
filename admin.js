const ICONS = {
    whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    globe: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    python: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><defs><linearGradient id="py" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="py2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs><path d="M15.885 0c-3.47 0-6.49.79-8.22 2.65-1.04 1.12-1.53 2.72-1.53 4.89v3.58h9.82v1.2H4.16c-2.14 0-4.01 1.26-4.59 3.68-.67 2.77-.7 4.5 0 7.38.52 2.15 1.78 3.68 3.92 3.68h2.54v-3.96c0-2.5 2.15-4.7 4.59-4.7h9.23c2.05 0 3.57-1.58 3.57-3.57V7.54c0-1.9-1.59-3.34-3.57-3.68C21.35.56 18.43 0 15.885 0zM11.185 4.5a1.2 1.2 0 0 1 1.2 1.2c0 .66-.54 1.2-1.2 1.2a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2z" fill="url(#py)"/><path d="M26.295 8.78v3.76c0 2.6-2.2 4.85-4.6 4.85h-9.23c-2 0-3.57 1.66-3.57 3.57v6.7c0 1.9 1.68 3.02 3.57 3.57 2.25.65 4.4.77 7.38 0 1.98-.52 3.57-1.58 3.57-3.57v-3.58h-9.82v-1.2h13.3c2.14 0 2.94-1.5 3.58-3.68.71-2.42.68-4.73 0-7.38-.5-1.94-1.44-3.68-3.58-3.68zM18.535 24.1c.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2a1.2 1.2 0 0 1-1.2-1.2c0-.66.54-1.2 1.2-1.2z" fill="url(#py2)"/></svg>`,
    java: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267 0 0 .74.46 1.73.852-6.14 2.654-13.93-.15-9.21-1.547zM10.75 21.45s-1.423.902.854.99c3.126.14 5.517.1 8.38-.267 0 0 .574.46 1.183.672-6.183 1.912-13.054.14-10.417-1.395z" fill="#5382A1"/><path d="M18.347 15.71c1.247 1.453-.327 2.76-.327 2.76s3.17-1.655 1.71-3.727c-1.36-1.933-2.403-2.885 3.237-6.167 0 0-8.84 2.22-4.62 7.134z" fill="#E76F00"/><path d="M25.59 25.05s.908.748-1.003 1.324c-3.635 1.105-15.12 1.44-18.314.045-1.145-.5 1.003-1.19 1.68-1.338.705-.156 1.11-.127 1.11-.127-1.277-.89-8.255 1.767-3.545 2.53 12.826 2.085 23.413-.94 20.07-2.434zM13.17 17.38s-5.833 1.385-2.066 1.888c1.592.214 4.765.166 7.722-.083 2.416-.204 4.838-.643 4.838-.643s-.85.364-1.464.786c-5.91 1.555-17.32.832-14.026-.76 2.786-1.348 5.07-1.188 5.07-1.188zM20.83 22.43c6.01-3.126 3.23-6.13 1.29-5.725-.475.1-.69.186-.69.186s.177-.277.515-.398c3.842-1.364 6.793 3.98-1.24 6.09 0-.002.09-.08.125-.153z" fill="#5382A1"/><path d="M21.03 1.115S23.647 3.7 18.78 7.16c-3.88 2.77-1.06 4.33.003 6.12-2.683-2.41-4.65-4.52-3.33-6.48 1.32-1.97 5.57-2.93 5.57-2.93z" fill="#E76F00"/><path d="M11.246 26.97c5.78.37 14.67-.21 14.88-2.94 0 0-.405 1.04-4.78 1.87-4.97.94-11.14.83-14.79.23 0 0 .746.62 4.69.84z" fill="#5382A1"/></svg>`,
    css: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M4 2l2.18 20.16L16 30l9.82-7.84L28 2H4z" fill="#1572B6"/><path d="M16 27.87l7.94-6.27L25.5 4H16v23.87z" fill="#33A9DC"/><path d="M9.24 9.08h13.52L22.4 12H10.74l.24 2.98h11.19l-.57 6.3L16 22.67l-5.6-1.39-.4-4.48h2.75l.2 2.16L16 19.87l2.75-.72.28-3.13h-5.96l-.42-4.97h6.96l.2-2.98H8.8L9.24 9.08z" fill="#fff"/></svg>`,
    html: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M4 2l2.18 20.16L16 30l9.82-7.84L28 2H4z" fill="#E44D26"/><path d="M16 27.87l7.94-6.27L25.5 4H16v23.87z" fill="#F16529"/><path d="M10.42 7.05h11.16l-.24 2.97H13.2l.3 3.32h7.6l-.7 7.36L16 22.67l-4.4-1.97-.3-3.36h2.75l.18 1.7L16 18.47l2.7-.83.38-4.16h-6.9l-.73-7.4z" fill="#fff"/></svg>`,
    powerbi: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><rect x="4" y="14" width="6" height="14" rx="1" fill="#F2C811"/><rect x="13" y="8" width="6" height="20" rx="1" fill="#F2C811"/><rect x="22" y="4" width="6" height="24" rx="1" fill="#F2C811"/></svg>`,
    analytics: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a29bfe" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    database: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a29bfe" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    brain: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a29bfe" stroke-width="2"><path d="M12 2a7 7 0 0 0-7 7c0 2.3 1.2 4.2 3 5.2V20h8v-5.8c1.8-1 3-2.9 3-5.2a7 7 0 0 0-7-7z"/><path d="M9 12h6"/></svg>`,
    mongodb: `<svg width="20" height="20" viewBox="0 0 32 32" fill="none"><path d="M16.262 3.432c-.24-.312-.512-.652-.512-.652s-.272.34-.512.652c-2.604 3.524-7.248 11.184-3.3 16.716.716 1.004 1.46 1.672 1.98 2.504.112.224.232.472.316.708.1-.244.204-.496.316-.708.52-.832 1.264-1.5 1.98-2.504 3.968-5.532-.676-13.192-3.28-16.716z" fill="#599636"/><path d="M16.262 3.432c-.24-.312-.512-.652-.512-.652v18.344c.012.936.152 2.192.296 3.096v.004c.016.004.028.004.044.004.056-.788.228-2.068.344-3.104.004-.388.004-.776 0-1.164V3.432z" fill="#6CAC48"/><path d="M16.09 21.584c-.004-.004-.008-.004-.012 0-.016-.008-.028-.004-.044 0v.008c.04.768.164 1.612.28 2.308l.14 1.06.708 1.996c.028-.428.06-.892.088-1.324.1-1.568-.22-2.82-.328-3.036-.156-.308-.52-.756-.832-1.012z" fill="#C2BFBF"/></svg>`
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
        { id: 'skillBars', label: 'Barras Habilidades' },
        { id: 'contacts', label: 'Contatos' },
        { id: 'typing', label: 'Frases Digitadas' },
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

TAB_RENDERERS.skillBars = (data, container) => {
    let html = `<div style="margin-bottom:1rem"><button class="modal-btn modal-btn-primary" onclick="addSkillBar()">+ Adicionar Habilidade</button></div>`;
    data.skillBars.forEach((item, i) => {
        html += `
            <div class="admin-list-item">
                <div class="admin-list-fields">
                    <input class="modal-input admin-list-input" id="sb_name_${i}" value="${esc(item.name)}" placeholder="Nome">
                    <input class="modal-input admin-list-input" id="sb_pct_${i}" value="${item.percent}" placeholder="%">
                    <select class="modal-input admin-list-input" id="sb_icon_${i}">
                        ${['python','java','css','html','powerbi','analytics','database','brain','mongodb'].map(ic =>
                            `<option value="${ic}" ${item.icon === ic ? 'selected' : ''}>${ic}</option>`
                        ).join('')}
                    </select>
                </div>
                <button class="modal-btn modal-btn-danger" onclick="removeSkillBar(${i})">Remover</button>
            </div>`;
    });
    html += `<button class="modal-btn modal-btn-primary" onclick="saveSkillBars()" style="margin-top:0.5rem">Salvar Alterações</button>`;
    container.innerHTML = html;
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

function addSkillBar() {
    const data = loadData();
    data.skillBars.push({ name: '', percent: 50, icon: 'python' });
    saveData(data);
    renderAdminTab('skillBars');
}

function removeSkillBar(i) {
    const data = loadData();
    data.skillBars.splice(i, 1);
    saveData(data);
    renderAdminTab('skillBars');
    renderPortfolio();
}

function saveSkillBars() {
    const data = loadData();
    data.skillBars.forEach((_, i) => {
        const name = document.getElementById(`sb_name_${i}`);
        const pct = document.getElementById(`sb_pct_${i}`);
        const icon = document.getElementById(`sb_icon_${i}`);
        if (name) data.skillBars[i].name = name.value;
        if (pct) data.skillBars[i].percent = parseInt(pct.value) || 0;
        if (icon) data.skillBars[i].icon = icon.value;
    });
    saveData(data);
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
