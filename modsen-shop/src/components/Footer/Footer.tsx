import { ArrowIcon } from '../Icons/ArrowIcon';
import { FacebookIcon } from '../Icons/Facebook';
import { InstagramIcon } from '../Icons/InstagramIcon';
import { LinkIcon } from '../Icons/LinkIcon';
import { TwitterIcon } from '../Icons/TwitterIcon';
import { Wrapper } from './StyledFooter';

const Footer = () => {
  return (
    <Wrapper>
      <div className="refs-email">
        <div className="refs">
          <a href="">CONTACT</a>
          <a href="">TERMS OF SERVICES</a>
          <a href="">SHIPPING AND RETURNS</a>
        </div>
        <div className="email">
          <input type="text" />
          <button>
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className="policy-networks">
        <span className="policy">
          © 2023 Shelly. Terms of use and privacy policy.
        </span>
        <div className="networks">
          <LinkIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </Wrapper>
  );
};

export { Footer };
