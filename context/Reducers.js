import ACTIONS from './Actions'

const Reducers = (state, action) => {
      switch (action.type) {
        case ACTIONS.SUBMIT_INFO:
            return {
                ...state,
               userInfo: action.payload
            }
      }
}

export default Reducers