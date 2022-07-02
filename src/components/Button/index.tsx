import React from "react";
import style from "./Button.module.scss";

class Button extends React.Component<React.PropsWithChildren<{
    type?: "submit" | "button" | "reset" | undefined
}>> {
    render() {
        const { type = "button" } = this.props
        return (
            <button className={style.button} type={type}>{
                this.props.children}
            </button>
        );
    }
}

export default Button;
