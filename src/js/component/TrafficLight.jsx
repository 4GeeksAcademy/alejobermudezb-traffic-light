import React, {useState} from "react";

const TrafficLight = () => {

    const [redLight, setRedLight] = useState("danger")
    const [yellowLight, setYellowLight] = useState("warning")
    const [greenLight, setGreenLight] = useState("success")
    
    const brillo1 = () =>{
        if (redLight === "danger"){
            setRedLight("danger shine")
            setYellowLight("warning")
            setGreenLight("success")
        }else {
            setRedLight("danger")
        }
    };

    const brillo2 = () => {
        if (yellowLight === "warning") {
            setYellowLight("warning shine")
            setRedLight("danger")
            setGreenLight("success")
        }else {
            setYellowLight("warning")
        }
    };

    const brillo3 =() => {
        if (greenLight === "success") {
            setGreenLight("success shine")
            setRedLight("danger")
            setYellowLight("warning")
        }else {
            setGreenLight("success")
        }
    };

    return (
        <div>
            <div className="container bg-dark d-flex justify-content-evenly flex-column rounded" style={{height: "580px", width: "200px", paddingLeft: "32px", marginTop: "150px"}}>
                <div className={"rounded-circle bg-" + redLight} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={brillo1} ></div>
                <div className={"rounded-circle bg-" + yellowLight} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={brillo2}></div>
                <div className={"rounded-circle bg-" + greenLight} style={{width: "140px", height: "120px", cursor: "pointer"}} onClick={brillo3}></div>
            </div>
        </div>
    );
    }
export default TrafficLight;