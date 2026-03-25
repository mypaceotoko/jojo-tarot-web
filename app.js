'use strict';

// ===== Tarot Card Data =====
const TAROT_CARDS = [
  {
    id: 0, tarotName: "The Fool", tarotNameJp: "愚者",
    standName: "The Fool", standUser: "Iggy", standUserJp: "イギー",
    uprightMeaningJp: "新しい始まり、無限の可能性、自由、冒険への一歩",
    reversedMeaningJp: "無謀さ、無責任、リスクの軽視、向こう見ず",
    standImage: "images/00_fool.png",
    color: "#F5A623", part: "Stardust Crusaders"
  },
  {
    id: 1, tarotName: "The Magician", tarotNameJp: "魔術師",
    standName: "Magician's Red", standUser: "Muhammad Avdol", standUserJp: "モハメド・アヴドゥル",
    uprightMeaningJp: "強い意志力、優れたスキル、創造性、積極的な行動力",
    reversedMeaningJp: "操作・欺き、才能の無駄遣い、自信過剰",
    standImage: "images/01_magicians_red.png",
    color: "#E74C3C", part: "Stardust Crusaders"
  },
  {
    id: 2, tarotName: "The High Priestess", tarotNameJp: "女教皇",
    standName: "High Priestess", standUser: "Midler", standUserJp: "ミドラー",
    uprightMeaningJp: "鋭い直感、神秘的な知識、内なる声に従う、潜在意識の力",
    reversedMeaningJp: "隠された秘密、表面的な知識、直感の無視",
    standImage: "images/02_high_priestess.png",
    color: "#9B59B6", part: "Stardust Crusaders"
  },
  {
    id: 3, tarotName: "The Empress", tarotNameJp: "女帝",
    standName: "Empress", standUser: "Nena", standUserJp: "ネーナ",
    uprightMeaningJp: "豊かさと繁栄、母性的な愛、自然との調和、創造的エネルギー",
    reversedMeaningJp: "依存心、過保護、創造性の欠如、物質主義",
    standImage: "images/03_empress.png",
    color: "#27AE60", part: "Stardust Crusaders"
  },
  {
    id: 4, tarotName: "The Emperor", tarotNameJp: "皇帝",
    standName: "Emperor", standUser: "Hol Horse", standUserJp: "ホル・ホース",
    uprightMeaningJp: "強いリーダーシップ、権威と安定、構造と秩序、父性的な力",
    reversedMeaningJp: "支配欲、硬直した思考、独裁的な傾向",
    standImage: "images/04_emperor.png",
    color: "#E67E22", part: "Stardust Crusaders"
  },
  {
    id: 5, tarotName: "The Hierophant", tarotNameJp: "法王",
    standName: "Hierophant Green", standUser: "Noriaki Kakyoin", standUserJp: "花京院典明",
    uprightMeaningJp: "伝統と慣習の尊重、精神的な指導、教育と学び、信仰の力",
    reversedMeaningJp: "既成概念への反抗、革新的な思考、制度への疑問",
    standImage: "images/05_hierophant_green.png",
    color: "#2ECC71", part: "Stardust Crusaders"
  },
  {
    id: 6, tarotName: "The Lovers", tarotNameJp: "恋人",
    standName: "Lovers", standUser: "Steely Dan", standUserJp: "スティーリー・ダン",
    uprightMeaningJp: "深い愛と絆、調和のとれた関係、重要な選択、価値観の一致",
    reversedMeaningJp: "関係の不調和、価値観の不一致、重要な選択の回避",
    standImage: "images/06_lovers.png",
    color: "#E91E63", part: "Stardust Crusaders"
  },
  {
    id: 7, tarotName: "The Chariot", tarotNameJp: "戦車",
    standName: "Silver Chariot", standUser: "Jean Pierre Polnareff", standUserJp: "ジャン・ピエール・ポルナレフ",
    uprightMeaningJp: "強い意志による勝利、自制心と集中力、目標への突進、成功への道",
    reversedMeaningJp: "方向性の欠如、攻撃性、自制心の喪失",
    standImage: "images/07_silver_chariot.png",
    color: "#95A5A6", part: "Stardust Crusaders"
  },
  {
    id: 8, tarotName: "Strength", tarotNameJp: "力",
    standName: "Strength", standUser: "Forever", standUserJp: "フォーエバー",
    uprightMeaningJp: "内なる強さと勇気、忍耐力、困難を乗り越える力、自信",
    reversedMeaningJp: "自信の喪失、内なる疑い、弱さの露呈",
    standImage: "images/08_strength.png",
    color: "#F39C12", part: "Stardust Crusaders"
  },
  {
    id: 9, tarotName: "The Hermit", tarotNameJp: "隠者",
    standName: "Hermit Purple", standUser: "Joseph Joestar", standUserJp: "ジョセフ・ジョースター",
    uprightMeaningJp: "深い内省と自己探求、精神的な指導、孤独の中の知恵、真実の探求",
    reversedMeaningJp: "孤立と引きこもり、精神的な迷い、内省の拒否",
    standImage: "images/09_hermit_purple.png",
    color: "#8E44AD", part: "Stardust Crusaders"
  },
  {
    id: 10, tarotName: "Wheel of Fortune", tarotNameJp: "運命の輪",
    standName: "Wheel of Fortune", standUser: "ZZ", standUserJp: "ZZ",
    uprightMeaningJp: "運命の転換点、変化のサイクル、幸運の訪れ、人生の流れ",
    reversedMeaningJp: "不運の連続、変化への抵抗、悪い運命の繰り返し",
    standImage: "images/10_wheel_of_fortune.png",
    color: "#3498DB", part: "Stardust Crusaders"
  },
  {
    id: 11, tarotName: "Justice", tarotNameJp: "正義",
    standName: "Justice", standUser: "Enya the Hag", standUserJp: "エンヤ婆",
    uprightMeaningJp: "公正と真実、法と秩序、因果応報、誠実さ",
    reversedMeaningJp: "不公正な扱い、不誠実さ、責任の回避",
    standImage: "images/11_justice.png",
    color: "#2C3E50", part: "Stardust Crusaders"
  },
  {
    id: 12, tarotName: "The Hanged Man", tarotNameJp: "吊られた男",
    standName: "Hanged Man", standUser: "J. Geil", standUserJp: "J・ガイル",
    uprightMeaningJp: "一時停止と内省、新しい視点の獲得、犠牲による成長、降伏の知恵",
    reversedMeaningJp: "無駄な遅延、変化への抵抗、犠牲の拒否",
    standImage: "images/12_hanged_man.png",
    color: "#1ABC9C", part: "Stardust Crusaders"
  },
  {
    id: 13, tarotName: "Death", tarotNameJp: "死神",
    standName: "Death Thirteen", standUser: "Mannish Boy", standUserJp: "マニッシュ・ボーイ",
    uprightMeaningJp: "大きな変容と終わり、新しい始まりへの扉、解放と再生、変化の必然性",
    reversedMeaningJp: "変化への強い抵抗、停滞と行き詰まり、恐れによる束縛",
    standImage: "images/13_death_thirteen.png",
    color: "#2C3E50", part: "Stardust Crusaders"
  },
  {
    id: 14, tarotName: "Temperance", tarotNameJp: "節制",
    standName: "Yellow Temperance", standUser: "Rubber Soul", standUserJp: "ラバーソウル",
    uprightMeaningJp: "バランスと調和、節制と忍耐、長期的な目標、中庸の道",
    reversedMeaningJp: "不均衡と過剰、自制心の欠如、極端な行動",
    standImage: "images/14_yellow_temperance.png",
    color: "#F1C40F", part: "Stardust Crusaders"
  },
  {
    id: 15, tarotName: "The Devil", tarotNameJp: "悪魔",
    standName: "Ebony Devil", standUser: "Devo the Cursed", standUserJp: "デーボ・ザ・カースト",
    uprightMeaningJp: "束縛と依存、物質主義、影の自己との対峙、誘惑",
    reversedMeaningJp: "束縛からの解放、自己認識の深まり、依存からの脱却",
    standImage: "images/15_ebony_devil.png",
    color: "#8B0000", part: "Stardust Crusaders"
  },
  {
    id: 16, tarotName: "The Tower", tarotNameJp: "塔",
    standName: "Tower of Gray", standUser: "Gray Fly", standUserJp: "グレー・フライ",
    uprightMeaningJp: "突然の混乱と崩壊、予期せぬ変化、啓示と覚醒、古い構造の破壊",
    reversedMeaningJp: "変化の回避、崩壊への恐れ、古い構造への執着",
    standImage: "images/16_tower_of_gray.png",
    color: "#7F8C8D", part: "Stardust Crusaders"
  },
  {
    id: 17, tarotName: "The Star", tarotNameJp: "星",
    standName: "Star Platinum", standUser: "Jotaro Kujo", standUserJp: "空条承太郎",
    uprightMeaningJp: "希望と輝き、インスピレーションの源、精神的な更新、未来への信頼",
    reversedMeaningJp: "希望の喪失、絶望感、信仰の崩壊",
    standImage: "images/17_star_platinum.png",
    color: "#3498DB", part: "Stardust Crusaders"
  },
  {
    id: 18, tarotName: "The Moon", tarotNameJp: "月",
    standName: "Dark Blue Moon", standUser: "Impostor Captain Tennille", standUserJp: "偽テニール大佐",
    uprightMeaningJp: "幻想と不安、潜在意識の働き、混乱と不確実性、隠れた真実",
    reversedMeaningJp: "混乱の解消、恐れの克服、真実の発見と明確化",
    standImage: "images/18_dark_blue_moon.png",
    color: "#1A237E", part: "Stardust Crusaders"
  },
  {
    id: 19, tarotName: "The Sun", tarotNameJp: "太陽",
    standName: "Sun", standUser: "Arabia Fats", standUserJp: "アラビア・ファッツ",
    uprightMeaningJp: "輝かしい成功と活力、ポジティブなエネルギー、喜びと幸福、明るい未来",
    reversedMeaningJp: "一時的な失敗、悲観的な見方、エネルギーの低下",
    standImage: "images/19_sun.png",
    color: "#F39C12", part: "Stardust Crusaders"
  },
  {
    id: 20, tarotName: "Judgement", tarotNameJp: "審判",
    standName: "Judgement", standUser: "Cameo", standUserJp: "カメオ",
    uprightMeaningJp: "深い反省と内省、内なる呼びかけへの応答、許しと変容、覚醒",
    reversedMeaningJp: "自己疑念と自己批判、変容の拒否、過去への執着",
    standImage: "images/20_judgement.png",
    color: "#E74C3C", part: "Stardust Crusaders"
  },
  {
    id: 21, tarotName: "The World", tarotNameJp: "世界",
    standName: "The World", standUser: "Dio Brando", standUserJp: "DIO",
    uprightMeaningJp: "完全な達成と完成、全てが統合された状態、旅の完結、最高の成功",
    reversedMeaningJp: "未完成の状態、閉鎖感、目標への道半ば",
    standImage: "images/21_the_world.png",
    color: "#FFD700", part: "Stardust Crusaders"
  }
];

const POSITION_LABELS = ["過去", "現在", "未来"];

// ===== State =====
let state = {
  theme: '',
  cardCount: 1,
  deck: [],
  selectedIndices: [],
  history: []
};

// ===== Storage =====
const STORAGE_KEY = 'jojo_tarot_history';

function loadHistory() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

function saveHistory(records) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch {}
}

function addHistoryRecord(record) {
  const records = [record, ...loadHistory()].slice(0, 50);
  saveHistory(records);
  state.history = records;
}

// ===== Utilities =====
function shuffleDeck() {
  return [...Array(22).keys()].sort(() => Math.random() - 0.5);
}

function generateReading(theme, cards) {
  const cardDescriptions = cards.map(({ card, isReversed }) => {
    const meaning = isReversed ? card.reversedMeaningJp : card.uprightMeaningJp;
    const position = isReversed ? '逆位置' : '正位置';
    return `【${card.tarotNameJp}（${card.standName}）- ${position}】\n${meaning}`;
  });

  const readings = [
    `「${theme}」についての占い結果です。\n\n${cardDescriptions.join('\n\n')}\n\n引いたカードが示すように、今この時期は重要な転換点にあります。スタンドの力を信じ、自分の直感に従って進んでください。`,
    `「${theme}」に関して、カードはこう告げています。\n\n${cardDescriptions.join('\n\n')}\n\n運命の糸は動き始めています。ジョジョのスタンド使いたちのように、困難に立ち向かう勇気を持ってください。`,
    `「${theme}」についてのメッセージ。\n\n${cardDescriptions.join('\n\n')}\n\nこのカードの意味を胸に刻み、前へ進んでください。あなたには必ずや道が開けるでしょう。`
  ];
  return readings[Math.floor(Math.random() * readings.length)];
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('ja-JP', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

// ===== DOM Helpers =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');

  // Update tab bar
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === id);
  });
}

function createCardImageEl(card, width, height) {
  const container = document.createElement('div');
  container.className = 'card-image-container';
  container.style.height = height + 'px';

  const img = document.createElement('img');
  img.src = card.standImage;
  img.alt = card.standName;
  img.loading = 'lazy';

  img.onerror = () => {
    container.innerHTML = '';
    const fallback = document.createElement('div');
    fallback.className = 'card-image-fallback';
    fallback.style.height = height + 'px';
    const star = document.createElement('div');
    star.className = 'fallback-star';
    star.style.color = card.color;
    star.textContent = '★';
    const name = document.createElement('div');
    name.className = 'fallback-name';
    name.style.color = card.color;
    name.textContent = card.standName;
    fallback.appendChild(star);
    fallback.appendChild(name);
    container.appendChild(fallback);
  };

  container.appendChild(img);
  return container;
}

function createCardFront(card, isReversed, cardW, cardH) {
  const imgH = cardH - 52; // subtract header + footer

  const el = document.createElement('div');
  el.className = 'tarot-card-front' + (isReversed ? ' reversed' : '');
  el.style.width = cardW + 'px';
  el.style.height = cardH + 'px';
  el.style.borderColor = card.color;

  const header = document.createElement('div');
  header.className = 'card-front-header';
  header.style.backgroundColor = card.color + '33';
  header.innerHTML = `
    <span class="card-number">${String(card.id).padStart(2, '0')}</span>
    <span class="card-tarot-name">${card.tarotNameJp}</span>
  `;

  const imgContainer = createCardImageEl(card, cardW, imgH);

  const footer = document.createElement('div');
  footer.className = 'card-front-footer';
  footer.style.backgroundColor = card.color + '33';
  footer.innerHTML = `
    <div class="card-stand-name" style="color:${card.color}">${card.standName}</div>
    <div class="card-user-name">${card.standUserJp}</div>
  `;

  el.appendChild(header);
  el.appendChild(imgContainer);
  el.appendChild(footer);
  return el;
}

// ===== Screen: Home =====
function initHome() {
  const input = document.getElementById('theme-input');
  const startBtn = document.getElementById('start-btn');

  // Restore theme
  input.value = state.theme;
  updateStartBtn();

  input.addEventListener('input', () => {
    state.theme = input.value.trim();
    updateStartBtn();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && state.theme) startFortune();
  });

  // Quick themes
  document.querySelectorAll('.quick-theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === state.theme);
    btn.addEventListener('click', () => {
      state.theme = btn.dataset.theme;
      input.value = state.theme;
      document.querySelectorAll('.quick-theme-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.theme === state.theme)
      );
      updateStartBtn();
    });
  });

  // Card count
  document.querySelectorAll('.card-count-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.count) === state.cardCount);
    btn.addEventListener('click', () => {
      state.cardCount = parseInt(btn.dataset.count);
      document.querySelectorAll('.card-count-btn').forEach(b =>
        b.classList.toggle('active', parseInt(b.dataset.count) === state.cardCount)
      );
    });
  });

  startBtn.addEventListener('click', startFortune);

  // History preview
  renderHistoryPreview();

  document.getElementById('view-history-btn')?.addEventListener('click', () => {
    showScreen('history');
    renderHistory();
  });
}

function updateStartBtn() {
  const startBtn = document.getElementById('start-btn');
  startBtn.disabled = !state.theme;
}

function renderHistoryPreview() {
  const records = loadHistory();
  const preview = document.getElementById('history-preview');
  const list = document.getElementById('history-list-preview');

  if (records.length === 0) {
    preview.style.display = 'none';
    return;
  }

  preview.style.display = 'block';
  list.innerHTML = '';
  records.slice(0, 3).forEach(record => {
    const card = document.createElement('div');
    card.className = 'history-mini-card';
    card.innerHTML = `
      <div class="history-mini-theme">「${record.theme}」</div>
      <div class="history-mini-date">${record.date}</div>
    `;
    list.appendChild(card);
  });
}

// ===== Fortune Flow =====
function startFortune() {
  if (!state.theme) return;
  state.deck = shuffleDeck();
  state.selectedIndices = [];
  showScreen('cards');
  renderCardDeck();
}

function renderCardDeck() {
  const deck = document.getElementById('card-deck');
  const themeDisplay = document.getElementById('cards-theme-display');
  const progress = document.getElementById('cards-progress');
  const prompt = document.getElementById('cards-prompt');

  themeDisplay.textContent = `「${state.theme}」`;
  updateCardProgress();

  deck.innerHTML = '';
  state.deck.forEach((_, index) => {
    const card = document.createElement('div');
    card.className = 'tarot-card-back';
    card.dataset.index = index;
    card.innerHTML = `
      <div class="card-back-inner">
        <div class="card-back-star">★</div>
        <div class="card-back-jojo">JOJO</div>
        <div class="card-back-tarot">TAROT</div>
      </div>
    `;
    card.addEventListener('click', () => selectCard(index));
    deck.appendChild(card);
  });
}

function updateCardProgress() {
  const progress = document.getElementById('cards-progress');
  const prompt = document.getElementById('cards-prompt');
  const sel = state.selectedIndices.length;
  const total = state.cardCount;
  progress.textContent = `${sel} / ${total} 枚選択中`;

  if (sel < total) {
    prompt.textContent = `カードを ${total - sel} 枚選んでください`;
  } else {
    prompt.textContent = 'カードを確認しています...';
  }
}

function selectCard(index) {
  if (state.selectedIndices.includes(index)) {
    // Deselect
    state.selectedIndices = state.selectedIndices.filter(i => i !== index);
    const cardEl = document.querySelector(`.tarot-card-back[data-index="${index}"]`);
    if (cardEl) cardEl.classList.remove('selected');
    updateCardProgress();
    return;
  }

  if (state.selectedIndices.length >= state.cardCount) return;

  state.selectedIndices.push(index);
  const cardEl = document.querySelector(`.tarot-card-back[data-index="${index}"]`);
  if (cardEl) cardEl.classList.add('selected');
  updateCardProgress();

  if (state.selectedIndices.length === state.cardCount) {
    setTimeout(() => showResult(), 400);
  }
}

// ===== Result Screen =====
function showResult() {
  const selectedCards = state.selectedIndices.map(i => ({
    card: TAROT_CARDS[state.deck[i]],
    isReversed: Math.random() < 0.3
  }));

  const reading = generateReading(state.theme, selectedCards);

  // Save to history
  const record = {
    id: Date.now().toString(),
    theme: state.theme,
    date: formatDate(Date.now()),
    cards: selectedCards.map(({ card, isReversed }) => ({
      card, isReversed
    })),
    reading
  };
  addHistoryRecord(record);

  // Reset result screen for normal fortune flow
  const resultBackBtn = document.querySelector('#screen-result .back-btn');
  resultBackBtn.dataset.target = 'home';
  resultBackBtn.textContent = '← ホーム';
  document.getElementById('again-btn').style.display = '';

  renderResult(state.theme, selectedCards, reading);
  showScreen('result');
}

function renderResult(theme, selectedCards, reading) {
  // Theme
  document.getElementById('result-theme-text').textContent = `「${theme}」`;

  // Cards row
  const cardsRow = document.getElementById('result-cards-row');
  cardsRow.innerHTML = '';

  const isSingle = selectedCards.length === 1;
  const vw = Math.min(window.innerWidth, 480);
  const cardW = isSingle ? Math.floor(vw * 0.55) : Math.floor((vw - 80) / 3);
  const cardH = Math.floor(cardW * 1.6);

  selectedCards.forEach(({ card, isReversed }, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'result-card-wrapper';

    if (!isSingle) {
      const posLabel = document.createElement('div');
      posLabel.className = 'result-position-label';
      posLabel.textContent = POSITION_LABELS[idx] || `${idx + 1}枚目`;
      wrapper.appendChild(posLabel);
    }

    wrapper.appendChild(createCardFront(card, isReversed, cardW, cardH));

    const posTag = document.createElement('div');
    posTag.className = 'position-tag ' + (isReversed ? 'reversed' : 'upright');
    posTag.textContent = isReversed ? '逆位置' : '正位置';
    wrapper.appendChild(posTag);

    cardsRow.appendChild(wrapper);
  });

  // Card details
  const details = document.getElementById('result-card-details');
  details.innerHTML = '';

  selectedCards.forEach(({ card, isReversed }, idx) => {
    const meaning = isReversed ? card.reversedMeaningJp : card.uprightMeaningJp;
    const item = document.createElement('div');
    item.className = 'card-detail-item';
    item.style.borderLeftColor = card.color;
    item.innerHTML = `
      <div class="card-detail-title" style="color:${card.color}">
        ${!isSingle ? `${POSITION_LABELS[idx] || `${idx + 1}枚目`}：` : ''}${card.tarotNameJp}（${card.standName}）
      </div>
      <div class="card-detail-meaning">${meaning}</div>
    `;
    details.appendChild(item);
  });

  // Reading
  document.getElementById('reading-text').textContent = reading;

  // Again button
  document.getElementById('again-btn').onclick = () => {
    showScreen('home');
    initHome();
  };
}

// ===== History Detail =====
function showHistoryDetail(record) {
  renderResult(record.theme, record.cards, record.reading);

  const resultBackBtn = document.querySelector('#screen-result .back-btn');
  resultBackBtn.dataset.target = 'history';
  resultBackBtn.textContent = '← 履歴';

  document.getElementById('again-btn').style.display = 'none';

  showScreen('result');
}

// ===== History Screen =====
function renderHistory() {
  const records = loadHistory();
  const content = document.getElementById('history-content');
  content.innerHTML = '';

  if (records.length === 0) {
    content.innerHTML = `
      <div class="history-empty">
        <div class="history-empty-icon">✦</div>
        <div class="history-empty-title">履歴がありません</div>
        <div class="history-empty-sub">占いを行うと、ここに結果が保存されます</div>
      </div>
    `;
    return;
  }

  records.forEach(record => {
    const el = document.createElement('div');
    el.className = 'history-record history-record-tappable';

    const cardsHtml = record.cards.map(({ card, isReversed }) => `
      <div class="history-mini-stand" style="border-color:${card.color}33">
        <div class="history-mini-tarot" style="color:${card.color}">${card.tarotNameJp}</div>
        <div class="history-mini-stand-name">${card.standName}</div>
        <div class="history-mini-pos ${isReversed ? 'reversed' : 'upright'}">${isReversed ? '逆' : '正'}</div>
      </div>
    `).join('');

    el.innerHTML = `
      <div class="history-record-header">
        <div class="history-record-theme">「${record.theme}」</div>
        <div class="history-record-date">${record.date}</div>
      </div>
      <div class="history-record-cards">${cardsHtml}</div>
      <div class="history-record-tap-hint">タップして詳細を見る →</div>
    `;

    el.addEventListener('click', () => showHistoryDetail(record));
    content.appendChild(el);
  });
}

// ===== Navigation =====
function initNavigation() {
  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      showScreen(target);
      if (target === 'home') initHome();
      if (target === 'history') renderHistory();
    });
  });

  // Tab bar
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.dataset.screen;
      showScreen(screen);
      if (screen === 'home') initHome();
      if (screen === 'history') renderHistory();
    });
  });

  // Clear history
  document.getElementById('clear-history-btn').addEventListener('click', () => {
    if (confirm('占い履歴をすべて削除しますか？')) {
      saveHistory([]);
      renderHistory();
    }
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  state.history = loadHistory();
  initNavigation();
  initHome();
});
