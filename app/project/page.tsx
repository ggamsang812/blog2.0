import CalendarComponent from "./calendarComponent";

export const metadata = {
  title: "Project",
  description: "Projects",
};

export default function Project() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Project</h1>
      <h2 className="font-semibold text-xl mb-2 tracking-tighter">
        Calendar Component
      </h2>
      <a
        href="https://github.com/ggamsang812/github-leetcode-component"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 no-underline"
      >
        Link to GitHub Repo
      </a>
      <CalendarComponent />
    </section>
  );
}
