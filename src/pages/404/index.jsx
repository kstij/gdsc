import DinosaurGif from '@assets/images/dinosaur-trex.gif';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Page404() {
  return (
    <Container>
      <DinosaurImage src={DinosaurGif} alt="DinosaurGif" />
      <H1>Captain, We&apos;re Lost!</H1>
      <Span>Don&apos;t worry. We&apos;ll get you back on course.</Span>
      <BackToMain to={'/'}>Take me to the Main Page</BackToMain>
      <a
        href="https://tenor.com/ko/view/dinosaur-trex-rare-no-net-gif-15077799"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Credits>
          Credits to: Dinosaur Trex Sticker by &quot;RoxanneJarrelMellott&quot; on tenor
        </Credits>
      </a>
    </Container>
  );
}

export default Page404;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  font-family: 'Google Sans', sans-serif;
  background-color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const DinosaurImage = styled.img`
  margin-bottom: 10vh;

  ${({ theme }) => theme.mobile`
    width: 80vw;
  `}
`;

const H1 = styled.h1`
  font-size: 80px;
  margin-bottom: 1.5vh;

  ${({ theme }) => theme.mobile`
    font-size: 36px;
  `}
`;

const Span = styled.span`
  font-size: 1.5vw;
  margin-bottom: 5vh;

  ${({ theme }) => theme.mobile`
    font-size: 12px;
  `}
`;

const BackToMain = styled(Link)`
  font-size: 32px;
  font-weight: 600;

  padding: 16px 32px;

  border: 2px solid ${(props) => props.theme.backgroundColor.black};
  border-radius: 32px;

  cursor: pointer;
  margin-bottom: 10vh;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor.black};
    color: ${(props) => props.theme.backgroundColor.white};
  }

  ${({ theme }) => theme.mobile`
    font-size: 16px;

    padding: 12px 24px;
  `}
`;

const Credits = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 10px;
  right: 10px;

  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  ${({ theme }) => theme.mobile`
    font-size: 14px;

    display: block;

    left: 10px;
    right: 10px;
    bottom: 10px;
  `}
`;
