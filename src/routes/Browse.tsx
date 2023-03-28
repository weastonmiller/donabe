/** @jsxImportSource theme-ui */

import { useNavigate } from 'react-router-dom';
import { useColorMode } from 'theme-ui';
import { articles } from '../articles';
import { Article } from '../interfaces';
import { theme } from '../theme';

function ArticleItem({ _id, path, title, thumbnail, created }: Article) {
  const navigate = useNavigate();
  const [colorMode] = useColorMode();

  return (
    <button
      sx={{
        fontSize: '14pt',
        color: 'text',
        background: `linear-gradient(to left, ${
          colorMode === 'light'
            ? theme.colors?.background
            : theme.colors?.modes?.dark?.background
        } 50%, ${theme.colors?.primary} 50%) right`,
        backgroundSize: '208% 100%',
        borderBottom: '2px solid text',
        borderLeft: 'none',
        borderRight: 'none',
        borderTop: 'none',
        transition: '0.2s ease all',
        fontFamily: 'IBM Plex Mono',
        fontWeight: '400',
        cursor: 'pointer',
        display: 'flex',
        height: 'fit-content',
        padding: 0,
        ':hover': {
          backgroundPosition: 'left',
        },
      }}
      className="article"
      onClick={() => navigate(`/${_id}`, { state: path })}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {thumbnail && (
          <img
            src={thumbnail}
            sx={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          />
        )}

        <p
          sx={{
            padding: '0 0.75rem',
            textAlign: 'left',
            margin: '0.5rem 0',
          }}
        >
          {title}
        </p>
        <p
          sx={{
            padding: '0 0.75rem',
            textAlign: 'left',
            margin: 0,
            fontWeight: 200,
            marginBottom: '0.5rem',
          }}
        >
          {created}
        </p>
      </div>
    </button>
  );
}

export default function Browse(): JSX.Element {
  return (
    <div className="grid-root">
      {articles.map((article: Article) => (
        <ArticleItem {...article} key={article._id} />
      ))}
    </div>
  );
}
