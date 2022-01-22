import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

import {
  AppContainer,
  ScoreMainContainer,
  ScoreContainer,
  Heading,
  ScoreHeading,
  ScoreP,
  RPSButton,
  RPSImage,
  RPSButtonsContainer,
  RulesButton,
  AppContentContainer,
  RPSImgsContainer,
  ChoiceContainer,
  ChoiceHeading,
  ResultHeading,
  PlayAgainButton,
  RulesImage,
  CloseButton,
  ResultContainer,
} from './styledComponents'

class Game extends Component {
  state = {
    score: 0,
    isGameOn: true,
    result: 'INITIAL',
    yourChoice: {},
    opponentChoice: {},
  }

  renderScoreBlock = () => {
    const {score} = this.state

    return (
      <ScoreMainContainer>
        <div>
          <Heading>ROCK</Heading>
          <Heading>PAPER</Heading>
          <Heading>SCISSORS</Heading>
        </div>
        <ScoreContainer>
          <ScoreP as="p">Score</ScoreP>
          <ScoreHeading as="p">{score}</ScoreHeading>
        </ScoreContainer>
      </ScoreMainContainer>
    )
  }

  onPlayed = yourChoice => {
    const {choicesList} = this.props
    const opponentChoice = choicesList[Math.floor(Math.random() * 3)]
    console.log(yourChoice.id, opponentChoice.id)

    if (yourChoice.id === opponentChoice.id) {
      console.log('---------ITS DRAW')
      this.setState({
        isGameOn: false,
        result: 'IT IS DRAW',
        yourChoice,
        opponentChoice,
      })
    } else if (
      (yourChoice.id === 'ROCK' && opponentChoice.id === 'SCISSORS') ||
      (yourChoice.id === 'PAPER' && opponentChoice.id === 'ROCK') ||
      (yourChoice.id === 'SCISSORS' && opponentChoice.id === 'PAPER')
    ) {
      console.log('---------YOU WIN')
      this.setState(prev => ({
        isGameOn: false,
        result: 'YOU WON',
        yourChoice,
        opponentChoice,
        score: prev.score + 1,
      }))
    } else {
      console.log('---------YOU LOSE')
      this.setState(prev => ({
        isGameOn: false,
        result: 'YOU LOSE',
        yourChoice,
        opponentChoice,
        score: prev.score - 1,
      }))
    }
  }

  renderGame = () => {
    const {choicesList} = this.props

    const onClickRock = () => {
      this.onPlayed(choicesList[0])
    }

    const onClickScissors = () => {
      this.onPlayed(choicesList[1])
    }

    const onClickPaper = () => {
      this.onPlayed(choicesList[2])
    }

    return (
      <RPSButtonsContainer>
        <div>
          <RPSButton
            type="button"
            data-testid="rockButton"
            onClick={onClickRock}
          >
            <RPSImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </RPSButton>
          <RPSButton
            type="button"
            data-testid="scissorsButton"
            onClick={onClickScissors}
          >
            <RPSImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </RPSButton>
        </div>
        <RPSButton
          type="button"
          data-testid="paperButton"
          onClick={onClickPaper}
        >
          <RPSImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
        </RPSButton>
      </RPSButtonsContainer>
    )
  }

  onPlayAgian = () => {
    this.setState({isGameOn: true})
  }

  renderResult = () => {
    const {result, yourChoice, opponentChoice} = this.state
    return (
      <ResultContainer>
        <RPSImgsContainer>
          <ChoiceContainer>
            <ChoiceHeading>YOU</ChoiceHeading>
            <RPSImage src={yourChoice.imageUrl} alt="your choice" />
          </ChoiceContainer>
          <ChoiceContainer>
            <ChoiceHeading>OPPONENT</ChoiceHeading>
            <RPSImage src={opponentChoice.imageUrl} alt="opponent choice" />
          </ChoiceContainer>
        </RPSImgsContainer>
        <ResultHeading as="p">{result}</ResultHeading>
        <PlayAgainButton type="button" onClick={this.onPlayAgian}>
          Play Again
        </PlayAgainButton>
      </ResultContainer>
    )
  }

  renderRulesButton = () => (
    <Popup
      modal
      trigger={<RulesButton type="button">RULES</RulesButton>}
      className="popup-content"
    >
      {close => (
        <>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </>
      )}
    </Popup>
  )

  render() {
    const {isGameOn} = this.state
    return (
      <AppContainer>
        <AppContentContainer>
          {this.renderScoreBlock()}
          {isGameOn ? this.renderGame() : this.renderResult()}
          {this.renderRulesButton()}
        </AppContentContainer>
      </AppContainer>
    )
  }
}

export default Game
