import { useAppContext } from "./store/appContext";

function App() {
    const appCtx = useAppContext();

    return (
        <div className="App">
            { appCtx.name } is { appCtx.isLoggedIn ? "Logged In" : "Logged Out" }
        </div>
    );
}

export default App;
