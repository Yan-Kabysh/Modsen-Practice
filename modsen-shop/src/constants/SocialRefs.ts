import { ReactComponent as ArrowIcon } from '@/images/arrow.svg';
import { ReactComponent as FacebookIcon } from '@/images/facebook.svg';
import { ReactComponent as InstagramIcon } from '@/images/instagram.svg';
import { ReactComponent as LinkIcon } from '@/images/linkedin.svg';
import { ReactComponent as TwitterIcon } from '@/images/twiter.svg';
import { ReactComponent as MailIcon } from '@/images/mail.svg';

export const SocialRefs = {
  linkedin: 'https://www.linkedin.com',
  facebook: 'https://www.facebook.com',
  instagram: 'https://www.instagram.com',
  twitter: 'https://x.com',
  mail: 'https://mail.ru',
};

export const socialNetworks = [
  { href: SocialRefs.linkedin, Icon: LinkIcon },
  { href: SocialRefs.facebook, Icon: FacebookIcon },
  { href: SocialRefs.instagram, Icon: InstagramIcon },
  { href: SocialRefs.twitter, Icon: TwitterIcon },
];

export const socialIcons = [
  { href: SocialRefs.mail, Icon: MailIcon },
  { href: SocialRefs.facebook, Icon: FacebookIcon },
  { href: SocialRefs.instagram, Icon: InstagramIcon },
  { href: SocialRefs.twitter, Icon: TwitterIcon },
];