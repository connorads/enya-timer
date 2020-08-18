const Logo: React.FC = () => {
  return (
    <>
      <img
        alt="Enya Timer Logo"
        className="logo"
        src="/enya.png"
        width="225"
      ></img>
      <style jsx>{`
        .logo {
          border-radius: 30px;
          padding: 0.25rem;
        }
      `}</style>
    </>
  );
};

export default Logo;
