import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  padding: 20px;
  overflow-x: hidden;
`;

export const Form = styled.form`
  z-index: 1; /* ✅ corrigido */

  width: 100%;
  max-width: 550px;

  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(14px);

  border-radius: 20px;
  padding: 32px;

  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.45);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

export const Title = styled.h2`
  color: #f8fafc;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
`;

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;

  div {
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InputLabel = styled.label`
  color: #cbd5f5;
  font-size: 14px;
  margin-bottom: 6px;
  display: block;

  span {
    color: #38bdf8;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 12px;

  border-radius: 12px;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.08);
  color: #f8fafc;
  font-size: 15px;
  outline: none;
  font-weight: 600;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #38bdf8;
    background-color: rgba(255, 255, 255, 0.12);
  }
`;
