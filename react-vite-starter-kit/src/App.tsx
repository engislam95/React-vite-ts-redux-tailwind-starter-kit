import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./routes";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;