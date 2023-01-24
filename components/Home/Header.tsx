import Head from 'next/head';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Menu App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/food.png" />
    </Head>
  );
};

export default Header;
