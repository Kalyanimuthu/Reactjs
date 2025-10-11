import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const crumbs = pathname.split('/').filter(Boolean);

  return (
    <div className="p-2 text-sm text-gray-600">
      <Link to="/">Home</Link>
      {crumbs.map((crumb, i) => {
        const path = '/' + crumbs.slice(0, i + 1).join('/');
        return (
          <span key={i}>
            {' / '}
            <Link to={path}>{decodeURIComponent(crumb)}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
