import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';
import { FooterStyles } from '../styles/FooterStyles';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/SocialLinks';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          reprehenderit quam, ut magni dicta iusto. Sapiente consequuntur eum,
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          © Techhub-Blog Creative {new Date().getFullYear()}. All rights
          reserved.
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
