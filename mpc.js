(function(){
var host=document.getElementById('mpc-root');if(!host){host=document.createElement('div');(document.currentScript&&document.currentScript.parentNode||document.body).appendChild(host)}
if(!document.getElementById('mpc-font')){var l=document.createElement('link');l.id='mpc-font';l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&family=Unbounded:wght@600;700&display=swap';document.head.appendChild(l)}
var st=document.createElement('style');st.textContent="\n.mpc{--bg:#f4f5f8;--card:#fff;--fg:#151b26;--mut:#5f6878;--line:#e2e5eb;--acc:#5b2bd6;--good:#178a4c;--good-soft:#e5f5ec;--bad:#c4321f;--warn-soft:#fff4e0;\n  --wb:#a42bd6;--oz:#1f6fe5;--ym:#e0a100;--mv:#d42a2a;--za:#1a8f5a;\n  font-family:\"Golos Text\",Arial,sans-serif;color:var(--fg);background:var(--bg);font-size:15px;line-height:1.45;-webkit-font-smoothing:antialiased}\n.mpc *{box-sizing:border-box}\n.mpc .w{max-width:1180px;margin:0 auto;padding:32px 16px 56px;display:grid;gap:22px}\n.mpc h1,.mpc h2{font-family:\"Unbounded\",Arial,sans-serif;margin:0;letter-spacing:-.01em;color:var(--fg)}\n.mpc h1{font-size:clamp(22px,3.4vw,32px);line-height:1.15}\n.mpc h2{font-size:18px}\n.mpc .sub{color:var(--mut);margin:6px 0 0;max-width:72ch}\n.mpc .tabs{display:flex;flex-wrap:wrap;gap:8px}\n.mpc .tab{border:1px solid var(--line);background:var(--card);border-radius:999px;padding:9px 16px;font:inherit;font-weight:600;cursor:pointer;color:var(--fg);display:inline-flex;align-items:center;gap:8px}\n.mpc .tab::before{content:\"\";width:9px;height:9px;border-radius:50%;background:var(--c)}\n.mpc .tab[aria-pressed=\"true\"]{background:var(--fg);color:#fff;border-color:var(--fg)}\n.mpc button:focus-visible{outline:2px solid var(--acc);outline-offset:2px}\n.mpc .grid{display:grid;grid-template-columns:minmax(0,420px) minmax(0,1fr);gap:20px;align-items:start}\n.mpc .card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:20px}\n.mpc .form{display:grid;gap:20px}\n.mpc .sec{display:grid;gap:12px}\n.mpc .sec h3{margin:0;font-size:17px;font-weight:700}\n.mpc .row{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:10px}\n.mpc label{display:grid;gap:5px;font-size:13px;color:var(--mut);position:relative}\n.mpc input,.mpc select{font:inherit;font-size:15px;color:var(--fg);background:#fff;border:1px solid var(--line);border-radius:10px;padding:10px 12px;width:100%;min-width:0}\n.mpc input:focus,.mpc select:focus{outline:2px solid var(--acc);outline-offset:0;border-color:transparent}\n.mpc .hint{font-size:12px;color:var(--mut);margin:0}\n.mpc .seg{display:flex;background:var(--bg);border-radius:10px;padding:3px;gap:3px;flex-wrap:wrap}\n.mpc .seg button{flex:1 1 auto;border:0;background:transparent;font:inherit;font-size:14px;padding:8px 10px;border-radius:8px;cursor:pointer;color:var(--fg)}\n.mpc .seg button[aria-pressed=\"true\"]{background:#fff;box-shadow:0 1px 3px rgba(20,25,40,.15);font-weight:600}\n.mpc .radios{display:flex;flex-wrap:wrap;gap:8px 16px;font-size:14px;color:var(--fg)}\n.mpc .radios label{display:inline-flex;align-items:center;gap:6px;font-size:14px;color:var(--fg);cursor:pointer}\n.mpc .radios input{width:auto;padding:0;accent-color:var(--acc)}\n.mpc .ac{position:relative}\n.mpc .acl{position:absolute;z-index:20;left:0;right:0;top:100%;margin-top:4px;background:#fff;border:1px solid var(--line);border-radius:10px;box-shadow:0 8px 24px rgba(20,25,40,.12);max-height:280px;overflow:auto;padding:4px;list-style:none}\n.mpc .acl li{padding:8px 10px;border-radius:8px;cursor:pointer;font-size:14px;color:var(--fg)}\n.mpc .acl li small{display:block;color:var(--mut);font-size:12px}\n.mpc .acl li:hover,.mpc .acl li[aria-selected=\"true\"]{background:var(--bg)}\n.mpc details{border-top:1px solid var(--line);padding-top:14px}\n.mpc summary{cursor:pointer;font-weight:600;color:var(--acc)}\n.mpc .adv{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:12px}\n.mpc .note{background:var(--warn-soft);border-radius:10px;padding:10px 12px;font-size:13px;margin:0}\n.mpc .btn{border:0;border-radius:12px;background:var(--acc);color:#fff;font:inherit;font-weight:700;font-size:16px;padding:14px 18px;cursor:pointer;width:100%}\n.mpc .btn:hover{filter:brightness(1.08)}\n.mpc .btn2{border:1px solid var(--line);background:#fff;color:var(--fg);font-weight:600;font-size:14px;padding:10px 14px;border-radius:10px;cursor:pointer}\n.mpc .res{display:grid;gap:16px;position:sticky;top:16px}\n.mpc .big span{font-size:13px;color:var(--mut);display:block}\n.mpc .big b{font-family:\"Unbounded\",Arial,sans-serif;font-size:clamp(20px,3vw,36px);line-height:1.1;font-variant-numeric:tabular-nums}\n.mpc .pos{color:var(--good)} .mpc .neg{color:var(--bad)}\n.mpc .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\n.mpc .kpi{background:var(--bg);border-radius:10px;padding:8px 10px}\n.mpc .kpi span{display:block;font-size:12px;color:var(--mut)}\n.mpc .kpi b{font-size:17px;font-variant-numeric:tabular-nums}\n.mpc .split{display:flex;height:12px;border-radius:6px;overflow:hidden;background:var(--bg)}\n.mpc .split i{display:block;height:100%}\n.mpc .lines{margin:0;padding:0;list-style:none}\n.mpc .lines li{display:flex;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px dashed var(--line);font-size:14px}\n.mpc .lines li:last-child{border-bottom:0}\n.mpc .lines em{font-style:normal;color:var(--mut);font-size:12px;margin-left:6px}\n.mpc .dot{display:inline-block;width:8px;height:8px;border-radius:2px;margin-right:7px;vertical-align:1px}\n.mpc .lines b{font-variant-numeric:tabular-nums;white-space:nowrap}\n.mpc .lines .tot{font-weight:700;border-bottom:1px solid var(--line)}\n.mpc .tbl{overflow-x:auto}\n.mpc table{border-collapse:collapse;width:100%;min-width:620px;font-size:14px}\n.mpc th,.mpc td{padding:10px 12px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums}\n.mpc th:first-child,.mpc td:first-child{text-align:left;white-space:normal}\n.mpc thead th{font-size:12px;color:var(--mut);font-weight:600;text-transform:uppercase;letter-spacing:.04em}\n.mpc tr.best td{background:var(--good-soft)}\n.mpc .bar{display:inline-block;height:8px;border-radius:4px;background:var(--good);vertical-align:middle;margin-right:8px}\n.mpc .bar.n{background:var(--bad)}\n.mpc .chip{display:inline-block;font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px;background:var(--good);color:#fff;margin-left:6px}\n.mpc .mp{display:inline-flex;align-items:center;gap:8px}\n.mpc .mp::before{content:\"\";width:9px;height:9px;border-radius:50%;background:var(--c)}\n.mpc .load{padding:40px;text-align:center;color:var(--mut)}\n.mpc .foot{font-size:12px;color:var(--mut);display:grid;gap:4px}\n.mpc [hidden]{display:none!important}\n@media (max-width:900px){.mpc .grid{grid-template-columns:1fr}.mpc .res{position:static}}\n@media (max-width:480px){.mpc .kpis{grid-template-columns:1fr 1fr}.mpc .big b{font-size:28px}}\n";document.head.appendChild(st);
host.innerHTML="<div class=\"mpc\" id=\"mpc\">\n<div class=\"w\">\n  <header>\n    <h1>Калькулятор прибыли на маркетплейсах</h1>\n    <p class=\"sub\">Укажите информацию о товаре, и калькулятор посчитает комиссию, логистику, хранение, налоги и прибыль на Wildberries, Ozon, Яндекс Маркете, М.Видео и в Золотом Яблоке. После расчёта скачается Excel-файл. Тарифы на 13.10.2026</p>\n  </header>\n  <div class=\"load\" id=\"mpc-load\">Загружаем тарифы…</div>\n  <div id=\"mpc-app\" hidden style=\"display:grid;gap:22px\">\n  <div class=\"tabs\" role=\"group\" aria-label=\"Площадка\">\n    <button class=\"tab\" type=\"button\" data-mp=\"wb\" style=\"--c:var(--wb)\" aria-pressed=\"true\">Wildberries</button>\n    <button class=\"tab\" type=\"button\" data-mp=\"oz\" style=\"--c:var(--oz)\" aria-pressed=\"false\">Ozon</button>\n    <button class=\"tab\" type=\"button\" data-mp=\"ym\" style=\"--c:var(--ym)\" aria-pressed=\"false\">Яндекс Маркет</button>\n    <button class=\"tab\" type=\"button\" data-mp=\"mv\" style=\"--c:var(--mv)\" aria-pressed=\"false\">М.Видео</button>\n    <button class=\"tab\" type=\"button\" data-mp=\"za\" style=\"--c:var(--za)\" aria-pressed=\"false\">Золотое Яблоко</button>\n  </div>\n\n  <div class=\"grid\">\n    <form class=\"card form\" id=\"mpc-form\" autocomplete=\"off\" onsubmit=\"return false\">\n      <div class=\"sec\">\n        <h3>Параметры товара</h3>\n        <label class=\"ac\" data-for=\"wb\">Категория товара на Wildberries\n          <input id=\"mpc-wbs\" value=\"Платья\" placeholder=\"Начните вводить название категории\" role=\"combobox\" aria-autocomplete=\"list\">\n          <ul class=\"acl\" id=\"mpc-wbl\" role=\"listbox\" hidden></ul>\n        </label>\n        <label class=\"ac\" data-for=\"oz\" hidden>Тип товара на Ozon\n          <input id=\"mpc-ozs\" value=\"Одежда / Одежда / Платье\" placeholder=\"Начните вводить: платье, куртка…\" role=\"combobox\" aria-autocomplete=\"list\">\n          <ul class=\"acl\" id=\"mpc-ozl\" role=\"listbox\" hidden></ul>\n        </label>\n        <label class=\"ac\" data-for=\"ym\" hidden>Категория на Яндекс Маркете\n          <input id=\"mpc-yms\" value=\"Одежда, обувь и аксессуары / Одежда для взрослых / Платья / Платья для взрослых\" placeholder=\"Начните вводить: платья…\" role=\"combobox\" aria-autocomplete=\"list\">\n          <ul class=\"acl\" id=\"mpc-yml\" role=\"listbox\" hidden></ul>\n        </label>\n        <label data-for=\"mv\" hidden>Группа товаров на М.Видео<select id=\"mpc-mvs\"></select></label>\n        <div data-for=\"za\" hidden class=\"row\">\n          <label>Комиссия по договору, %<input id=\"mpc-zac\" type=\"number\" min=\"0\" step=\"0.5\" placeholder=\"25\"></label>\n          <label>Логистика за заказ, ₽<input id=\"mpc-zal\" type=\"number\" min=\"0\" step=\"1\" placeholder=\"0\"></label>\n          <label>Хранение на штуку, ₽<input id=\"mpc-zah\" type=\"number\" min=\"0\" step=\"1\" placeholder=\"0\"></label>\n        </div>\n        <p class=\"note\" data-for=\"za\" hidden>Золотое Яблоко не публикует ставки, их дают после заявки. Впишите комиссию из договора</p>\n        <label>Цена, ₽<input id=\"mpc-price\" type=\"number\" min=\"0\" step=\"10\" value=\"3500\"><span class=\"hint\">Цена без учёта скидок площадки</span></label>\n        <div><span class=\"hint\" style=\"font-size:13px\">Габариты товара в упаковке, см</span>\n          <div class=\"row\" style=\"margin-top:5px;grid-template-columns:repeat(3,minmax(0,1fr))\">\n            <label>Длина<input id=\"mpc-l\" type=\"number\" min=\"1\" step=\"1\" value=\"30\"></label>\n            <label>Ширина<input id=\"mpc-wd\" type=\"number\" min=\"1\" step=\"1\" value=\"20\"></label>\n            <label>Высота<input id=\"mpc-h\" type=\"number\" min=\"1\" step=\"1\" value=\"5\"></label>\n          </div>\n          <p class=\"hint\" id=\"mpc-vol\" style=\"margin-top:6px\"></p>\n        </div>\n      </div>\n\n      <div class=\"sec\" data-for=\"wb\">\n        <h3>Условия Wildberries</h3>\n        <label>Страна продавца\n          <span class=\"seg\" id=\"mpc-country\">\n            <button type=\"button\" data-v=\"ru\" aria-pressed=\"true\">Россия</button>\n            <button type=\"button\" data-v=\"kg\" aria-pressed=\"false\">Киргизия</button>\n            <button type=\"button\" data-v=\"kz\" aria-pressed=\"false\">Казахстан</button>\n            <button type=\"button\" data-v=\"cn\" aria-pressed=\"false\">Китай</button>\n          </span>\n        </label>\n        <div class=\"row\">\n          <label id=\"mpc-datew\">Тарифы на дату\n            <select id=\"mpc-date\">\n              <option value=\"wb2607\">07.07.2026 (действуют)</option><option value=\"wb2603\">13.03.2026</option><option value=\"wb2601\">01.01.2026</option>\n              <option value=\"wb25\">13.01.2025</option><option value=\"wb24\">13.01.2024</option><option value=\"wb23\">01.01.2023</option>\n            </select>\n          </label>\n          <label>Склад<select id=\"mpc-wh\"></select></label>\n        </div>\n      </div>\n      <label data-for=\"oz\" hidden>Тарифы Ozon на дату<select id=\"mpc-ozd\"><option value=\"oz2808\">28.08.2026 (действуют)</option><option value=\"oz0711\">11.07.2026</option></select></label>\n      <label data-for=\"mv\" hidden>Тарифы М.Видео на дату<select id=\"mpc-mvd\"><option value=\"mvn\">С 01.10.2026 (действуют)</option><option value=\"mvo\">До 01.10.2026</option></select></label>\n      <div class=\"sec\" id=\"mpc-schemew\">\n        <h3>Схема работы</h3>\n        <span class=\"seg\" id=\"mpc-scheme\"><button type=\"button\" data-v=\"FBO\" aria-pressed=\"true\">Склад площадки (FBO)</button><button type=\"button\" data-v=\"FBS\" aria-pressed=\"false\">Свой склад (FBS)</button></span>\n      </div>\n\n      <div class=\"sec\">\n        <h3>Статистика</h3>\n        <div class=\"row\">\n          <label>Оборачиваемость, дни<input id=\"mpc-days\" type=\"number\" min=\"0\" step=\"1\" value=\"30\"></label>\n          <label>Доля выкупа, %<input id=\"mpc-buy\" type=\"number\" min=\"1\" max=\"100\" step=\"0.1\" value=\"39.3\"></label>\n        </div>\n        <p class=\"hint\" id=\"mpc-buyh\"></p>\n      </div>\n\n      <div class=\"sec\">\n        <h3>Расходы</h3>\n        <label>Себестоимость товара, ₽<input id=\"mpc-cost\" type=\"number\" min=\"0\" step=\"10\" value=\"500\"></label>\n        <label>Доля расходов на продвижение, %<input id=\"mpc-drr\" type=\"number\" min=\"0\" step=\"0.5\" value=\"10\"></label>\n        <label>Прочие расходы за штуку, ₽<input id=\"mpc-extra\" type=\"number\" min=\"0\" step=\"5\" value=\"30\"><span class=\"hint\">Упаковка, маркировка, доставка на склад</span></label>\n        <label>Вид налогообложения\n          <select id=\"mpc-tsys\"><option value=\"usn_d\">УСН «Доходы»</option><option value=\"usn_dr\">УСН «Доходы минус расходы»</option><option value=\"npd\">НПД</option><option value=\"osn\">ОСН</option></select>\n        </label>\n        <div><span class=\"hint\" style=\"font-size:13px\">Налоговая ставка, %</span>\n          <div class=\"radios\" id=\"mpc-trate\" style=\"margin-top:6px\">\n            <label><input type=\"radio\" name=\"mpc-tr\" value=\"6\" checked>6%</label>\n            <label><input type=\"radio\" name=\"mpc-tr\" value=\"15\">15%</label>\n            <label><input type=\"radio\" name=\"mpc-tr\" value=\"25\">25%</label>\n            <label><input type=\"radio\" name=\"mpc-tr\" value=\"x\">Другая</label>\n            <label><input type=\"radio\" name=\"mpc-tr\" value=\"0\">Не учитывать</label>\n          </div>\n          <input id=\"mpc-trx\" type=\"number\" min=\"0\" step=\"0.5\" placeholder=\"Ставка, %\" hidden style=\"margin-top:8px\">\n        </div>\n        <p class=\"hint\" id=\"mpc-taxh\"></p>\n      </div>\n\n      <details>\n        <summary>Дополнительные настройки площадки</summary>\n        <div class=\"adv\" id=\"mpc-adv\"></div>\n        <p class=\"hint\" style=\"margin-top:8px\">Сохраняются отдельно для каждой площадки и даты тарифов</p>\n      </details>\n\n      <button class=\"btn\" type=\"button\" id=\"mpc-go\">Рассчитать и скачать Excel</button>\n    </form>\n\n    <div style=\"display:grid;gap:20px;min-width:0\">\n      <aside class=\"card res\" aria-live=\"polite\">\n        <div class=\"big\"><span id=\"mpc-rtitle\"></span><b id=\"mpc-profit\">—</b></div>\n        <div class=\"kpis\">\n          <div class=\"kpi\"><span>Маржа</span><b id=\"mpc-margin\">—</b></div>\n          <div class=\"kpi\"><span>ROI</span><b id=\"mpc-roi\">—</b></div>\n          <div class=\"kpi\"><span>К перечислению</span><b id=\"mpc-payout\">—</b></div>\n        </div>\n        <div class=\"split\" id=\"mpc-split\" aria-hidden=\"true\"></div>\n        <ul class=\"lines\" id=\"mpc-lines\"></ul>\n      </aside>\n      <section class=\"card\" style=\"display:grid;gap:12px\">\n        <h2>Где выгоднее продавать этот товар</h2>\n        <p class=\"sub\" style=\"margin:0\">Та же цена, себестоимость и габариты по действующим тарифам каждой площадки</p>\n        <div class=\"tbl\"><table id=\"mpc-cmp\"><thead><tr><th>Площадка</th><th>Комиссия</th><th>Удерживает</th><th>Прибыль</th><th>Маржа</th></tr></thead><tbody></tbody></table></div>\n      </section>\n      <section class=\"card\" style=\"display:grid;gap:12px\">\n        <h2>Как менялись расходы на WB с 2023 года</h2>\n        <p class=\"sub\" style=\"margin:0\">Тот же товар и склад по тарифам Wildberries на каждую дату, продавец из России</p>\n        <div id=\"mpc-chart\"></div>\n        <div class=\"tbl\"><table id=\"mpc-hist\"><thead><tr><th>Дата тарифов</th><th>Комиссия</th><th>Логистика</th><th>Хранение</th><th>Удерживает WB</th><th>Прибыль</th></tr></thead><tbody></tbody></table></div>\n      </section>\n    </div>\n  </div>\n  <div class=\"foot\">\n    <span>Логистика на один выкуп учитывает невыкупы: (доставка + обратная доставка) / доля выкупа − обратная доставка. Киргизия и Казахстан: налог по местным правилам от поступлений, обратная логистика 50 ₽. Китай: только FBS.</span>\n    <span>Источники: тарифы и коэффициенты складов Wildberries, сетки Ozon и Яндекс Маркета, оферта М.Видео. Расчёт ориентировочный, точную ставку смотрите в кабинете продавца.</span>\n  </div>\n  </div>\n</div>\n</div>";
})();

(function(){
var root=document.getElementById('mpc');if(!root||root.dataset.init)return;root.dataset.init='1';
var $=function(id){return document.getElementById('mpc-'+id)};
var BASE=(document.currentScript&&document.currentScript.src||'').replace(/[^\/]*$/,'');
function get(n){return fetch(BASE+n).then(function(r){if(!r.ok)throw 0;return r.json()})}
Promise.all([get('wb.json'),get('oz.json'),get('ym.json'),get('common.json')]).then(function(a){start({wb:a[0],oz:a[1],ym:a[2],com:a[3]})})
.catch(function(){$('load').textContent='Не удалось загрузить тарифы. Обновите страницу'});
function start(D){
$('load').hidden=true;$('app').hidden=false;
var rub=function(v){return isFinite(v)?Math.round(v).toLocaleString('ru-RU')+' ₽':'—'};
var pct=function(v){return isFinite(v)?(v*100).toLocaleString('ru-RU',{maximumFractionDigits:1,minimumFractionDigits:1})+'%':'—'};
var num=function(id){var v=parseFloat(String($(id).value).replace(',','.'));return isFinite(v)?v:0};
var C=D.com;
// lists
var WB=D.wb.s.map(function(r){return {n:r[0],c:D.wb.c[r[1]],p:D.wb.p[r[2]],b:r[3]}});
var OZ=D.oz.s.map(function(r){return {n:D.oz.c[r[0]]+' / '+r[1],c:D.oz.c[r[0]],p:D.oz.p[r[2]]}});
var YM=[],yp=[];D.ym.t.forEach(function(r,i){var p=r[0]<0?r[1]:yp[r[0]]+' / '+r[1];yp[i]=p;YM.push({n:p,t:r[2]})});
function idx(a){var m={};a.forEach(function(x){m[x.n.toLowerCase()]=x});return m}
var wbM=idx(WB),ozM=idx(OZ),ymM=idx(YM);
function ac(inp,list,arr,sub){
  var lst=$(list),el=$(inp),sel=-1,items=[];
  function show(){var q=el.value.trim().toLowerCase();items=[];
    if(q.length<2){lst.hidden=true;return}
    for(var i=0;i<arr.length&&items.length<60;i++){var n=arr[i].n.toLowerCase();if(n.indexOf(q)>=0)items.push(arr[i])}
    items.sort(function(a,b){var x=a.n.toLowerCase(),y=b.n.toLowerCase();return (x.indexOf(q)===0?0:1)-(y.indexOf(q)===0?0:1)||x.length-y.length});
    sel=-1;lst.innerHTML=items.length?items.map(function(x,i){return '<li role="option" data-i="'+i+'">'+esc(x.n)+(sub&&x[sub]?'<small>'+esc(x[sub])+'</small>':'')+'</li>'}).join(''):'<li style="cursor:default;color:#5f6878">Ничего не найдено</li>';lst.hidden=false}
  function pick(i){if(!items[i])return;el.value=items[i].n;lst.hidden=true;el.dispatchEvent(new Event('input',{bubbles:true}));el.dataset.ok='1'}
  el.addEventListener('input',function(e){if(e.isTrusted)show()});el.addEventListener('focus',show);
  el.addEventListener('blur',function(){setTimeout(function(){lst.hidden=true},150)});
  el.addEventListener('keydown',function(e){if(lst.hidden)return;if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();sel=Math.max(0,Math.min(items.length-1,sel+(e.key==='ArrowDown'?1:-1)));[].forEach.call(lst.children,function(li,i){li.setAttribute('aria-selected',i===sel);if(i===sel)li.scrollIntoView({block:'nearest'})})}else if(e.key==='Enter'){e.preventDefault();pick(sel<0?0:sel)}else if(e.key==='Escape'){lst.hidden=true}});
  lst.addEventListener('mousedown',function(e){var li=e.target.closest('li[data-i]');if(li){e.preventDefault();pick(+li.dataset.i)}});
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
ac('wbs','wbl',WB,'c');ac('ozs','ozl',OZ);ac('yms','yml',YM);
$('mvs').innerHTML=C.mv.map(function(r,i){return '<option value="'+i+'"'+(r[0]==='Одежда'?' selected':'')+'>'+esc(r[0])+'</option>'}).join('');
var whs=Object.keys(C.bx.b2607).filter(function(k){return C.bx.b2607[k][1]!=null});
$('wh').innerHTML=whs.map(function(k){return '<option'+(k==='Коледино'?' selected':'')+'>'+esc(k)+'</option>'}).join('');
function tier(v){var t=0;C.ti.forEach(function(r){if(v>=r[0])t=r[1]});return t}
function olRow(v){var t=C.ol[0];C.ol.forEach(function(r){if(v>=r[0])t=r});return t}
function ok(){for(var i=0;i<arguments.length;i++){if(arguments[i]==null||!isFinite(arguments[i]))return false}return true}

var SC={
 wb23:{t:'WB Россия, 01.01.2023',k:'wb',c:0,mode:'b23',rev:33,d:[.10,0,.06,'выручка',0,1,0,0,0]},
 wb24:{t:'WB Россия, 13.01.2024',k:'wb',c:1,mode:'b24',rev:50,d:[.15,0,.06,'выручка',0,1,0,0,0]},
 wb25:{t:'WB Россия, 13.01.2025',k:'wb',c:2,mode:'b25',rev:50,d:[.20,.03,.06,'выручка',0,1,0,0,0]},
 wb2601:{t:'WB Россия, 01.01.2026',k:'wb',c:3,mode:'b26',box:'b26',rev:'r26',d:[.25,.03,.06,'выручка',.05,1.22,0,.01,.01]},
 wb2603:{t:'WB Россия, 13.03.2026',k:'wb',c:4,mode:'b26',box:'b2603',rev:'r26',d:[.30,.03,.06,'выручка',.05,1.22,.0108,.02,.02]},
 wb2607:{t:'WB Россия, 07.07.2026',k:'wb',c:5,cf:6,mode:'cur',rev:'r26',d:[.30,.03,.06,'выручка',.05,1.22,0,.02,.02]},
 wbkg:{t:'WB Киргизия, 11.07.2026',k:'wb',c:7,cf:8,mode:'cur',rev:50,local:1,d:[.15,.03,.02,'поступления',0,1,0,.02,.02]},
 wbkz:{t:'WB Казахстан, 11.07.2026',k:'wb',c:9,cf:10,mode:'cur',rev:50,local:1,d:[.15,.03,.04,'поступления',0,1,0,.02,.02]},
 wbcn:{t:'WB Китай, 25.07.2026 (FBS)',k:'wb',c:11,mode:'cn',rev:'r26',d:[.05,.03,.06,'выручка',0,1.22,0,.02,.02]},
 oz0711:{t:'Ozon, 11.07.2026',k:'oz',base:0,d:[.50,.03,.06,'выручка',.05,1,0,.02,0]},
 oz2808:{t:'Ozon, 28.08.2026',k:'oz',base:6,d:[.50,.03,.06,'выручка',.05,1,0,.02,0]},
 ym:{t:'Яндекс Маркет, 01.07.2026',k:'ym',d:[0,.03,.06,'выручка',.05,1,0,0,.016]},
 mvo:{t:'М.Видео, до 01.10.2026',k:'mv',col:1,d:[0,.015,.06,'выручка',.05,1,0,0,0]},
 mvn:{t:'М.Видео, с 01.10.2026',k:'mv',col:2,d:[0,.015,.06,'выручка',.05,1,0,0,0]},
 za:{t:'Золотое Яблоко',k:'za',d:[0,.015,.06,'выручка',.05,1,0,0,0]}
};
Object.keys(SC).forEach(function(k){var d=SC[k].d;SC[k].s={spp:d[0],eq:d[1],tax:d[2],tb:d[3],nds:d[4],ktr:d[5],irp:d[6],cr:d[7],op:d[8]}});
var ADV=[['spp','СПП (скидка площадки), %',100],['eq','Эквайринг, %',100],['nds','НДС, %',100],['ktr','КТР (коэф. локализации)',1],['irp','ИРП, % от цены',100],['cr','Погашение кредита WB, %',100],['op','Доп. опции, %',100]];
var state={mp:'wb',country:'ru',scheme:'FBO'};
function taxRate(){var r=root.querySelector('input[name="mpc-tr"]:checked');if(!r)return .06;if(r.value==='x')return num('trx')/100;return (+r.value)/100}

function calc(id,force){
 var S=SC[id],s=S.s,P=num('price'),cost=num('cost'),extra=num('extra'),drr=num('drr')/100;
 var V=num('l')*num('wd')*num('h')/1000,b=num('buy')/100,days=num('days'),fbs=(force||state.scheme)==='FBS',wh=$('wh').value;
 if(b<=0)b=0.01;
 var rate=0,one=0,rev=0,sale=0,stor=0,B,miss=false;
 if(S.k==='wb'){
  var w=wbM[$('wbs').value.trim().toLowerCase()],p=w?w.p:null,ci=(S.cf!=null&&fbs)?S.cf:S.c;
  if(!w)miss=true;rate=p&&p[ci]!=null?p[ci]/100:0;var bl=0,st=0;
  if(S.mode==='b23'){B=C.bx.b23[wh];if(B&&ok(B[1],B[2]))bl=V>5?B[1]+B[2]*(V-5):B[1];if(B&&ok(B[3],B[4]))st=(V>5?B[3]+B[4]*(V-5):B[3])*days}
  else if(S.mode==='b24'){B=C.bx.b24[wh];if(B&&ok(B[1],B[2]))bl=V>1?B[1]+B[2]*(V-1):B[1];if(B&&ok(B[3],B[4]))st=(V>1?B[3]+B[4]*(V-1):B[3])*days}
  else if(S.mode==='b25'){B=C.bx.b25[wh];if(B&&ok(B[1],B[2]))bl=V>1?B[1]+B[2]*(V-1):B[1];if(B&&ok(B[4],B[5]))st=(V>1?B[4]+B[5]*(V-1):B[4])*days}
  else{B=C.bx[S.mode==='b26'?S.box:'b2607'][wh];var uf=S.mode==='cn'||(S.mode==='cur'&&fbs),i0=uf?6:0;
   if(B&&ok(B[i0],B[i0+1],B[i0+2]))bl=V>=1?B[i0+1]+B[i0+2]*(V-1):tier(V)*B[i0]/100;
   if(!uf&&B&&ok(B[4],B[5]))st=(V>1?B[4]+B[5]*(V-1):B[4])*days}
  one=bl*s.ktr+P*s.irp;stor=st;rev=S.rev==='r26'?(V<1?tier(V):46+(V-1)*14):S.rev;sale=(one+rev)/b-rev;
 }else if(S.k==='oz'){
  var o=ozM[$('ozs').value.trim().toLowerCase()],op=o?o.p:null,ix=S.base+(P<=100?0:P<=300?1:2)+(fbs?3:0);
  if(!o)miss=true;rate=op&&op[ix]!=null?op[ix]:0;var r=olRow(V);one=P<=300?r[3]:r[4];rev=P<=300?r[1]:r[2];sale=(one+(1-b)*rev)/b;stor=days<=120?0:V*2.5*(days-120);
 }else if(S.k==='ym'){
  var y=ymM[$('yms').value.trim().toLowerCase()];if(!y)miss=true;rate=(P<300&&V<5)?.35:(y&&y.t!=null?y.t:0);
  var cv=Math.ceil(V);one=Math.min(5500,80+Math.max(0,Math.min(cv,30)-1)*9+Math.max(0,Math.min(cv,200)-30)*7+Math.max(0,cv-200)*5);
  rev=one+15;sale=(one+(1-b)*rev)/b;stor=days<=365?0:V*3*(days-365);
 }else if(S.k==='mv'){
  var m=C.mv[+$('mvs').value];rate=m?m[S.col]:0;one=Math.min(1490,V<=1?50:V<=2?100:100+4*(V-2));sale=one/b;
  stor=V*(.10*Math.max(0,Math.min(days,90)-60)+.30*Math.max(0,Math.min(days,150)-90)+.50*Math.max(0,days-150));
 }else{rate=num('zac')/100;one=num('zal');sale=one/b;stor=num('zah')}
 var comm=P*rate,eq=P*s.eq,ad=P*drr,cr=P*(s.cr+s.op),total=comm+sale+stor+eq+ad+cr,pSpp=P*(1-s.spp),nds=pSpp*s.nds,tax;
 var sys=$('tsys').value,tr=taxRate();
 if(S.local)tax=(P-total)*s.tax;
 else if(sys==='usn_dr')tax=Math.max(Math.max(0,P-total-cost-extra-nds)*tr,P*.01*(tr>0?1:0));
 else if(sys==='osn')tax=Math.max(0,P-total-cost-extra-nds)*tr;
 else tax=pSpp*tr;
 var profit=P-total-tax-nds-extra-cost,na=miss||(S.k==='za'&&!(num('zac')>0));
 return {id:id,t:S.t,P:P,rate:rate,comm:comm,one:one,sale:sale,stor:stor,eq:eq,ad:ad,cr:cr,total:total,tax:tax,nds:nds,extra:extra,cost:cost,profit:na?NaN:profit,margin:na?NaN:profit/P,roi:na?NaN:profit/cost,payout:P-total,V:V};
}
function cur(){if(state.mp==='wb')return state.country==='ru'?$('date').value:{kg:'wbkg',kz:'wbkz',cn:'wbcn'}[state.country];if(state.mp==='oz')return $('ozd').value;if(state.mp==='mv')return $('mvd').value;return state.mp==='ym'?'ym':'za'}
function seg(id,key){var el=$(id);el.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;state[key]=b.dataset.v;[].forEach.call(el.children,function(x){x.setAttribute('aria-pressed',x===b)});ui();render()})}
seg('country','country');seg('scheme','scheme');
[].forEach.call(root.querySelectorAll('.tab'),function(t){t.addEventListener('click',function(){state.mp=t.dataset.mp;[].forEach.call(root.querySelectorAll('.tab'),function(x){x.setAttribute('aria-pressed',x===t)});ui();render()})});
function ui(){
 [].forEach.call(root.querySelectorAll('[data-for]'),function(el){el.hidden=el.dataset.for!==state.mp});
 $('datew').hidden=state.country!=='ru';
 $('schemew').hidden=(state.mp==='wb'&&(state.country==='cn'||(state.country==='ru'&&$('date').value!=='wb2607')))||['ym','mv','za'].indexOf(state.mp)>=0;
 var id=cur(),s=SC[id].s,isWB=SC[id].k==='wb';
 $('taxh').textContent=SC[id].local?('Для продавца из '+(id==='wbkg'?'Киргизии налог 2%':'Казахстана налог 4%')+' от поступлений, выбор выше не применяется'):'';
 $('adv').innerHTML=ADV.filter(function(a){return isWB||['ktr','irp','cr','op'].indexOf(a[0])<0||(a[0]==='cr'&&SC[id].k==='oz')||(a[0]==='op'&&id==='ym')}).map(function(a){var v=a[2]===100?+(s[a[0]]*100).toFixed(2):s[a[0]];return '<label>'+a[1]+'<input type="number" step="0.1" data-k="'+a[0]+'" value="'+v+'"></label>'}).join('');
}
$('adv').addEventListener('input',function(e){var k=e.target.dataset.k;if(!k)return;var a=ADV.filter(function(x){return x[0]===k})[0];var v=parseFloat(e.target.value.replace(',','.'))||0;SC[cur()].s[k]=a[2]===100?v/100:v;render()});
$('form').addEventListener('input',function(e){if(e.target.closest('#mpc-adv'))return;if(e.target.id==='mpc-wbs'){var w=wbM[e.target.value.trim().toLowerCase()];if(w&&w.b!=null)$('buy').value=+(w.b*100).toFixed(1)}
 if(e.target.name==='mpc-tr')$('trx').hidden=e.target.value!=='x';render()});
$('form').addEventListener('change',function(e){if(['mpc-date','mpc-ozd','mpc-mvd'].indexOf(e.target.id)>=0)ui();render()});
$('tsys').addEventListener('change',function(){var d={usn_d:'6',usn_dr:'15',npd:'6',osn:'25'}[$('tsys').value];var r=root.querySelector('input[name="mpc-tr"][value="'+d+'"]');if(r){r.checked=true;$('trx').hidden=true}render()});

var COL={comm:'#5b2bd6',sale:'#1f6fe5',stor:'#7aa7f0',eq:'#9aa3b2',ad:'#e0a100',cr:'#c58bf0',tax:'#d97757',nds:'#e8a48c',extra:'#b9bec8',cost:'#4b5262'};
var CMP=['wb2607','wbkg','wbkz','wbcn','oz2808','ym','mvn','za'],HIST=['wb23','wb24','wb25','wb2601','wb2603','wb2607'];
var CC={wb:'--wb',oz:'--oz',ym:'--ym',mv:'--mv',za:'--za'};
function lines(r){return [['comm','Комиссия',r.comm,pct(r.rate)],['sale','Логистика с учётом невыкупов',r.sale,'доставка '+rub(r.one)],['stor','Хранение',r.stor,''],['eq','Эквайринг',r.eq,''],['ad','Продвижение',r.ad,''],['cr','Кредит и опции площадки',r.cr,'']]}
function lines2(r){return [['tax','Налог',r.tax,''],['nds','НДС',r.nds,''],['extra','Прочие расходы',r.extra,''],['cost','Себестоимость',r.cost,'']]}
function render(){
 var r=calc(cur());
 $('profit').textContent=isFinite(r.profit)?rub(r.profit):(SC[r.id].k==='za'?'введите комиссию':'выберите категорию из списка');$('profit').className=isFinite(r.profit)?(r.profit>=0?'pos':'neg'):'';
 $('margin').textContent=pct(r.margin);$('roi').textContent=pct(r.roi);$('payout').textContent=rub(r.payout);
 $('rtitle').textContent='Прибыль с одной продажи · '+r.t;
 $('vol').textContent='Объём 1 товара: '+r.V.toLocaleString('ru-RU',{maximumFractionDigits:2})+' л';
 var w=wbM[$('wbs').value.trim().toLowerCase()];$('buyh').textContent=w&&w.b!=null?'Средняя доля выкупа по категории на WB: '+(w.b*100).toFixed(1)+'%':'';
 var L=lines(r),L2=lines2(r);
 function li(x){return x[2]?'<li><span><i class="dot" style="background:'+COL[x[0]]+'"></i>'+x[1]+(x[3]?'<em>'+x[3]+'</em>':'')+'</span><b>'+rub(x[2])+'</b></li>':''}
 $('lines').innerHTML='<li><span>Цена продажи</span><b>'+rub(r.P)+'</b></li>'+L.map(li).join('')+'<li class="tot"><span>Удерживает площадка · '+pct(r.total/r.P)+'</span><b>'+rub(r.total)+'</b></li>'+L2.map(li).join('');
 var parts=L.concat(L2).filter(function(x){return x[2]>0}),sum=Math.max(r.P,parts.reduce(function(a,x){return a+x[2]},0));
 $('split').innerHTML=parts.map(function(x){return '<i title="'+x[1]+'" style="width:'+(x[2]/sum*100)+'%;background:'+COL[x[0]]+'"></i>'}).join('')+(r.profit>0?'<i title="Прибыль" style="width:'+(r.profit/sum*100)+'%;background:var(--good)"></i>':'');
 var rs=CMP.map(function(i){return calc(i)}),best=rs.reduce(function(a,x){return isFinite(x.profit)&&(!a||x.profit>a.profit)?x:a},null),mx=Math.max.apply(null,rs.map(function(x){return isFinite(x.profit)?Math.abs(x.profit):0}))||1;
 $('cmp').tBodies[0].innerHTML=rs.map(function(x){return '<tr'+(x===best?' class="best"':'')+'><td><span class="mp" style="--c:var('+CC[SC[x.id].k]+')">'+x.t+'</span>'+(x===best?'<span class="chip">выгоднее всего</span>':'')+'</td><td>'+pct(x.rate)+'</td><td>'+rub(x.total)+'</td><td class="'+(x.profit>=0?'pos':'neg')+'">'+(isFinite(x.profit)?'<span class="bar'+(x.profit<0?' n':'')+'" style="width:'+Math.round(Math.abs(x.profit)/mx*70)+'px"></span>'+rub(x.profit):(SC[x.id].k==='za'?'нет ставки':'нет категории'))+'</td><td>'+pct(x.margin)+'</td></tr>'}).join('');
 var h=HIST.map(function(i){return calc(i,'FBO')});
 $('hist').tBodies[0].innerHTML=h.map(function(x){return '<tr><td>'+x.t.replace('WB Россия, ','')+'</td><td>'+pct(x.rate)+'</td><td>'+rub(x.sale)+'</td><td>'+rub(x.stor)+'</td><td>'+rub(x.total)+'</td><td class="'+(x.profit>=0?'pos':'neg')+'">'+rub(x.profit)+'</td></tr>'}).join('');
 chart(h);return r;
}
function chart(h){
 if(h.some(function(x){return !isFinite(x.profit)})){$('chart').innerHTML='<p class="hint">Выберите категорию WB из списка, чтобы увидеть историю</p>';return}
 var W=760,H=230,pl=56,pr=16,pt=16,pb=34,vals=h.map(function(x){return x.total}).concat(h.map(function(x){return x.profit}));
 var mn=Math.min(0,Math.min.apply(null,vals)),mxv=Math.max.apply(null,vals),rg=Math.max(1,mxv-mn),step=Math.pow(10,Math.floor(Math.log10(rg))),st=rg/step>5?step:step/2;
 mn=Math.floor(mn/st)*st;mxv=Math.ceil(mxv/st)*st;
 var x=function(i){return pl+i*(W-pl-pr)/(h.length-1)},y=function(v){return pt+(mxv-v)/(mxv-mn)*(H-pt-pb)},g='';
 for(var v=mn;v<=mxv+1e-9;v+=st)g+='<line x1="'+pl+'" x2="'+(W-pr)+'" y1="'+y(v)+'" y2="'+y(v)+'" stroke="#e2e5eb"/><text x="'+(pl-8)+'" y="'+(y(v)+4)+'" text-anchor="end" font-size="11" fill="#5f6878">'+Math.round(v).toLocaleString('ru-RU')+'</text>';
 var ln=function(k,c){return '<polyline fill="none" stroke="'+c+'" stroke-width="2.5" points="'+h.map(function(d,i){return x(i)+','+y(d[k])}).join(' ')+'"/>'+h.map(function(d,i){return '<circle cx="'+x(i)+'" cy="'+y(d[k])+'" r="4" fill="'+c+'"><title>'+rub(d[k])+'</title></circle>'}).join('')};
 var lab=h.map(function(d,i){return '<text x="'+x(i)+'" y="'+(H-12)+'" text-anchor="middle" font-size="11" fill="#5f6878">'+d.t.replace('WB Россия, ','')+'</text>'}).join('');
 $('chart').innerHTML='<div style="display:flex;gap:16px;font-size:13px;margin-bottom:6px;flex-wrap:wrap"><span><i class="dot" style="background:#a42bd6"></i>Удерживает WB, ₽</span><span><i class="dot" style="background:#178a4c"></i>Прибыль с продажи, ₽</span></div><div class="tbl"><svg viewBox="0 0 '+W+' '+H+'" style="width:100%;min-width:560px;height:auto" role="img" aria-label="Удержания WB и прибыль по датам">'+g+ln('total','#a42bd6')+ln('profit','#178a4c')+lab+'</svg></div>';
}
// ---- Excel
function loadX(){return window.XLSX?Promise.resolve():new Promise(function(res,rej){var s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s)})}
function cat(){return state.mp==='wb'?$('wbs').value:state.mp==='oz'?$('ozs').value:state.mp==='ym'?$('yms').value:state.mp==='mv'?C.mv[+$('mvs').value][0]:'по договору'}
$('go').addEventListener('click',function(){
 var r=render(),btn=$('go');btn.textContent='Готовим Excel…';
 loadX().then(function(){
  var X=XLSX,wbk=X.utils.book_new(),today=new Date().toLocaleDateString('ru-RU');
  var sysName=$('tsys').selectedOptions[0].text,tr=taxRate();
  var a=[['Расчёт прибыли с одной продажи',''],['Дата расчёта',today],['Площадка и тарифы',r.t],['Категория товара',cat()],['',''],
   ['ПАРАМЕТРЫ',''],['Цена, ₽',r.P],['Себестоимость, ₽',r.cost],['Габариты, см',num('l')+' × '+num('wd')+' × '+num('h')],['Объём, л',+r.V.toFixed(2)],
   ['Оборачиваемость, дни',num('days')],['Доля выкупа, %',num('buy')],['Продвижение, % от цены',num('drr')],['Прочие расходы за штуку, ₽',r.extra],
   ['Налогообложение',SC[r.id].local?'местный налог от поступлений':sysName+', '+(tr*100)+'%'],['',''],
   ['РАСЧЁТ','₽','% от цены']];
  lines(r).concat([['','Удерживает площадка',r.total]]).concat(lines2(r)).forEach(function(x){a.push([x[1],Math.round(x[2]),r.P?+(x[2]/r.P*100).toFixed(1):''])});
  a.push(['Прибыль с одной продажи',isFinite(r.profit)?Math.round(r.profit):'нет ставки',isFinite(r.profit)?+(r.profit/r.P*100).toFixed(1):'']);
  a.push(['ROI, % к себестоимости',isFinite(r.roi)?+(r.roi*100).toFixed(1):'','']);a.push(['К перечислению от площадки, ₽',Math.round(r.payout),'']);
  var s1=X.utils.aoa_to_sheet(a);s1['!cols']=[{wch:38},{wch:30},{wch:12}];X.utils.book_append_sheet(wbk,s1,'Расчёт');
  var b=[['Площадка','Комиссия, %','Логистика на выкуп, ₽','Хранение, ₽','Удерживает площадка, ₽','Удерживает, % от цены','Прибыль, ₽','Маржа, %']];
  CMP.map(function(i){return calc(i)}).forEach(function(x){b.push([x.t,+(x.rate*100).toFixed(1),Math.round(x.sale),Math.round(x.stor),Math.round(x.total),+(x.total/x.P*100).toFixed(1),isFinite(x.profit)?Math.round(x.profit):'нет ставки',isFinite(x.margin)?+(x.margin*100).toFixed(1):''])});
  var s2=X.utils.aoa_to_sheet(b);s2['!cols']=[{wch:30},{wch:12},{wch:20},{wch:12},{wch:22},{wch:20},{wch:12},{wch:10}];X.utils.book_append_sheet(wbk,s2,'Сравнение площадок');
  var c=[['Дата тарифов WB','Комиссия, %','Логистика на выкуп, ₽','Хранение, ₽','Удерживает WB, ₽','Прибыль, ₽','Маржа, %']];
  HIST.map(function(i){return calc(i,'FBO')}).forEach(function(x){c.push([x.t.replace('WB Россия, ',''),+(x.rate*100).toFixed(1),Math.round(x.sale),Math.round(x.stor),Math.round(x.total),Math.round(x.profit),+(x.margin*100).toFixed(1)])});
  var s3=X.utils.aoa_to_sheet(c);s3['!cols']=[{wch:18},{wch:12},{wch:20},{wch:12},{wch:18},{wch:12},{wch:10}];X.utils.book_append_sheet(wbk,s3,'История WB с 2023');
  X.writeFile(wbk,('Расчёт прибыли '+cat().split(' / ').pop()+' '+today+'.xlsx').replace(/[\\/:*?"<>|]/g,' '));
  btn.textContent='Рассчитать и скачать Excel';
 }).catch(function(){btn.textContent='Не удалось скачать Excel, попробуйте ещё раз'});
});
ui();render();
}
})();
