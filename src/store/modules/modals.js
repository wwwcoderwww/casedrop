export default {
  namespaced: true,
  state: {
    stateModalMsg: '',
    modalsState: {
      singleWonItem: false,
      multiWonItems: false,
      success: false,
      error: false,
    },
    wonItems: []
  },

  mutations: {
    setWonItems(state, payload) {
      if (payload.length > 1) {
        state.modalsState.multiWonItems = true;
      } else {
        state.modalsState.singleWonItem = true;
      }
      state.wonItems = payload;
    },
    closeModals(state) {
      for (let key in state.modalsState) {
        state.modalsState[key] = false;
      }
    },
    setStateModals(state, { type, show, msg }) {
      state.modalsState[type] = show;
      state.stateModalMsg = msg;
    }
  },

  getters: {
    isSingleWonItem: state => state.modalsState.singleWonItem,
    isMultiWonItem: state => state.modalsState.multiWonItems,
    isSuccess: state => state.modalsState.success,
    isError: state => state.modalsState.error,
    isAnyModal: state => Object.values(state.modalsState).some(item => item)
  }

};