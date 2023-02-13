import { useState, ChangeEvent, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import  banner from './assets/banner.jpg'
import { useForm } from 'react-hook-form';
import { MenuItem,Select, Box, Table,
  TableBody,
  TableCell,
  Grid,
  Paper,
  TableRow,
   TextField, Button, Typography, FormControl, InputLabel, useMediaQuery } from '@mui/material';



const universities = [
 
  {
    code: "001",
    name: "UFERSA",
    campus: [
      { name: "Mossoró", code: "002",
      courses: [
       
        {name: "Administração", peso_cie: 1.0, peso_hum: 3.0, peso_lin: 2.0, peso_mat: 2.0, peso_red: 2.0},
        {name: "Agronomia", peso_cie: 3.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 1.5},
        {name: "Biotecnologia", peso_cie: 3.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 1.5},
        {name: "Ciência da Computação", peso_cie: 1.0, peso_hum: 2.5, peso_lin: 3.5, peso_mat: 1.5, peso_red: 1.5},
        { name: "Ciências Contábeis", peso_cie: 1.0, peso_hum: 3.5, peso_lin: 1.0, peso_mat: 2.5, peso_red: 2.0 },
        { name: "Direito", peso_cie: 1.0, peso_hum: 2.5, peso_lin: 2.5, peso_mat: 1.0, peso_red: 3.0 },
        { name: "Ecologia", peso_cie: 3.5, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 2.5, peso_red: 1.5 },
        { name: "Engenharia Agrícola e Ambiental", peso_cie: 3.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 1.5 },
        { name: "Engenharia de Pesca", peso_cie: 4.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 2.0, peso_red: 1.5 },
        { name: "Engenharia de Petróleo", peso_cie: 3.0, peso_hum: 1.0, peso_lin: 1.0, peso_mat: 3.0, peso_red: 2.0 },
        {name: "Engenharia Florestal", peso_cie: 3.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 1.5},
        { name: "Interdisciplinar em Ciência e Tecnologia", peso_cie: 2.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 3.0, peso_red: 1.5},
        { name: "Medicina", peso_cie: 3.5, peso_hum: 2.0, peso_lin: 2.0, peso_mat: 1.0, peso_red: 1.5},
        { name: "Medicina Veterinária", peso_cie: 4.0, peso_hum: 2.0, peso_lin: 1.5, peso_mat: 1.0, peso_red: 1.5},
        { name: "Zootecnia", peso_cie: 3.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 1.5, peso_red: 2.0 },

      ]
    
    },
      { name: "Angicos", code: "003",
      courses: [
        { name: "Computação e Informática", peso_cie: 1.0, peso_hum: 2.5, peso_lin: 3.5, peso_mat: 1.5, peso_red: 1.5 },
        { name: "Interdisciplinar em Ciência e Tecnologia", peso_cie: 2.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 3.0, peso_red: 1.5},
        { name: "Interdisciplinar em Tecnologia da Informação", peso_cie: 2.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 2.5},
        { name: "Pedagogia", peso_cie: 1.0, peso_hum: 3.0, peso_lin: 2.0, peso_mat: 1.0, peso_red: 3.0},
        { name: "Sistemas de Informação", peso_cie: 2.0, peso_hum: 1, peso_lin: 2.5, peso_mat: 3.0, peso_red: 1.5 },  
      ]
    },
      { name: "Pau dos Ferros", code: "004",
      courses: [
     { name: "Interdisciplinar em Ciência e Tecnologia", peso_cie: 2.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 3.0, peso_red: 1.5},
     { name: "Interdisciplinar em Tecnologia da Informação", peso_cie: 2.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 2.5},
     { name: "Arquitetura e Urbanismo", peso_cie: 1.0, peso_hum: 2.0, peso_lin: 3.0, peso_mat: 1.0, peso_red: 3.0},
   ]
    
    },
    { name: "Caraúbas", code: "005",
    courses: [
   { name: "Interdisciplinar em Ciência e Tecnologia", peso_cie: 2.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 3.0, peso_red: 1.5},
   { name: "Letras Inglês", peso_cie: 1.0, peso_hum: 2.0, peso_lin: 3.0, peso_mat: 1.0, peso_red: 3.0},
   { name: "Letras Libras", peso_cie: 1.0, peso_hum: 2.0, peso_lin: 3.0, peso_mat: 1.0, peso_red: 3.0},
   { name: "Letras Português", peso_cie: 1.0, peso_hum: 2.0, peso_lin: 3.0, peso_mat: 1.0, peso_red: 3.0}
 ]
  
  },
    ],
  },
  {
    code: "002",
    name: "UFC",
    campus: [
      { name: "Fortaleza", code: "002",
      courses: [
       
        { name: "Administração", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        { name: "Agronomia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        { name: "Arquitetura e Urbanismo", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        { name: "Biotecnologia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        { name: "Ciências Ambientais", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        { name: "Ciências Atuariais", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        { name: "Ciências Biológicas", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        { name: "Ciências Contábeis", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        { name: "Ciências Econômicas", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        {name: "Ciências Sociais", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Cinema e Audiovisual", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Computação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Comunicação Social", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Dança", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Design", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Direito", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Educação Física", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Enfermagem", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Engenharia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Estatística", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Farmácia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Filosofia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Finanças", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Física", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Fisioterapia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Gastronomia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Geografia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Geologia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Gestão de Políticas Públicas", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "História", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Letras", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Matemática", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Medicina", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Música", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Oceanografia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Odontologia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Pedagogia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Psicologia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Química", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Secretariado Executivo", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Sistemas e Mídias Digitais", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Teatro", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Zootecnia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},

      ]
    
    },
      { name: "Sobral", code: "003",
      courses: [
        {name: "Ciências Econômicas", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Engenharia de Computação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Finanças", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Medicina", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Música", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Odontologia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
        {name: "Psicologia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
 
      ]
    },
      { name: "Russas", code: "004",
      courses: [
    {name: "Ciência da Computação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
    {name: "Engenharia Civil", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
    {name: "Engenharia da Produção", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
    {name: "Engenharia de Software", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
    {name: "Engenharia da Mecânica", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},

   ]
    
    },
    { name: "Quixadá", code: "005",
    courses: [
      {name: "Ciência da Computação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Engenharia de Computação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Engenharia de Software", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Design Digital", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Redes de Computadores", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Sistemas de Informação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
 ]
  
  },
  { name: "Crateús", code: "006",
    courses: [
      {name: "Ciência da Computação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Engenharia Civil", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Engenharia Ambiental", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Engenharia de Minas", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Sistemas de Informação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
      {name: "Engenharia Ambiental e Sanitária", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
 ]
  
  },
  { name: "Itapajé", code: "007",
  courses: [
    {name: "Análise e Desenvolvimento de Sistemas", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
    {name: "Segurança da Informação", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},
    {name: "Ciência de Dados", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1},

]

},
    ],
  },
  {
    code: "003",
    name: "UERN",
    campus: [
      { name: "Mossoró", code: "002",
      courses: [
        { name: "Administração", peso_cie: 1, peso_hum: 3, peso_lin: 3, peso_mat: 3, peso_red: 3 },
        { name: "Ciência da Computação", peso_cie: 3, peso_hum: 1, peso_lin: 3, peso_mat: 1, peso_red: 3 },
        { name: "Ciências Biológicas", peso_cie: 3, peso_hum: 1, peso_lin: 3, peso_mat: 1, peso_red: 3 },
        { name: "Ciências Contábeis", peso_cie: 1, peso_hum: 3, peso_lin: 3, peso_mat: 3, peso_red: 3 },
        { name: "Ciências Econômicas", peso_cie: 1, peso_hum: 3, peso_lin: 3, peso_mat: 3, peso_red: 3  },
        { name: "Ciências Sociais", peso_cie: 1, peso_hum: 3, peso_lin: 3, peso_mat: 1, peso_red: 3  },
        { name: "Comunicação Social - Radialismo", peso_cie: 3, peso_hum: 3, peso_lin: 1, peso_mat: 1, peso_red: 3 },
        { name: "Direito", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Educação Física", peso_cie: 1, peso_hum: 3, peso_lin: 3, peso_mat: 1, peso_red: 3 },
        // { name: "Enfermagem", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Filosofia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Física", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Geografia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Gestão Ambiental", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "História", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Jornalismo", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Letras - Espanhol", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Letras - Inglês", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Letras - Língua Portuguesa", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Matemática", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Medicina", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Música", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Pedagogia", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Publicidade e Propaganda", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Química", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Serviço Social", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Turismo", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Educação Física", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Enfermagem", peso_cie: 1, peso_hum: 1, peso_lin: 1, peso_mat: 1, peso_red: 1 },
        // { name: "Física", peso_cie: 1, peso_hum: 0, peso_lin: 0, peso_mat: 1, peso_red: 0 },
        // { name: "Química", peso_cie: 1, peso_hum: 0, peso_lin: 0, peso_mat: 1, peso_red: 0 },
        // { name: "Ciência da Computação", peso_cie: 1, peso_hum: 0, peso_lin: 0, peso_mat: 1, peso_red: 1 },
        // { name: "Música", peso_cie: 0, peso_hum: 1, peso_lin: 0, peso_mat: 0, peso_red: 0 },
        // { name: "Gestão Ambiental", peso_cie: 1, peso_hum: 0, peso_lin: 0, peso_mat: 1, peso_red: 0 },
        // { name: "Turismo", peso_cie: 0, peso_hum: 1, peso_lin: 0, peso_mat: 0, peso_red: 1 },
        // { name: "Educação Física", peso_cie: 0, peso_hum: 1, peso_lin: 0, peso_mat: 0, peso_red: 0 },
        // { name: "Ciências Sociais", peso_cie: 1, peso_hum: 1, peso_lin: 0, peso_mat: 0, peso_red: 0 },
        // { name: "ABI - Educação Física", peso_cie: 0, peso_hum: 1, peso_lin: 0, peso_mat: 0, peso_red: 0 },
        // { name: "Geografia", peso_cie: 1, peso_hum: 1, peso_lin: 0, peso_mat: 0, peso_red: 0 }

    
      ]
      }
  ]
  }
];

interface University {
    code: string,
    name: string,
    campus: [
      { name: string, code: string,
      courses: [
        { name: string, peso_cie: number, peso_hum: number, peso_lin:number, peso_mat: number, peso_red: number },
      ]
      }
    ]
    }




function App() {


  const matches = useMediaQuery('(min-width:600px)');

  const [universidades, setUniversidades] = useState<University[]>([]);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);

  const { register, handleSubmit } = useForm<{ note1: number }>();
  const [resultado, setResultado] = useState(0);
  const { watch } = useForm();

  const [notas, setNotas] = useState([
    {
      nome: "Linguagem, Código e suas Tecnologias",
      nota: 0
    },
    {
      nome: "Ciências Humanas e suas Tecnologias",
      nota: 0,
    },
    {
      nome: "Ciências da Natureza e suas Tecnologias",
      nota: 0,
    },
    {
      nome: "Matemática e suas Tecnologias",
      nota: 0,
    },
    {
      nome: "Redação",
      nota: 0,
    },
  ]);
  
  const [allNotesFilled, setAllNotesFilled] = useState(false);
  
  useEffect(() => {
    const areAllNotesFilled = notas.every(note => note.nota > 0);
    setAllNotesFilled(areAllNotesFilled);
  }, [notas]);



  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("");

  const [selectedCourse, setSelectedCourse] = useState("");
  const [error, setError] = useState(false)
  const [notaCalculada, setNotaCalculada] = useState(false)


  
  
  const onClickCalculate = () => {
    let acumulador = 0;
    const selectedUniversityObject = universities.find(
      (university) => university.code === selectedUniversity
    );
    if (!selectedUniversityObject) return;

    const selectedCampusObject = selectedUniversityObject.campus.find(
      (campus) => campus.name === selectedCampus
    );
    if (!selectedCampusObject) return;

    const selectedCourseObject = selectedCampusObject.courses.find(
      (course) => course.name === selectedCourse
    );
    if (!selectedCourseObject) return;

    const pesoNotas = selectedCourseObject.peso_cie + selectedCourseObject.peso_hum + selectedCourseObject.peso_mat + selectedCourseObject.peso_red + selectedCourseObject.peso_lin;
    acumulador += notas[0].nota * selectedCourseObject.peso_lin;
    acumulador += notas[1].nota * selectedCourseObject.peso_hum;
    acumulador += notas[2].nota * selectedCourseObject.peso_cie;
    acumulador += notas[3].nota * selectedCourseObject.peso_mat;
    acumulador += notas[4].nota * selectedCourseObject.peso_red;

    const media = parseFloat((acumulador / pesoNotas).toFixed(2));
    console.log(media);
    setNotaCalculada(true)
    setResultado(media);
  };




  const onChange = (index:any) => (event:any) => {
    const inputValue = event.target.value;
    const decimalRegExp = /^\d+(\.\d{1,2})?$/;
    
    if (event.target.value < 0 || event.target.value > 1000) {
      setError(true);
    } else {
      setError(false);
    }

    if (decimalRegExp.test(inputValue)) {
      setNotas(
        notas.map((nota, i) => {
          if (i === index) {
            return { ...nota, nota: parseFloat(inputValue) };
          }
          return nota;
        })
      );
    }

  };

  return (
<form  >
<Box
        component="img"
        width={matches ? '50%' : '100%'}
        alt="The house from the offer."
        src={banner}
      />

<Grid container spacing={3} >

 <Box padding={1}   display='flex' width={'100%'} alignItems="center" justifyContent={'space-between'}>

    <Box  flexDirection={matches ? 'row' : 'column'} display='flex'  alignItems={matches ? 'top' : 'center'}justifyContent={'space-between'}>
    
    <Box margin={1} flexDirection='column' display='flex'alignItems="top">
    <Typography align='left' sx={{ color: "white", fontWeight: 300, fontSize: 18 }}>Por favor, insira a nota do ENEM 2022</Typography>

      <Box border={1}   sx={{background: '#FFFF', borderRadius: 1 }} display='flex'  flexDirection="column" >





      <Table>
            <TableBody>
              {notas.map((nota, index) => (
                <TableRow key={nota.nome} >
                  <TableCell sx={{width: '60%'}}>
                    <Typography variant="h6" style={{ color: "black", fontWeight: 300, fontSize: 15 }}>
                      {nota.nome}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <TextField
                    error={error}
                    sx={{ width: '80%'}}
                      inputRef={notas[index].nota === 0 ? inputRef1 : notas[index].nota === 1 ? inputRef2 : notas[index].nota === 2 ? inputRef3 : notas[index].nota === 3 ? inputRef4 : inputRef5}
                      size="small"
                      label="Insira sua nota"
                      type="number"
                      InputProps={{
                        inputProps: {
                          min: 0,
                        },
                      }}
                      inputProps={{
                        ref: register("note1", { required: true, min: 0 }),
                      }}
                      onChange={onChange(index)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

      </Box>

      </Box>

      <Box margin={1} flexDirection='column' display='flex' width={matches ? ('40%'):('80%')} alignItems="top">
        <Box  display='flex'  flexDirection="column"   >
          <Typography align='left' sx={{ color: "white", fontWeight: 300, fontSize: 20 }}>Selecione uma universidade</Typography>
          <Box border={1} sx={{background: '#FFFF', borderRadius: 1 }} display='flex'  flexDirection="column"  >
            <FormControl >
              <Select
              labelId="university-select-label"
              id="university-select"

              value={selectedUniversity}
              onChange={(e) => setSelectedUniversity(e.target.value)}
              defaultValue="Selecione a Universidade"
              >
              {universities.map((university) => (
                <MenuItem key={university.code} value={university.code}>
                  {university.name}
                </MenuItem>
              ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        { selectedUniversity !== "" ? (
        <Box  flexDirection='column' display='flex'  alignItems="top">

<Box display="flex" flexDirection="column">
  <Typography align="left" style={{ color: "white", fontWeight: 300, fontSize: 20 }}>Selecione um campus</Typography>
  <Box border={1} style={{ background: "#FFFF", borderRadius: 1 }} display="flex" flexDirection="column">
 
  <FormControl disabled={!selectedUniversity}>
  <Select
    labelId="select-campus"
    id="select-campus"
    value={selectedCampus}
    onChange={(e) => setSelectedCampus(e.target.value)}
    disabled={!selectedUniversity}
  >
          {universities
                    .find(
                      (university) => university.code === selectedUniversity
                    )
                    ?.campus.map((course) => (
                      <MenuItem key={course.name} value={course.name}>
                        {course.name}
                      </MenuItem>
                    ))}
  </Select>
</FormControl>

 
  </Box>
</Box>

</Box>) : null}

{ selectedCampus !== "" ? (

<Box display="flex" flexDirection="column">
  <Typography align="left" style={{ color: "white", fontWeight: 300, fontSize: 20 }}>Selecione um curso</Typography>
  <Box border={1} style={{ background: "#FFFF", borderRadius: 1 }} display="flex" flexDirection="column">
  <FormControl disabled={!selectedCampus}>
  <Select
    labelId="select-course-label"
    id="select-course"
    value={selectedCourse || ""}
    onChange={(e) => (setSelectedCourse(e.target.value))}
    disabled={!selectedCampus}
  >
    {universities
      .find((university) => university.code === selectedUniversity)
      ?.campus.find((campus) => campus.name === selectedCampus)
      ?.courses.map((course) => (
        <MenuItem key={course.name} value={course.name}>
          {course.name}
        </MenuItem>
      ))}
  </Select>
</FormControl>
  </Box>
  { selectedCourse !== "" ? (
  <Button disabled={!allNotesFilled} onClick={onClickCalculate} variant="contained" style={{color: "white", marginTop: 10, background: allNotesFilled ? ('#18cd36') : ('#A2a2a2') }}>Calcular</Button>) : null}
  
</Box>


) : null}

{notaCalculada === true ? (


  <Box display="flex" flexDirection="column">

  <Typography align="left" style={{ color: "white", fontWeight: 300, fontSize: 20 }}>Sua nota para este curso ficou:</Typography>
  <Box border={1} padding={1} style={{ background: "#FFFF", borderRadius: 1 }}  display="flex" flexDirection="column">
  <Typography  align="center" style={{ color: "black", fontWeight: 500, fontSize: 40 }}>{resultado}</Typography>
    </Box>
</Box>  

) : null}



      </Box>
    </Box>
 </Box>
 </Grid>
 
</form>



  );
}

export default App;