
const MOVES = [
  {
    "num": 1,
    "name": "Commencing Form",
    "chinese": "起势",
    "pinyin": "Qǐ Shì",
    "simple": "Stand upright, soften the knees, raise both arms to shoulder height, then lower them calmly.",
    "transition": "Stillness → arms rise → arms lower.",
    "body": [
      "Feet shoulder-width",
      "shoulders drop",
      "arms float up and press down",
      "weight centred."
    ],
    "memory": "The door into the whole form.",
    "breath": "Inhale up, exhale down.",
    "common": "Lifting shoulders or locking knees.",
    "gif": "./assets/move-01.gif"
  },
  {
    "num": 2,
    "name": "Part the Wild Horse’s Mane",
    "chinese": "左右野马分鬃",
    "pinyin": "Zuǒ Yòu Yě Mǎ Fēn Zōng",
    "simple": "Step out and separate the hands as if parting a horse’s mane. Repeat left and right.",
    "transition": "Gather ball → step → shift → open.",
    "body": [
      "Hold a ball",
      "heel lands first",
      "one hand rises, one hand settles",
      "torso upright."
    ],
    "memory": "Ball, step, open.",
    "breath": "Inhale gather, exhale open.",
    "common": "Opening before the weight arrives.",
    "gif": "./assets/move-02.gif"
  },
  {
    "num": 3,
    "name": "White Crane Spreads Its Wings",
    "chinese": "白鹤亮翅",
    "pinyin": "Bái Hè Liàng Chì",
    "simple": "Shift back and open one hand high, one hand low, like a crane spreading its wings.",
    "transition": "Step in lightly and separate high-low.",
    "body": [
      "Upper hand protects temple line",
      "lower hand settles",
      "front foot light",
      "chest relaxed."
    ],
    "memory": "Horizontal opening becomes vertical high-low.",
    "breath": "Exhale into the shape.",
    "common": "Leaning back or making it too big.",
    "gif": "./assets/move-03.gif"
  },
  {
    "num": 4,
    "name": "Brush Knee and Push",
    "chinese": "左右搂膝拗步",
    "pinyin": "Zuǒ Yòu Lōu Xī Ào Bù",
    "simple": "Brush one hand past the knee while the other pushes forward. Repeat sides.",
    "transition": "Circle hands → step → brush low and push high.",
    "body": [
      "Push from centre",
      "brush past knee",
      "knee tracks toes",
      "back heel rooted."
    ],
    "memory": "Brush low, push high.",
    "breath": "Inhale circle, exhale push.",
    "common": "Pushing with shoulder only.",
    "gif": "./assets/move-04.gif"
  },
  {
    "num": 5,
    "name": "Play the Lute",
    "chinese": "手挥琵琶",
    "pinyin": "Shǒu Huī Pí Pá",
    "simple": "Shift back into empty stance with both hands raised as if holding a lute.",
    "transition": "Draw front foot in and settle back.",
    "body": [
      "Front foot light",
      "hands frame instrument",
      "elbows soft",
      "spine vertical."
    ],
    "memory": "A pause-shape after forward push.",
    "breath": "Let breath settle.",
    "common": "Too much weight on front foot.",
    "gif": "./assets/move-05.gif"
  },
  {
    "num": 6,
    "name": "Repulse Monkey",
    "chinese": "左右倒卷肱",
    "pinyin": "Zuǒ Yòu Dào Juǎn Gōng",
    "simple": "Step backward while one hand pushes forward and the other withdraws.",
    "transition": "Draw one hand back → step behind → push.",
    "body": [
      "Step back carefully",
      "front hand pushes",
      "rear hand withdraws",
      "eyes forward."
    ],
    "memory": "First backward travelling section.",
    "breath": "Inhale draw, exhale push.",
    "common": "Looking down or stepping too narrow.",
    "gif": "./assets/move-06.gif"
  },
  {
    "num": 7,
    "name": "Grasp the Bird’s Tail — Left",
    "chinese": "左揽雀尾",
    "pinyin": "Zuǒ Lǎn Què Wěi",
    "simple": "Ward off, rollback, press and push on the left side.",
    "transition": "Turn and gather into the four-energy phrase.",
    "body": [
      "Ward off rounded",
      "rollback from waist",
      "press connected",
      "push after sinking."
    ],
    "memory": "Ward off → rollback → press → push.",
    "breath": "Natural, exhale on final push.",
    "common": "Making four disconnected poses.",
    "gif": "./assets/move-07.gif"
  },
  {
    "num": 8,
    "name": "Grasp the Bird’s Tail — Right",
    "chinese": "右揽雀尾",
    "pinyin": "Yòu Lǎn Què Wěi",
    "simple": "Repeat ward off, rollback, press and push on the right side.",
    "transition": "Turn through centre and repeat right.",
    "body": [
      "Waist turns first",
      "structure rounded",
      "do not overreach",
      "weight shifts smooth."
    ],
    "memory": "Same four energies, other side.",
    "breath": "Let weight shifts guide breath.",
    "common": "Losing balance in the turn.",
    "gif": "./assets/move-08.gif"
  },
  {
    "num": 9,
    "name": "Single Whip",
    "chinese": "单鞭",
    "pinyin": "Dān Biān",
    "simple": "Form hook hand on one side and extend the other palm outward.",
    "transition": "Turn, form hook, step out, open palm.",
    "body": [
      "Hook relaxed",
      "palm extends from centre",
      "stance wide but soft",
      "eyes to palm."
    ],
    "memory": "Hook hand + open palm.",
    "breath": "Exhale into extension.",
    "common": "Tensing the hook or locking knee.",
    "gif": "./assets/move-09.gif"
  },
  {
    "num": 10,
    "name": "Wave Hands Like Clouds",
    "chinese": "云手",
    "pinyin": "Yún Shǒu",
    "simple": "Step sideways while hands circle like clouds across the body.",
    "transition": "Turn inward and side-step with continuous circles.",
    "body": [
      "Waist leads hands",
      "side-close-side",
      "palms face inward",
      "shoulders relaxed."
    ],
    "memory": "Travelling side-step loop.",
    "breath": "Smooth continuous breath.",
    "common": "Arms moving without waist.",
    "gif": "./assets/move-10.gif"
  },
  {
    "num": 11,
    "name": "Single Whip",
    "chinese": "单鞭",
    "pinyin": "Dān Biān",
    "simple": "Return to hook hand and extended palm after Cloud Hands.",
    "transition": "Clouds resolve into hook-and-palm.",
    "body": [
      "Finish travel before opening",
      "hook first",
      "palm opens as weight settles."
    ],
    "memory": "Clouds end with Single Whip.",
    "breath": "Exhale as palm opens.",
    "common": "Rushing out of Cloud Hands.",
    "gif": "./assets/move-11.gif"
  },
  {
    "num": 12,
    "name": "High Pat on Horse",
    "chinese": "高探马",
    "pinyin": "Gāo Tàn Mǎ",
    "simple": "Step in and raise one hand forward as if patting a horse high on the neck.",
    "transition": "Draw in and narrow the stance.",
    "body": [
      "Back hand draws in",
      "forward hand rises",
      "front foot light",
      "chest relaxed."
    ],
    "memory": "Big shape narrows and becomes compact.",
    "breath": "Settle inward.",
    "common": "Making it too aggressive.",
    "gif": "./assets/move-12.gif"
  },
  {
    "num": 13,
    "name": "Right Heel Kick",
    "chinese": "右蹬脚",
    "pinyin": "Yòu Dēng Jiǎo",
    "simple": "Gather, lift knee, separate hands and extend the right heel kick.",
    "transition": "Gather → lift → separate → heel.",
    "body": [
      "Balance first",
      "heel not toes",
      "standing knee soft",
      "hands separate."
    ],
    "memory": "First clear kick.",
    "breath": "Exhale as kick extends.",
    "common": "Kicking too high.",
    "gif": "./assets/move-13.gif"
  },
  {
    "num": 14,
    "name": "Strike Ears with Both Fists",
    "chinese": "双峰贯耳",
    "pinyin": "Shuāng Fēng Guàn Ěr",
    "simple": "Step down and bring both fists forward as if striking toward the ears.",
    "transition": "Land softly after kick, circle fists forward.",
    "body": [
      "Both fists arc together",
      "elbows rounded",
      "shoulders relaxed."
    ],
    "memory": "Kick resolves into double-fist strike.",
    "breath": "Exhale into fists.",
    "common": "Dropping heavily.",
    "gif": "./assets/move-14.gif"
  },
  {
    "num": 15,
    "name": "Turn and Left Heel Kick",
    "chinese": "转身左蹬脚",
    "pinyin": "Zhuǎn Shēn Zuǒ Dēng Jiǎo",
    "simple": "Turn, gather, lift and extend the left heel kick.",
    "transition": "Turn first, then gather and kick.",
    "body": [
      "Complete turn",
      "standing leg soft",
      "hands separate",
      "eyes follow kick."
    ],
    "memory": "Same kick idea after a turn.",
    "breath": "Inhale turn, exhale kick.",
    "common": "Kicking before turn completes.",
    "gif": "./assets/move-15.gif"
  },
  {
    "num": 16,
    "name": "Snake Creeps Down and Golden Rooster — Left",
    "chinese": "左下势独立",
    "pinyin": "Zuǒ Xià Shì Dú Lì",
    "simple": "Sink low like Snake Creeps Down, then rise into one-legged Golden Rooster.",
    "transition": "Step out, sink, then rise into balance.",
    "body": [
      "Only sink safely",
      "spine long",
      "rise from leg and centre",
      "hand lifts with knee."
    ],
    "memory": "Low snake → high rooster.",
    "breath": "Exhale sink, settle as rise.",
    "common": "Forcing low stance.",
    "gif": "./assets/move-16.gif"
  },
  {
    "num": 17,
    "name": "Snake Creeps Down and Golden Rooster — Right",
    "chinese": "右下势独立",
    "pinyin": "Yòu Xià Shì Dú Lì",
    "simple": "Repeat the low snake and one-legged rooster on the other side.",
    "transition": "Shift into right-side version.",
    "body": [
      "Control transition",
      "knee tracks foot",
      "rise smoothly",
      "upper body calm."
    ],
    "memory": "Completes the left/right pair.",
    "breath": "Steady breath.",
    "common": "Holding breath.",
    "gif": "./assets/move-17.gif"
  },
  {
    "num": 18,
    "name": "Fair Lady Works at Shuttles",
    "chinese": "左右穿梭",
    "pinyin": "Zuǒ Yòu Chuān Suō",
    "simple": "Step diagonally and coordinate one hand up, one hand forward like working a loom.",
    "transition": "Step diagonally to corners.",
    "body": [
      "Diagonal footwork",
      "upper hand protects",
      "forward hand pushes",
      "waist connects arms."
    ],
    "memory": "Diagonal corners, shuttle hands.",
    "breath": "Exhale into each diagonal.",
    "common": "Losing diagonal direction.",
    "gif": "./assets/move-18.gif"
  },
  {
    "num": 19,
    "name": "Needle at Sea Bottom",
    "chinese": "海底针",
    "pinyin": "Hǎi Dǐ Zhēn",
    "simple": "Step in and lower one hand as if reaching for a needle at the sea bottom.",
    "transition": "Draw in, empty front foot, sink hand downward.",
    "body": [
      "Front foot light",
      "reach down without collapsing",
      "neck long."
    ],
    "memory": "Energy drops downward.",
    "breath": "Exhale down softly.",
    "common": "Rounding the back.",
    "gif": "./assets/move-19.gif"
  },
  {
    "num": 20,
    "name": "Fan Through the Back",
    "chinese": "闪通臂",
    "pinyin": "Shǎn Tōng Bì",
    "simple": "Rise from Needle and open one hand high, one hand forward.",
    "transition": "Low Needle → rise into open shape.",
    "body": [
      "Rise from legs",
      "high hand guards",
      "forward palm expresses",
      "back broad."
    ],
    "memory": "Low becomes high open Fan.",
    "breath": "Inhale rise, exhale open.",
    "common": "Throwing arms.",
    "gif": "./assets/move-20.gif"
  },
  {
    "num": 21,
    "name": "Turn, Deflect, Parry and Punch",
    "chinese": "转身搬拦捶",
    "pinyin": "Zhuǎn Shēn Bān Lán Chuí",
    "simple": "Turn, deflect, parry and finish with a punch.",
    "transition": "Turn body and organise hands into punch phrase.",
    "body": [
      "Turn first",
      "deflect/parry distinct",
      "punch from centre",
      "elbow not locked."
    ],
    "memory": "Turn → deflect → parry → punch.",
    "breath": "Exhale punch.",
    "common": "Forgetting the setup.",
    "gif": "./assets/move-21.gif"
  },
  {
    "num": 22,
    "name": "Apparent Close Up",
    "chinese": "如封似闭",
    "pinyin": "Rú Fēng Sì Bì",
    "simple": "Withdraw the hands, close, then push forward as if sealing.",
    "transition": "Open fist, withdraw, close and push.",
    "body": [
      "Draw back without leaning",
      "hands close centre",
      "push with body weight",
      "wrists soft."
    ],
    "memory": "After punch: withdraw, seal, push.",
    "breath": "Inhale withdraw, exhale push.",
    "common": "Rushing because end is near.",
    "gif": "./assets/move-22.gif"
  },
  {
    "num": 23,
    "name": "Cross Hands",
    "chinese": "十字手",
    "pinyin": "Shí Zì Shǒu",
    "simple": "Turn to face front and cross both hands in front of the chest.",
    "transition": "Turn and gather into crossed hands.",
    "body": [
      "Feet return neutral",
      "hands cross softly",
      "shoulders drop",
      "centre settles."
    ],
    "memory": "The form gathers before closing.",
    "breath": "Natural settling breath.",
    "common": "Crossing too high.",
    "gif": "./assets/move-23.gif"
  },
  {
    "num": 24,
    "name": "Closing Form",
    "chinese": "收势",
    "pinyin": "Shōu Shì",
    "simple": "Lower the hands and return to quiet standing.",
    "transition": "Separate and lower arms, return to stillness.",
    "body": [
      "Hands lower like pressing water",
      "knees soft",
      "mind centred",
      "posture remains alive."
    ],
    "memory": "Ends as it began: calm and centred.",
    "breath": "Exhale as hands lower.",
    "common": "Finishing mentally too early.",
    "gif": "./assets/move-24.gif"
  }
];
const APP_VERSION = "1.1";
const STORAGE={current:"taichiflow_current_v1",known:"taichiflow_known_v1",weak:"taichiflow_weak_v1",sessions:"taichiflow_sessions_v1"};
const state={section:"learn",index:Number(localStorage.getItem(STORAGE.current)||0),quizMove:null,timerRunning:false,timerSeconds:0,timerId:null,reveal:false};
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
const safeParse=(k,f)=>{try{const r=localStorage.getItem(k);return r?JSON.parse(r):f}catch{return f}};
const saveJSON=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const moveId=m=>String(m.num), knownSet=()=>new Set(safeParse(STORAGE.known,[])), weakSet=()=>new Set(safeParse(STORAGE.weak,[]));
function setKnown(s){saveJSON(STORAGE.known,[...s])} function setWeak(s){saveJSON(STORAGE.weak,[...s])}
function currentMove(){return MOVES[state.index]||MOVES[0]} function clamp(i){return Math.max(0,Math.min(MOVES.length-1,i))}
function go(i){state.index=clamp(i);localStorage.setItem(STORAGE.current,String(state.index));state.reveal=false;render()}
function progressPct(){return Math.round((knownSet().size/MOVES.length)*100)}
function toggleKnown(m){const s=knownSet(),id=moveId(m);s.has(id)?s.delete(id):s.add(id);setKnown(s);render()}
function toggleWeak(m){const s=weakSet(),id=moveId(m);s.has(id)?s.delete(id):s.add(id);setWeak(s);render()}
function randomMove(arr=MOVES){return arr[Math.floor(Math.random()*arr.length)]||MOVES[0]}
function newQuiz(){let pool=MOVES.slice(0,-1);const weak=[...weakSet()].map(id=>MOVES.find(m=>moveId(m)===id)).filter(m=>m&&m.num<24);if(weak.length)pool=weak;state.quizMove=randomMove(pool);state.reveal=false;render()}
function formatTime(s){return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}
function startTimer(){if(state.timerRunning)return;state.timerRunning=true;state.timerId=setInterval(()=>{state.timerSeconds++;const el=$("#timerTime");if(el)el.textContent=formatTime(state.timerSeconds)},1000);render()}
function pauseTimer(){state.timerRunning=false;clearInterval(state.timerId);state.timerId=null;render()}
function resetTimer(){pauseTimer();state.timerSeconds=0;render()}
function saveSession(){const sessions=safeParse(STORAGE.sessions,[]);sessions.unshift({at:new Date().toISOString(),seconds:state.timerSeconds,known:knownSet().size});saveJSON(STORAGE.sessions,sessions.slice(0,20));resetTimer()}
function moveCard(m,mode="full"){const known=knownSet().has(moveId(m)),weak=weakSet().has(moveId(m)),prev=MOVES[m.num-2],next=MOVES[m.num];return `<article class="move-card ${mode}"><div class="move-top"><div><div class="eyebrow">Move ${m.num} of 24 · ${esc(m.chinese)} · ${esc(m.pinyin)}</div><h2>${esc(m.name)}</h2><p class="simple">${esc(m.simple)}</p></div><div class="move-actions"><button class="pill-btn ${known?"active":""}" data-action="known" data-num="${m.num}">${known?"Known ✓":"Mark known"}</button><button class="pill-btn ${weak?"warn":""}" data-action="weak" data-num="${m.num}">${weak?"Weak ★":"Mark weak"}</button></div></div>${mode==="compact"?"":`<section class="flow-strip"><div><span>Previous</span><strong>${prev?esc(prev.name):"Start"}</strong></div><div><span>Current</span><strong>${esc(m.name)}</strong></div><div><span>Next</span><strong>${next?esc(next.name):"Finish"}</strong></div></section><section class="cue-grid"><div class="cue-card"><div class="eyebrow">Transition cue</div><p>${esc(m.transition)}</p></div><div class="cue-card"><div class="eyebrow">Breath</div><p>${esc(m.breath)}</p></div><div class="cue-card"><div class="eyebrow">Memory hook</div><p>${esc(m.memory)}</p></div><div class="cue-card"><div class="eyebrow">Common mistake</div><p>${esc(m.common)}</p></div></section><section class="body-list"><div class="eyebrow">Body cues</div><ul>${m.body.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>`}</article>`}
function renderLearn(){const m=currentMove();$("#app").innerHTML=`<section class="hero"><div><div class="eyebrow">TaichiFlow v${APP_VERSION} · Yang 24 Form</div><h1>Drill the sequence into your body.</h1><p>One move at a time. Previous, current, next. Memory hooks, transition cues and weak-point drilling.</p></div><div class="hero-stat"><strong>${progressPct()}%</strong><span>known</span></div></section><section class="stepper"><button class="nav-big" data-action="prev">← Previous</button><input id="moveRange" type="range" min="0" max="${MOVES.length-1}" value="${state.index}"><button class="nav-big" data-action="next">Next →</button></section>${moveCard(m)}<section class="sequence-bar">${MOVES.map((x,i)=>`<button class="dot ${i===state.index?"active":""} ${knownSet().has(moveId(x))?"known":""}" data-action="go" data-index="${i}" title="${esc(x.name)}">${x.num}</button>`).join("")}</section>`}
function renderSequence(){$("#app").innerHTML=`<section class="page-head"><div><h1>Full sequence</h1><p>The whole Yang 24 sequence as a clean checklist. Tap any move to study it.</p></div></section><section class="sequence-list">${MOVES.map((m,i)=>`<button class="sequence-row" data-action="go-learn" data-index="${i}"><span>${m.num}</span><div><strong>${esc(m.name)}</strong><em>${esc(m.chinese)} · ${esc(m.pinyin)}</em></div><small>${knownSet().has(moveId(m))?"Known":"Study"}</small></button>`).join("")}</section>`}
function renderDrill(){if(!state.quizMove)state.quizMove=MOVES[0];const m=state.quizMove,answer=MOVES[m.num]||null;let unique=[answer,randomMove(),randomMove(),randomMove()].filter(Boolean),seen=new Set();unique=unique.filter(o=>{if(seen.has(o.num))return false;seen.add(o.num);return true});while(unique.length<4){const r=randomMove();if(!seen.has(r.num)){seen.add(r.num);unique.push(r)}}unique.sort(()=>Math.random()-.5);$("#app").innerHTML=`<section class="page-head"><div><h1>Memory drill</h1><p>Answer from memory. This is where the sequence sticks.</p></div><button class="pill-btn" data-action="newQuiz">New question</button></section><section class="drill-card"><div class="eyebrow">What comes after move ${m.num}?</div><h2>${esc(m.name)}</h2><p>${esc(m.chinese)} · ${esc(m.pinyin)}</p><div class="quiz-options">${unique.map(o=>`<button class="quiz-btn" data-action="answer" data-correct="${answer&&o.num===answer.num?"yes":"no"}">${o.num}. ${esc(o.name)}</button>`).join("")}</div><div id="quizResult" class="quiz-result" hidden></div><button class="secondary-link" data-action="reveal">${state.reveal?"Hide answer":"Reveal answer"}</button>${state.reveal&&answer?`<div class="answer-box">Answer: <strong>${answer.num}. ${esc(answer.name)}</strong><p>${esc(answer.transition)}</p></div>`:""}</section><section class="tip-card"><strong>Better drill:</strong> after answering, physically do the previous move, current move and next move once.</section>`}
function renderPractice(){const sessions=safeParse(STORAGE.sessions,[]);$("#app").innerHTML=`<section class="page-head"><div><h1>Practice timer</h1><p>Use this for slow walkthroughs. Quality beats speed.</p></div></section><section class="timer-card"><div id="timerTime" class="timer-time">${formatTime(state.timerSeconds)}</div><div class="timer-actions">${state.timerRunning?`<button class="pill-btn active" data-action="pauseTimer">Pause</button>`:`<button class="pill-btn active" data-action="startTimer">Start</button>`}<button class="pill-btn" data-action="resetTimer">Reset</button><button class="pill-btn" data-action="saveSession">Save session</button></div></section><section class="practice-grid"><article><h2>3-minute names drill</h2><p>Say moves 1–24 without moving.</p></article><article><h2>10-minute slow form</h2><p>Perform the whole form slowly. Check only where stuck.</p></article><article><h2>Weak-point loop</h2><p>Drill previous-current-next around shaky moves.</p></article></section><section class="sessions"><h2>Recent sessions</h2>${sessions.length?sessions.map(s=>`<div><strong>${formatTime(s.seconds)}</strong><span>${new Date(s.at).toLocaleString()} · ${s.known} known</span></div>`).join(""):`<p>No saved sessions yet.</p>`}</section>`}
function renderWeak(){const weak=[...weakSet()].map(id=>MOVES.find(m=>moveId(m)===id)).filter(Boolean);$("#app").innerHTML=`<section class="page-head"><div><h1>Weak points</h1><p>Drill the transitions around these, not only the poses.</p></div></section><section class="grid">${weak.length?weak.map(m=>moveCard(m,"compact")).join(""):`<div class="empty-card">No weak points marked yet.</div>`}</section>`}
function renderAbout(){$("#app").innerHTML=`<section class="about-card"><h1>About TaichiFlow</h1><p>A memory trainer for the simplified Yang Style 24 Form. It helps you remember sequence, transitions and key cues.</p><div class="stat-grid"><div><strong>24</strong><span>moves</span></div><div><strong>${knownSet().size}</strong><span>known</span></div><div><strong>${weakSet().size}</strong><span>weak points</span></div></div><div class="notes"><p><strong>Safety:</strong> do not force low stances or high kicks. Keep knees tracking over toes.</p><p><strong>Best use:</strong> check one move, close the app, physically do previous-current-next.</p><p><strong>Default:</strong> Yang Style 24 Form. Your teacher’s version may differ slightly.</p></div></section>`}
function render(){$$(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.nav===state.section));if(state.section==="learn")renderLearn();if(state.section==="sequence")renderSequence();if(state.section==="drill")renderDrill();if(state.section==="practice")renderPractice();if(state.section==="weak")renderWeak();if(state.section==="about")renderAbout()}
function handleClick(e){const nav=e.target.closest("[data-nav]");if(nav){state.section=nav.dataset.nav;render();return}const btn=e.target.closest("[data-action]");if(!btn)return;const a=btn.dataset.action;if(a==="prev")go(state.index-1);if(a==="next")go(state.index+1);if(a==="go")go(Number(btn.dataset.index));if(a==="go-learn"){state.section="learn";go(Number(btn.dataset.index))}if(a==="known")toggleKnown(MOVES[Number(btn.dataset.num)-1]);if(a==="weak")toggleWeak(MOVES[Number(btn.dataset.num)-1]);if(a==="newQuiz")newQuiz();if(a==="reveal"){state.reveal=!state.reveal;render()}if(a==="answer"){const r=$("#quizResult"),correct=btn.dataset.correct==="yes";r.hidden=false;r.className="quiz-result "+(correct?"correct":"wrong");r.textContent=correct?"Correct. Now physically do the transition once.":"Not that one. Mark this area weak and drill previous-current-next.";if(!correct&&state.quizMove){const s=weakSet();s.add(moveId(state.quizMove));setWeak(s)}}if(a==="startTimer")startTimer();if(a==="pauseTimer")pauseTimer();if(a==="resetTimer")resetTimer();if(a==="saveSession")saveSession()}
function handleInput(e){if(e.target.id==="moveRange")go(Number(e.target.value))}
function boot(){document.body.innerHTML=`<div class="app-shell"><header class="topbar"><div class="brand"><div class="logo-mark">太</div><div><strong>TaichiFlow</strong><span>Yang 24 sequence trainer</span></div></div><nav class="nav"><button class="nav-btn active" data-nav="learn">Learn</button><button class="nav-btn" data-nav="sequence">Sequence</button><button class="nav-btn" data-nav="drill">Drill</button><button class="nav-btn" data-nav="practice">Practice</button><button class="nav-btn" data-nav="weak">Weak points</button><button class="nav-btn" data-nav="about">About</button></nav></header><main id="app"></main></div>`;document.addEventListener("click",handleClick);document.addEventListener("input",handleInput);if("serviceWorker"in navigator)navigator.serviceWorker.register("./service-worker.js").catch(()=>{});newQuiz();state.section="learn";render()}
document.addEventListener("DOMContentLoaded",boot);
