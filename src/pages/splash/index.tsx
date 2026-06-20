import {useEffect} from "react";
import {useNavigate } from "react-router-dom";
import VMlogo from "../../assets/img/VMlogo.png";

const SplashScreen=()=>{
    const navigate=useNavigate();

    useEffect(()=>{
        const timer =setTimeout(()=>{
            navigate("/login");
        },3000);
        return ()=>clearTimeout(timer);
    },[navigate]);

    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
            height:"100vh",backgroundColor:"#1a2980"}}>
                <img src={VMlogo} alt="Viyam Capture" style={{ width: "250px" }} />
                <p style={{color:"#ffffff",fontSize:"18px",marginTop:"10px"}}>
                    Capture Every Encounter . Maximize Every Dollar.
                </p>
                <div style={{marginTop:"30px"}}>
                    <div style={{width:"50px",height:"50px",border:"5px solid #ffffff",
                        borderTop:"5px solid transparent",borderRadius:"50%",
                        animation:"spin 1s linear infinite"}}></div>
                </div>
                <style>{`
                @keyframes spin{
                0% {transform:rotate(0deg);}
                100% {transform:rotate(360deg);}
                }
                `}</style>
            </div>
        );
    };
    export default SplashScreen;