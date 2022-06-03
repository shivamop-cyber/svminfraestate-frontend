import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import ContactUs from './pages/contactus/ContactUs';

const routes = [
  { name: 'Home', path: '/', element: Home },
  { name: 'About', path: '/about', element: About },
  { name: 'Blog', path: '/Blog', element: Blog },
  { name: 'ContactUs', path: '/contactus', element: ContactUs },
];

export default routes;
