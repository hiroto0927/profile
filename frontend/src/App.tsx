import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center">
      <div className="flex gap-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="hover:scale-110 transition-transform"
        >
          <img src="/vite.svg" className="h-20 w-20" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:scale-110 transition-transform"
        >
          <img
            src="src/assets/react.svg"
            className="h-20 w-20 animate-spin"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Vite + React + TypeScript + Tailwind CSS Hello World
      </h1>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 mb-4"
        >
          count is {count}
        </button>
        <p className="text-gray-600 dark:text-gray-300">
          Edit{" "}
          <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
            src/App.jsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="text-gray-500 dark:text-gray-400 mt-8 text-center max-w-md">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
