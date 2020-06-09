import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
  switch(action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

const Color = props => {
  const [ color, dispatch ] = useReducer(reducer, 'black')
  
  return ( 
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
   );
}
 
export default Color;
