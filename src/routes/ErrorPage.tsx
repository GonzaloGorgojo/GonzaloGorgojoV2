import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-main-bg-color">
      <h1 className="text-white">Oops!</h1>
      <p className="text-white my-5">
        Sorry, an unexpected error has occurred.
      </p>
      <Link className="text-green-600" to="/">
        Click here to return to Home
      </Link>
    </div>
  );
}
