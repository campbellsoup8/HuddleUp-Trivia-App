// ============================================================
// Big League Trivia — game_logic.js
// ============================================================

// ── SPORT CONFIG ─────────────────────────────────────────────
const SPORT_CONFIG = {
  baseball: {
    name: 'Baseball', emoji: '⚾', tagline: 'Major League Trivia Challenge',
    bgClass: 'sport-baseball',
    cats6: ["WORLD SERIES WINS","HOME RUN LEGENDS","DIAMOND FIRSTS","RECORD BREAKERS","BASEBALL LINGO","HALL OF FAMERS"],
    bases: ["SINGLE","DOUBLE","TRIPLE","HOME RUN"],
    ddName: '💎 DIAMOND DOUBLE! 💎',
    finalName: 'FINAL INNING',
    finalSkipName: 'Final Inning →',
    champLabel: 'World Series Champions',
    playBtn: '⚾ PLAY BALL!',
    againBtn: '⚾ Play Again',
    boardTitle: '⚾ Big League Trivia',
    teamPlaceholders: ['Yankees','Red Sox','Cubs','Dodgers'],
  },
  football: {
    name: 'Football', emoji: '🏈', tagline: 'NFL Trivia Challenge',
    bgClass: 'sport-football',
    cats6: ["SUPER BOWL HISTORY","QB LEGENDS","NFL RECORDS","FOOTBALL LINGO","HALL OF FAMERS","TEAM DYNASTIES"],
    bases: ["1ST DOWN","FIELD GOAL","TOUCHDOWN","HAIL MARY"],
    ddName: '🏈 TRICK PLAY! 🏈',
    finalName: 'FINAL DRIVE',
    finalSkipName: 'Final Drive →',
    champLabel: 'Super Bowl Champions',
    playBtn: '🏈 KICKOFF!',
    againBtn: '🏈 Play Again',
    boardTitle: '🏈 Big League Trivia',
    teamPlaceholders: ['Chiefs','Eagles','Cowboys','49ers'],
  },
  basketball: {
    name: 'Basketball', emoji: '🏀', tagline: 'NBA Trivia Challenge',
    bgClass: 'sport-basketball',
    cats6: ["NBA CHAMPIONSHIPS","SCORING LEGENDS","NBA RECORDS","BASKETBALL LINGO","HALL OF FAMERS","MODERN ERA"],
    bases: ["FREE THROW","LAYUP","3-POINTER","SLAM DUNK"],
    ddName: '🏀 BUZZER BEATER! 🏀',
    finalName: 'FINAL BUZZER',
    finalSkipName: 'Final Buzzer →',
    champLabel: 'NBA Champions',
    playBtn: '🏀 TIP OFF!',
    againBtn: '🏀 Play Again',
    boardTitle: '🏀 Big League Trivia',
    teamPlaceholders: ['Lakers','Celtics','Bulls','Warriors'],
  },
  hockey: {
    name: 'Hockey', emoji: '🏒', tagline: 'NHL Trivia Challenge',
    bgClass: 'sport-hockey',
    cats6: ["STANLEY CUP HISTORY","SCORING LEGENDS","NHL RECORDS","HOCKEY LINGO","HALL OF FAMERS","MODERN ERA"],
    bases: ["SHOT","ASSIST","GOAL","HAT TRICK"],
    ddName: '🏒 POWER PLAY! 🏒',
    finalName: 'OVERTIME',
    finalSkipName: 'Overtime →',
    champLabel: 'Stanley Cup Champions',
    playBtn: '🏒 DROP THE PUCK!',
    againBtn: '🏒 Play Again',
    boardTitle: '🏒 Big League Trivia',
    teamPlaceholders: ['Oilers','Bruins','Rangers','Blackhawks'],
  },
  golf: {
    name: 'Golf', emoji: '⛳', tagline: 'Golf Trivia Challenge',
    bgClass: 'sport-golf',
    cats6: ["MAJOR CHAMPIONSHIPS","GOLF LEGENDS","RECORDS & FIRSTS","GOLF LINGO","MODERN ERA","RYDER CUP"],
    bases: ["BOGEY","PAR","BIRDIE","EAGLE"],
    ddName: '⛳ HOLE IN ONE! ⛳',
    finalName: 'BACK 9',
    finalSkipName: 'Back 9 →',
    champLabel: 'Tournament Champion',
    playBtn: '⛳ TEE OFF!',
    againBtn: '⛳ Play Again',
    boardTitle: '⛳ Big League Trivia',
    teamPlaceholders: ['Tiger','Jack','Rory','Phil'],
  },
  soccer: {
    name: 'Soccer', emoji: '⚽', tagline: 'World Football Trivia Challenge',
    bgClass: 'sport-soccer',
    cats6: ["FIFA WORLD CUP","GOAL SCORING LEGENDS","RECORDS & FIRSTS","SOCCER LINGO","MODERN ERA","CLUB FOOTBALL"],
    bases: ["CORNER","FREE KICK","PENALTY","HAT TRICK"],
    ddName: '⚽ GOLDEN GOAL! ⚽',
    finalName: 'EXTRA TIME',
    finalSkipName: 'Extra Time →',
    champLabel: 'World Cup Champions',
    playBtn: '⚽ KICK OFF!',
    againBtn: '⚽ Play Again',
    boardTitle: '⚽ Big League Trivia',
    teamPlaceholders: ['Brazil','France','Argentina','Germany'],
  },
};

// ── QUESTION LOOKUPS (loaded from separate question files) ────
const SPORT_ALL_Q = {
  baseball:   BASEBALL_Q,
  football:   FOOTBALL_Q,
  basketball: BASKETBALL_Q,
  hockey:     HOCKEY_Q,
  golf:       GOLF_Q,
  soccer:     SOCCER_Q,
};
const SPORT_ALL_FINALS = {
  baseball:   BASEBALL_FINALS,
  football:   FOOTBALL_FINALS,
  basketball: BASKETBALL_FINALS,
  hockey:     HOCKEY_FINALS,
  golf:       GOLF_FINALS,
  soccer:     SOCCER_FINALS,
};

// ── GAME STATE VARIABLES ──────────────────────────────────────
const PTS = [100, 200, 300, 400];
const DD_POSITIONS = [[1, 2], [4, 3]]; // [catIndex, ptIndex]

let selectedSport = 'baseball';
let selectedDiff  = 1; // 1-4
let selectedCols  = 4; // 3-6
let selectedMode  = 'inperson';
let G             = {};
let AC            = null;
let finalTimerRef = null;

// ── SETUP UI FUNCTIONS ────────────────────────────────────────
function setSport(sport) {
  selectedSport = sport;
  const cfg = SPORT_CONFIG[sport];

  // Body classes
  Object.keys(SPORT_CONFIG).forEach(s => document.body.classList.remove('sport-' + s));
  document.body.classList.add('sport-' + sport);

  // Logo emoji
  const logoEmoji = document.getElementById('logo-emoji');
  if (logoEmoji) logoEmoji.textContent = cfg.emoji;

  // Tagline / sub text
  const gameSub = document.getElementById('game-sub');
  if (gameSub) gameSub.textContent = cfg.tagline;

  // Play button
  const playBtn = document.getElementById('play-btn');
  if (playBtn) playBtn.textContent = cfg.playBtn;

  // Board title
  const boardTitle = document.getElementById('board-title');
  if (boardTitle) boardTitle.textContent = cfg.boardTitle;

  // Skip button
  const skipBtn = document.getElementById('skip-btn');
  if (skipBtn) skipBtn.textContent = cfg.finalSkipName;

  // Team placeholders
  ['t1','t2','t3','t4'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && cfg.teamPlaceholders[i]) el.placeholder = cfg.teamPlaceholders[i];
  });

  // Highlight active sport button
  document.querySelectorAll('.sport-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.sport === sport);
  });
}

function setDiff(d) {
  selectedDiff = d;
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.diff) === d);
  });
}

function setCols(n) {
  selectedCols = n;
  document.querySelectorAll('.col-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.cols) === n);
  });
}

function setMode(m) {
  selectedMode = m;
  document.querySelectorAll('.mode-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.mode === m);
  });

  const teamGrid = document.getElementById('team-grid');
  const teamLabel = document.getElementById('team-label');

  if (m === 'solo') {
    if (teamGrid) teamGrid.classList.add('is-solo');
    // Hide teams 2-4
    ['t2','t3','t4'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { const wrap = el.closest('.team-input-wrap') || el.parentElement; if (wrap) wrap.style.display = 'none'; }
    });
    if (teamLabel) teamLabel.textContent = 'Your Name';
  } else {
    if (teamGrid) teamGrid.classList.remove('is-solo');
    ['t2','t3','t4'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { const wrap = el.closest('.team-input-wrap') || el.parentElement; if (wrap) wrap.style.display = ''; }
    });
    if (teamLabel) teamLabel.textContent = 'Team Names';
  }
}

function toggleTheme() {
  document.body.classList.toggle('night');
  const toggle = document.getElementById('theme-toggle');
  const isNight = document.body.classList.contains('night');
  if (toggle) toggle.textContent = isNight ? '☀️' : '🌙';
  localStorage.setItem('bj-theme', isNight ? 'night' : 'day');
}

// ── QUESTION SELECTION ────────────────────────────────────────
function pickQuestions() {
  const cfg = SPORT_CONFIG[selectedSport];
  const cats = cfg.cats6.slice(0, selectedCols);
  const Q = SPORT_ALL_Q[selectedSport];
  const out = {};
  for (let ci = 0; ci < cats.length; ci++) {
    out[ci] = {};
    PTS.forEach(pts => {
      const pool = Q[ci][pts];
      let q = pool.find(x => x.diff === selectedDiff);
      if (!q) q = pool.reduce((best, x) => Math.abs(x.diff - selectedDiff) < Math.abs(best.diff - selectedDiff) ? x : best, pool[0]);
      out[ci][pts] = q;
    });
  }
  return out;
}

function pickFinal() {
  const pool = SPORT_ALL_FINALS[selectedSport];
  const byDiff = pool.filter(f => f.diff === selectedDiff);
  const src = byDiff.length ? byDiff : pool;
  return src[Math.floor(Math.random() * src.length)];
}

// ── GAME START ────────────────────────────────────────────────
function initState(teams, mode) {
  const scores = {};
  teams.forEach(t => scores[t] = 0);
  G = {
    teams, scores, turn: 0, used: new Set(), cur: null, timer: null,
    finalWagers: {}, finalApplied: new Set(), thinkTimer: null,
    mode: mode || 'inperson',
    sport: selectedSport,
    diff: selectedDiff,
    cols: selectedCols,
    questions: pickQuestions(),
    final: pickFinal(),
    cats: SPORT_CONFIG[selectedSport].cats6.slice(0, selectedCols),
    cfg: SPORT_CONFIG[selectedSport],
  };
}

function startGame() {
  ac();
  let teams, gameMode;
  if (selectedMode === 'solo') {
    const name = document.getElementById('t1').value.trim() || 'PLAYER 1';
    teams = [name];
    gameMode = 'typeanswer';
  } else {
    const raw = ['t1','t2','t3','t4'].map(id => document.getElementById(id).value.trim()).filter(Boolean);
    teams = raw.length ? (raw.length === 1 ? [...raw, 'AWAY TEAM'] : raw) : ['HOME TEAM','AWAY TEAM'];
    gameMode = selectedMode;
  }
  initState(teams, gameMode);

  document.getElementById('board-title').textContent = G.cfg.boardTitle;
  document.getElementById('skip-btn').textContent = G.cfg.finalSkipName;
  document.getElementById('final-title').textContent = G.cfg.emoji + ' ' + G.cfg.finalName;
  document.getElementById('again-btn').textContent = G.cfg.againBtn;
  document.getElementById('w-label').textContent = G.cfg.champLabel;

  buildBoard();
  sndPlayBall();
  show('s-board');
}

// ── BOARD BUILDING ────────────────────────────────────────────
function buildBoard() {
  const cfg = G.cfg;
  const board = document.getElementById('board');
  board.style.gridTemplateColumns = `repeat(${G.cols}, 1fr)`;
  board.innerHTML = '';

  // Category headers
  G.cats.forEach(c => {
    const el = document.createElement('div');
    el.className = 'cat-cell';
    el.textContent = c;
    board.appendChild(el);
  });

  // Tiles
  PTS.forEach((pts, pi) => {
    for (let ci = 0; ci < G.cols; ci++) {
      const key = `${ci}-${pts}`;
      const isDD = DD_POSITIONS.some(d => d[0] === ci && d[1] === pi) && G.cols >= 4;
      const used = G.used.has(key);
      const el = document.createElement('div');
      el.className = 'tile' + (isDD ? ' dd' : '') + (used ? ' used' : '');
      el.id = `tile-${key}`;
      el.innerHTML = `<div class="tile-base">${cfg.bases[pi]}</div><div class="tile-pts">${pts}</div>`;
      el.onclick = () => openQ(ci, pts, pi, isDD);
      board.appendChild(el);
    }
  });

  refreshScores();
  refreshBanner();
}

// ── SCORE DISPLAY ─────────────────────────────────────────────
function refreshScores() {
  document.getElementById('scores-bar').innerHTML = G.teams.map((t, i) => {
    const s = G.scores[t];
    return `<div class="score-card${i === G.turn ? ' active' : ''}"><div class="sc-name">${esc(t)}</div><div class="sc-pts${s < 0 ? ' neg' : ''}">${s < 0 ? '-' : ''}${Math.abs(s)}</div></div>`;
  }).join('');
}

function refreshBanner() {
  document.getElementById('turn-banner').textContent = G.teams[G.turn] + "'s turn to pick";
}

// ── MULTIPLE CHOICE ───────────────────────────────────────────
function buildChoices(q) {
  const options = [q.answer, ...q.choices].sort(() => Math.random() - 0.5);
  const letters = ['A','B','C','D'];
  return options.map((text, i) => ({ letter: letters[i], text, isCorrect: text === q.answer }));
}

function renderMCGrid(choices) {
  return '<div class="mc-grid">' + choices.map((c, i) =>
    `<button class="mc-btn" id="mc-btn-${i}" onclick="selectChoice(${i})"><span class="mc-letter">${c.letter}</span><span>${esc(c.text)}</span></button>`
  ).join('') + '</div>';
}

function selectChoice(idx) {
  stopTimer(); stopThink();
  const { q, pts } = G.cur, choices = G.cur.choices, isCorrect = choices[idx].isCorrect;
  choices.forEach((c, i) => {
    const btn = document.getElementById('mc-btn-' + i);
    if (btn) {
      btn.disabled = true;
      if (c.isCorrect) btn.classList.add('correct');
      else if (i === idx && !isCorrect) btn.classList.add('wrong');
    }
  });
  const res = document.getElementById('m-result');
  res.style.display = 'block';
  if (isCorrect) {
    res.className = 'm-result correct';
    res.textContent = '✓ CORRECT! +' + pts + ' pts';
    sndCorrect();
  } else {
    res.className = 'm-result wrong';
    res.textContent = '✗ WRONG! −' + pts + ' pts';
    sndWrong();
  }
  document.getElementById('m-answer').textContent = '✓ ' + q.answer;
  document.getElementById('m-answer').style.display = 'block';
  G.cur._autoCorrect = isCorrect;
  const cont = document.getElementById('mc-continue');
  if (cont) cont.style.display = 'inline-block';
}

function timeOutMC() {
  const { q, pts } = G.cur, choices = G.cur.choices || [];
  choices.forEach((c, i) => {
    const btn = document.getElementById('mc-btn-' + i);
    if (btn) { btn.disabled = true; if (c.isCorrect) btn.classList.add('correct'); }
  });
  const res = document.getElementById('m-result');
  res.style.display = 'block';
  res.className = 'm-result wrong';
  res.textContent = "⏱ TIME'S UP! −" + pts + ' pts';
  sndWrong();
  document.getElementById('m-answer').textContent = '✓ ' + q.answer;
  document.getElementById('m-answer').style.display = 'block';
  G.cur._autoCorrect = false;
  const cont = document.getElementById('mc-continue');
  if (cont) cont.style.display = 'inline-block';
}

// ── QUESTION MODAL ────────────────────────────────────────────
function openQ(ci, pts, pi, isDD) {
  if (G.used.has(`${ci}-${pts}`)) return;
  const q = G.questions[ci][pts];
  G.cur = { ci, pts, pi, key: `${ci}-${pts}`, isDD, q };

  document.getElementById('m-cat').textContent = G.cats[ci];
  document.getElementById('m-badge').textContent = G.cfg.bases[pi] + ' — ' + pts + ' pts';
  document.getElementById('m-clue').textContent = q.clue;
  document.getElementById('m-answer').style.display = 'none';
  document.getElementById('m-answer').textContent = '';
  document.getElementById('m-dd').textContent = G.cfg.ddName;
  document.getElementById('m-dd').style.display = isDD ? 'block' : 'none';

  const res = document.getElementById('m-result');
  res.style.display = 'none';
  res.textContent = '';
  res.className = 'm-result';

  if (G.mode === 'typeanswer') {
    document.getElementById('m-input-row').style.display = 'none';
    G.cur.choices = buildChoices(q);
    document.getElementById('m-btns').innerHTML = renderMCGrid(G.cur.choices) +
      '<div class="mc-continue-row"><button class="btn btn-reveal" id="mc-continue" onclick="autoScore()" style="display:none">Continue →</button></div>';
  } else {
    document.getElementById('m-input-row').style.display = 'none';
    document.getElementById('m-btns').innerHTML = '<button class="btn btn-reveal" onclick="revealAns()">Reveal Answer</button>';
  }

  if (isDD) sndDD(); else sndTileSelect();
  startTimer(G.mode === 'typeanswer' ? 20 : 30);
  startThink();
  document.getElementById('q-overlay').classList.add('open');
}

function revealAns() {
  stopTimer(); stopThink(); sndReveal();
  const { q, pts } = G.cur;
  const ans = document.getElementById('m-answer');
  ans.textContent = '✓ ' + q.answer;
  ans.style.display = 'block';
  document.getElementById('m-btns').innerHTML =
    `<button class="btn btn-ok" onclick="score(true)">✓ Correct (+${pts})</button>
     <button class="btn btn-bad" onclick="score(false)">✗ Wrong (−${pts})</button>
     <button class="btn btn-pass" onclick="score(null)">→ Pass (±0)</button>`;
}

function score(correct) {
  const { key, pts } = G.cur, team = G.teams[G.turn];
  if (correct === true) { G.scores[team] += pts; sndCorrect(); }
  if (correct === false) { G.scores[team] -= pts; sndWrong(); }
  G.used.add(key);
  const tile = document.getElementById('tile-' + key);
  if (tile) tile.classList.add('used');
  G.turn = (G.turn + 1) % G.teams.length;
  document.getElementById('q-overlay').classList.remove('open');
  stopTimer(); stopThink(); refreshScores(); refreshBanner();
  if (G.used.size >= PTS.length * G.cols) setTimeout(goFinal, 400);
}

function autoScore() {
  const { key, pts } = G.cur, team = G.teams[G.turn];
  if (G.cur._autoCorrect) G.scores[team] += pts; else G.scores[team] -= pts;
  G.used.add(key);
  const tile = document.getElementById('tile-' + key);
  if (tile) tile.classList.add('used');
  G.turn = (G.turn + 1) % G.teams.length;
  document.getElementById('q-overlay').classList.remove('open');
  stopTimer(); stopThink(); refreshScores(); refreshBanner();
  if (G.used.size >= PTS.length * G.cols) setTimeout(goFinal, 400);
}

// ── ANSWER CHECKING ───────────────────────────────────────────
function checkAnswer(userAns, accept) {
  if (!userAns || !accept || !accept.length) return false;
  const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
  const uw = new Set(norm(userAns).split(' ').filter(Boolean));
  return accept.some(kw => {
    const kw2 = norm(kw).split(' ').filter(Boolean);
    return kw2.length > 0 && kw2.every(w => uw.has(w));
  });
}

// ── TIMER ─────────────────────────────────────────────────────
function startTimer(secs) {
  stopTimer();
  let rem = secs;
  setTimerDisplay(rem, secs);
  G.timer = setInterval(() => {
    rem--;
    setTimerDisplay(rem, secs);
    if (rem <= 5 && rem > 0) sndTick();
    if (rem <= 0) {
      stopTimer(); stopThink();
      if (G.mode === 'typeanswer') timeOutMC(); else revealAns();
    }
  }, 1000);
}

function stopTimer() {
  if (G.timer) { clearInterval(G.timer); G.timer = null; }
}

function setTimerDisplay(rem, total) {
  const r = Math.max(0, rem);
  document.getElementById('m-time').textContent = ':' + String(r).padStart(2, '0');
  document.getElementById('m-bar').style.width = (r / total * 100) + '%';
  document.getElementById('m-bar').style.background = r <= 5
    ? 'linear-gradient(90deg,#cc2200,#ff2200)'
    : 'linear-gradient(90deg,var(--gold),var(--red))';
}

// ── THINK MUSIC ───────────────────────────────────────────────
let thinkPhase = 0;

function startThink() {
  stopThink();
  thinkPhase = 0;
  const n = [392, 370, 349, 330, 349, 370];
  G.thinkTimer = setInterval(() => {
    tone(n[thinkPhase % n.length], 0.11, 'sine', 0.14);
    thinkPhase++;
  }, 480);
}

function stopThink() {
  if (G.thinkTimer) { clearInterval(G.thinkTimer); G.thinkTimer = null; }
}

// ── FINAL ROUND ───────────────────────────────────────────────
function goFinal() {
  stopTimer(); stopThink();
  document.getElementById('q-overlay').classList.remove('open');
  sndFanfare();
  show('s-final');
  renderWagerPhase();
}

function renderWagerPhase() {
  const F = G.final;
  document.getElementById('f-content').innerHTML = `
    <div class="final-cat">Category: <strong>"${F.category}"</strong></div>
    <div class="divider"><span>✦ ✦ ✦</span></div>
    <p style="font-family:'Oswald',sans-serif;color:var(--cream);font-size:.8rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:14px">Enter your wager — up to your current score:</p>
    ${G.teams.map((t, i) => {
      const s = G.scores[t], max = Math.max(0, s), def = Math.max(0, Math.floor(s / 2));
      return `<div class="wager-row"><div class="wr-name">${esc(t)}</div><div class="wr-score">${s} pts</div>
      <input class="wr-input" id="w${i}" type="number" min="0" max="${max}" value="${def}"></div>`;
    }).join('')}
    <button class="play-btn" onclick="showFinalQ()" style="margin-top:18px;font-size:1.35rem;padding:10px 40px">Reveal the Question</button>`;
}

function showFinalQ() {
  const F = G.final;
  G.teams.forEach((t, i) => {
    const el = document.getElementById('w' + i), max = Math.max(0, G.scores[t]);
    G.finalWagers[t] = Math.min(max, Math.max(0, parseInt(el ? el.value : 0) || 0));
  });
  G.finalApplied = new Set();
  startThink();
  let rem = 30;

  const inputsHTML = G.mode === 'typeanswer'
    ? `<div style="margin:4px 0 14px">${G.teams.map((t, i) => `
        <div style="margin-bottom:10px;text-align:left">
          <div style="font-family:'Oswald',sans-serif;color:var(--cream);font-size:.73rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">${esc(t)} — Wager: ${G.finalWagers[t]}</div>
          <input id="fa${i}" type="text" class="ans-input" placeholder="Type your answer..."
            autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false"
            style="font-size:.98rem;padding:10px 13px" onkeydown="if(event.key==='Enter')submitFinalAnswers()">
        </div>`).join('')}
      </div>
      <button class="play-btn" onclick="submitFinalAnswers()" style="font-size:1.3rem;padding:10px 40px">Submit Answers</button>`
    : `<button class="play-btn" onclick="showFinalAns()" style="font-size:1.3rem;padding:10px 40px">Reveal Answer</button>`;

  document.getElementById('f-content').innerHTML = `
    <div class="final-cat">Category: <strong>"${F.category}"</strong></div>
    <div class="divider"><span>✦ ✦ ✦</span></div>
    <p style="font-family:'Special Elite',serif;color:white;font-size:clamp(.95rem,1.8vw,1.3rem);line-height:1.6;margin:12px 0 14px">${F.clue}</p>
    <div id="ft-num" style="font-family:'Bebas Neue',Impact,sans-serif;color:var(--cream);font-size:1.3rem;margin-bottom:5px">:30</div>
    <div class="timer-track" style="margin-bottom:16px"><div class="timer-fill" id="ft-bar"></div></div>
    ${inputsHTML}`;

  if (G.mode === 'typeanswer') {
    setTimeout(() => { const f = document.getElementById('fa0'); if (f) f.focus(); }, 120);
  }

  function tick() {
    rem--;
    const el = document.getElementById('ft-num'), bar = document.getElementById('ft-bar');
    if (!el) return;
    el.textContent = ':' + String(Math.max(0, rem)).padStart(2, '0');
    if (bar) bar.style.width = (Math.max(0, rem) / 30 * 100) + '%';
    if (rem <= 10 && rem > 0) sndTick();
    if (rem <= 0) {
      clearInterval(finalTimerRef);
      stopThink();
      if (G.mode === 'typeanswer') submitFinalAnswers(); else showFinalAns();
    }
  }
  finalTimerRef = setInterval(tick, 1000);
}

function submitFinalAnswers() {
  if (finalTimerRef) { clearInterval(finalTimerRef); finalTimerRef = null; }
  stopThink(); sndReveal();
  const F = G.final;
  const results = G.teams.map((t, i) => {
    const input = document.getElementById('fa' + i);
    const userAns = (input ? input.value : '').trim();
    const correct = checkAnswer(userAns, F.accept);
    const wager = G.finalWagers[t];
    if (correct) G.scores[t] += wager; else G.scores[t] -= wager;
    return { team: t, userAns, correct, wager };
  });
  document.getElementById('f-content').innerHTML = `
    <div class="final-cat">Category: <strong>"${F.category}"</strong></div>
    <div class="m-answer" style="display:block;margin:12px 0">✓ ${F.answer}</div>
    <div style="margin-bottom:16px">
      ${results.map(r => `
        <div class="wager-row" style="flex-direction:column;align-items:flex-start;gap:4px">
          <div style="display:flex;justify-content:space-between;width:100%;align-items:center">
            <div class="wr-name">${esc(r.team)}</div>
            <div style="font-family:'Bebas Neue',Impact,sans-serif;font-size:1.05rem;color:${r.correct ? '#4aee4a' : '#cc2200'}">
              ${r.correct ? '✓ +' + r.wager + ' pts' : '✗ −' + r.wager + ' pts'}
            </div>
          </div>
          <div style="font-family:'Special Elite',serif;color:rgba(245,230,200,.6);font-size:.82rem;font-style:italic">
            "${esc(r.userAns) || '(no answer)'}"
          </div>
        </div>`).join('')}
    </div>
    <button class="play-btn" onclick="showWinner()" style="font-size:1.3rem;padding:10px 40px">See Final Scores 🏆</button>`;
}

function showFinalAns() {
  if (finalTimerRef) { clearInterval(finalTimerRef); finalTimerRef = null; }
  stopThink(); sndReveal();
  const F = G.final;
  document.getElementById('f-content').innerHTML = `
    <div class="final-cat">Category: <strong>"${F.category}"</strong></div>
    <div class="m-answer" style="display:block;margin:12px 0">✓ ${F.answer}</div>
    <p style="font-family:'Oswald',sans-serif;color:var(--cream);font-size:.78rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px">Score each team's answer:</p>
    <div id="final-score-rows"></div>
    <button class="play-btn" onclick="showWinner()" style="margin-top:20px;font-size:1.3rem;padding:10px 40px">See Final Scores 🏆</button>`;
  const wrap = document.getElementById('final-score-rows');
  G.teams.forEach((t, i) => {
    const w = G.finalWagers[t], row = document.createElement('div');
    row.className = 'wager-row';
    row.innerHTML = `<div class="wr-name">${esc(t)} <span style="opacity:.45;font-size:.7rem">(wagered ${w})</span></div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-ok" id="fok${i}" onclick="applyFinal(${i},true)" style="font-size:.76rem;padding:7px 12px">✓ +${w}</button>
        <button class="btn btn-bad" id="fbad${i}" onclick="applyFinal(${i},false)" style="font-size:.76rem;padding:7px 12px">✗ −${w}</button>
      </div>`;
    wrap.appendChild(row);
  });
}

function applyFinal(idx, correct) {
  if (G.finalApplied.has(idx)) return;
  G.finalApplied.add(idx);
  const t = G.teams[idx], w = G.finalWagers[t];
  if (correct) { G.scores[t] += w; sndCorrect(); } else { G.scores[t] -= w; sndWrong(); }
  ['fok','fbad'].forEach(p => {
    const b = document.getElementById(p + idx);
    if (b) { b.disabled = true; b.style.opacity = '.35'; }
  });
}

// ── WINNER SCREEN ─────────────────────────────────────────────
function showWinner() {
  const sorted = [...G.teams].sort((a, b) => G.scores[b] - G.scores[a]);
  const champ = sorted[0], champScore = G.scores[champ];
  document.getElementById('w-name').textContent = champ;
  document.getElementById('w-score').textContent = 'Final Score: ' + champScore + ' points';
  document.getElementById('w-board').innerHTML = sorted.map((t, i) => {
    const s = G.scores[t];
    return `<div class="score-row${i === 0 ? ' top' : ''}"><div class="sr-name">${i === 0 ? '🏆 ' : ''}${esc(t)}</div><div class="sr-pts${s < 0 ? ' neg' : ''}">${s < 0 ? '-' : ''}${Math.abs(s)}</div></div>`;
  }).join('');
  show('s-winner');
  confetti();
  setTimeout(sndVictory, 200);
}

// ── CONFETTI + RESET ──────────────────────────────────────────
function confetti() {
  const cols = ['#d4a017','#cc2200','#1a3a6e','#2d8a2d','#ffffff','#f5e6c8','#ffcc44'];
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti';
      const w = 6 + Math.random() * 8, h = 8 + Math.random() * 10;
      el.style.cssText = `left:${Math.random()*100}vw;top:-30px;width:${w}px;height:${h}px;background:${cols[Math.floor(Math.random()*cols.length)]};border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${2+Math.random()*2.5}s;animation-delay:${Math.random()*.4}s;`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 5000);
    }, i * 28);
  }
}

function resetGame() {
  stopTimer(); stopThink();
  if (finalTimerRef) { clearInterval(finalTimerRef); finalTimerRef = null; }
  G = {};
  show('s-setup');
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── SOUND ENGINE (iOS-compatible) ─────────────────────────────
function ac() {
  if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
  if (AC.state === 'suspended') AC.resume();
  return AC;
}

function tone(freq, dur, type = 'sine', vol = 0.3) {
  try {
    const ctx = ac(), o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = type;
    o.frequency.setValueAtTime(freq, ctx.currentTime);
    g.gain.setValueAtTime(vol, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.start(); o.stop(ctx.currentTime + dur + 0.01);
  } catch(e) {}
}

function sndPlayBall() {
  const n = [262, 330, 392, 523, 659, 784, 1047];
  n.forEach((f, i) => setTimeout(() => tone(f, 0.13, 'square', 0.18), i * 68));
}

function sndTileSelect() {
  try {
    const ctx = ac(), o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination); o.type = 'sine';
    o.frequency.setValueAtTime(340, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(1080, ctx.currentTime + 0.22);
    g.gain.setValueAtTime(0.02, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.08);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.42);
    o.start(); o.stop(ctx.currentTime + 0.46);
    setTimeout(() => tone(1047, 0.38, 'sine', 0.17), 185);
  } catch(e) {}
}

function sndCorrect() {
  [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.28, 'sine', 0.35), i * 90));
}

function sndWrong() {
  try {
    const ctx = ac(), o = ctx.createOscillator(), g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination); o.type = 'sawtooth';
    o.frequency.setValueAtTime(220, ctx.currentTime);
    o.frequency.linearRampToValueAtTime(70, ctx.currentTime + 0.55);
    g.gain.setValueAtTime(0.4, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
    o.start(); o.stop(ctx.currentTime + 0.6);
  } catch(e) {}
}

function sndReveal() {
  tone(440, 0.09, 'sine', 0.28);
  setTimeout(() => tone(554, 0.14, 'sine', 0.28), 90);
}

function sndTick() { tone(900, 0.04, 'square', 0.09); }

function sndDD() {
  [261, 330, 392, 523, 659, 784, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.18, 'triangle', 0.38), i * 75));
}

function sndFanfare() {
  const ns = [523, 523, 523, 415, 523, 622, 784], ds = [.14, .05, .14, .05, .14, .14, .38];
  let t = 0;
  ns.forEach((f, i) => { setTimeout(() => tone(f, ds[i], 'sine', .35), t * 1000); t += ds[i] + 0.02; });
}

function sndVictory() {
  [523, 659, 784, 1047, 784, 1047, 1175].forEach((f, i) => setTimeout(() => tone(f, 0.28, 'sine', 0.38), i * 140));
}

// ── iOS SPECIFIC FIXES ────────────────────────────────────────
// iOS AudioContext unlock on first touch
document.addEventListener('touchstart', function unlock() {
  ac();
  document.removeEventListener('touchstart', unlock);
}, { once: true });

// Restore saved theme on page load
(function() {
  if (localStorage.getItem('bj-theme') === 'night') {
    document.body.classList.add('night');
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.textContent = '☀️';
  }
})();

// ── INITIALIZATION ────────────────────────────────────────────
setSport('baseball');
setDiff(1);
setCols(4);
setMode('inperson');
