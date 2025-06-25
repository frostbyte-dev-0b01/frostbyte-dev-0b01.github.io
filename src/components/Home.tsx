const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full px-10 pt-10 pb-0 bg-blue-50 rounded-2xl shadow-xl mx-auto">
      <h1 className="text-5xl font-bold mb-4 text-blue-900">Joseph Moramarco</h1>
      <h2 className="text-2xl text-gray-700 mb-6">Full-Stack Developer</h2>

      <p className="text-lg text-gray-800 mb-6">I do things...</p>

      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Skills & Tools:</h3>
        <ul className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"].map((skill) => (
            <li key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-10">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Resume
        </a>
        <a href="https://linkedin.com/in/your-profile" className="text-blue-600 hover:underline" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/your-profile" className="text-blue-600 hover:underline" target="_blank">
          GitHub
        </a>
      </div>

      <div className="h-10 mt-auto" />
    </div>
  );
};

export default Home;
