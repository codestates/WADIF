import styled from 'styled-components';
import { Link } from 'react-router-dom';
import introduce1 from '../IntroduceIMG/introduce1.png';
import introduce2 from '../IntroduceIMG/introduce2.png';
import introduce3 from '../IntroduceIMG/introduce3.png';
import introduce4 from '../IntroduceIMG/introduce4.png';

const Container = styled.div`
  height: 500vh;
  background: #464444;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  margin: 0;
  height: 10vh;
  background: #000000;
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
  height: 420vh;
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
    height: 115vh;
  }
`;
const Introduce2 = styled(Introduce1)`
  height: 90vh;
`;
const Introduce3 = styled(Introduce1)`
  height: 170vh;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    height: 110vh;
  }
`;
const Introduce4 = styled(Introduce1)`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1024px) {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    height: 110vh;
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
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    font-size: 17px;
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
  @media only screen and (max-width: 1024px) {
    font-size: 17px;
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
  font-size: 20px;
  margin: 0 auto;
  padding: 0 5em;
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
  font-size: 20px;
  margin: 0 auto;
  padding: 0 5em;
  @media only screen and (max-width: 1024px) {
    padding: 0 2em;
    font-size: 17px;
  }
`;

const TextForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 30em;
  padding-top: 5em;
`;

const EndLogo = styled(Text1Title)`
  font-size: 150px;
  margin: 0 auto;
  right: 1em;
  top: 1em;
  color: #881e1e;
  font-weight: 700;
  padding-right: 0em;
  right: 0em;
  top: 1em;
  width: 100%;
  text-align: center;
  color: #b36e6e;
  @media only screen and (max-width: 1024px) {
    margin-top: 1.5em;
  }
`;

const EndText = styled.div`
  width: 100%;
  text-align: center;
  color: #7f79cf;
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

const Footer = styled(Nav)`
  height: 34vh;
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
                길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에
                사라지지 않는 것이다 이것은 현저하게 일월과 같은 인생을 풍부하게
                하는 온갖 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고
                있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고
                작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다
                석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는 무엇을
                위하여 광야에서 않는 것이다 이것은 현저하게 일월과 같은 예가
                되려니와 그와 같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이
                산야에 피어나는 군영과 같이 이상은 실로 인간의 부패를 방지하는
                소금이라 할지니
              </Text1Contents>
            </TextForm>
          </Introduce1>
          <Introduce2>
            <Introduce2Image />
            <TextForm>
              <Text2Title>THINK & POST</Text2Title>
              <Text2Contents>
                보는 때에 우리의 귀는 생의 찬미를 듣는다 그것은 웅대한
                관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 원대하고
                그들은 피가 더운지라 실현에 대한 자신과 용기가 있다 그러므로
                그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고
                소담스러운 열매를 맺어 우리 인생을 풍부하게 하는 것이다 보라
                청춘을 ! 그들의 몸이 얼마나 튼튼하며 그들의 피부가 얼마나
                생생하며 그들의 눈에 무엇이 타오르고 있는가? 생명을 불어 넣는
                것은 따뜻한 봄바람이다 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고
                새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을
                얼음 속에서 불러 내는 것이 따뜻한
              </Text2Contents>
            </TextForm>
          </Introduce2>
          <Introduce3>
            <Introduce3Image />
            <Text3Title>SHARE THE ISSUE</Text3Title>
            <Text3Contents>
              사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도
              보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에
              남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디
              있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴? 이상! 우리의
              청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진
              것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살
              수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며
              예수는 무엇을 위하여 광야에서 방황하였으며 공자는 무엇을 위하여
              천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기
              위하여서 그리하였는가? 아니다 그들은 커다란 이상
            </Text3Contents>
          </Introduce3>
          <Introduce4>
            <Introduce4Image />
            <TextForm>
              <Text4Title>FREE TOPIC</Text4Title>
              <Text4Contents>
                보는 때에 우리의 귀는 생의 찬미를 듣는다 그것은 웅대한
                관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 원대하고
                그들은 피가 더운지라 실현에 대한 자신과 용기가 있다 그러므로
                그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고
                소담스러운 열매를 맺어 우리 인생을 풍부하게 하는 것이다 보라
                청춘을 ! 그들의 몸이 얼마나 튼튼하며 그들의 피부가 얼마나
                생생하며 그들의 눈에 무엇이 타오르고 있는가? 생명을 불어 넣는
                것은 따뜻한 봄바람이다 풀밭에 속잎나고 가지에 싹이 트고 꽃 피고
                새 우는 봄날의 천지는 얼마나 기쁘며 얼마나 아름다우냐? 이것을
                얼음 속에서 불러 내는 것이 따뜻한
              </Text4Contents>
            </TextForm>
          </Introduce4>
        </Body>
        <EndLogo>WADIF</EndLogo>
        <EndText>지금 의견을 나누세요</EndText>
        <Footer>
          <TeamIntroduce>
            <TeamTitle>TEAM EDGE</TeamTitle>
            <TeamLeader>프로젝트 리더 박성훈</TeamLeader>
            <TeamMember>박성훈 00000@gmail.com</TeamMember>
            <TeamMember>박민수 00000@gmail.com</TeamMember>
            <TeamMember>김우석 00000@gmail.com</TeamMember>
            <TeamMember>안치원 00000@gmail.com</TeamMember>
          </TeamIntroduce>
          <TeamRole>
            <Position>BACK-END 박민수, 박성훈</Position>
            <Position>FRONT-END 안치원, 김우석</Position>
          </TeamRole>
        </Footer>
      </Container>
    </>
  );
};

export default Introducion;
