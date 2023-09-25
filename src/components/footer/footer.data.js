import { FaInstagram, FaDiscord, FaGithub, FaDribbble } from 'react-icons/fa';

export default [
  {
    header: 'About Us',
    items: [
      {
        path: 'https://leadaccountingllc.com/',
        label: 'Support Center',
      },
      
      {
        path: 'https://leadaccountingllc.com/',
        label: 'About Us',
      },
    ],
  },
  {
    header: 'Our Information',
    items: [
      {
        path: 'https://leadaccountingllc.com/',
        label: 'Privacy Policy',
      },
      {
        path: 'https://leadaccountingllc.com/',
        label: 'Terms & Conditions',
      },
    ],
  },
  {
    header: 'My Account',
    items: [
      {
        path: 'https://leadaccountingllc.com/',
        label: 'Press inquiries',
      },
      {
        path: 'https://leadaccountingllc.com/',
        label: 'Social media ',
      },
    ],
  },
  {
    header: 'Contact',
    items: [
      {
        path: 'https://github.com/cod-cs-club/almightycandle',
        label: 'Github',
        name: 'github',
        icon: <FaGithub />,
      },
      {
        path: 'https://www.instagram.com/lead_accounting/',
        label: 'Instagram',
        name: 'Instagram',
        icon: <FaInstagram />,
      },
      {
        path: 'https://discord.gg/uzBEgApK9K',
        label: 'Discord',
        name: 'Discord',
        icon: <FaDiscord />,
      },
    ],
  },
];
