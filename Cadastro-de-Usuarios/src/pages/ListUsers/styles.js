import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #020617, #0f172a);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

export const Title = styled.h2`
  color: #f8fafc;
  font-size: 32px;
  font-weight: 600;
  margin: 40px 0 20px;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 900px;
`;

export const CardUsers = styled.div`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    color: #f8fafc;
    font-size: 20px;
    margin-bottom: 4px;
    text-transform: capitalize;
  }

  p {
    color: #cbd5f5;
    font-size: 14px;
  }
`;

export const AvatarUser = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  border: 2px solid #38bdf8;
`;

export const TrashIcon = styled.img`
  margin-left: auto;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }
`;
