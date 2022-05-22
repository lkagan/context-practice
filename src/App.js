import './App.css';
import { useAppContext } from "./store/appContext";

function App() {
    const appCtx = useAppContext();
console.log(appCtx);
    return (
        <div className="App">
            {appCtx.name} is { appCtx.isLoggedIn ? "Logged In" : "Logged Out" }
        </div>
    );
}

export default App;
