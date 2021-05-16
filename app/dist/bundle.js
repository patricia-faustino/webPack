(()=>{"use strict";var e,t,o={7:(e,t,o)=>{o.d(t,{u:()=>a});class a{constructor(e,t,o){this._data=e,this.quantidade=t,this.valor=o}static criaDe(e,t,o){const n=new Date(e.replace(/-/g,",")),r=parseInt(t),i=parseFloat(o);return new a(n,r,i)}get volume(){return this.quantidade*this.valor}get data(){return new Date(this._data.getTime())}paraTexto(){return`\n            Data: ${this.data},\n            Quantidade: ${this.quantidade},\n            Valor: ${this.valor}\n        `}ehIgual(e){return this.data.getDate()===e.data.getDate()&&this.data.getMonth()===e.data.getMonth()&&this.data.getFullYear()===e.data.getFullYear()}}}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.m=o,n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[])),n.u=e=>e+".bundle.js",n.miniCssF=e=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="alurabank:",n.l=(o,a,r,i)=>{if(e[o])e[o].push(a);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var p=(t,a)=>{s.onerror=s.onload=null,clearTimeout(h);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(a))),t)return t(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,o)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise(((o,n)=>a=e[t]=[o,n]));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error;n.l(i,(o=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}}),"chunk-"+t,t)}};var t=(t,o)=>{var a,r,[i,s,c]=o,l=0;for(a in s)n.o(s,a)&&(n.m[a]=s[a]);for(c&&c(n),t&&t(o);l<i.length;l++)r=i[l],n.o(e,r)&&e[r]&&e[r][0](),e[i[l]]=0},o=self.webpackChunkalurabank=self.webpackChunkalurabank||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),(()=>{function e(e){return function(t,o){let a;console.log(`Modificando protype ${t.constructor.name}\n             e adicionando getter para a propriedade ${o}`),Object.defineProperty(t,o,{get:function(){return a||(a=document.querySelector(e),console.log(`buscando elemento do DOM com o seletor \n                 ${e} para injetar em ${o}`)),a}})}}var t;!function(e){e[e.DOMINGO=0]="DOMINGO",e[e.SEGUNDA=1]="SEGUNDA",e[e.TERCA=2]="TERCA",e[e.QUARTA=3]="QUARTA",e[e.QUINTA=4]="QUINTA",e[e.SEXTA=5]="SEXTA",e[e.SABADO=6]="SABADO"}(t||(t={}));var o=n(7);class a{constructor(){this.negociacoes=[]}adiciona(e){this.negociacoes.push(e)}lista(){return this.negociacoes}paraTexto(){return JSON.stringify(this.negociacoes,null,2)}ehIgual(e){return JSON.stringify(this.negociacoes)===JSON.stringify(e.lista())}}class r{constructor(e){const t=document.querySelector(e);if(!t)throw Error(`Seletor ${e} não existe no DOM. Verifique`);this.elemento=t}update(e){let t=this.template(e);this.elemento.innerHTML=t}}class i extends r{template(e){return`\n            <p class="alert alert-info">${e}</p>\n        `}}class s extends r{template(e){return`\n        <table class="table table-hover table-bordered">\n            <thead>\n                <tr>\n                    <th>DATA</th>\n                    <th>QUANTIDADE</th>\n                    <th>VALOR</th>\n                </tr>\n            </thead>\n            <tbody>\n                ${e.lista().map((e=>`\n                        <tr>\n                            <td>${this.formatar(e.data)}\n                            </td>\n                            <td>\n                                ${e.quantidade}\n                            </td>\n                            <td>\n                                ${e.valor}\n                            </td>\n                        </tr>\n                    `)).join("")}\n            </tbody>\n        </table>\n        `}formatar(e){return(new Intl.DateTimeFormat).format(e)}}!function(e,t,o,a){var n,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);r>3&&i&&Object.defineProperty(t,o,i)}([function(e,t,o){const a=o.value;return o.value=function(...e){let t=a.apply(this,e);return"string"==typeof t&&(t=t.replace(/<script>[\s\S]*?<\/script>/,"")),t},o}],s.prototype,"template",null);var c=function(e,t,o,a){var n,r=arguments.length,i=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i};class l{constructor(){this.negociacoes=new a,this.negociacoesView=new s("#negociacoesView"),this.mensagemView=new i("#mensagemView"),this.negociacoesView.update(this.negociacoes)}adiciona(){const e=o.u.criaDe(this.inputData.value,this.inputQuantidade.value,this.inputValor.value);this.ehDiaUtil(e.data)?(this.negociacoes.adiciona(e),function(...e){for(let t of e)console.log(t.paraTexto())}(e,this.negociacoes),this.limparFormulario(),this.atualizaView()):this.mensagemView.update("Apenas negociações em dias úteis são aceitas")}importaDados(){n.e(634).then(n.bind(n,634)).then((e=>{(new e.NegociacoesService).obterNegociacoesDoDia().then((e=>e.filter((e=>!this.negociacoes.lista().some((t=>t.ehIgual(e))))))).then((e=>{for(let t of e)this.negociacoes.adiciona(t);this.negociacoesView.update(this.negociacoes)}))}))}ehDiaUtil(e){return e.getDay()>t.DOMINGO&&e.getDay()<t.SABADO}limparFormulario(){this.inputData.value="",this.inputQuantidade.value="",this.inputValor.value="",this.inputData.focus()}atualizaView(){this.negociacoesView.update(this.negociacoes),this.mensagemView.update("Negociação adicionada com sucesso")}}c([e("#data")],l.prototype,"inputData",void 0),c([e("#quantidade")],l.prototype,"inputQuantidade",void 0),c([e("#valor")],l.prototype,"inputValor",void 0),c([function(e,t,o){const a=o.value;return o.value=function(...e){console.log(`--- Método ${t}`),console.log(`------ parâmetros: ${JSON.stringify(e)}`);const o=a.apply(this,e);return console.log(`------ retorno: ${JSON.stringify(o)}`),o},o},function(e=!1){return function(t,o,a){const n=a.value;return a.value=function(...t){let a=1,r="milisegundos";e&&(a=1e3,r="segundos");const i=performance.now(),s=(n.apply(this,t),performance.now());console.log(`${o}, tempo de execução: ${(s-i)/a} ${r}`)},a}}()],l.prototype,"adiciona",null);const u=new l,d=document.querySelector(".form");if(!d)throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe.");d.addEventListener("submit",(e=>{e.preventDefault(),u.adiciona()}));const p=document.querySelector("#botao-importa");if(!p)throw Error("Botão importa não foi encontrado");p.addEventListener("click",(()=>{u.importaDados()}))})()})();