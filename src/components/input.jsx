import React from "react";

export default function Input() {
    const styles = {
        position: "relative",
        borderRadius: "10px",
        minHeight: "3vmax",
        minWidth: "50%",
        top: "1vmax"
    }

    return (
        <>
            <input style={styles}></input>
        </>
    );
}