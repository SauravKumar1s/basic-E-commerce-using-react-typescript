type HeaderProps = {
  title: string;
  totalItems: number;
};

// interface Props {
//   title: string;
//   totalItems: number;
// }

const Header = ({ title, totalItems }: HeaderProps) => {
  return (
    <header>
      <h1>{title}</h1>
      <span>{totalItems}</span>
    </header>
  );
};

export default Header;
