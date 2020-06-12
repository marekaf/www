import React from "react";
import styled from "styled-components";
import Text from "@app/ondrejsika-theme/components/lp/LP-text";

const Header = styled.h3`
  color: #131480;
  text-transform: uppercase;
`;
const Border = styled.div`
  background: #ffffff;
  box-shadow: 8px 11px 20px #00000029;
  border-top: 5px solid #131480;
  height: 100%;

  /* height: 90%; */
  /* display: flex; */
  /* flex-direction: column; */
`;
const Wrapper = styled.div`
  padding: 2em 1em 0 1em;
`;

const Flex = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-bottom: 2em;
`;

const Box = props => {
  return (
    <Flex>
      <Header>{props.header}</Header>
      <Border>
        <Wrapper>
          <Text>{props.text}</Text>
        </Wrapper>
      </Border>
    </Flex>
  );
};

export default Box;