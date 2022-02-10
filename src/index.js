import ReactDOM from "react-dom";
import App from "./App"
import { AuthProvider } from "./services/auth";



ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>
, document.querySelector('.root'));