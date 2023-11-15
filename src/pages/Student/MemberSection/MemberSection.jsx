import HorizontalPatternImage1 from '@assets/images/pattern3.png';
import HorizontalPatternImage2 from '@assets/images/pattern4.png';
import { LeftAppearAnimationWidth } from '@components/Animation/LeftAppearAnimation';
import { useIntersectionObserver, useMediaQuery } from '@hooks';
import { MEDIA_QUERIES } from '@styles/media';
import { useEffect, useRef, useState } from 'react';
import { MouseParallaxContainer } from 'react-parallax-mouse';
import ReactTextTransition from 'react-text-transition';
import styled, { useTheme } from 'styled-components';

import { LeadMemberCard, MemberCard, ProgressBar } from './components';
import { DevrelList, MemberList } from './memberList';

const Writeups = ['Lead', 'DevRel', 'Developers', ''];

function MemberSection() {
  const sectionRef = useRef(null);
  const isMobileOrTablet = useMediaQuery(MEDIA_QUERIES.TABLET);

  const leadCardRef = useRef(null);
  const devrelCardRef = useRef(null);
  const memberCardRef = useRef(null);

  const leadCardEntry = useIntersectionObserver(leadCardRef, {
    threshold: 0.5,
  });
  const devrelCardEntry = useIntersectionObserver(devrelCardRef, {
    threshold: 0.3,
  });
  const memberCardEntry = useIntersectionObserver(memberCardRef, {
    threshold: 0.1,
  });

  const isLeadCardVisible = !!leadCardEntry?.isIntersecting;
  const isDevrelCardVisible = !!devrelCardEntry?.isIntersecting;
  const isMemberCardVisible = !!memberCardEntry?.isIntersecting;

  const [scrollIndex, setScrollIndex] = useState(3);
  const { contrast, backgroundColor } = useTheme();

  useEffect(() => {
    const handleScrollPosition = () => {
      if (isLeadCardVisible) {
        setScrollIndex(0);
        return;
      }

      if (isDevrelCardVisible) {
        setScrollIndex(1);
        return;
      }

      if (isMemberCardVisible) {
        setScrollIndex(2);
        return;
      }

      setScrollIndex(3);
      return;
    };

    handleScrollPosition();
  }, [isLeadCardVisible, isDevrelCardVisible, isMemberCardVisible]);

  const handleLeftBackgroundColor = (index) => {
    switch (index) {
      case 0:
        return contrast.red;
      case 1:
        return contrast.blue;
      case 2:
        return contrast.green;
      default:
        return backgroundColor.black;
    }
  };

  return (
    <Container data-scroll-section ref={sectionRef}>
      <ContentWrapper id="fixed-element-members">
        <LeftContainer>
          <TypeWrapper
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-element-members"
            bgcolor={handleLeftBackgroundColor(scrollIndex)}
          >
            <LeftTitle>GDSC Yonsei</LeftTitle>
            <LeftSubtitle>
              {`${Writeups[scrollIndex]}`.split('').map((n, idx) => {
                return (
                  <ReactTextTransition
                    key={idx}
                    // eslint-disable-next-line react/no-children-prop
                    children={n}
                    delay={idx * 25}
                    overflow
                    inline
                  />
                );
              })}
            </LeftSubtitle>
          </TypeWrapper>
          <ProgressBar scrollIndex={scrollIndex} />
        </LeftContainer>
        <RightContainer>
          <div ref={leadCardRef}>
            <MouseParallaxContainer
              globalFactorX={isMobileOrTablet ? 0 : 0.2}
              globalFactorY={isMobileOrTablet ? 0 : 0.2}
              resetOnLeave
            >
              <LeadMemberCard
                upperLetter={'GDSC Lead'}
                lowerLetter={'Kiung Jung'}
                githubID={'Quqqu'}
              />
            </MouseParallaxContainer>
          </div>
          <HorizontalLineWrapper>
            <HorizontalPattern
              style={{
                backgroundImage: `url(${HorizontalPatternImage1})`,
              }}
            />
          </HorizontalLineWrapper>
          <div ref={devrelCardRef}>
            {DevrelList.map((el, idx) => {
              return (
                <MouseParallaxContainer
                  key={idx}
                  globalFactorX={isMobileOrTablet ? 0 : 0.1}
                  globalFactorY={isMobileOrTablet ? 0 : 0.1}
                  resetOnLeave
                >
                  <MemberCard
                    key={idx}
                    upperLetter={el.upperLetter}
                    lowerLetter={el.lowerLetter}
                    githubID={el.githubID}
                  />
                </MouseParallaxContainer>
              );
            })}
          </div>
          <HorizontalLineWrapper>
            <HorizontalPattern
              style={{
                backgroundImage: `url(${HorizontalPatternImage2})`,
              }}
            />
          </HorizontalLineWrapper>
          <div ref={memberCardRef}>
            {MemberList.map((el, idx) => {
              return (
                <MouseParallaxContainer
                  key={idx}
                  globalFactorX={isMobileOrTablet ? 0 : 0.1}
                  globalFactorY={isMobileOrTablet ? 0 : 0.1}
                  resetOnLeave
                >
                  <MemberCard
                    key={idx}
                    upperLetter={el.upperLetter}
                    lowerLetter={el.lowerLetter}
                    githubID={el.githubID}
                  />
                </MouseParallaxContainer>
              );
            })}
          </div>
          <RightArrow
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-element-members"
            bgcolor={handleLeftBackgroundColor(scrollIndex)}
          />
        </RightContainer>
      </ContentWrapper>
    </Container>
  );
}

export default MemberSection;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  z-index: 2;

  perspective: 1px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  position: relative;
  display: flex;
`;

const LeftContainer = styled.div`
  flex: 2;
  height: 100%;

  position: relative;

  background-color: transparent;
`;

const TypeWrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding-left: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  mix-blend-mode: overlay;

  animation: ${LeftAppearAnimationWidth} 1s cubic-bezier(0.1, 0.87, 0.19, 0.98) 1s forwards;

  background-color: ${(props) => props.bgcolor};
  transition: background-color 1s cubic-bezier(0.1, 0.87, 0.19, 0.98);

  ${({ theme }) => theme.tablet`
    height: calc(var(--vh, 1vh) * 100);
  `}
`;

const LeftTitle = styled.span`
  display: block;
  width: 100%;

  margin-bottom: 3vh;

  font-family: 'Neue Montreal';
  font-size: 5.5vw;
  font-weight: 400;
  color: ${(props) => props.theme.backgroundColor.white};
`;

const LeftSubtitle = styled.span`
  display: block;
  width: 100%;

  font-family: 'Neue Montreal';
  font-size: 2.5vw;
  font-weight: 200;
  color: ${(props) => props.theme.backgroundColor.white};

  ${({ theme }) => theme.tablet`
    font-size: 5.5vw;
  `}
`;

const RightContainer = styled.div`
  flex: 3;

  padding-top: calc(50vh - 125px);

  ${({ theme }) => theme.tablet`
    flex: 2;
  `}
`;

const RightArrow = styled.figure.attrs((props) => ({
  style: {
    borderColor: `transparent ${props.bgcolor} transparent transparent`,
  },
}))`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: calc(50vh - 50px);

  width: 0;
  height: 0;
  border-style: solid;
  border-width: 25px 43.3px 25px 0;

  transition: border-color 1s cubic-bezier(0.1, 0.87, 0.19, 0.98);

  ${({ theme }) => theme.mobile`
    margin-top: calc(50vh - 25px);
    border-width: 12.5px 21.7px 12.5px 0;
  `}
`;

const HorizontalLineWrapper = styled.div`
  width: 100%;
  height: 109px;
  padding: 25px 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HorizontalPattern = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-position: center;
`;
