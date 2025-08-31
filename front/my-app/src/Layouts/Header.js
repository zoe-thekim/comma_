import {useAuth} from "../Auth/Authenticator";
import {useNavigate} from "react-router-dom";


export default function Header(){
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    return (
        <div className={"navbar bg-base-100 shadow-md"}>
            <div className={"flex-1"}>
                <a className={"text-xl font-bold text-gray-800"} name="logo" href={"/"}>Comma</a>
            </div>
            <div className={"flex-none"}>
                <ul className={"menu menu-horizontal px-1"}>
                    <li><a>About</a></li>
                    <li><a>Features</a></li>
                    {user ? (
                        <li>
                            <a className="nav-link" onClick={async() => {
                                await logout();
                                navigate("/");
                            }} >LogOut</a>
                        </li>
                        ) :
                        <li>
                            <a className="nav-link" href="/Member/Login">Login</a>
                        </li>
                    }

                    <li>
                        <a className="nav-link" href="/Member/Login">Login (Static)</a>
                    </li>
                </ul>
            </div>

            {/*<nav className="navbar navbar-expand-lg bg-body-tertiary" >*/}
            {/*    <div className="container-fluid">*/}
            {/*        <a className="navbar-brand" href="..">WEB</a>*/}
            {/*        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
            {/*                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"*/}
            {/*                aria-label="Toggle navigation">*/}
            {/*            <span className="navbar-toggler-icon"></span>*/}
            {/*        </button>*/}
            {/*        <div className="collapse navbar-collapse" id="navbarNav">*/}
            {/*            <ul className="navbar-nav">*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a className="nav-link active" aria-current="page" href="..">Home</a>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a className="nav-link" href="/">Features</a>*/}
            {/*                </li>*/}
            {/*                <li className="nav-item">*/}
            {/*                    <a className="nav-link" href="#">Pricing</a>*/}
            {/*                </li>*/}
            {/*                {user ? (*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link" onClick={async() => {*/}
            {/*                        await logout();*/}
            {/*                        navigate("/");*/}
            {/*                        }} >LogOut</a>*/}
            {/*                    </li>*/}
            {/*                ) :*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <a className="nav-link" href="/Member/Login">Login</a>*/}
            {/*                    </li>*/}
            {/*                }*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</nav>*/}
        </div>
    )
}