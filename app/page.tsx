import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Yunseong Lee
      </h1>
      <p className="mb-4">
        {'"We fix things and solve problems" - Engineering 101.'}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
