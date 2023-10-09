import Image from "next/image";
import HomeSection from "./HomeSection";
import { css } from "@emotion/react";
import SectionTitle from "@/components/home/SectionTitle";
import { colors, gray } from "@/constants/colors";
import { media } from "@/constants/breakPoints";
import Typography from "@/components/common/Typography";
import useColorMode from "@/hooks/useColorMode";
const Profile = () => {
  const c = useColorMode();
  return (
    <HomeSection SectionStyle={S}>
      <header className="section-header pt-4">
        <SectionTitle>이윤슬 개발 블로그</SectionTitle>
      </header>
      <div className="section-body">
        <div className="profile-image">
          <Image
            src="/images/home/profile.jpg"
            alt="프로필 이미지"
            width={430}
            height={460}
          />
        </div>
        <div className="profile-text">
          <Typography
            variant="subtitle1"
            element="strong"
            color={c.primary}
            className="!font-normal"
          >
            프론트엔드 개발자로서
            <br />
            새롭게 공부하거나
            <br />
            삽질하며 알 게 된 것⛏️😇
            <br />
            혹은 이것 저것 보고 느낀 것들을
            <br />
            공유하는 블로그입니다.
            <br />
            자주 놀러와 주세요!
          </Typography>
        </div>
      </div>
    </HomeSection>
  );
};
const S = css`
  .section-body {
    display: flex;
    margin-top: 48px;
  }
  .profile-image img {
    width: 300px;
    height: 300px;
    border-radius: 8px;
  }
  .profile-text {
    margin-top: 20px;
    margin-left: 100px;
  }
`;
export default Profile;
