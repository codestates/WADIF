import styled from 'styled-components';
import { Link } from 'react-router-dom';
import introduce1 from '../IntroduceIMG/introduce1.png';
import introduce2 from '../IntroduceIMG/introduce2.png';
import introduce3 from '../IntroduceIMG/introduce3.png';
import introduce4 from '../IntroduceIMG/introduce4.png';

const Container = styled.div`
  height: 100%;
  background: #000000;
  display: flex;
  flex-direction: column;
  height: 550vh;
  position: relative;
  @media only screen and (max-width: 1024px) {
  }
`;

const Nav = styled.div`
  margin: 0;
  height: 10vh;
  background: #000000;
  top: 0;
  @media only screen and (max-width: 1024px) {
    height: 7vh;
  }
`;

const WADIF = styled.div`
  position: relative;
  left: 0.5em;
  float: left;
  width: 3em;
  margin: 0.4em 0.4em;
  font-size: 40px;
  color: #fff;
  @media only screen and (max-width: 1024px) {
    font-size: 35px;
  }
`;

const LogIn = styled(WADIF)`
  margin: 0.8em 0.6em;
  font-size: 30px;
  float: right;
  @media only screen and (max-width: 1024px) {
    margin: 0.7em 0.6em;
    font-size: 25px;
  }
`;

const Body = styled.div`
  height: 480vh;
  display: flex;
  flex-direction: column;
`;

const Introduce1 = styled.div`
  height: 105vh;
  transition: all 1s ease 0.2s;
  @media only screen and (max-width: 1024px) {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    height: 95vh;
  }
`;
const Introduce2 = styled.div`
  height: 90vh;
`;
const Introduce3 = styled.div`
  margin-bottom: 10vh;
  height: 170vh;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    height: 140vh;
  }
`;
const Introduce4 = styled.div`
  height: 100vh;
  margin-top: 15em;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1024px) {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

const Introduce1Image = styled.img.attrs({
  src: introduce1,
})`
  width: 36em;
  float: left;
  @media only screen and (max-width: 1024px) {
    float: center;
    margin: 0 auto;
    width: 70%;
  }
`;

const Introduce2Image = styled.img.attrs({
  src: introduce2,
})`
  width: 50em;
  float: right;
  display: block;
  @media only screen and (max-width: 1024px) {
    float: center;
    margin: 0 auto;
    width: 80%;
  }
`;

const Introduce3Image = styled.img.attrs({
  src: introduce3,
})`
  max-width: 65em;
  float: center;
  display: block;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    float: center;
    margin: 0 auto;
    width: 80%;
  }
`;

const Introduce4Image = styled.img.attrs({
  src: introduce4,
})`
  width: 40em;
  max-height: 30em;
  @media only screen and (max-width: 1024px) {
    float: center;
    margin: 0 auto;
    width: 80%;
  }
`;

const Text1Title = styled.div`
  font-size: 150px;
  margin: 0 auto;
  right: 1em;
  top: 1em;
  color: #881e1e;
  font-weight: 700;
  padding-right: 0.5em;
  text-shadow: -1px -1px 1px #aaa, 0px 4px 1px rgba(0, 0, 0, 0.5),
    4px 4px 5px rgba(0, 0, 0, 0.7), 0px 0px 7px rgba(0, 0, 0, 0.4);
  @media only screen and (max-width: 1024px) {
    font-size: 90px;
  }
`;

const Text1Contents = styled.div`
  width: 90%;
  margin: 0 auto;
  right: 5em;
  top: 16em;
  color: #fff;
  font-size: 23px;
  text-align: center;
  margin: 0 auto;
  margin-top: 1em;
  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

const Text2Title = styled.div`
  text-align: center;
  width: 90%;
  font-weight: 700;
  font-size: 80px;
  margin: 0 auto;
  color: #fff;
  width: 8em;
  top: 8em;
  left: -10em;
  @media only screen and (max-width: 1024px) {
    font-size: 70px;
  }
`;

const Text2Contents = styled(Text1Contents)`
  width: 90%;
  left: 2em;
  top: 48em;
  text-align: center;
  margin: 0 auto;
  margin-top: 1em;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

const Text3Title = styled(Text2Title)`
  width: 100%;
  text-align: center;
  top: 275vh;
  font-size: 85px;
  margin: 0 auto;
  margin-top: 1em;
  @media only screen and (max-width: 1024px) {
    margin-top: 1em;
    font-size: 70px;
  }
`;
const Text3Contents = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 25px;
  margin: 0 auto;
  padding: 0 5em;
  margin-top: 1em;
  @media only screen and (max-width: 1024px) {
    padding: 0 2em;
    font-size: 17px;
  }
`;

const Text4Title = styled(Text2Title)`
  width: 100%;
  text-align: center;
  top: 275vh;
  font-size: 85px;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    font-size: 70px;
  }
`;
const Text4Contents = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 21px;
  margin: 0 auto;
  padding: 0 5em;
  @media only screen and (max-width: 1024px) {
    padding: 0 2em;
    font-size: 20px;
  }
`;

const TextForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 30em;
  padding-top: 5em;
  height: 100vh;
`;

const EndLogo = styled(Text1Title)`
  font-size: 150px;
  margin: 0 auto;
  right: 1em;
  top: 1em;
  color: #a51414;
  font-weight: 700;
  padding-right: 0em;
  right: 0em;
  top: 1em;
  width: 100%;
  text-align: center;

  @media only screen and (max-width: 1024px) {
    margin-top: 1.5em;
  }
`;

const EndText = styled.div`
  width: 100%;
  text-align: center;
  color: #386ddf;
  font-size: 34px;
  margin: 0 auto;
  /* padding: 0; */
  padding-right: 0;
  margin-bottom: 3em;
  text-shadow: 4px 4px 5px #000000;
  @media only screen and (max-width: 1024px) {
    padding: 0 1em;
  }
`;

const Footer = styled.div`
  /* height: 15%; */
  width: 100%;
  position: absolute;
  bottom: 1em;
`;

const TeamIntroduce = styled.div`
  color: #fff;
  float: left;
`;
const TeamRole = styled.div`
  color: #fff;
  float: right;
  margin-top: 10em;
  margin-right: 3em;
  margin-bottom: 2em;
`;

const TeamTitle = styled.div`
  margin-top: 0.5em;
  margin-left: 0.7em;
  font-size: 35px;
`;

const TeamLeader = styled.div`
  font-size: 25px;
  margin-left: 1em;
  margin-top: 0.5em;
`;

const TeamMember = styled(TeamLeader)`
  margin-left: 1.2em;
  font-size: 20px;
`;

const Position = styled(TeamMember)``;

const EndLogoContainer = styled.div`
  /* height: 100vh;
  transform: translateY(40em); */
`;

const Introducion = () => {
  return (
    <>
      <Container>
        <Nav>
          <WADIF>WADIF</WADIF>
          <Link to="/login">
            <LogIn>LogIn</LogIn>
          </Link>
        </Nav>
        <Body>
          <Introduce1>
            <Introduce1Image />
            <TextForm>
              <Text1Title>WHAT IF</Text1Title>
              <Text1Contents>
                WADIF??? ????????? ????????? ?????? ???????????? ???????????? ????????? ??????
                ??????????????? ??????????????? ????????? ??? ?????????? ????????? ???????????? '??????'???
                ????????? ????????? ???????????? ???????????? ?????? ????????? ???????????? ?????????.
              </Text1Contents>
            </TextForm>
          </Introduce1>
          <Introduce2>
            <Introduce2Image />
            <TextForm>
              <Text2Title>THINK & POST</Text2Title>
              <Text2Contents>
                ???????????? ???????????? ????????? ?????? ?????? ?????? ???????????? ?????? ?????????
                ????????? ????????? ?????? ????????? ????????? ?????????
              </Text2Contents>
            </TextForm>
          </Introduce2>
          <Introduce3>
            <Introduce3Image />
            <Text3Title>SHARE THE ISSUE</Text3Title>
            <Text3Contents>
              ????????? ?????? ?????? ????????? ?????? ?????? ????????? ?????? ????????? ?????? ?????????
              ????????? ?????? ????????????.
            </Text3Contents>
          </Introduce3>
          <Introduce4>
            <Introduce4Image />
            <TextForm>
              <Text4Title>FREE TOPIC</Text4Title>
              <Text4Contents>
                ????????? ????????? ???????????? ???????????? ????????? ????????? ???????????? ????????????
              </Text4Contents>
            </TextForm>
          </Introduce4>
          <EndLogoContainer>
            <EndLogo>WADIF</EndLogo>
            <EndText>?????? ????????? ????????????</EndText>
          </EndLogoContainer>
        </Body>
        <Footer>
          <TeamIntroduce>
            <TeamTitle>TEAM EDGE</TeamTitle>
            <TeamLeader>???????????? ?????? ?????????</TeamLeader>
            <TeamMember>????????? 00000@gmail.com</TeamMember>
            <TeamMember>????????? 00000@gmail.com</TeamMember>
            <TeamMember>????????? 00000@gmail.com</TeamMember>
            <TeamMember>????????? 00000@gmail.com</TeamMember>
          </TeamIntroduce>
          <TeamRole>
            <Position>BACK-END ?????????, ?????????</Position>
            <Position>FRONT-END ?????????, ?????????</Position>
          </TeamRole>
        </Footer>
      </Container>
    </>
  );
};

export default Introducion;
