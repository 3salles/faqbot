/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";
import './index.css';


const steps = [
  {
    id:'saudacao',
    message: "Olá, eu sou o Caio. Sou membro virtual do CABICT.",
    trigger:'perguntar nome',
  },
  {
    id:"perguntar nome",
    message:"Qual seu nome?",
    trigger: "esperando nome",
  },
  {
    id:"esperando nome",
    user: true,
    trigger: "agradecimentos",
  },
  {
    id: "agradecimentos",
    message: "Olá, {previousValue}. Prazer em te conhecer!!",
    trigger: "ajuda",
  },
  {
    id: "ajuda",
    message: "Em que posso ajudar?",
    trigger: "opcoes de ajuda",
  },
  {
    id:"opcoes de ajuda",
    options: [
      {value:1, label:"Documentos do curso", trigger:"documentos"},
      {value:2, label:"ajuda", trigger:"ajuda"},
    ],
  },
  {
    id: "documentos",
    message: "Qual documento você quer?",
    trigger: "listar-documentos",
  },
  {
    id: "listar-documentos",
    options: [
      {value:"ppc", label: "PPC do curso", trigger:"link-ppc"},
      {value:"atividades-complementares", label:"Atividades complementares", trigger: "link-atividades-complementares"},
      {value:"tabela-aproveitamento", label:"Tabela de aproveitamentos", trigger: "link-tabela-aproveitamento"},
    ],
  },
  {
    id:"link-ppc",
    component: (<div>Clique aqui para acessar o PPC do curso: <a href="http://bict.ufma.br/wp-content/uploads/2017/11/PPC_BICT.pdf" target="_blank">PPC do curso</a></div>),
    asMessage: true,
    end:true,
  },
  {
    id:"link-atividades-complementares",
    component: (<div>Clique aqui para acessar às atividade complementares: <a href=" http://bict.ufma.br/wp-content/uploads/2019/11/NORMAS-2019.pdf" target="_blank">Atividades complementares</a></div>),
    asMessage:true,
    end:true,
  },
  {
    id:"link-tabela-aproveitamento",
    component: (<div>Clique aqui para acessar ao Quadro de aproveitamento: <a href="http://bict.ufma.br/wp-content/uploads/2019/08/QUADRO-DE-EQUIVAL%C3%8ANCIA-P-APROVEITAMENTOS-2019-15-08-2019.pdf" target="_blank">Quadro de Aproveitamento</a></div>),
    asMessage: true,
    end:true,
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

