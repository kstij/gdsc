import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import getRandomArbitrary from '@utils/getRandomArbitraryNumber';
import styled from 'styled-components';

const LETTERS = 'GDSC Yonsei Univ. Seoul Campus';

function MainFooter() {
  return (
    <Container>
      <LeftEnd data-scroll-section>
        {[...LETTERS].map((letter, idx) => {
          return (
            <LeftSpan
              data-scroll
              data-scroll-position="top"
              data-scroll-speed={`${getRandomArbitrary(2, 5)}`}
              key={idx}
            >
              {letter}
            </LeftSpan>
          );
        })}
      </LeftEnd>
      <RightEnd data-scroll data-scroll-position="top" data-scroll-speed="7">
        <a
          href="https://github.com/gdsc-ys/gdsc-ys.github.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon />
        </a>
      </RightEnd>
    </Container>
  );
}

export default MainFooter;

const Container = styled.footer`
  width: 100%;
  min-height: 50px;

  padding: 0 20px;
  border-top: 1px solid #dadce0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f2f2f2;

  font-family: 'Google Sans', sans-serif;
`;

const LeftEnd = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
`;

const LeftSpan = styled.span`
  display: inline-block;

  font-size: 20px;
  color: ${(props) => props.theme.backgroundColor.black};

  white-space: pre;
  letter-spacing: 0.3px;

  ${({ theme }) => theme.mobile`
    font-size: 16px;
  `}
`;

const RightEnd = styled.div`
  margin-right: 20px;

  background-color: transparent;

  ${({ theme }) => theme.mobile`
    margin-right: 12px;
  `}
`;

const GithubIcon = styled(FaGithub)`
  font-size: 20px;
  color: black;
`;
