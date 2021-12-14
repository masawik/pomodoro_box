const WHOLE_STATE_LOCAL_STORAGE_KEY = 'WHOLE_STATE'

const getState = () => {
  const stateFromLs = localStorage.getItem(WHOLE_STATE_LOCAL_STORAGE_KEY)

  return stateFromLs
    ? JSON.parse(stateFromLs)
    : false
}

const saveState = (state: object) =>
  localStorage.setItem(WHOLE_STATE_LOCAL_STORAGE_KEY, JSON.stringify(state))

export const ls = {
  getState,
  saveState,
}