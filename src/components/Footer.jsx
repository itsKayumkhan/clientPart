import React from 'react';
import { Link } from 'react-router-dom';

// Helper component for navigation links
const NavLink = ({ href, label }) => (
  <li>
    <Link to={href} className="text-white transition hover:text-white/75">
      {label}
    </Link>
  </li>
);

// Helper component for social icons
const SocialIcon = ({ href, iconClass, label }) => (
  <li key={label}>
    <Link to={href} rel="noreferrer" target="_blank" className="text-white transition hover:text-white/75">
      <span className="sr-only">{label}</span>
      <i className={`fa-brands ${iconClass}`}></i>
    </Link>
  </li>
);

// Footer component
const Footer = () => {
  // Array for navigation links
  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/orders', label: 'Orders' },
    { href: '/profile', label: 'Profile' },
    { href: '/products', label: 'All Products' },
    { href: '/contact', label: 'Contact' },
    { href: '/help', label: 'Help' },
  ];

  // Array for social icons
  const socialIcons = [
    { href: '/', iconClass: 'fa-facebook', label: 'Facebook' },
    { href: '/', iconClass: 'fa-instagram', label: 'Instagram' },
    { href: '/', iconClass: 'fa-twitter', label: 'Twitter' },
    { href: '/', iconClass: 'fa-github', label: 'GitHub' },
    { href: '/', iconClass: 'fa-basketball', label: 'Dribble' },
  ];

  return (
    <>
      <footer className="mt-10 bg-primary">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-white">
            <h1>E-commerce</h1>
          </div>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
            itaque neque.
          </p>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {/* Navigation Links */}
            {navigationLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </ul>
          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            {/* Social Icons */}
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.label} {...icon} />
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
