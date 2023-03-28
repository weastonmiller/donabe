export const componentMapping: any = {
  img: ({ node, ...props }: any) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
        width: '100%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 'fit-content',
          width: 'fit-content',
          overflow: 'hidden',
        }}
      >
        <img
          {...props}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      </div>
    </div>
  ),
  blockquote: ({ node, ...props }: any) => (
    <div
      style={{
        marginLeft: '2rem',
        height: 'fit-content',
      }}
    >
      <p
        {...props}
        style={{
          paddingLeft: '1rem',
          borderLeft: '2px solid gray',
          height: 'fit-content',
          fontStyle: 'italic',
        }}
      ></p>
    </div>
  ),
  h6: ({ node, ...props }: any) => (
    <div
      style={{
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem',
      }}
    >
      <p
        {...props}
        style={{
          height: 'fit-content',
          fontStyle: 'italic',
          margin: 0,
          fontWeight: 200,
        }}
      />
    </div>
  ),
  hr: () => (
    <div
      style={{
        width: '100%',
        height: '1px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1rem',
        marginBottom: '1rem',
        backgroundColor: 'gray',
      }}
    />
  ),
  code: ({ node, ...props }: any) => (
    <code
      style={{
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        marginBottom: '1rem',
        backgroundColor: '#ababab',
        padding: '1rem',
      }}
    >
      <pre
        {...props}
        style={{
          height: 'fit-content',
          margin: 0,
        }}
      />
    </code>
  ),
};
