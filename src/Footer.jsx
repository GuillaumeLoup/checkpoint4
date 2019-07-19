import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer" id="footer">
      <div className="social-media">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/guillaume-loup/">
          <img src="/images/linkedin-icon.svg" alt="facebook" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com">
          <img src="/images/twitter-icon.svg" alt="twitter" />
        </a>
      </div>
      <p>
        Made
        by
        <span className="guillaume">
         Guillaume Loup
        </span>
        from
        <a target="_blank" rel="noopener noreferrer" href="https://wildcodeschool.fr">
          <span className="wcs"> Wild Code School</span>
        </a>
      </p>
    </div>
  );
}

export default Footer;
