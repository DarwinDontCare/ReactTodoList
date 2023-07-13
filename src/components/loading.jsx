import React from "react";
import loadingGif from "../assets/images/loading_dots.gif"

export default function LoadingWheel({isLoading}) {

    var animationClassNameTrigger = "";
    const styles = {
        position: "relative", 
        top: "50%", 
        marginTop: "-247px"
    };

    if (!isLoading) animationClassNameTrigger = "loading-fadeout";

    return (
        <>
            <img src={loadingGif} style={styles} className={animationClassNameTrigger}/>
        </>
    );
}