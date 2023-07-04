import { signOut } from "../api/auth";
import { useHistory } from "react-router-dom";

export const Home = () => {

    const history = useHistory();

    const handleSignOut = async (e) => {
        signOut();
        history.push("/signin");
    }

    return (
        <div>
            <p>Homeページです</p>
            <button type="submit" onClick={(e) => handleSignOut(e)}>ログアウト</button>
        </div>
    )
}