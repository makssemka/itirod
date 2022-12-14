import AbstractView from "./AbstractView"
import { navigateTo } from "../index.js"

export default class Game extends AbstractView{
    constructor() {
        super()
    }

    async saveChanges(gameset, address){
        super.saveChanges(gameset)
        navigateTo(address)
    }

    async handle(){
        let gameset = JSON.parse(sessionStorage.getItem("Gameset"))
        let timer = gameset.time * 1000
        setTimeout(() => this.saveChanges(gameset, '/round_score'), timer)

        let word = document.querySelector(".main__word")
        let up_button = document.getElementById("up_button")
        let down_button = document.getElementById("down_button")

        let dicts = JSON.parse(localStorage.getItem("Dicts"))
        let curr_dict = dicts.find(item => item.name == [gameset.dictionary])
        let curr_command = gameset.commands[gameset.index]

        let random_word_index = Math.floor(Math.random() * curr_dict.words.length)
        word.textContent = curr_dict.words[random_word_index]
        console.log(curr_dict, random_word_index)


        let animation = document.querySelector(".main__cylon_eye")
        animation.style.animationDuration = gameset.time.toString() + "s"

        up_button.addEventListener('click', async function (e) {
            e.preventDefault()
            random_word_index = Math.floor(Math.random() * curr_dict.words.length)
            word.textContent = curr_dict.words[random_word_index]
            curr_command.guessed++
            curr_command.score++
            curr_command.guessedWords.push(word.textContent)
        })

        down_button.addEventListener('click', async function (e) {
            e.preventDefault()
            random_word_index = Math.floor(Math.random() * curr_dict.words.length)
            word.textContent = curr_dict.words[random_word_index]
            curr_command.passed++
            curr_command.passedWords.push(word.textContent)
        })
    }

    async getHtml() {
        return  `
        <div class="main__game">

            <div class="main__time-animation">
                <div class="main__cylon_eye"></div>
            </div>

            <button class="main__arrow-button" id="up_button" "type="submit">
                <img src="../../assets/img/svg/arrow-up.svg" alt="arrow-up" class="main__arrow-pic">
            </button>

            <section class="main__word-section">
                <p class="main__word">Word</p>
            </section>

            <button class="main__arrow-button" id="down_button" type="submit">
                <img src="../../assets/img/svg/arrow-down.svg" alt="arrow-down" class="main__arrow-pic">
            </button>
        </div>
        `;
    }
}