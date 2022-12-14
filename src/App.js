import React from "react"
import "./App.css"
import SideWords from "./components/SideWords"
import Words from "./utils/wordskill.json"
import Button from "./components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            words: null,
            skills: null,
        }
    }

    setWords() {
        const wordlist = Words.words
        const totalwords = wordlist.length
        const random = (min, max) =>
            Math.floor(Math.random() * (max - min)) + min
        let currentword = random(1, totalwords)
        const wordstruc = wordlist.map((word, index) => {
            let liclass =
                index === currentword - 1
                    ? "wordlist-item current"
                    : "wordlist-item"
            return (
                <li key={word} className={liclass}>
                    {word}
                </li>
            )
        })

        this.setState({
            words: wordstruc,
        })
    }

    setSkills() {
        const skillist = Words.skills
        const skillstruct = skillist.map((skill) => {
            return (
                <li key={skill} className="skill-item">
                    {skill}
                </li>
            )
        })

        this.setState({
            skills: skillstruct,
        })
    }

    componentDidMount() {
        this.setWords()
        setInterval(() => {
            this.setWords()
        }, 2000)
        this.setSkills()
    }

    render() {
        const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />

        return (
            <div className="App">
                <SideWords words={this.state.words} />
                <main className="main">
                    <hgroup className="cvintro">
                        <h1 className="myname">Eva Merlot</h1>
                        <p className="intro">
                            Je suis développeuse web <strong>full-stack</strong>{" "}
                            à la recherche d’un emploi.
                        </p>
                    </hgroup>
                    <section className="skills-contact">
                        <ul className="skills">{this.state.skills}</ul>
                        <div className="contact">
                            <Button
                                label="Contactez moi"
                                act={true}
                                link="mailto:eva.merlot@outlook.fr"
                            />
                            <Button label="Téléchargez mon CV" link="https://drive.google.com/file/d/1Lqx36YQ1EPZ9AcMjovoMWUMOTOOuPxAA/view?usp=sharing" newwin={true}/>
                        </div>
                    </section>
                    <footer className="footer">
                        <p className="copyright">© 2022 - Eva Merlot</p>
                        <div className="social">
                            <a
                                className="social-btn"
                                href="https://www.linkedin.com/in/eva-merlot-263b45239"
                            >
                                {linkedinIcon}
                            </a>
                        </div>
                    </footer>
                </main>
            </div>
        )
    }
}

export default App
