import {useState, ChangeEvent} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { login, logout } from '../state/redux/authReducer';
import { useDispatch } from 'react-redux';

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleUserName(evt: ChangeEvent<HTMLInputElement>){

        setUsername(evt.target.value);
    }
    async function handleLogin(){
        //debugger;
        if(username && password){
            // validate credentials
            const url = "http://localhost:9000/login"
            //Fullfilled:  100 - Information, 200- Sucess, 300 - redirest
            // Rejected: 400 -client error, 500 - server error
            // axios
            //     .post(url, {name: username, password})
            //     .then((resp) => {console.log("success", resp)})
            //     .catch((errResp) => {console.log("failed", errResp)})

            // async - await
            try{
                const resp = await axios.post(url, {name: username, password});
                console.log("success", resp);
                dispatch(login({
                    isAuthenticated: true,
                    accessToken: resp.data.accessToken,
                    refreshToken: resp.data.refreshToken,
                    username
                }))
                navigate("/");

            }
            catch(error){
                console.log("failed", error);
                setMessage("Invalid credentials");
                dispatch(logout());
            }

        }
        else{
            //alert("Enter the credentials..");
            setMessage("Enter the credentials..");
        }
    }

    return (
        <div>
            <h3>Login</h3>

            {message ? <div className='alert alert-info'>{message}</div> : null }

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" value={username} onChange={handleUserName}/>
            </div>

            <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input type="password" id="pwd" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>

            <br />
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login;