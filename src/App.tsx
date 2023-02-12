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
   TextField, Button, Typography, FormControl, InputLabel } from '@mui/material';

const universities = [
 
  {
    code: "001",
    name: "UFERSA",
    courses: [
      { name: "Administração", peso_cie: 1.0, peso_hum: 3.0, peso_lin: 2.0, peso_mat: 2.0, peso_red: 2.0 },
      { name: "Agronomia", peso_cie: 3.5, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 2.5, peso_red: 1.5 },
      { name: "Arquitetura e Urbanismo", peso_cie: 1.0, peso_hum: 3.0, peso_lin: 1.0, peso_mat: 3.0, peso_red: 2.0 },
      { name: "Biotecnologia", peso_cie: 4.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 1.0, peso_red: 1.5 },
      { name: "Ciência da Computação", peso_cie: 2.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 4.0, peso_red: 1.5 },
      { name: "Ciências Contábeis", peso_cie: 1.0, peso_hum: 3.5, peso_lin: 1.0, peso_mat: 2.5, peso_red: 2.0 },
      { name: "Computação e Informática", peso_cie: 1.0, peso_hum: 2.5, peso_lin: 3.5, peso_mat: 1.5, peso_red: 1.5 },
      { name: "Direito", peso_cie: 1.0, peso_hum: 2.5, peso_lin: 2.5, peso_mat: 1.0, peso_red: 3.0 },
      { name: "Ecologia", peso_cie: 3.5, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 2.5, peso_red: 1.5 },
      { name: "Engenharia Agrícola e Ambiental", peso_cie: 3.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 1.5 },
      { name: "Engenharia de Pesca", peso_cie: 4.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 2.0, peso_red: 1.5 },
      { name: "Engenharia de Petróleo", peso_cie: 3.0, peso_hum: 1.0, peso_lin: 1.0, peso_mat: 3.0, peso_red: 2.0 },
      { name: "Engenharia Florestal", peso_cie: 3.5, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 2.5, peso_red: 1.5},
      { name: "Interdisciplinar em Ciência e Tecnologia", peso_cie: 2.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 3.0, peso_red: 1.5},
      { name: "Interdisciplinar em Tecnologia da Informação", peso_cie: 2.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 2.5},
      { name: "Letras Inglês", peso_cie: 1.0, peso_hum: 2.0, peso_lin: 3.0, peso_mat: 1.0, peso_red: 3.0},
      { name: "Letras Libras", peso_cie: 1.0, peso_hum: 2.0, peso_lin: 3.0, peso_mat: 1.0, peso_red: 3.0},
      { name: "Letras Português", peso_cie: 1.0, peso_hum: 2.0, peso_lin: 3.0, peso_mat: 1.0, peso_red: 3.0},
      { name: "Medicina", peso_cie: 3.5, peso_hum: 2.0, peso_lin: 2.0, peso_mat: 1.0, peso_red: 1.5},
      { name: "Medicina Veterinária", peso_cie: 4.0, peso_hum: 2.0, peso_lin: 1.5, peso_mat: 1.0, peso_red: 1.5},
      { name: "Pedagogia", peso_cie: 1.0, peso_hum: 3.0, peso_lin: 2.0, peso_mat: 1.0, peso_red: 3.0},
      { name: "Sistemas de Informação", peso_cie: 2.0, peso_hum: 1, peso_lin: 2.5, peso_mat: 3.0, peso_red: 1.5 },
      { name: "Zootecnia", peso_cie: 3.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 1.5, peso_red: 2.0 }
    ]
  },
  {
    code: "002",
    name: "UFERSA - Angicos",
    courses: [
      { name: "Computação e Informática", peso_cie: 1.0, peso_hum: 2.5, peso_lin: 3.5, peso_mat: 1.5, peso_red: 1.5 },
      { name: "Interdisciplinar em Ciência e Tecnologia", peso_cie: 2.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 3.0, peso_red: 1.5},
      { name: "Interdisciplinar em Tecnologia da Informação", peso_cie: 2.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 2.5},
      { name: "Pedagogia", peso_cie: 1.0, peso_hum: 3.0, peso_lin: 2.0, peso_mat: 1.0, peso_red: 3.0},
      { name: "Sistemas de Informação", peso_cie: 2.0, peso_hum: 1, peso_lin: 2.5, peso_mat: 3.0, peso_red: 1.5 },  
    ]
  },
  {
    code: "003",
    name: "UFERSA - Caraúbas",
    courses: [
      { name: "Interdisciplinar em Ciência e Tecnologia", peso_cie: 2.5, peso_hum: 1.0, peso_lin: 2.0, peso_mat: 3.0, peso_red: 1.5},
      { name: "Interdisciplinar em Tecnologia da Informação", peso_cie: 2.0, peso_hum: 1.0, peso_lin: 1.5, peso_mat: 3.0, peso_red: 2.5},
      { name: "Ciência de Computação", peso_lin: 1, peso_red: 1, peso_mat: 1, peso_cie: 1, peso_hum: 1 },
      { name: "Ciência e Tecnologia", peso_lin: 4, peso_red: 3, peso_mat: 5, peso_cie: 3, peso_hum: 5 },
      { name: "Administração", peso_lin: 4, peso_red: 3, peso_mat: 5, peso_cie: 3, peso_hum: 5 },
    ]
  },
  {
    code: "003",
    name: "UERN",
    courses: [
      { name: "Ciência de Computação", peso_lin: 4, peso_red: 3, peso_mat: 5, peso_cie: 3, peso_hum: 5 },
      { name: "Ciência e Tecnologia", peso_lin: 4, peso_red: 3, peso_mat: 5, peso_cie: 3, peso_hum: 5 },
      { name: "Administração", peso_lin: 4, peso_red: 3, peso_mat: 5, peso_cie: 3, peso_hum: 5 },
    ]
  }
];

interface University {
  name: string;
  code: string;
}




function App() {




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



  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleUniversityChange = (event:any) => {
    setSelectedUniversity(event.target.value);
    setSelectedCourse("");

  };

  const handleCourseChange = (event:any) => {

    setSelectedCourse(event.target.value)
  };


  
  const onClickCalculate = () => {
    let acumulador = 0;
    const selectedUniversityObject = universities.find(
      (university) => university.code === selectedUniversity
    );
    if (!selectedUniversityObject) return;

    const selectedCourseObject = selectedUniversityObject.courses.find(
      (course) => course.name === selectedCourse
    );
    if (!selectedCourseObject) return;
    const pesoNotas = selectedCourseObject.peso_cie + selectedCourseObject.peso_hum + selectedCourseObject.peso_mat + selectedCourseObject.peso_red + selectedCourseObject.peso_lin;
    acumulador += notas[0].nota * selectedCourseObject.peso_cie;
    acumulador += notas[1].nota * selectedCourseObject.peso_hum;
    acumulador += notas[2].nota * selectedCourseObject.peso_mat;
    acumulador += notas[3].nota * selectedCourseObject.peso_red;
    acumulador += notas[4].nota * selectedCourseObject.peso_lin;
    const media = acumulador / pesoNotas;
    console.log(acumulador);
    setResultado(media);
  };



  const onChange = (index:any) => (event:any) => {
    const inputValue = event.target.value;
    const decimalRegExp = /^\d+(\.\d{1,2})?$/;
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
<form onSubmit={handleSubmit(onClickCalculate)} >
<Box
        component="img"
        width={'50%'}
        alt="The house from the offer."
        src={banner}
      />

 <Box padding={1}   display='flex' width={'100%'} alignItems="top" justifyContent={'space-between'}>

    <Box  flexDirection='row' display='flex'  alignItems="top" justifyContent={'space-between'}>
    <Box margin={1} flexDirection='column' display='flex'alignItems="top">
    <Typography align='left' sx={{ color: "white", fontWeight: 300, fontSize: 20 }}>Por favor, insira a nota do ENEM 2022</Typography>

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

      <Box margin={1} flexDirection='column' display='flex' width={'40%'} alignItems="top">
        <Box  display='flex'  flexDirection="column"   >
          <Typography align='left' sx={{ color: "white", fontWeight: 300, fontSize: 20 }}>Selecione uma universidade</Typography>
          <Box border={1} sx={{background: '#FFFF', borderRadius: 1 }} display='flex'  flexDirection="column"  >
            <FormControl >
              <Select
              labelId="university-select-label"
              id="university-select"

              value={selectedUniversity}
              onChange={handleUniversityChange}
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

          <Box  display='flex'  flexDirection="column"   >
            <Typography align='left' sx={{ color: "white", fontWeight: 300, fontSize: 20 }}>Selecione um curso</Typography>
            <Box border={1} sx={{background: '#FFFF', borderRadius: 1 }} display='flex'  flexDirection="column"  >
              <FormControl disabled={!selectedUniversity}>

                  <Select

                    labelId="course-select-label"
                    id="course-select"
                    value={selectedCourse}
                    onChange={handleCourseChange}
                    disabled={!selectedUniversity}

      

                  >
                    {selectedUniversity &&
                      universities
                        .find((university:any) => university.code === selectedUniversity)
                        .courses.map((course:any) => (
                          <MenuItem key={course.name} value={course.name}>
                            {course.name}
                          </MenuItem>
                        ))}
                  </Select>
              </FormControl>
            </Box>
          </Box>
<Button onClick={onClickCalculate} variant="contained" type="submit" sx={{ width: '100%', marginTop: 2, marginBottom: 2, background: '#FFF', color: '#000000' }}>Calcular Média</Button>
          <Typography align='left' sx={{ color: "white", fontWeight: 300, fontSize: 20 }}>Sua média é:</Typography>
          <Box padding={1} border={1} sx={{background: '#FFFF', borderRadius: 1 }} display='flex'  flexDirection="column"  >
            <Typography align='center' sx={{ color: "black", fontWeight: 300, fontSize: 42 }}>{resultado}</Typography>
          </Box>

        </Box>

        ) : <></>
                  }

      </Box>
    </Box>
 </Box>
 
</form>



  );
}

export default App;