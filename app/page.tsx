import "../styles/globals.css"; 
export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-orange-500 sm:text-5xl md:text-6xl">
        Welcome
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300">
        Your gateway to an amazing experience
      </p>
      <button className="mt-8 bg-orange-600 text-gray-100 px-6 py-3 rounded-lg text-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400">
        Get Started
      </button>
    </div>
  );
}

