import { CoinRow } from './CoinRow'
import css from './CriptoCoins.module.css'

const tittles = ['Coin', 'Price', 'Price Change', '24h Volume']

export const CriptoCoins = ({ coins }) => {
    return (
        <>
            <table className={css.Table}>
                <thead>
                    <tr>
                        {
                            tittles.map((tittle, index )=> (
                                <td key={`tittle-item-${index}`}>{tittle}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => (
                        <CoinRow coin={coin} key={`Cripto-Currency-${index}`} index={index + 1}/>
                    ))}
                </tbody>
            </table>
        </>
    )
}