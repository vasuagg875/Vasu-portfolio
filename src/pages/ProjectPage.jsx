import { Link, useParams } from "react-router-dom";

function ProjectPage() {
  const { slug } = useParams();

  return (
    <main className="min-h-screen bg-[#F7F3EA] px-5 py-20 text-[#332E2A] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-1400px">
        
        <Link
          to="/#work"
          className="text-sm underline underline-offset-4"
        >
          ← Back to work
        </Link>

        <h1 className="mt-16 text-6xl font-medium tracking-[-0.06em] sm:text-8xl">
          {slug}
        </h1>

      </div>
    </main>
  );
}

export default ProjectPage;