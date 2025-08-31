import {useState} from "react";
import axios from "axios";
import {api} from "../api";
import {Navigate, useNavigate} from "react-router-dom";
import {useAuth} from "../Auth/Authenticator";

export default function Login() {
    const [MEMBER_ID, setMEMBER_ID] = useState("");
    const [MEMBER_PWD, setMEMBER_PWD] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    async function onSubmit(e){
        e.preventDefault();
        try{
            await login(MEMBER_ID, MEMBER_PWD);
            alert("로그인 성공");
            navigate("/");
        }catch(err){
            alert("로그인 실패");
            console.error(err?.response?.data || err.message);
        }
    }
    return (
        /*<div style={{width:'400px', margin:'20px auto'}}>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-login" data-mdb-pill-init href="../Member/Login" role="tab"
                       aria-controls="pills-login" aria-selected="false">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-register" data-mdb-pill-init href="../Member/Join"
                       role="tab"
                       aria-controls="pills-register" aria-selected="true">Register</a>
                </li>
            </ul>

            <div>
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel"
                     aria-labelledby="tab-login">
                    <form onSubmit={onSubmit}>
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="email"
                                   value={MEMBER_ID}
                                   onChange={(e) => setMEMBER_ID(e.target.value)}
                                   placeholder={"PWD"}
                                   id="MEMBER_ID" className="form-control"/>

                            <label className="form-label" htmlFor="MEMBER_ID">Email or username</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input type="password"
                                   value={MEMBER_PWD}
                                   onChange={(e) => setMEMBER_PWD(e.target.value)}
                                   placeholder={"ID"}
                                   id="MEMBER_PWD" className="form-control"/>
                            <label className="form-label" htmlFor="MEMBER_PWD">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck"
                                           checked/>
                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                className="btn btn-primary btn-block mb-4">Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
        */
        <div className="h-screen flex items-center justify-center bg-gray-200">
            <div className="card w-96 p-8 bg-gray-200 rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
                <h2 className="text-[#333333] text-center font-bold">Welcome Back</h2>
                <p className="text-center text-gray-500 mb-6">Sign in to your account</p>

                <form className={"space-y-4"}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-gray-600">Email Address</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input w-full rounded-xl bg-gray-200 border-0 shadow-inner shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:outline-none"
                        />

                    <div className={"form-control"}>
                        <label className={"label"}>
                            <span className={"label-text text-gray-600"}>Password</span>
                        </label>
                        <input type={"password"} placeholder={"Enter your password"}
                               className="input w-full rounded-xl bg-gray-200 border-0 shadow-inner shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:outline-none"
                           />
                    </div>

                    <div className={"form-control"} >
                        <button
                            type={"submit"} className={"btn w-full rounded-xl bg-gray-200 border-0 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] text-gray-700 font-semibold hover:shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] transition"}>
                            Submit
                        </button>
                    </div>
                    {/*<div className="w-[336px] h-[50px] static">*/}
                    {/*    <div*/}
                    {/*        className="bg-[#f5f5f5] rounded-[18px] border-solid border-[transparent] border w-[336px] h-[50px] absolute left-8 top-[167px]"*/}
                    {/*        style={{*/}
                    {/*            boxShadow:*/}
                    {/*                "8px 8px 16px 0px rgba(0, 0, 0, 0.10),  -8px -8px 16px 0px rgba(255, 255, 255, 0.80)",*/}
                    {/*        }}*/}
                    {/*    ></div>*/}
                    {/*    <div className="text-[#000000] text-left font-body-m-font-family text-body-m-font-size leading-body-m-line-height font-body-m-font-weight absolute left-[49px] top-[178px] flex items-center justify-start">*/}
                    {/*        Enter your email{" "}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                {/*<div className="w-[336px] h-[79px] static">*/}
                {/*    <div className="w-[336px] h-[50px] static">*/}
                {/*        <div*/}
                {/*            className="bg-[#f5f5f5] rounded-[18px] border-solid border-[transparent] border w-[336px] h-[50px] absolute left-8 top-[270px]"*/}
                {/*            style={{*/}
                {/*                boxShadow:*/}
                {/*                    "8px 8px 16px 0px rgba(0, 0, 0, 0.10),  -8px -8px 16px 0px rgba(255, 255, 255, 0.80)",*/}
                {/*            }}*/}
                {/*        ></div>*/}
                {/*        <img*/}
                {/*            className="w-5 h-5 absolute left-[331px] top-[285px] overflow-visible"*/}
                {/*            src="icon0.svg"*/}
                {/*        />*/}
                {/*        <div className="text-[#000000] text-left font-body-m-font-family text-body-m-font-size leading-body-m-line-height font-body-m-font-weight absolute left-[49px] top-[281px] flex items-center justify-start">*/}
                {/*            Enter your password{" "}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="text-[#666666] text-left font-body-l-font-family text-body-l-font-size leading-body-l-line-height font-body-l-font-weight absolute left-8 top-[241px]">*/}
                {/*        Password{" "}*/}
                {/*    </div>*/}
                {/*</div>*/}
                </form>
            </div>
        </div>

    // <div className="main-h-screen flex items-center justify-center bg-gray-200">
    //     <div className="card w-96 p-8 rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] bg-gray-200">
    //         <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">로그인</h2>
    //
    //         <div className="form-control mb-4">
    //             <label className="label">
    //                 <span className="label-text text-gray-600">이메일</span>
    //             </label>
    //             <input
    //                 type="email"
    //                 placeholder="example@email.com"
    //                 className="input rounded-xl border-0 shadow-inner shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] bg-gray-200 focus:outline-none"
    //             />
    //         </div>
    //
    //         <div className="form-control mb-6">
    //             <label className="label">
    //                 <span className="label-text text-gray-600">비밀번호</span>
    //             </label>
    //             <input
    //                 type="password"
    //                 placeholder="••••••••"
    //                 className="input rounded-xl border-0 shadow-inner shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] bg-gray-200 focus:outline-none"
    //             />
    //         </div>
    //
    //         <button className="btn w-full rounded-xl bg-gray-200 border-0 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] text-gray-700 font-semibold hover:shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] transition">
    //             로그인
    //         </button>
    //
    //         <p className="text-center mt-4 text-sm text-gray-500">
    //             계정이 없으신가요? <a href="#" className="text-blue-500 hover:underline">회원가입</a>
    //         </p>
    //     </div>
    // </div>
    );
}