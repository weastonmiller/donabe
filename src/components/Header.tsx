/** @jsxImportSource theme-ui */

import { useState, useEffect } from 'react';
import { useColorMode } from 'theme-ui';

interface HeaderItemProps {
  content: string;
  link: string;
}

function HeaderItem({ content, link }: HeaderItemProps) {
  return (
    <button
      sx={{
        fontSize: '14pt',
        color: 'text',
        backgroundColor: 'background',
        paddingLeft: 0,
        transition: '0.2s ease all',
        border: 'none',
        fontFamily: 'IBM Plex Mono',
        fontWeight: '400',
        cursor: 'pointer',
        marginRight: '2rem',
      }}
      onClick={() => {
        location.assign(`/${link}`);
      }}
    >
      {content}
    </button>
  );
}

export default function Header(): JSX.Element {
  const [colorMode, setColorMode] = useColorMode();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, [window.scrollY]);

  return (
    <div
      sx={{
        height: '55px',
        width: '100%',
        backgroundColor: 'background',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.5rem 1rem',
        position: 'fixed',
        transition: '0.2s ease all',
        boxShadow: scrolled ? '0 1px 10px 1px rgba(0, 0, 0, 0.12)' : 'none',
        top: 0,
        zIndex: 999,
      }}
    >
      <button
        sx={{
          fontSize: '24pt',
          color: 'text',
          backgroundColor: 'background',
          paddingLeft: 0,
          transition: '0.2s ease all',
          border: 'none',
          fontFamily: 'IBM Plex Mono',
          fontWeight: '400',
          cursor: 'pointer',
        }}
        onClick={() => {
          location.assign('/');
        }}
      >
        Donabe
      </button>
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: 'fit-content',
        }}
      >
        <HeaderItem content="Browse" link="browse" />
        <HeaderItem content="About" link="about" />
        <div className="toggle" sx={{ backgroundColor: 'primary' }}>
          <input
            id="toggle1"
            className="toggle__checkbox"
            type="checkbox"
            onChange={() =>
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }
            checked={colorMode === 'light'}
          />
          <label htmlFor="toggle1" className="toggle__label" />
        </div>
      </div>
    </div>
  );
}
