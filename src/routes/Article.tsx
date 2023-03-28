/** @jsxImportSource theme-ui */
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import { componentMapping } from '../componentMapping';

export default function Article(): JSX.Element {
  const [local, setLocal] = useState<string>('');
  const [error, setError] = useState(false);
  const { state, pathname } = useLocation();

  // If no state passed from /browse then use the _id in the url pathname
  useEffect(() => {
    fetch(!state ? `${pathname.substring(1)}.md` : state)
      .then((response) => {
        if (!response.ok) {
          setError(true);
        }
        return response.text();
      })
      .then((text) => {
        setLocal(text);
      });
  }, []);

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        transition: '0.2s ease all',
      }}
    >
      {!error && local && (
        <ReactMarkdown
          children={local}
          remarkPlugins={[remarkGfm]}
          components={componentMapping}
        />
      )}
      {error && !local && (
        <div
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1>No Article Found</h1>
          <p>There is no article with the specified _id, please try again.</p>
        </div>
      )}
    </div>
  );
}
