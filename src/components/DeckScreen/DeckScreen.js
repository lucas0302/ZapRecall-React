import FlashCard from "../FlashCard/FlashCard";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import {
    ScreenContaier,
    LogoContainer,
    StatusPerguntas,
    Finalizacao
} from "./StylesDeckScreen";
import deckReact from "../../constants/deckReact";
import { useState } from 'react';

export default function DeckScreen() {
    const [counter, setCounter] = useState(0);

    function ConterQuestions(){
        setCounter(counter + 1)
    }

    return (
        <ScreenContaier>
            <LogoContainer>
                <img src={logo} alt="Logo" />
                <h1>ZapRecall</h1>
            </LogoContainer>
            {deckReact.map((card, i) =>
                <FlashCard
                    key={card.question}
                    card ={card}
                    index={i}
                    ConterQuestions={ConterQuestions}
                />
            )}

            <Footer  key={deckReact.length} totalquestion={deckReact.length} questionCouter={counter}/>
        </ScreenContaier>
    );
}