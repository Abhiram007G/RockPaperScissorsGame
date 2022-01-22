import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
`

export const AppContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  margin: auto;
`

export const ScoreMainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px 15px 25px;
  border: 1px solid white;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: white;
  font-family: Bree serif;
  font-size: 20px;
  font-weight: 500;
`
export const ScoreContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  width: 30%;
  padding: 15px;
`
export const ScoreHeading = styled.h1`
  color: #223a5f;
  font-size: 40px;
  font-family: Roboto;
  margin: 0px;
  margin-top: 8px;
`

export const ScoreP = styled(ScoreHeading)`
  font-size: 24px;
  font-family: Bree serif;
`

export const RPSButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RPSButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 15px;
`
export const RPSImage = styled.img`
  width: 120px;
`

export const RulesButton = styled.button`
  align-self: flex-end;
  border: none;
  padding: 10px 15px 10px 15px;
  border-radius: 8px;
  font-family: Bree Serif;
`
export const RPSImgsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  width: 100%;
`

export const ChoiceContainer = styled.div`
  text-align: center;
  margin: 30px;
`

export const ChoiceHeading = styled.h1`
  font-size: 20px;
  color: white;
`
export const ResultHeading = styled(ScoreHeading)`
  color: white;
  font-size: 24px;
  margin: 0px 0px 20px 0px;
`

export const PlayAgainButton = styled(RulesButton)`
  align-self: center;
`

export const RulesImage = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
