import axios from 'axios'
import { create } from 'zustand'
import debounce from '../Helper/debounce'

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: '',

  setQuery: (e) => {
    set({ query: e.target.value })
    homeStore.getState().searchCoins()
  },

  searchCoins: debounce(async () => {
    const { query, trending } = homeStore.getState()
    if (query.length > 2) {
      const res = await axios.get(`
      https://api.coingecko.com/api/v3/search?query=${query}`)

      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.name,
          id: coin.id,
          image: coin.large,
        }
      })

      set({ coins })
    } else {
      set({ coins: trending })
    }
  }, 800),

  fetchCoins: async () => {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/search/trending',
    )

    const coins = res.data.coins.map((coin) => {
      return {
        image: coin.item.large,
        id: coin.item.id,
        priceBtc: coin.item.price_btc,
        name: coin.item.name,
      }
    })

    set({ coins, trending: coins })
  },
}))

export default homeStore
