const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE'

const initialState = {
  isDark: window.matchMedia("(prefers-color-scheme: dark)").matches
}

const darkReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {...state,  isDark: action.payload }
    default:
      return state
  }
}

export const toggleIsDarkAC = (isDark) => ({ type: TOGGLE_DARK_MODE, payload: isDark })

export default darkReducer
