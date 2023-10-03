import {Component} from 'react'

import {v4} from 'uuid'

import CounterList from '../CounterList'

import {
  CounterBgContainer,
  CounterTrackCart,
  CounterTrackHeader,
  HeaderText,
  NoUserInputContainer,
  NoUserInputImage,
  CounterInputCart,
  UserInputContainer,
  CustomButton,
  UserInput,
  CounterListContainer,
} from './styledComponents'

class CounterApp extends Component {
  state = {userInput: '', textList: []}

  getUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  addTextToCount = event => {
    event.preventDefault()
    const {userInput, textList} = this.state
    if (userInput.length > 0) {
      const textCount = {
        userText: `${userInput} : ${userInput.length}`,
        id: v4(),
      }
      const updateTextList = [...textList, textCount]
      this.setState({textList: updateTextList, userInput: ''})
    }
  }

  renderNoUserInputView = () => (
    <NoUserInputContainer>
      <NoUserInputImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </NoUserInputContainer>
  )

  renderCounterInput = () => {
    const {userInput} = this.state
    return (
      <UserInputContainer onSubmit={this.addTextToCount}>
        <UserInput
          type="text"
          placeholder="Enter the Characters here"
          onChange={this.getUserInput}
          value={userInput}
        />
        <CustomButton type="submit">Add</CustomButton>
      </UserInputContainer>
    )
  }

  renderCounterList = () => {
    const {textList} = this.state
    return (
      <CounterListContainer>
        {textList.map(eachItem => (
          <CounterList userText={eachItem.userText} key={eachItem.id} />
        ))}
      </CounterListContainer>
    )
  }

  renderResultView = () => {
    const {textList} = this.state

    if (textList.length === 0) {
      return this.renderNoUserInputView()
    }
    return this.renderCounterList()
  }

  render() {
    return (
      <CounterBgContainer>
        <CounterTrackCart>
          <CounterTrackHeader>
            <HeaderText>Count the characters like a Boss...</HeaderText>
          </CounterTrackHeader>
          {this.renderResultView()}
        </CounterTrackCart>
        <CounterInputCart>
          <HeaderText dark>Character Counter</HeaderText>
          {this.renderCounterInput()}
        </CounterInputCart>
      </CounterBgContainer>
    )
  }
}

export default CounterApp
