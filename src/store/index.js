import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'

const defaultState = {
  worldMapData: {}
}

const SET_WORLD_MAP_DATA = 'SET_WORLD_MAP_DATA'


const setWorldMapData = (mapData) =>{
  return { type: SET_WORLD_MAP_DATA, mapData }
}



export const settingWorldMapData = () =>{
  return async dispatch => {
    try {
      const res = await axios.get("https://unpkg.com/world-atlas@1/world/110m.json")
      dispatch(setWorldMapData(res.data))
    } catch (err) {
      console.error(err)
    }
  }
}



const reducer = (state=defaultState, action) =>{
  switch(action.type) {
    case SET_WORLD_MAP_DATA :
      return {...state, worldMapData: action.mapData}
    default: return state
  }
}

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true }))))
