import { Container } from './styles.js';
import BackgroundImage from '../../assets/background.png';

function Background() {
  return (
    <Container>
      <img 
        src={BackgroundImage} 
        alt='imagem-usuários' />
    </Container>
  )
}

export default Background;