const content=document.getElementById("content");
const title=document.getElementById("sectionTitle");
const tools=document.querySelectorAll(".tool");
const grades=document.querySelectorAll("[data-grade]");
const clearBtn=document.getElementById("clearBtn");

const lessons={
 overview:{title:"Геометрия · 8 клас",html:`
  <div class="card"><div class="hero">Геометрична работна дъска</div>
  <p class="lead">Избирай тема отляво. Материалът е подготвен за показване на интерактивна дъска и работа с учениците.</p>
  <div class="tiles">
   <div class="tile"><h3>Триъгълник</h3><p>Основни елементи и построения.</p></div>
   <div class="tile"><h3>Медиани</h3><p>Медиана, пресечна точка и свойства.</p></div>
   <div class="tile"><h3>Тежестен център</h3><p>Съотношението 2 : 1 и визуален модел.</p></div>
   <div class="tile"><h3>Ъгли</h3><p>Работа с означения и зависимости.</p></div>
  </div></div>`},
 triangle:{title:"Триъгълник",html:`<div class="card"><div class="hero">Елементи на триъгълника</div><p class="lead">Върхове A, B, C; страни AB, BC, CA; ъгли ∠A, ∠B, ∠C.</p>
  <div class="diagram"><svg viewBox="0 0 600 320"><polygon points="300,35 80,270 520,270" fill="none" stroke="currentColor" stroke-width="5"/><text x="292" y="28" font-size="24">A</text><text x="55" y="292" font-size="24">B</text><text x="525" y="292" font-size="24">C</text></svg></div></div>`},
 medians:{title:"Медиани",html:`<div class="card"><div class="hero">Медиани в триъгълник</div><p class="lead">Медиана е отсечката, която свързва връх със средата на срещуположната страна.</p>
  <div class="diagram"><svg viewBox="0 0 600 340"><polygon points="300,30 80,285 520,285" fill="none" stroke="currentColor" stroke-width="5"/><line x1="300" y1="30" x2="300" y2="285" stroke="currentColor" stroke-width="4"/><circle cx="300" cy="200" r="7" fill="currentColor"/><text x="310" y="195" font-size="22">G</text><text x="292" y="25" font-size="22">A</text><text x="58" y="310" font-size="22">B</text><text x="525" y="310" font-size="22">C</text></svg></div>
  <p><b>Важно:</b> трите медиани се пресичат в една точка.</p></div>`},
 centroid:{title:"Тежестен център",html:`<div class="card"><div class="hero">Тежестен център G</div><p class="lead">Точката G е общата пресечна точка на трите медиани.</p><div class="formula">AG : GM = 2 : 1</div><div class="diagram"><svg viewBox="0 0 600 340"><polygon points="300,30 80,285 520,285" fill="none" stroke="currentColor" stroke-width="5"/><line x1="300" y1="30" x2="300" y2="285" stroke="currentColor" stroke-width="4"/><circle cx="300" cy="200" r="9" fill="currentColor"/><text x="312" y="195" font-size="24">G</text><text x="315" y="125" font-size="20">2 части</text><text x="315" y="250" font-size="20">1 част</text></svg></div></div>`},
 angles:{title:"Ъгли",html:`<div class="card"><div class="hero">Ъгли в триъгълник</div><p class="lead">Сборът на трите вътрешни ъгъла на всеки триъгълник е 180°.</p><div class="formula">∠A + ∠B + ∠C = 180°</div></div>`},
 pythagoras:{title:"Питагорова теорема",html:`<div class="card"><div class="hero">Питагорова теорема</div><p class="lead">В правоъгълен триъгълник квадратът на хипотенузата е равен на сбора от квадратите на катетите.</p><div class="formula">c² = a² + b²</div></div>`}
};

function show(key){const l=lessons[key]||lessons.overview; title.textContent=l.title; content.innerHTML=l.html; tools.forEach(b=>b.classList.toggle("active",b.dataset.tool===key));}
tools.forEach(b=>b.addEventListener("click",()=>show(b.dataset.tool)));
grades.forEach(b=>b.addEventListener("click",()=>{grades.forEach(x=>x.classList.remove("active"));b.classList.add("active");if(b.dataset.grade==="8")show("overview");else{title.textContent=b.dataset.grade+" клас";content.innerHTML='<div class="card"><div class="hero">'+b.dataset.grade+' клас</div><p class="lead">Разделът ще бъде добавен в следващата версия.</p></div>';}}));
clearBtn.addEventListener("click",()=>{content.innerHTML="";title.textContent="Празна работна дъска";});
show("overview");
