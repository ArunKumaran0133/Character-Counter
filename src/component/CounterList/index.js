import {ItemContainer} from './styledComponents'

const CounterList = props => {
  const {userText} = props
  return (
    <ItemContainer>
      <p>{userText}</p>
    </ItemContainer>
  )
}

export default CounterList
