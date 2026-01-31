import { useRef }from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api.js';

import { Title, 
  Container,  
  Form, 
  ContainerInputs, 
  Input, 
  InputLabel, 
} from './styles.js';

import Button from '../../components/Button';

import Background from '../../components/Background/index.jsx';

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
  try {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value
    });

    // ✅ LIMPAR CAMPOS
    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";

    alert('Usuário cadastrado com sucesso!');
  } catch (error) {
    alert('Erro ao cadastrar usuário');
    console.error(error);
  }
}


  return (
     
    <Container>
      <Background />

      <Form>
       
        <Title>Cadastro de Usuários</Title>
         
        <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
            </div>
        </ContainerInputs>

         <div style={{ width: '100%' }}>
          <InputLabel>
            Email<span> *</span>
          </InputLabel>
          <Input email='email' placeholder='E-mail do usuário' ref={inputEmail}/>
        </div>
      <Button type='button' onClick={registerNewUser} theme='primary'>
        Cadastrar Usuário
      </Button>
      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>
        Ver Lista de Usuários
      </Button>
    </Container>
  )
}

export default Home;
