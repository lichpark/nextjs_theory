const CoffeeLayout = ({ children }) => {
  return (
    <>
      <header style={{ backgroundColor: "green" }}>
        <nav>커피 헤드 메뉴임</nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default CoffeeLayout;
