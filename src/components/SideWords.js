import "./SideWords.css"

const SideWords = (props) => {
    return (
        <div className="sidewords">
            <ul className="wordlist">{props.words}</ul>
        </div>
    )
}

export default SideWords
