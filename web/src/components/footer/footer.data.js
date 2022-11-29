import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

export default [
  {
    header: 'About Us',
    items: [
      {
        path: '/',
        label: 'Support Center',
      },
      {
        path: '/',
        label: 'Customer Support',
      },
      {
        path: '/',
        label: 'About Us',
      },
      {
        path: '/',
        label: 'Copyright',
      },
    ],
  },
  {
    header: 'Our Information',
    items: [
      {
        path: '/',
        label: 'Return Policy ',
      },
      {
        path: '/',
        label: 'Privacy Policy',
      },
      {
        path: '/',
        label: 'Terms & Conditions',
      },
      {
        path: '/',
        label: 'Site Map',
      },
    ],
  },
  {
    header: 'My Account',
    items: [
      {
        path: '/',
        label: 'Press inquiries',
      },
      {
        path: '/',
        label: 'Social media ',
      },
      {
        path: '/',
        label: 'directories',
      },
      {
        path: '/',
        label: 'Images & B-roll',
      },
    ],
  },
  {
    header: 'Contact',
    items: [
      {
        path: '/',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: '/',
        label: 'Twitter',
        name: 'twitter',
        icon: <FaTwitter />,
      },
      {
        path: '/',
        label: 'Github',
        name: 'github',
        icon: <FaGithub />,
      },
      {
        path: '/',
        label: 'Dribbble',
        name: 'dribbble',
        icon: <FaDribbble />,
      },
    ],
  },
];
