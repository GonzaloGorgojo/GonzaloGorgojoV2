import DividierLine from 'src/components/common/DividerLine.component';

export default function RecommededPage() {
  return (
    <div className="bg-main-bg-color flex flex-col  items-center  h-screen">
      <h1 className="text-3xl my-5 text-alternative-text-color">
        Recommended Lectures:
      </h1>

      <DividierLine />
      <ol className="list-decimal my-5">
        <li className="hover:text-alternative-text-color text-main-text-color text-xl">
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
