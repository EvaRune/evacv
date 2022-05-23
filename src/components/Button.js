import "./Button.css"

const Button = (props) => {
    const btnclass = props.act ? "cv-button btn-act" : "cv-button"

    return (
        <a href={props.link} className={btnclass}>
            <span>{props.label}</span>
        </a>
    )
}

export default Button
