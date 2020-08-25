/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";
import './index.css';


const steps = [
  {
    id:"apresentacao",
    message: "Olá, eu sou Caio, membro virtual do CABICT.",
    trigger:"pergunta-nome",
  },
  {
    id:"pergunta-nome",
    message:"Qual seu nome?",
    trigger:"nome",
  },
  {
    id:"nome",  // Validação de nome
    user:true, // Nome.capitalize()
    validator: (value) => {
      var name = /^((\b[A-zÀ-ú']{1,40}\b))$/;
      let nome_invalido = 'Digite um nome válido, por favor.';
      name.test(value);
      return name.test(value) ? true : nome_invalido;
    },
    trigger:"saudacao",
  },
  {
    id:"saudacao",
    message:"Olá, {previousValue}. Prazer em te conhecer!",  // Joke: se nome igual ao de Caio => "E ai, xará!"
    trigger:"ver-cracha",
  },
  {
    id:"ver-cracha",
    message:"Quer ver meu crachá?",
    trigger:"ver-cracha-opcoes",
  },
  {
    id:"ver-cracha-opcoes",
    options: [
      { value:"sim", label:"Sim", trigger:"ver-cracha-sim" },
      { value:"nao", label:"Não", trigger:"oferece-ajuda"},
    ],
  },
  {
    id:"ver-cracha-sim",
    message:"Aqui está meu crachá.", // Colocar imagem 
    trigger: "oferece-ajuda",
  },
  {
    id:"oferece-ajuda",
    message:"Em que posso ajudar?",
    trigger:"oferece-ajuda-opcoes",
  },
  {
    id:"oferece-ajuda-opcoes",
    options: [
      { value:"documentos", label:"Documentos do curso", trigger:"documentos-curso" },
      { value:"duvidas", label:"Dúvidas frequentes", trigger:"duvidas-frequentes" },
      { value:"contatos", label:"Contatos da Coordenação", trigger:"contatos-coordenacao" },
      { value:"nenhum", label:"Nenhuma opção", trigger:"nenhuma-opcao" },
    ],
  },
  {
    id:"documentos-curso",
    message:"Estes são os documentos do curso. Qual você quer?",
    trigger: "documentos-curso-opcoes",
  },
  {
    id: "documentos-curso-opcoes",
    options: [
      { value:"ppc", label:"PPC do curso", trigger: "ppc-link"},
      { value:"atividades-complementares", label:"Atividades complementares", trigger: "atividades-complementares-link"},
      { value:"quadro-aproveitamento", label:"Quadro de aproveitamento", trigger: "quadro-aproveitamento-link"},
      { value:"nenhum", label:"Nenhuma opção", trigger: "nenhuma-opcao"},
    ],
  },
  {
    id:"ppc-link",
    component: (<div>Clique no link para acessar o <a href="http://bict.ufma.br/wp-content/uploads/2017/11/PPC_BICT.pdf" target="_blank" style={{ color: '#FFF'}}>PPC do curso</a></div>),
    asMessage: true,
    trigger: "mais-ajuda",
  },
  {
    id:"atividades-complementares-link",
    component: (<div>Clique no link para acessar as <a href="http://bict.ufma.br/wp-content/uploads/2019/11/NORMAS-2019.pdf" target="_blank" style={{ color: '#FFF'}}>Atividades complementares</a></div>),
    asMessage: true,
    trigger: "mais-ajuda",
  },
  {
    id:"quadro-aproveitamento-link",
    component: (<div>Clique no link para acessar o <a href="http://bict.ufma.br/wp-content/uploads/2019/08/QUADRO-DE-EQUIVAL%C3%8ANCIA-P-APROVEITAMENTOS-2019-15-08-2019.pdf" target="_blank" style={{ color: '#FFF'}}>Quadro de aproveitamento</a></div>),
    asMessage: true,
    trigger: "mais-ajuda",
  },
  {
    id:"mais-ajuda",
    message:"Posso ajudar em mais alguma coisa?",
    trigger:"mais-ajuda-opcao",
  },
  {
    id:"mais-ajuda-opcao",
    options: [
      { value:"mais-ajuda-opcao-sim", label:"Sim", trigger:"oferece-ajuda" },
      { value:"mais-ajuda-nao", label:"Não", trigger:"avaliacao" },
    ],
  },
  {
    id:"avaliacao",
    message: "Eu sou um membro em treinamento, poderia avaliar meu atendimento?",
    trigger:"avaliacao-opcoes",
  },
  {
    id:"avaliacao-opcoes",
    options: [
      { value:"avaliacao-opcoes-sim", label:"Sim", trigger:"avaliacao-formulario"}, 
      { value:"avaliacao-opcoes-nao", label:"Não", trigger:"agradecimentos"}
    ],
  },
  {
    id:"avaliacao-formulario",
    message: "Preencha este formulario, por favor!", // Colocar formulário de satisfação
    trigger:"agradecimentos"
  },
  {
    id:"agradecimentos",
    message:"Foi uma honra te ajudar! Sempre estarei disponível para tirar suas dúvidas. ;)",
    end: true,
  },
  {
    id:"duvidas-frequentes", // Ramo Dúvidas Frequentes
    message:"Escolha uma opção.",
    end: true,
  },
  {
    id:"contatos-coordenacao", // Ramo Contatos Coordenação
    message:"Estes são os meios de contato com a Coordenação.",
    end: true,
  },
  {
    id:"nenhuma-opcao",
    message: "Sinto muito, não possuo a informação que procura. >_<", // Colocar emojis
    trigger:"informar-duvida",
  },
  {
    id:"informar-duvida",
    message:"Para que eu possa te ajudar da próxima vez, pode me informar qual é sua dúvida?",
    trigger: "informar-duvida-opcoes",
  },
  {
    id:"informar-duvida-opcoes",
    options: [
      { value:"informar-duvida-sim", label:"Sim, posso.", trigger: "esclarecer-duvida" },
      { value:"informar-duvida-nao", label:"Não quero", trigger: "desculpa"},
    ],
  },
  {
    id:"esclarecer-duvida",
    message:"Por favor, diga sua dúvida.", // Como salvar a dúvida?
    trigger:"contato-ca",
  },
  {
    id:"desculpa",
    message:"Sinto muito em não poder ajudar. :(",
    trigger:"contato-ca",
  },
  {
    id:"contato-ca",
    message:"Para compensar, aqui estão os meios de entrar em contato com CA. Selecione uma opção.",
    trigger: "contato-ca-opcoes",
  },
  {
    id:"contato-ca-opcoes",
    options: [
      { value:"email", label: "E-mail", trigger:"avaliacao" }, //Colocar link e icone do email
      { value:"instagram", label:"Instagram", trigger:"avaliacao" }, // Colocar link e icone do intagram
      { value:"twitter", label:"Twitter", trigger:"avaliacao"}, // Colocar link e icone do twetter
      { value:"whatsapp", label: "WhatsApp", trigger:"avaliacao"} // Colocar icone e contatos do membros
    ],
  },
];

const theme = {
  background: '#d5dff2',
  fontFamily: 'Roboto',
  headerBgColor: '#39588E',
  headerFontColor: '#fff',
  headerFontSize: '25px',
  botBubbleColor: '#39588E',
  botFontColor: '#fff',
  userBubbleColor: '#94b6ef',
  userFontColor: '#000',
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ChatBot headerTitle='Caio' hideUserAvatar='true' steps={steps} />
  </ThemeProvider>,
  document.getElementById('root')
);

