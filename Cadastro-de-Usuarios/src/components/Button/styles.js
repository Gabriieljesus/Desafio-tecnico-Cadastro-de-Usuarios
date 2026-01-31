import styled from 'styled-components';

export const Button = styled.button`
  border: ${(props) => 
    props.theme === 'primary' 
      ? 'none' 
      : '1px solid #fff'};
  background: ${(props) => 
    props.theme === 'primary' 
      ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' 
      : 'transparent'};
  font-size: 18px;
  border-radius: 30px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  font-weight: 600;

  
  cursor: pointer;

  &:hover {
    ${(props) => 
      props.theme === 'primary' 
        ? 'opacity: 0.9;' 
        : 'background-color: #fff; color: #181f36;'}
  }

  &:active {
    ${(props) => 
      props.theme === 'primary' 
        ? 'opacity: 0.7;' 
        : 'background-color: #fff; color: #181f36;'}
  }
`;  