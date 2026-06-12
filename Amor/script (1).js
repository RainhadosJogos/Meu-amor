const terminal = document.getElementById('terminal');
const cursor = document.querySelector('.cursor');
const enterBtn = document.getElementById('enter-btn');
const nextSection = document.getElementById('next-section');
const roboSection = document.getElementById('robo-section');
const musicSection = document.getElementById('music-section');
const mensagemSection = document.getElementById('mensagem-section');
const terminalContainer = document.getElementById('terminal-container');
const sound = document.getElementById('type-sound');
const menu = document.getElementById('menu');
const trackTitle = document.getElementById('track-title');
const playerContainer = document.getElementById('player-container');
const playlistContainer = document.getElementById('playlist-container');
const cartaDigitada = document.getElementById('carta-digitada');
const toggleStarsBtn = document.getElementById('toggle-stars');
const errorSection = document.getElementById('error-section');
const fragmentosSection = document.getElementById('fragmentos-section');
const contadorSection = document.getElementById('contador-section');
const contadorElement = document.getElementById('contador');

// === Terminal Inicial ===
const lines = [
  "Inicializando sistema MARCOS.EXE...",
  "Identidade reconhecida: Marcos",
  "Carregando memórias compartilhadas...",
  "Sincronizando corações...",
  "Conexão estabelecida com sucesso.",
  "♥️ Amor detectado.",
  "Bem-vindo, viajante."
];
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];
    terminal.textContent += currentLine[charIndex] || '';
    charIndex++;
    if (charIndex < currentLine.length) {
      sound.currentTime = 0;
      sound.play();
      setTimeout(typeLine, 50);
    } else {
      terminal.textContent += '\n';
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLine, 400);
    }
  } else {
    cursor.style.display = 'none';
    enterBtn.style.display = 'inline-block';
  }
}

window.onload = typeLine;

enterBtn.addEventListener('click', enterSystem);

function enterSystem() {
  terminalContainer.style.display = 'none';
  nextSection.classList.add('active');
  typeNextSectionText();
}

function typeNextSectionText() {
  const typingElem = document.querySelector('.typing-text');
  const text = "Processando sentimentos... Conectando coração à rede...";
  let idx = 0;
  function typeChar() {
    if (idx <= text.length) {
      typingElem.textContent = text.substring(0, idx);
      idx++;
      setTimeout(typeChar, 60);
    }
  }
  typeChar();
}

// === Robô e Diário Interativo ===
function mostrarRobo() {
  nextSection.classList.remove('active');
  roboSection.classList.add('active');
  roboSection.scrollIntoView({ behavior: 'smooth' });
}

const frases = [
  "Toda jornada épica começa com um encontro inesperado.",
  "Mesmo atravessando toda a Terra-média, eu encontraria o caminho até você.",
  "Nem mesmo as estrelas de Valinor brilham tanto quanto o seu sorriso.",
  "Se a jornada for longa, caminharei ao seu lado até o último amanhecer.",
  "Meu coração encontrou seu lar quando encontrou você.",
  "Você é minha pessoa favorita em todos os reinos conhecidos.",
  "Em qualquer mapa, meu destino final seria você.",
  "Há coisas raras em todos os mundos. Você é a mais rara delas.",
  "Se existirem outras vidas, espero encontrar você em todas elas.",
  "Você vale mais do que qualquer item lendário.",
  "Toda grande aventura precisa de alguém especial. A minha é você.",
  "Entre todos os territórios de Black Desert, meu lugar favorito continua sendo ao seu lado.",
  "Você vale mais do que qualquer acessório PEN.",
  "Nem a sorte de um aprimoramento perfeito me deixaria tão feliz quanto uma mensagem sua.",
  "Meu coração fica mais acelerado quando você aparece do que durante uma batalha de chefe mundial.",
  "Você é o tesouro mais raro que encontrei em toda a minha jornada.",
  "Se eu pudesse escolher apenas uma recompensa, escolheria você.",
  "Nem mesmo uma montaria lendária chegaria tão longe quanto meus sentimentos por você.",
  "Você transformou minha aventura em um lar.",
  "Se a vida fosse uma missão, você seria a parte mais importante dela.",
  "Entre desertos, oceanos e montanhas, sempre encontraria o caminho de volta para você.",
  "Mesmo carregando o Um Anel, o peso que mais gosto de sentir é o da sua mão na minha.",
  "Você é meu Condado depois de um dia difícil.",
  "Há jornadas que mudam o mundo. Você mudou o meu.",
  "Meu coração encontrou seu lar quando encontrou você.",
  "Nem toda luz vem das estrelas. Algumas vêm do seu sorriso.",
  "Se eu me perdesse na Terra-média, ainda encontraria você.",
  "Entre elfos, reis e magos, você continua sendo minha pessoa favorita.",
  "Meu maior tesouro não foi encontrado em uma aventura, mas em você.",
  "Mesmo no caminho mais escuro, você é minha esperança.",
  "Existem muitas histórias grandiosas, mas a minha favorita é a nossa.",
  "Se o destino me desse mil vidas, eu procuraria você em todas elas.",
  "Você é mais raro que mithril.",
  "Nem os sábios de Valfenda conseguiriam explicar o quanto eu gosto de você.",
  "Se a estrada for longa, prometo caminhar ao seu lado até o fim.",
  "Meu lar não é um lugar. É você.",
  "Você faz até os dias comuns parecerem lendários.",
  "Em qualquer reino, eu escolheria você novamente.",
  "Mesmo quando não digo nada, meu coração continua falando seu nome.",
  "Você é a estrela que sigo quando não sei para onde ir.",
  "Não existe aventura que eu prefira viver sem você.",
  "Entre todos os territórios de Black Desert, meu favorito é onde você está.",
  "Você vale mais que qualquer acessório PEN.",
  "Meu coração acelera mais com uma mensagem sua do que com um chefe mundial.",
  "Nem mesmo uma tentativa de aprimoramento perfeita me deixa tão feliz quanto você.",
  "Você é o item mais raro que encontrei nessa jornada.",
  "Meu ponto de retorno sempre será ao seu lado.",
  "Você é a recompensa que faz toda missão valer a pena.",
  "Mesmo nos dias difíceis, você é meu buff de coragem.",
  "Se eu tivesse apenas uma escolha, ainda escolheria você.",
  "Entre desertos, mares e montanhas, encontraria o caminho até você.",
  "Você é minha descoberta favorita.",
  "Nenhum mapa mostra o caminho para o que sinto por você.",
  "Meu coração aceitou uma missão permanente: amar você.",
  "Você é mais valioso que qualquer tesouro escondido em Valencia.",
  "A melhor aventura da minha vida começou quando você apareceu.",
  "Mesmo depois de milhares de quilômetros percorridos, meu destino continua sendo você.",
  "Você transformou uma simples jornada em uma história épica.",
  "Se eu pudesse salvar apenas uma lembrança, escolheria um momento ao seu lado.",
  "Você é la paz que encontro depois de cada batalha.",
  "Eu atravessaria Valencia, Kamasylvia e toda a Terra-média apenas para te dar mais um abraço."
];

let ultimaFrase = "";
function trocarFrase() {
  let nova;
  do {
    nova = frases[Math.floor(Math.random() * frases.length)];
  } while (nova === ultimaFrase);
  ultimaFrase = nova;
  document.getElementById("frase").textContent = nova;
}

const diarioMensagens = [
  "Hoje caminhei muitos quilômetros, mas ainda não encontrei um lugar tão confortável quanto o abraço dele.",
  "O Um Anel pode ser pesado, mas a saudade de você pesa muito mais no meu peito.",
  "Sam diz que precisamos de comida, eu digo que preciso apenas de um sorriso do Marcos para recuperar o fôlego.",
  "Vi uma estrela cadente hoje e, em vez de pedir para chegar à Montanha da Perdição, pedi para estar logo com você.",
  "As estradas de Kamasylvia são belas, mas nenhuma trilha se compara ao caminho que me leva até você.",
  "Às vezes sinto que estou em uma missão impossível, mas lembrar de nós me dá o buff de coragem que eu precisava.",
  "Escrevo estas linhas sob a luz de uma fogueira, imaginando quando será nossa próxima aventura real.",
  "Encontrei um cristal raro hoje, mas ele não brilha nem metade do que os seus olhos quando você ri.",
  "O deserto de Valencia é quente, mas não tanto quanto o calor que sinto quando penso em você.",
  "Se a vida for um MMORPG, você é o único jogador com quem eu quero fazer grupo para sempre.",
  "Trocaria todo o mithril do mundo por mais cinco minutos de silêncio ao seu lado.",
  "A jornada é longa e cheia de perigos, mas com você na minha mente, me sinto invencível.",
  "Sonhei com o Condado hoje, e você estava lá, sentado na grama comigo. Foi o melhor sonho da viagem.",
  "Meus pés estão cansados, mas meu coração está mais leve do que nunca desde que te conheci.",
  "Existe uma magia em você que nem os magos mais sábios conseguiriam explicar.",
  "Cada passo que dou para longe é um passo que planejo dar de volta para os seus braços.",
  "A escuridão tenta me cercar, mas a lembrança do seu 'eu te amo' é minha luz de Eärendil.",
  "Se eu pudesse salvar o mundo ou salvar você, eu escolheria você e construiríamos um novo mundo juntos.",
  "O tempo parece passar diferente quando estamos longe, como se os segundos fossem eras.",
  "Minha maior conquista não foi um item PEN, foi ter conquistado um espaço no seu coração."
];

let paginaAtualDiario = 0;

function toggleDiario() {
  const container = document.getElementById('diario-container');
  container.classList.toggle('hidden');
  if (!container.classList.contains('hidden')) {
    atualizarPaginaDiario();
  }
}

function atualizarPaginaDiario() {
  const texto = document.getElementById('diario-texto');
  const numero = document.getElementById('diario-numero');
  texto.textContent = '"' + diarioMensagens[paginaAtualDiario] + '"';
  numero.textContent = 'Página ' + (paginaAtualDiario + 1);
}

function proximaPagina() {
  if (paginaAtualDiario < diarioMensagens.length - 1) {
    paginaAtualDiario++;
    atualizarPaginaDiario();
  }
}

function paginaAnterior() {
  if (paginaAtualDiario > 0) {
    paginaAtualDiario--;
    atualizarPaginaDiario();
  }
}

// === Trilha Sonora ===
function mostrarTrilha() {
  roboSection.classList.remove('active');
  musicSection.classList.add('active');
  menu.classList.remove('hidden');
  musicSection.scrollIntoView({ behavior: 'smooth' });
  renderPlaylist();
  loadTrack(currentTrackIndex);
}

const playlist = [
  { title: "Damiano - The First Time", id: "n1Hzf_is8tI" },
  { title: "Cazuza - Exagerado", id: "KmVmoHg9zuU" },
  { title: "Mitski - Washing Machine Heart", id: "3vjkh-acmTE" },
  { title: "Billie Eilish - Birds of a Feather", id: "d5gf9dXbPi0" },
  { title: "Billie Eilish - Wildflower", id: "l08Zw-RY__Q" },
  { title: "Kamaitachi - Julieta", id: "qGCq4wrQhSg" },
  { title: "Barão Vermelho - Por Você", id: "WRGcgkF1mK8" },
  { title: "Tom Jobim - Eu Sei Que Vou Te Amar", id: "TARRNm0x1Iw" },
  { title: "Jorge e Mateus - Pra Sempre com Você", id: "VWRkQARH-9o" },
  { title: "Diego e Victor - Entregador de Flor", id: "TvgHPioJqAY" },
  { title: "Luan Santana - Te Vivo", id: "iwBNAkU9wMk" },
  { title: "Luan Santana - Tudo Que Você Quiser", id: "zF2I8IazFNo" },
  { title: "AnaVitória e Lenine - Lisboa", id: "o3-lzz60iTQ" },
  { title: "AnaVitória e Vitor Kley - Pupila", id: "9Sk7RQtSl5g" },
  { title: "The Neighbourhood - Fall Star", id: "54kTO17-j_0" },
  { title: "The Neighbourhood - Little Death", id: "LVqGRJLEj28" },
  { title: "Damiano - Zombie Lady", id: "LP2nqXYwl6Q" },
  { title: "Chris Grey - lifetime", id: "R6B0cnduVWE" },
  { title: "Chris Grey - Burn The World", id: "SkcO47UDzzY" },
  { title: "Fuji Kaze - Shinunoga E Wa", id: "dawrQnvwMTY" },
  { title: "Guns N' Roses - Sweet Child O'Mine", id: "1w7OgIMMRc4" },
  { title: "Avenged Sevenfold - Gunslinger", id: "cdKyzzm465Q" },
  { title: "Guns N' Roses - This I Love", id: "vhvP905I-aQ" },
  { title: "Slayer - Raining Blood", id: "CkaE237oiwE" },
  { title: "AudioSlave - Like a Stone", id: "7QU1nvuxaMA" },
  { title: "Sombr - Undressed", id: "z0wT6CrEGY" },
  { title: "Luisa Sonza - Iguaria", id: "Y9KY4s8lIHA" },
  { title: "Venere Vai Venus - Anjos", id: "mJjHVOv2bWI" },
  { title: "Artic Monkeys - I Wanna Be Yours", id: "nyuo9-OjNNg" },
  { title: "Lana Del Rey - Young And Beautiful", id: "o_1aF54DO60" },
  { title: "Post Malone ft. Ozzy Osbourne, Travis Scott - Take What You Want", id: "LYa_ReqRlcs" },
  { title: "Ozzy Osbourne - No More Tears", id: "CprfjfN5PRs" },
  { title: "Goo Goo Dolls - Iris", id: "NdYWuo9OFAw" }
];

let currentTrackIndex = 0;
let player;

function renderPlaylist() {
  playlistContainer.innerHTML = '';
  playlist.forEach(function(track, index) {
    const btn = document.createElement('button');
    btn.classList.add('track-button');
    btn.textContent = track.title;
    btn.onclick = function() {
      currentTrackIndex = index;
      loadTrack(currentTrackIndex);
    };
    playlistContainer.appendChild(btn);
  });
}

function loadTrack(index) {
  const track = playlist[index];
  trackTitle.textContent = track.title;
  if (player) {
    player.loadVideoById(track.id);
  } else {
    player = new YT.Player('player-container', {
      height: '90', width: '100%', videoId: track.id,
      playerVars: { autoplay: 1, controls: 1, rel: 0, modestbranding: 1 },
      events: { 'onStateChange': onPlayerStateChange }
    });
  }
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) nextTrack();
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
}

// === Carta Secreta ===
const textoCarta = "Às vezes eu penso em como é estranho que uma pessoa consiga mudar tanta coisa sem sequer perceber. Antes de você, meus dias eram apenas dias. Eu acordava, fazia minhas coisas e seguia em frente. Depois de você, comecei a prestar atenção nos detalhes. Em músicas. Em frases. Em cenas de filmes. Em céus bonitos. Em tudo aquilo que me faz pensar: \"eu gostaria de dividir isso com ele.\"\nVocê se tornou parte da minha rotina de um jeito tão natural que hoje é impossível imaginar meus pensamentos sem que você apareça em algum momento. Você está nos meus planos, nas minhas expectativas e até nas coisas mais simples, como quando vejo algo engraçado e penso que preciso te contar.\nEu sei que passamos por momentos difíceis. Tivemos inseguranças, saudades, dias em que o mundo parecia pesado demais. Mas uma das coisas que mais admiro em nós é que continuamos escolhendo ficar. Continuamos escolhendo conversar, compreender, esperar e construir algo juntos. E isso me fez entender que amor não é apenas sentir; amor também é permanecer.\nPorque não importa o que aconteça, eu sempre vou escolher você.\nAcredito que o mesmo esforço que uma pessoa pode usar para pensar em desistir também pode ser usado para encontrar razões para permanecer. E, quando penso em nós, sempre encontro razões para ficar. Razões para continuar construindo, aprendendo, amadurecendo e sonhando ao seu lado.\nSe eu pudesse te mostrar como te vejo, talvez você entendesse melhor o quanto você significa para mim.\nEu amo o seu sorriso. Amo a forma como ele consegue melhorar os meus dias sem sequer tentar. Amo o seu cheiro, porque existe algo nele que me traz uma tranquilidade difícil de explicar. É como se, por alguns instantes, todo o barulho do mundo diminuísse e eu finalmente pudesse descansar.\nE eu amo os seus olhos.\nPorque quando olho para eles, sinto uma paz que não encontro em nenhum outro lugar. E porque, de alguma forma, consigo enxergar neles tudo aquilo que sempre procurei: carinho, conforto, cumplicidade e a sensação de estar exatamente onde eu deveria estar.\nVocê me faz sentir acolhida, como se eu tivesse encontrado um lugar para descansar depois de uma longa jornada.\nTalvez por isso eu goste tanto das histórias de aventura. Porque elas sempre falam sobre encontrar algo precioso depois de atravessar caminhos difíceis. E eu sinto que encontrei algo precioso in você.\nSei que ainda temos muitas páginas para escrever. Muitas memórias para criar. Muitas músicas para ouvir. Muitas conversas até tarde da noite. Muitos abraços que ainda não aconteceram. E, sinceramente, gosto da ideia de que nosso futuro ainda está sendo construído.\nVocê me ensinou que amar não é apenas olhar para alguém e gostar do que vê. É olhar para alguém e desejar continuar ali, mesmo quando as coisas ficam complicadas.\nObrigada por ser você. Por ser minha pessoa favorita. Por transformar meus dias com sua presença.\nEu te amo, Marcos.\nHoje, amanhã e em todos os \"para sempre\" que a gente inventar.";

function iniciarCarta() {
  cartaDigitada.textContent = "";
  let i = 0;
  function digitar() {
    if (i < textoCarta.length) {
      cartaDigitada.textContent += textoCarta.charAt(i);
      i++;
      setTimeout(digitar, 30);
    }
  }
  digitar();
}

// === Escolha Diária ===
const motivos = [
  "Seu sorriso.", "Seu cheiro.", "Seu abraço.", "Seu jeito de cuidar de mim.",
  "Seu olhar.", "Sua companhia.", "Sua paciência.", "Seu senso de humor.",
  "A forma como você me faz sentir em casa.", "Sua voz que me acalma.",
  "A segurança que sinto ao seu lado.", "Como você entende meus silêncios.",
  "Sua determinação.", "O brilho nos seus olhos.", "O jeito que você me faz rir.",
  "Sua bondade infinita.", "Como você torna meus dias melhores.",
  "Sua parceria em todas as missões.", "O futuro que vejo com você.", "Simplesmente por ser você."
];

function registrarEscolha() {
  const resultado = document.getElementById('resultado-escolha');
  const diaTxt = document.getElementById('dia-escolha');
  const motivoTxt = document.getElementById('motivo-escolha');
  
  const dataInicio = new Date("2025-10-08T00:00:00");
  const agora = new Date();
  const dias = Math.floor((agora - dataInicio) / (1000 * 60 * 60 * 24));
  
  resultado.classList.remove('hidden');
  diaTxt.textContent = 'Dia ' + dias;
  motivoTxt.textContent = motivos[Math.floor(Math.random() * motivos.length)];
}

// === Cápsulas de Memória ===
let capsulaAtual = 0;
const memorias = {
  1: "Lembro exatamente de como meu coração disparou na primeira vez que te vi. Foi ali que a aventura começou.",
  2: "Nossa primeira viagem foi mágica. O mundo parecia menor porque eu estava com você.",
  3: "O primeiro 'eu te amo' foi o momento em que todas as peças se encaixaram. Eu já sabia, mas ouvir foi eterno."
};

function abrirCapsula(id) {
  capsulaAtual = id;
  document.getElementById('capsula-modal').classList.remove('hidden');
  document.getElementById('memoria-texto').classList.add('hidden');
  document.getElementById('capsula-senha').value = "";
}

function verificarSenha() {
  const senha = document.getElementById('capsula-senha').value.toLowerCase();
  if (senha === 'cogumelo') {
    const texto = document.getElementById('memoria-texto');
    texto.textContent = memorias[capsulaAtual];
    texto.classList.remove('hidden');
  } else {
    alert("Senha incorreta, viajante.");
  }
}

function fecharModal() {
  document.getElementById('capsula-modal').classList.add('hidden');
}

// === Seções ===
const sections = {
  'terminal-container': terminalContainer,
  'next-section': nextSection,
  'robo-section': roboSection,
  'music-section': musicSection,
  'mensagem-section': mensagemSection,
  'contador-section': contadorSection,
  'item-lendario-section': document.getElementById('item-lendario-section'),
  'capsulas-section': document.getElementById('capsulas-section'),
  'fragmentos-section': fragmentosSection,
  'condado-section': document.getElementById('condado-section'),
  'error-section': errorSection
};

document.querySelectorAll('#menu a').forEach(function(link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    Object.values(sections).forEach(function(sec) {
      if (sec === terminalContainer) sec.style.display = 'none';
      else sec.classList.remove('active');
    });
    if (targetId === 'terminal-container') terminalContainer.style.display = 'flex';
    else if (sections[targetId]) {
      sections[targetId].classList.add('active');
      sections[targetId].scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === Contador ===
function atualizarContador() {
  const dataInicio = new Date("2025-10-08T00:00:00");
  const agora = new Date();
  const diff = agora - dataInicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);
  contadorElement.innerHTML = dias + ' dias, ' + horas + 'h ' + minutos + 'm ' + segundos + 's';
}
setInterval(atualizarContador, 1000);
atualizarContador();

// === Estrelas e Frases ===
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
let stars = [];
let starsActive = false;

const estrelaFrases = [
  "As estrelas sobre Mordor eram as mesmas que iluminavam o Condado.",
  "Mesmo separados por alguns quilômetros, olhamos para o mesmo céu.",
  "Cada estrela lá no alto é um motivo a mais para eu te amar.",
  "O universo é vasto, mas meu mundo inteiro é você.",
  "Enquanto houver estrelas no céu, haverá amor no meu peito.",
  "Você é a estrela mais brilhante da minha constelação particular.",
  "A luz das estrelas viaja anos para chegar até nós, assim como meu amor atravessa qualquer distância."
];

function mostrarFraseEstrela() {
  const overlay = document.getElementById('star-phrase');
  overlay.textContent = estrelaFrases[Math.floor(Math.random() * estrelaFrases.length)];
  overlay.style.opacity = 1;
  setTimeout(function() { overlay.style.opacity = 0; }, 6000);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function Star() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 2;
  this.speed = Math.random() * 0.5;
}
Star.prototype.update = function() {
  this.y += this.speed;
  if (this.y > canvas.height) this.y = 0;
};
Star.prototype.draw = function() {
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};

function animateStars() {
  if (!starsActive) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(function(star) { star.update(); star.draw(); });
  requestAnimationFrame(animateStars);
}

toggleStarsBtn.addEventListener('click', function() {
  starsActive = !starsActive;
  if (starsActive) {
    stars = [];
    for (let i = 0; i < 150; i++) stars.push(new Star());
    animateStars();
    mostrarFraseEstrela(); // Mostra a frase apenas quando clica
    toggleStarsBtn.textContent = "Parar Estrelas";
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    toggleStarsBtn.textContent = "Estrelas";
    document.getElementById('star-phrase').style.opacity = 0;
  }
});

function reiniciarSistema() { location.reload(); }
