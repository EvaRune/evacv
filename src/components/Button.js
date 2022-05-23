import "./Button.css"

const Button = (props) => {
    const btnclass = props.act ? "cv-button btn-act" : "cv-button"

    return props.newwin ? (
        <a
            href={props.link}
            className={btnclass}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span>{props.label}</span>
        </a>
    ) : (
        <a href={props.link} className={btnclass}>
            <span>{props.label}</span>
        </a>
    )
}

export default Button
