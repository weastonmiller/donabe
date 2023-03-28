/** @jsxImportSource theme-ui */

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function About(): JSX.Element {
  const [local, setLocal] = useState<string>('');

  useEffect(() => {
    fetch('about.md')
      .then((response) => response.text())
      .then((text) => {
        setLocal(text);
      });
  }, []);

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <ReactMarkdown children={local}></ReactMarkdown>
    </div>
  );
}
