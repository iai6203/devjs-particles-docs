import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  isSideNavOpened: boolean
}

type Action = { type: 'OPEN_SIDE_NAV' } | { type: 'CLOSE_SIDE_NAV' }

type Dispatch = React.Dispatch<Action>

const initialState: State = {
  isSideNavOpened: false,
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN_SIDE_NAV':
      return {
        ...state,
        isSideNavOpened: true,
      }
    case 'CLOSE_SIDE_NAV':
      return {
        ...state,
        isSideNavOpened: false,
      }
    default:
      return state
  }
}

const StateContext = React.createContext<State | null>(null)
const DispatchContext = React.createContext<Dispatch | null>(null)

const NavProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export const useNavState = () => {
  const context = React.useContext(StateContext)
  if (!context) throw new Error('Cannot find NavProvider')
  return context
}

export const useNavDispatch = () => {
  const context = React.useContext(DispatchContext)
  if (!context) throw new Error('Cannot find NavProvider')
  return context
}

export default NavProvider
