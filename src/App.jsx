import Details from "./components/Details";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-neutral-900">
      <Header />
      <div className="pb-20 flex flex-col lg:flex-row gap-y-10 container -mt-36 justify-between">
        <Details />
        <Form />
      </div>
    </div>
  );
};

export default App;
