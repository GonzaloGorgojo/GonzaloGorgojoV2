import DividierLine from 'src/components/common/DividerLine.component';

export default function RecommededPage() {
  return (
    <div className="recommended-container flex flex-col  items-center  h-screen">
      <h1 className="text-3xl my-5">Recommended Lectures:</h1>

      <DividierLine />
      <ol className="list-decimal my-5">
        <li className="recommended-links text-xl">
          <a
            href="https://romgrk.com/posts/optimizing-javascript"
            target="_blank"
            rel="noreferrer"
          >
            Optimizing Javascript
          </a>
        </li>
      </ol>
    </div>
  );
}
