import axios from 'axios'
import { create } from 'zustand'

const showStore = create((set) => ({
  graphData: [],
  fetchData: async (id) => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
    )

    const graphData = res.data.prices.map((price) => {
      const [timestamp, p] = price
      return {
        Date: timestamp,
        Price: p,
      }
    })

    set({ graphData })
    console.log(res)
  },
}))

export default showStore
