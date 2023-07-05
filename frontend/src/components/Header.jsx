
import { signOut } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";


export const Header = ({ currentUser }) => {

    const navigate = useNavigate()

    const handleSignOut = async (e) => {
        signOut();
        navigate("/signin");
    }
    
    return (
        <div id="header" class="bg-red-100 fixed w-full z-20 h-20">
            <div class="flex justify-between">
                <h1 class="text-xl p-1">院生ゲーム</h1>
                <div class="p-1">{{ currentUser }.currentUser.name}がログイン中</div>
            </div>

            <div class="flex justify-between">
                <Link to={`/`} class="border rounded bg-gray-100 m-1 border-black p-1">ホーム</Link>
                <button type="submit" onClick={(e) => handleSignOut(e)} class="border rounded bg-gray-100 m-1 border-black p-1">
                    ログアウト
                </button>
            </div>
        </div>
    )
}
