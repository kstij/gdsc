import 'react-tooltip/dist/react-tooltip.css';

import { ReactComponent as SiElectronJS } from '@assets/images/icons/web/electron.svg';
import { ReactComponent as SiNextJS } from '@assets/images/icons/web/nextdotjs.svg';
import { ReactComponent as SiNodeJS } from '@assets/images/icons/web/nodedotjs.svg';
import { ReactComponent as SiReactQuery } from '@assets/images/icons/web/reactquery.svg';
import { ReactComponent as SiReactTable } from '@assets/images/icons/web/reacttable.svg';
import { ReactComponent as SiReduxSaga } from '@assets/images/icons/web/reduxsaga.svg';
import { ReactComponent as SiSass } from '@assets/images/icons/web/sass.svg';
import { ReactComponent as SiStyledComponents } from '@assets/images/icons/web/styledcomponents.svg';
import { ReactComponent as SiThreeJS } from '@assets/images/icons/web/threedotjs.svg';
import { ReactComponent as SiVite } from '@assets/images/icons/web/vite.svg';
import { useOnScreen } from '@hooks';
import { SiAngular } from '@react-icons/all-files/si/SiAngular';
import { SiBabel } from '@react-icons/all-files/si/SiBabel';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiNpm } from '@react-icons/all-files/si/SiNpm';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiVueDotJs } from '@react-icons/all-files/si/SiVueDotJs';
import { SiWebpack } from '@react-icons/all-files/si/SiWebpack';
import { SiYarn } from '@react-icons/all-files/si/SiYarn';
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

import GithubMenu from './GithubMenu';

function WebSection() {
  const observerRef = useRef(null);
  const observerRefSecond = useRef(null);
  const observerRefThird = useRef(null);
  const onScreen = useOnScreen(observerRef);
  const onScreenSecond = useOnScreen(observerRefSecond);
  const onScreenThird = useOnScreen(observerRefThird);

  const setTooltip = (content) => {
    return {
      'data-tooltip-id': 'web-tooltip',
      'data-tooltip-content': content,
      'data-tooltip-place': 'bottom',
      'data-tooltip-hide': 0.5,
    };
  };

  return (
    <Container data-scroll-section>
      <ContentWrapper id="fixed-element-web">
        <LeftSection>
          <OutlineContainer data-scroll data-scroll-sticky data-scroll-target="#fixed-element-web">
            <H1>01.</H1>
            <H2>Web Development</H2>
            <Paragraph>
              Interaction design is another type of art, implying that modern front-end code is
              something more than just a layout. <br />
              Leveraging with modern SPA frameworks, the frontend section defines what the user
              experience should be and how it should be delivered.
            </Paragraph>
          </OutlineContainer>
        </LeftSection>
        <RightSection>
          <SectionWrapper ref={observerRef} id="web-section-wrapper-first">
            <TitleWrapperFirst
              data-scroll
              data-scroll-sticky
              data-scroll-target="#web-section-wrapper-first"
            >
              {onScreen && (
                <TypeAnimation sequence={['What we do']} speed={50} wrapper={'span'} repeat={1} />
              )}
            </TitleWrapperFirst>
            <LearnList>
              <List>Discover the fundamentals of web development.</List>
              <List>Develop user-friendly UI/UX wireframes for various devices.</List>
              <List>Consider creative interaction with various browser events.</List>
              <List>Write Unit / UI tests to identify errors and malfunctions.</List>
              <List>Conduct research about modern SPA frameworks & libraries.</List>
              <List>Optimize code for providing faster user experience.</List>
              <List>Understand the process between client-server architecture.</List>
              <List>Study component-based state management and data binding.</List>
            </LearnList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefSecond} id="web-section-wrapper-second">
            <TitleWrapperSecond
              data-scroll
              data-scroll-sticky
              data-scroll-target="#web-section-wrapper-second"
            >
              {onScreenSecond && (
                <TypeAnimation
                  sequence={['What we learn']}
                  speed={50}
                  wrapper={'span'}
                  repeat={1}
                />
              )}
            </TitleWrapperSecond>
            <IconList>
              <IconName>Languages</IconName>
              <IconWrapper>
                {/* FIXME: Why not fill color props? */}
                <SiHtml5 {...setTooltip('HTML5')} />
                <SiCss3 {...setTooltip('CSS3')} />
                <SiJavascript {...setTooltip('JavaScript')} />
                <SiTypescript {...setTooltip('TypeScript')} />
              </IconWrapper>
              <IconWrapper>
                <SiSass {...setTooltip('SASS')} />
                <SiStyledComponents {...setTooltip('Styled-Components')} />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>Frameworks & Libraries</IconName>
              <IconWrapper>
                <SiReact {...setTooltip('React')} />
                <SiNextJS {...setTooltip('Next.js')} />
                <SiNodeJS {...setTooltip('NodeJS')} />
                <SiVueDotJs {...setTooltip('Vue.js')} />
              </IconWrapper>
              <IconWrapper>
                <SiAngular {...setTooltip('Angular')} />
                <SiRedux {...setTooltip('Redux')} />
                <SiReduxSaga {...setTooltip('Redux-Saga')} />
                <SiReactQuery {...setTooltip('React-Query')} />
              </IconWrapper>
              <IconWrapper>
                <SiReactTable {...setTooltip('React-Table')} />
                <SiThreeJS {...setTooltip('Three.js')} />
                <SiElectronJS {...setTooltip('Electron.js')} />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>Build Tools & Transpilers</IconName>
              <IconWrapper>
                <SiWebpack {...setTooltip('Webpack')} />
                <SiVite {...setTooltip('Vite')} />
                <SiBabel {...setTooltip('Babel')} />
              </IconWrapper>
            </IconList>
            <IconList>
              <IconName>Package Manager</IconName>
              <IconWrapper>
                <SiNpm {...setTooltip('npm')} />
                <SiYarn {...setTooltip('Yarn')} />
              </IconWrapper>
            </IconList>
          </SectionWrapper>
          <SectionWrapper ref={observerRefThird} id="web-section-wrapper-third">
            <TitleWrapperThird
              data-scroll
              data-scroll-sticky
              data-scroll-target="#web-section-wrapper-third"
            >
              {onScreenThird && (
                <TypeAnimation
                  sequence={["What we've done"]}
                  speed={50}
                  wrapper={'span'}
                  repeat={1}
                />
              )}
            </TitleWrapperThird>
            <GithubList>
              <GithubMenu
                title={'DOM Visualizer'}
                type="Github"
                description={
                  'Parsing HTML to Virtual DOM Tree. Written in JavaScript & TypeScript without DOMParser API. Features automatic error checking and tree creation animation.'
                }
                link="https://mumwa.github.io/dom-visualizer/"
              />
              <GithubMenu
                title={'Magic-boolean-conch'}
                type="Npm"
                description={
                  'NPM package that returns random boolean or undefined type. Grab it if you needed. :)'
                }
                link="https://www.npmjs.com/package/magic-boolean-conch"
              />
              <GithubMenu
                title={'React-moar-table'}
                type="Npm"
                description={
                  'Customized react table component with other features included. Best choice if you need lightweight & fully-functional table component.'
                }
                link="https://www.npmjs.com/package/magic-boolean-conch"
              />
              <GithubMenu
                title={'Model Curation'}
                type="Npm"
                description={
                  'Utilizing three.js, displaying 3d model in website with this package comes in handy.'
                }
                link="https://www.npmjs.com/package/model-curation"
              />
              <GithubMenu
                title={'Course Apply Webpage'}
                type="Github"
                description={'Mock Yonsei Univ. Course Apply Webpage.'}
                link="https://github.com/gdsc-ys/left-web-sprint-courseapply"
              />
            </GithubList>
          </SectionWrapper>
        </RightSection>
      </ContentWrapper>
      <Tooltip id="web-tooltip" />
    </Container>
  );
}

export default WebSection;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  color: ${(props) => props.theme.backgroundColor.white};

  perspective: 1px;

  background-color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.tablet`
    min-height: calc(var(--vh, 1vh) * 100);
  `}
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  position: relative;

  display: flex;
`;

const LeftSection = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OutlineContainer = styled.div`
  position: relative;
  z-index: 0;

  padding-top: 25vh;
  padding-right: 20%;
  padding-left: 10%;
  padding-bottom: 20vh;
`;

const H1 = styled.h1`
  font-size: 88px;
  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 9vw;
  `}
`;

const H2 = styled.h2`
  display: inline-block;
  font-size: 30px;
  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 3.5vw;
  `}
`;

const Paragraph = styled.p`
  margin-top: 5vh;

  font-size: 16px;
  font-weight: 400;
  white-space: pre-line;
  line-height: 1.3;

  color: ${(props) => props.theme.backgroundColor.black};

  ${({ theme }) => theme.mobile`
    font-size: 2vw;
  `}
`;

const RightSection = styled.div`
  width: 65%;

  padding: 3% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
  background-color: ${(props) => props.theme.color.blue};
`;

const SectionWrapper = styled.div`
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 15vh;
  padding: 7% 0;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1000;

  background-color: ${(props) => props.theme.color.blue};

  span {
    font-weight: 500;

    &::after {
      // cursor styling
      color: ${(props) => props.theme.brightColor.blue};
    }
  }

  ${({ theme }) => theme.mobile`
    height: 10vh;
  `}
`;

const TitleWrapperFirst = styled(TitleWrapper)`
  span {
    font-size: 8vw;
  }
`;

const LearnList = styled.ul`
  width: 100%;

  padding: 3% 12%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;

  list-style-type: decimal;
`;

const List = styled.li`
  font-size: 1.7vw;
  font-weight: 400;

  ${({ theme }) => theme.mobile`
    font-size: 2vw;
  `}
`;

const TitleWrapperSecond = styled(TitleWrapper)`
  span {
    font-size: 7vw;
  }
`;

const IconList = styled.div`
  width: 100%;

  padding: 5% 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.3vh;
`;

const IconName = styled.div`
  width: 100%;

  font-size: 3vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  padding: 3% 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  // Icon Styling
  svg {
    width: 5vw;
    height: 5vw;
    cursor: pointer;

    path {
      fill: ${(props) => props.theme.lightColor.blue};
      transition: fill 0.1s ease-in;
    }

    &:hover {
      path {
        fill: ${(props) => props.theme.backgroundColor.white};
      }
    }
  }
`;

const TitleWrapperThird = styled(TitleWrapper)`
  span {
    font-size: 5.5vw;
  }
`;

const GithubList = styled.ul`
  width: 100%;

  padding: 5% 10%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5vh;
`;
