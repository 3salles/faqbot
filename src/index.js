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
    end: true,
  },
  {
    id:"atividades-complementares-link",
    component: (<div>Clique no link para acessar as <a href="http://bict.ufma.br/wp-content/uploads/2019/11/NORMAS-2019.pdf" target="_blank" style={{ color: '#FFF'}}>Atividades complementares</a></div>),
    asMessage: true,
    end: true,
  },
  {
    id:"quadro-aproveitamento-link",
    component: (<div>Clique no link para acessar o <a href="http://bict.ufma.br/wp-content/uploads/2019/08/QUADRO-DE-EQUIVAL%C3%8ANCIA-P-APROVEITAMENTOS-2019-15-08-2019.pdf" target="_blank" style={{ color: '#FFF'}}>Quadro de aproveitamento</a></div>),
    asMessage: true,
    end: true,
  },
  {
    id:"duvidas-frequentes",
    message:"Escolha uma opção.",
    end: true,
  },
  {
    id:"contatos-coordenacao",
    message:"Estes são os meios de contato com a Coordenação.",
    end: true,
  },
  {
    id:"nenhuma-opcao",
    message: "Sinto muito, não possuo a informação que procura. >_<", // Colocar emojis
    end: true,
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

