import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

import { Button } from '../../components/Button/styles';
import { 
  Container, 
  Title, 
  ContainerUsers, 
  CardUsers, 
  TrashIcon, 
  AvatarUser 
} from './styles';
import Trash from '../../assets/trash.svg'
import Background from '../../components/Background';

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }

    return (
        <Container>
            <Background />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
                          alt='Avatar do usuário'
                        />
                        <div>
                          <h3>{user.name}</h3>
                          <p>{user.age}</p>
                          <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='icone-lixeira' onClick={() => deleteUsers(user.id)} />
                    </CardUsers>
                ))}

            </ContainerUsers >
            <Button type='button' onClick={() => navigate('/')} >Voltar</Button>
        </Container>
    )
}

export default ListUsers