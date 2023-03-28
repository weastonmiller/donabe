/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import loadable from '@loadable/component';

import Header from './components/Header';
import NotFound from './routes/NotFound';

const Home = loadable(() => import('./routes/Home'));
const Article = loadable(() => import('./routes/Article'));
const About = loadable(() => import('./routes/About'));
const Browse = loadable(() => import('./routes/Browse'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <Article />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function ThemeWrapper(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

function App() {
  return (
    <ThemeWrapper>
      <div
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <div
          sx={{
            display: 'flex',
            width: '100%',
            height:
              window.location.pathname === '/' ||
              window.location.pathname === '/about'
                ? '100%'
                : 'fit-content',
            padding: window.location.pathname === '/' ? '0' : '1rem',
            backgroundColor: 'background',
            transition: '0.2s ease all',
            marginTop: window.location.pathname === '/' ? 0 : '55px',
          }}
        >
          <RouterProvider router={router} />
        </div>
      </div>
    </ThemeWrapper>
  );
}

export default App;
