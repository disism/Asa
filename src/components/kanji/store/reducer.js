const reducer = (state, action) => {
  switch (action.type) {
    case 'WORDS_FETCH_SUCCESS':
      return {
        words_data: action.payload,
        error: '',
        isLoading: false
      }
    case 'KANJI_FETCH_SUCCESS':
      return {
        kanji_data: action.payload,
        error: '',
        isLoading: false
      }
    case 'KANA_FETCH_SUCCESS':
      return {
        kana_data: action.payload,
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

export default reducer