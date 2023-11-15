import GDSCLogo from '@assets/images/gdsclogo.png';
import styled from 'styled-components';

function LogoSection() {
  return (
    <Container data-scroll data-scroll-position="top" data-scroll-speed="2">
      <LogoImg src={GDSCLogo} alt="GDSCLogo" width={150} height={150} />
    </Container>
  );
}

export default LogoSection;

const Container = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-top: auto;

  ${({ theme }) => theme.mobile`
    margin-bottom: 16px;
  `};
`;
