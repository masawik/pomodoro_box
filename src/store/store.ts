import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { rootReducer } from './rootReducer'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

const persistConfig = {
  key: 'POMODORO_APP_STORE',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, devToolsEnhancer({}))
export const persistor = persistStore(store)