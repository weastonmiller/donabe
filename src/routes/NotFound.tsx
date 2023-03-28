/** @jsxImportSource theme-ui */

export default function NotFound(): JSX.Element {
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
      <h1>Page Not Found</h1>
      <p>There is no route with this address, please try again.</p>
    </div>
  );
}
