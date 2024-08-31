import styled from "styled-components";
import WriteLikeProLogo from "/public/images/writelikepro-logo.svg";
import Image from "next/image";

const BannerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  margin-top: 2rem;
`;

const Company = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
  }
`;

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <Company>
          <Image
            alt="Writelikepro"
            width="60"
            height="60"
            src={WriteLikeProLogo}
          />
          <h1>WRITELIKEPRO</h1>
        </Company>
      </BannerContainer>
    </>
  );
};

export default Banner;
