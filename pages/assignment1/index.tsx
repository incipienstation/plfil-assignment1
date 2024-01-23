import DividedCard from '@/components/molecules/DividedCard';
import Gallery from '@/components/organisms/Gallery';
import { FC } from 'react';
import styled from 'styled-components';

interface IPropsText {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  shadowed?: boolean;
}

const Assignment1: FC = () => {
  return (
    <Wrapper>
      <MainProfile src='pictures/test_profile.png' />

      <Inner>
        <ProfileInfoContainer>
          <ProfileInfoHeader>
            <Text fontSize={20} fontWeight={700} shadowed>신지은</Text>
            <GreyChip>
              <Text>비공개</Text>
            </GreyChip>
            <GreenChip>
              <Text color='#059E70' fontWeight={600}>영화인 공식 인증</Text>
            </GreenChip>
            <ActionIcon src='icons/action_icon.svg' />
          </ProfileInfoHeader>
          <ProfileInfoContent>
            <Text shadowed>JIEUN SHIN</Text>
            <Text shadowed>최근 업데이트 : 24-01-12</Text>
            <UploadIcon src='icons/upload_icon.svg' />
            <BookmarkIcon src='icons/bookmark_icon.svg' />
          </ProfileInfoContent>

          <Divider />

          {/* <Gallery /> */}
        </ProfileInfoContainer>

        <CardGrid>
          <DividedCard
            leftChild={(
              <TextFlex>
                <Text fontWeight={700}>생년월일</Text>
                <Text color='#ddd'>24세 (2000. 12. 25)</Text>
              </TextFlex>
            )}
            rightChild={(
              <TextFlex>
                <Text fontWeight={700}>신장/체중</Text>
                <Text color='#ddd'>161cm / 45kg</Text>
              </TextFlex>
            )}
            background='#222'
          />
          <DividedCard
            leftChild={(
              <TextGrid>
                <Text fontWeight={700}>이메일</Text>
                <Text fontWeight={700}>연락처</Text>
                <EmailIcon src='icons/email_icon.svg' />
                <ContactIcon src='icons/contact_icon.svg' />
              </TextGrid>
            )}
            rightChild={(
              <TextFlex>
                <Text fontWeight={700}>소속사</Text>
                <Text color='#ddd'>플필 에이전시</Text>
              </TextFlex>
            )}
            background='linear-gradient(90deg, #222 0%, rgba(34, 34, 34, 0.00) 187.77%)'
          />
          <DividedCard
            leftChild={(
              <TextGrid>
                <Text fontWeight={700}>프로필 파일</Text>
                <Text fontWeight={700}></Text>
                <IconWrap>
                  <PDFIcon src='icons/pdf_icon.svg' />
                  <Text color='#ddd'>PDF</Text>
                </IconWrap>
                <IconWrap>
                  <PPTIcon src='icons/ppt_icon.svg' />
                  <Text color='#ddd'>PDF</Text>
                </IconWrap>
              </TextGrid>
            )}
            rightChild={(
              <TextGrid>
                <Text fontWeight={700}>SNS</Text>
                <Text fontWeight={700}></Text>
                <InstagramIcon src='icons/instagram_icon.svg' />
                <YoutubeIcon src='icons/youtube_icon.svg' />
              </TextGrid>
            )}
            background='linear-gradient(90deg, #222 0%, rgba(34, 34, 34, 0.00) 187.77%)'
          />
          <Card>
            <TextFlex>
              <Text fontWeight={700}>취미 / 특기</Text>
              <Text color='#ddd'>북한 사투리 / 영어 / 아랍어 / 인도어 / 중국어 / 권투 ...</Text>
            </TextFlex>
            <NextIcon src='icons/next_icon.svg' />
          </Card>
        </CardGrid>

        <Divider />
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 52px;
  position: relative;
`;

const Inner = styled.div`
  width: 100%;
  padding: 0 8px;
  position: absolute;
  top: calc(100vw / 375 * 480 - 90px);
`;

const CardGrid = styled.div`
  width: 100%;
  padding: 0 16px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Card = styled.div`
  width: 100%;
  height: 60px;
  padding: 12px 20px;
  border-radius: 8px;
  border: 1px solid #DDD;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.08);
  background: linear-gradient(90deg, #222 0%, rgba(34, 34, 34, 0.00) 187.77%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MainProfile = styled.img`
  width: 100%;
  height: auto;
`;

const ProfileInfoContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 16px;
  padding-left: 22px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.08);
  box-shadow: -22.667px 22.667px 22.667px 0px rgba(255, 255, 255, 0.09) inset, 22.667px -22.667px 22.667px 0px rgba(165, 165, 165, 0.09) inset;
  backdrop-filter: blur(6px);
`;

const ProfileInfoHeader = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  position: relative;
`;

const ProfileInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
`;

const Text = styled.p<IPropsText>`
  color: ${(props) => props.color || "#FFF"};
  font-size: ${(props) => `${props.fontSize || 12}px`};
  font-weight: ${(props) => props.fontWeight || 500};
  text-shadow: ${(props) => props.shadowed ? "1px 1px 4px rgba(0, 0, 0, 0.50)" : "none"};
`;

const TextFlex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 6px;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: end;
  gap: 4px;
`;

const Chip = styled.div`
  width: fit-content;
  padding: 5px 8px;
  border-radius: 4px;
`;

const GreyChip = styled(Chip)`
  margin-left: 26px;
  background: #95959F;
`;

const GreenChip = styled(Chip)`
  margin-left: 8px;
  border: 1px solid #059E70;
  background: rgba(255, 255, 255, 0.80);
`;

const Icon24x24 = styled.img`
  width: 24px;
  height: 24px;
`;

const Icon22x16 = styled.img`
  width: 22px;
  height: 16px;
`;

const Icon16x16 = styled.img`
  width: 16px;
  height: 16px;
`;

const Icon14x16 = styled.img`
  width: 14px;
  height: 16px;
`;

const ActionIcon = styled(Icon24x24)`
  position: absolute;
  right: 0;
`;

const UploadIcon = styled(Icon24x24)`
  position: absolute;
  bottom: 0;
  right: 36px;
`;

const BookmarkIcon = styled(Icon24x24)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const YoutubeIcon = styled(Icon22x16)``;

const EmailIcon = styled(Icon16x16)``;
const ContactIcon = styled(Icon16x16)``;
const InstagramIcon = styled(Icon16x16)``;
const NextIcon = styled(Icon16x16)``;

const PDFIcon = styled(Icon14x16)``;
const PPTIcon = styled(Icon14x16)``;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 6px 12px 1px;
  background-color: #DDD;
`;

export default Assignment1;
