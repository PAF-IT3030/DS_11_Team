import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-colgap-2 flex items-center justify-center flex-col space-y-10">
      <p className="font-semibold text-2xl">
        Sorry, this page isn't available.
      </p>
      <p>
        The link you followed may be broken, or the page may have been removed.{' '}
        <Link to="/" className="text-blue-600">
          Go back to Flexfit
        </Link>
      </p>
    </div>
  );
}
