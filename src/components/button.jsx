import React from "react";

export default function Button({text}) {
    const styles = {
        position: "relative",
        borderRadius: "10px",
        width: "fit-content",
        textAlign: "center",
        fontSize: "2.6vmax",
        minHeight: "3vmax",
        top: "1.5vmax",
        backgroundColor: "white"
    }

    return (
        <>
            <button style={styles}>{text}</button>
        </>
    );
}