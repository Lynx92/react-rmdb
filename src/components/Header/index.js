import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import PropTypes from "prop-types";

import { Content, Wrapper, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);
Header.propTypes = {
  Content: PropTypes.string,
  Wrapper: PropTypes.string,
  LogoImg: PropTypes.string,
  TMDBLogoImg: PropTypes.string,
};
export default Header;
