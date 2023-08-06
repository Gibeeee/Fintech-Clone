import React from 'react'

export const CoinRow = ({ coin, index }) => {
  return (
    <tr>
        <td>{coin.name}</td>
        <td>{coin.current_price}</td>
        <td>{coin.price_change_percentage_24h}</td>
        <td>{coin.price_change_24h}</td>
    </tr>
  )
}
