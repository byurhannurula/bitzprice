import Header from '../components/header';
import Navigation from '../components/navigation';

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="container">
        { props.children }
      </div>
    </div>
  );
}

export default Layout;