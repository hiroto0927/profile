import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="logo h-24 p-6 inline-block transition-all duration-300"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react h-24 p-6 inline-block transition-all duration-300"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-white">Vite + React</h1>
      <div className="card p-8 mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-600 transition-colors duration-200"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-300">
          Edit{" "}
          <code className="bg-gray-800 px-2 py-1 rounded text-yellow-300">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
