import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="container py-8">
        <DarkModeToggle />
        <div className="mx-auto text-center">
          <h2>WELCOME</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
