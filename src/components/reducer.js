/***
 * Master Reducer
 * @param state
 * @param action
 * @returns {{isLoading: boolean, data: [], error: string}|*|{isLoading: boolean, data: *, error: string}}
 * @constructor
 */
const Reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        data: action.payload,
        error: '',
        isLoading: false
      }
    case 'FETCH_ERROR':
      return {
        data: [],
        error: '問題が発生したためデータリクエストを終了します！',
        isLoading: false
      }
    case 'LOADING_TRUE':
      return {
        data: [],
        error: '',
        isLoading: true
      }
    default:
      return state
  }
}

export default Reducer