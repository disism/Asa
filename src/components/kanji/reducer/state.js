/***
 * initialState
 * @type {{isLoading: boolean, kana_data: {main_kanji: []}, words_data: [], error: string, kanji_data: {}}}
 */
const state = {
  words_data: [],
  kanji_data: {},
  kana_data: {main_kanji: []},
  error: '',
  isLoading: true
}
export default state