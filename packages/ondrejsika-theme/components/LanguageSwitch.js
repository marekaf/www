import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import default_colors from "@app/ondrejsika-theme/config/colors";

const White = styled.a`
  color: white !important;
`;

const LanguageSwitch = props => {
  const Wrapper = styled.div`
    background: ${(props.site &&
      props.site.colors &&
      props.site.colors.PRIMARY) ||
      default_colors.BLUE};
    text-align: right;
    padding-top: 0.5em;
  `;

  return (
    <Wrapper>
      <Container>
        <White>🇬🇧/ 🇩🇪 / 🇨🇿</White>
      </Container>
    </Wrapper>
  );
};

export default LanguageSwitch;
