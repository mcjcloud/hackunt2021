import Header from "../components/Header";
import BuildingWrapper from "../components/BuildingWrapper";
import assets from "../components/Buildings";
import styled from "styled-components";
import Roundup from "../components/Roundup";
import Sponsors from "../components/Sponsors";

export default function Home() {
  const BuildingLeft = assets.building7
  const BuildingRight = assets.building4
  const Bottom = assets.building9;

  return (
    <Wrapper>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');`}
      </style>
      <BuildingWrapper BuildingLeft={BuildingLeft} BuildingRight={BuildingRight} background={false} Bottom={Bottom} height={400}>
        <Header />
        {/* <About /> */}
        <BuildingWrapper
          style={{ width: "100%" }}
          blur={0.2}
          BuildingLeft={assets.building2}
          BuildingRight={assets.building1}
          Bottom={assets.building9}
          background={false}
        >
          <Roundup />
          <BuildingWrapper BuildingLeft={assets.building8} BuildingRight={assets.building1} background={false}>
            <Sponsors />
          </BuildingWrapper>
        </BuildingWrapper>
      </BuildingWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(rgba(87,138,205,1) 12%, rgba(109,60,145,1) 38%, rgba(13,1,18,1) 84%);
`

// flex: 1;
// display: flex;
// flex-direction: column;
