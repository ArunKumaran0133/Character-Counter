import styled from 'styled-components'

export const CounterBgContainer = styled.div`
  min-height: 100vh;
  padding: 50px;
  display: flex;
  align-items: center;
`

export const CounterTrackCart = styled.div`
  min-height: 100vh;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #ffc533;
  width: 100%;
`
export const CounterTrackHeader = styled.div`
  background-color: #ffbf1f;
  height: 150px;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
`

export const HeaderText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.dark ? '#ffc533' : '#334155')};
  font-weight: 800;
`
export const NoUserInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NoUserInputImage = styled.img`
  height: 100%;
  width: 100%;
`
export const CounterInputCart = styled.div`
  min-height: 100vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`
export const UserInput = styled.input`
  height: 35px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  font-family: 'Roboto';
  outline: none;
  border-width: 0px;
  padding-left: 10px;
  color: #475569;
`
export const CustomButton = styled.button`
  height: 35px;
  width: 80px;
  background-color: #ffc533;
  border-radius: 5px;
  font-family: 'Roboto';
  outline: none;
  border-width: 0px;
  color: #475569;
  margin-left: 10px;
  cursor: pointer;
`
export const UserInputContainer = styled.form`
  display: flex;
  align-items: center;
  width: 80%;
`
export const CounterListContainer = styled.ul`
  list-style: none;
`
