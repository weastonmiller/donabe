/** @jsxImportSource theme-ui */

export default function Home(): JSX.Element {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignitems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: 'auto',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://assets.bonappetit.com/photos/57c59f63a184a3c9209db716/4:3/w_4911,h_3683,c_limit/hot-pot-donabe-chopsticks.jpg"
          sx={{ maxHeight: 'auto', width: 'auto' }}
        />
        <div
          className="centered"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 'fit-content',
          }}
        >
          <h1
            sx={{
              color: 'background',
              backgroundColor: 'text',
              padding: '0rem 0.5rem',
              fontSize: '42pt',
              transition: '0.2s ease all',
            }}
          >
            Donabe
          </h1>
          <button
            sx={{
              fontSize: '14pt',
              color: 'background',
              backgroundColor: 'text',
              padding: '0 0.5rem',
              transition: '0.2s ease all',
              border: 'none',
              fontFamily: 'IBM Plex Mono',
              fontWeight: '400',
              cursor: 'pointer',
            }}
            onClick={() => {
              location.assign('/browse');
            }}
          >
            Browse Articles 🠒
          </button>
        </div>
      </div>
    </div>
  );
}
