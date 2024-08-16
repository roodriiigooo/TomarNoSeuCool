// Lista de mensagens desmotivadoras
const mensagens = [
"Hoje é o dia perfeito para não fazer nada",
"O sucesso é só para quem tem sorte, então, boa sorte",
"Não espere muito de você mesmo",
"Se tá difícil, vai piorar",
"O caminho para o seu fracasso é acreditar que você pode",
"A esperança é a última que morre, mas morre",
"Sonhos são feitos para serem esquecidos",
"Nada como um dia pior que o outro",
"Tentar é o primeiro passo para o fracasso",
"Nem sempre o esforço vale a pena",
"A luz no fim do túnel pode não ser pra você",
"A única certeza é a incerteza",
"A vida é uma sequência de desilusões",
"Não espere nada e você vai se decepcionar",
"O amanhã não vai ser melhor",
"Tudo pode sempre piorar",
"Acredite: desistir é uma opção",
"Os melhores planos geralmente dão errado",
"Hoje pode não ser o seu dia, mas amanhã também não",
"Seja mediano, é mais fácil",
"O importante é não se destacar",
"Quanto mais alto, maior a queda",
"Nem todo esforço é recompensado",
"O sucesso alheio é só para te lembrar do seu fracasso",
"Às vezes, não fazer nada é o melhor a se fazer",
"Lembre-se: quem não arrisca não se frustra",
"O que está ruim sempre pode piorar",
"Seja realista: o seu fracasso é sempre uma opção",
"O mundo não gira ao seu favor, e nem vai",
"O melhor da vida é a ilusão de que pode melhorar",
"Cada dia é uma nova chance de fracassar, seu fracassado",
"A felicidade é apenas uma pausa entre dois problemas",
"A vida é curta, então não se apresse",
"O que você faz hoje provavelmente não vai importar amanhã",
"Quem espera, cansa",
"O sucesso é a exceção, não a regra",
"Ninguém se importa com seus problemas",
"O que não te mata te deixa mais cínico",
"É sempre mais fácil desistir",
"Todo esforço pode ser em vão",
"Não espere o melhor, se contente com o possível",
"Seu sonho não pode ser alcançado",
"A maior mentira que te contaram foi que você é especial",
"Você não precisa vencer, porque você não vai",
"O seu fracasso é inevitável",
"Às vezes, o caminho mais fácil é o que você não fez",
"Acredite: o pior ainda está por vir",
"A vida é um jogo onde a perda é garantida",
"Seus sonhos são só uma distração temporária da realidade",
"Trabalhar duro só significa que você se cansará mais",
"O sucesso é um mito, como o monstro do lago Ness",
"Você é apenas um pequeno detalhe na vasta indiferença do universo",
"A única coisa que você pode garantir é o seu próprio desapontamento",
"Sonhos são apenas promessas que você nunca cumprirá",
"A vida não é justa, e ninguém se importa",
"O melhor do futuro é que ele nunca chega",
"A vida é uma piada sem graça e você é o bobo da corte",
"Não se preocupe, o fracasso é um talento que você já possui",
"O otimismo é para os ingênuos, você é muito esperto para isso",
"Se você acha que a vida vai melhorar, lembre-se de como você chegou até aqui",
"Se você acha que está indo bem, prepare-se para o tombo",
"A vida é como um filme ruim, e você é o protagonista chato",
"Ninguém se lembra do segundo lugar, e você nunca chegará ao primeiro",
"Não tente ser feliz, é só mais um trabalho sem pagamento",
"Todo dia é um ensaio para o fracasso final",
"Você não está aqui para brilhar, apenas para se apagar",
"O melhor da vida é o seu lugar garantido na fila do fracasso",
"A vitória é uma ilusão criada para manter você ocupado",
"Sua vida é um livro, e o final é sempre o mesmo: decepcionante",
"A verdade é que ninguém está realmente interessado em suas conquistas",
"O único lugar onde sucesso vem antes de trabalho é no dicionário",
"Você está destinado ao anonimato, e está indo muito bem nisso",
"O melhor que você pode fazer é se preparar para o pior",
"O único futuro garantido é a decepção",
"O mundo é indiferente, e você não faz diferença",
"Toda vez que você tenta, você só confirma o seu fracasso",
"A vida é como uma ladeira: quanto mais você sobe, mais difícil é descer",
"Não espere reconhecimento, a mediocridade é a sua zona de conforto",
"Você pode tentar ser brilhante, mas a sua luz será sempre fraca",
"O sucesso é apenas um conceito para aqueles que têm sorte",
"A esperança é uma doença que você não vai curar",
"Seus planos são apenas sonhos disfarçados de trabalho árduo",
"O futuro só traz mais do mesmo: fracasso e desilusão",
"Cada dia é uma nova oportunidade para se arrepender do passado",
"Não se preocupe com o amanhã, você ainda está preso ao hoje",
"Sua vida é um filme de terror e você está no papel principal",
"A sorte não é real, é apenas uma desculpa para o fracasso",
"O melhor que você pode fazer é se preparar para o pior cenário possível",
"A felicidade é um mito criado para te enganar",
"Você não está indo em lugar nenhum, apenas girando em círculos",
"Seu esforço só aumenta a chance de mais decepções",
"Não há luz no fim do túnel, apenas mais escuridão",
"Cada sonho realizado é apenas um prenúncio de mais desilusão",
"A vida é uma sequência interminável de pequenas derrotas",
"O que você chama de realização é apenas mais uma forma de desapontamento",
"Você está apenas adiando o inevitável fracasso",
"A felicidade é um conceito reservado para os outros",
"Sua vida é uma piada sem graça, e você é o principal alvo",
"O sucesso é uma promessa vazia feita por aqueles que não têm nada a perder",
"Cada passo em frente é apenas um avanço em direção a mais problemas",
"Você está destinado a repetir os mesmos erros eternamente",
"A vida é uma série de escolhas erradas e suas consequências",
"O que você considera uma conquista é apenas um prenúncio de fracasso",
"Você está apenas se preparando para mais um dia de decepção",
"O futuro é apenas uma continuação da sua atual falta de sucesso",
"Você não está aqui para vencer, está aqui para aprender a perder",
"Cada tentativa sua é apenas mais um lembrete do quanto você está errado",
"A vida é uma rotina de frustrações disfarçadas de oportunidades",
"O que você chama de progresso é apenas um caminho para mais dificuldades",
"Você está sempre um passo atrás do que realmente importa",
"A vida é uma jornada de desilusão contínua e você é o viajante",
"Cada dia é uma chance de perceber o quão longe você está do sucesso",
"A vida é um jogo em que todos os participantes são perdedores",
"Você não está se aproximando da felicidade, está se afastando da realidade",
"O futuro é uma coleção de dias infelizes esperando para acontecer",
"Cada novo dia é apenas mais um dia para sofrer",
"Você pode ter grandes sonhos, mas a realidade é sempre mais cruel",
"A vida é como uma peça de teatro sem roteiro, você só improvisa desastres",
"Você está aqui apenas para preencher um vazio existencial",
"O sucesso é um conto de fadas contado para te manter ocupado",
"Cada sonho seu é uma promessa não cumprida em direção ao fracasso",
"O que você considera sucesso é apenas um breve intervalo entre frustrações",
"Você está apenas adiando o inevitável fracasso com cada novo esforço",
"A vida é uma sequência de falhas, e você é o protagonista dessa tragédia",
"O que você chama de esforço é apenas um prelúdio para mais desilusão",
"Você está sempre a um passo da decepção final",
"O futuro é uma constante ameaça de mais frustração e decepção",
"Sua vida é um exemplo claro de como nada nunca dá certo",
"Cada tentativa sua é apenas mais um lembrete de que você está fadado ao fracasso",
"A vida é uma lista interminável de metas não alcançadas",
"Você não está aqui para brilhar, está aqui para sofrer e se desapontar",
"O sucesso é uma ilusão criada para manter você ocupado e distraído",
"Cada dia é uma nova oportunidade para perceber o quão pouco você conquistou",
"Você está apenas se preparando para mais uma dose de frustração diária",
"A vida é uma constante luta contra a inevitabilidade do fracasso",
"Cada esforço seu é apenas um passo a mais em direção a uma nova desilusão",
"Você não está se aproximando do sucesso, está se afastando da realidade",
"O futuro é apenas uma série de dias que você gostaria de esquecer",
"Cada nova tentativa sua é apenas mais um lembrete da sua falta de sucesso",
"A vida é um ciclo interminável de esperanças frustradas e fracassos contínuos",
"Você está sempre a um passo da próxima grande decepção",
"O sucesso é uma miragem no deserto da sua vida de fracasso",
"Cada sonho seu é uma promessa não cumprida, cada conquista é efêmera",
"A vida é uma tragédia disfarçada de comédia e você é o principal ator",
"Cada dia é uma nova oportunidade para perceber o quão longe você está do sucesso",
"O que você chama de progresso é apenas um caminho para mais frustrações",
"Você está destinado a se repetir eternamente em um ciclo de fracasso",
"A vida é uma série de erros e suas consequências inevitáveis",
"Você não está indo em lugar nenhum, apenas se afastando de seus objetivos",
"Cada tentativa sua é apenas mais um lembrete da sua própria inadequação",
"O sucesso é apenas uma pausa temporária entre suas falhas mais duradouras",
"Cada dia é uma nova chance de se arrepender das escolhas passadas",
"A vida é uma jornada sem destino final, apenas um ciclo interminável de frustrações",
"Você está sempre a um passo de mais uma grande desilusão",
"O futuro é uma promessa de mais do mesmo: falhas e desapontamentos contínuos",
"Cada novo esforço seu é apenas uma nova forma de fracasso",
"Você está apenas adiando o inevitável com cada novo objetivo que não alcança",
"A vida é uma série de eventos infelizes, e você é o principal ator",
"Cada passo em frente é apenas mais um passo em direção ao fracasso",
"Você não está avançando, está apenas mudando o cenário da sua própria frustração",
"O sucesso é uma ilusão criada para te manter distraído do fracasso iminente",
"Cada dia é uma nova chance para perceber o quão inútil seu esforço tem sido",
"A vida é uma peça de teatro onde você sempre recebe papéis secundários",
"Você está apenas se preparando para mais uma série de desilusão e fracasso",
"O futuro é uma coleção de dias em que você não vai alcançar nada",
"Cada sonho seu é apenas mais uma forma de se iludir com a realidade",
"Você está sempre a um passo de mais uma grande desilusão, não importa o que faça",
"A vida é uma sequência de eventos decepcionantes, e você está sempre no centro",
"Cada tentativa sua de mudar a vida é apenas mais um fracasso disfarçado",
"Você não está indo em lugar nenhum, apenas girando em círculos na sua própria desilusão",
"O sucesso é uma promessa vazia e você está destinado a fracassar",
"Cada dia é uma nova oportunidade para se arrepender das escolhas feitas",
"Você está apenas adiando o inevitável fracasso com cada novo esforço e objetivo",
"A vida é uma série de erros e cada dia é uma nova chance de cometê-los",
"Você está sempre a um passo de mais uma grande frustração",
"O futuro é uma promessa de mais do mesmo: fracasso e desapontamento contínuos",
"Cada novo esforço seu é apenas mais uma tentativa frustrada de mudar sua vida",
"Você está apenas adiando o fracasso com cada novo objetivo que não alcança",
"A vida é uma rotina de desilusões, e você está sempre no mesmo ciclo",
"A vida é um ciclo interminável de frustrações e decepções",
"Cada dia é uma nova chance de perceber o quão pouco você avançou",
"A vida é uma sequência de pequenos fracassos disfarçados de conquistas",
"Você está apenas adiando o fracasso com cada novo dia que passa",
"A vida é uma série interminável de desilusões, e você está sempre no centro delas",
"Cada momento de felicidade é apenas um intervalo entre os momentos de desespero",
"Viver é apenas uma forma de prolongar o sofrimento diário com pequenas distrações",
"Cada sonho realizado é apenas uma nova forma de se desiludir",
"A vida não melhora, você só aprende a aceitar o fracasso mais suavemente",
"Você está sempre a um passo de se arrepender das escolhas que fez",
"A vida é uma sucessão de problemas disfarçados de oportunidades",
"Cada passo que você dá é apenas mais um passo em direção ao fracasso",
"A vida é uma sucessão de erros disfarçados de novas oportunidades",
"Cada novo objetivo é apenas mais uma chance de se decepcionar",
"A vida é uma série de pequenos desastres intercalados com breves momentos de esperança",
"Cada dia é uma nova chance de perceber que você não está indo a lugar nenhum",
"A vida é uma jornada sem fim de frustrações e desilusões",
"Cada tentativa sua de melhorar a vida é apenas uma nova forma de fracassar",
"Você está sempre a um passo de mais uma grande decepção",
"A vida é uma série de derrotas disfarçadas de vitórias",
"A vida não é uma aventura emocionante, é apenas uma sequência de desastres",
"Cada dia é uma nova chance de perceber que você está estagnado",
"A vida é uma sucessão de desilusões disfarçadas de lições aprendidas",
"Você está apenas prolongando o sofrimento com cada novo objetivo que não alcança",
"Cada momento de alegria é apenas uma pausa entre os momentos de desespero",
"A vida é uma série interminável de frustrações e desilusões",
"Cada novo passo é apenas uma nova forma de se decepcionar",
"A vida é uma sequência de pequenos fracassos intercalados com breves períodos de esperança",
"A vida não melhora, você só aprende a lidar com o fracasso de maneira mais eficiente",
"A vida é uma jornada interminável de desilusões disfarçadas de sucessos",
"Você está apenas adiando a frustração com cada novo objetivo que não alcança",
"Cada linha que você lê é um lembrete de que a vida não vai mudar",
"A vida é uma série de problemas disfarçados de oportunidades",
"A vida é uma sucessão de pequenas derrotas disfarçadas de vitórias",
"Cada novo esforço é apenas uma nova forma de fracassar",
"Você está apenas prolongando o sofrimento com cada nova tentativa",
"Cada dia é uma nova chance de perceber o quão pouco você realmente avançou",
"A vida é uma sucessão de problemas disfarçados de novas oportunidades",
"Você está apenas adiando o fracasso com cada novo esforço",
"A vida é uma série interminável de desilusões e frustrações",
"Cada nova tentativa sua é apenas mais uma forma de fracassar",
"A vida é uma sequência de pequenos desastres intercalados com breves momentos de esperança",
"Você está apenas prolongando o sofrimento com cada nova tentativa de melhorar sua vida",
"A vida é uma série interminável de frustrações disfarçadas de conquistas",
"Cada dia é uma nova oportunidade para perceber o quão pouco você realmente avançou",
"A vida é uma série de pequenos fracassos intercalados com breves períodos de esperança",
"Cada nova tentativa é apenas uma nova forma de fracassar",
"A vida é uma sucessão de pequenos fracassos disfarçados de conquistas",
"Cada dia é uma nova chance de se arrepender das escolhas feitas",
"Você está sempre a um passo de se arrepender das escolhas que fez",

  
];


function mostrarMensagemDoDia() {
    // const hoje = new Date();
    // const diaDoAno = Math.floor((hoje - new Date(hoje.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    // document.getElementById('message').innerText = "\"" + mensagens[diaDoAno % mensagens.length] + "\"";
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    document.getElementById('message').innerText = "\"" + mensagens[indiceAleatorio] + "\"";
}

// Executa a função quando o documento é carregado
document.addEventListener('DOMContentLoaded', mostrarMensagemDoDia);