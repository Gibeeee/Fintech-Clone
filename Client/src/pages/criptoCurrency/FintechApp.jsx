import { useEffect, useState } from 'react'
import css from './FintechApp.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CriptoCoins } from '../../components/CriptoCurrency/CriptoCoins'

export const FintechApp = ( ) => {

    const [coins, setCoins] = useState([])

    const getData = async() => {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
        console.log(res.data)
        setCoins(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <section className={css.layout}>
                <div className={css.header}>
                    <img src="src/images/FintechApp/dolar.png" />
                    <label >Search: <input type="text" /></label>
                    <Link to={'/'} >Home</Link>
                </div>
                <div className={css.Finances}>
                    <div className={css.Profits}>top</div>
                    <hr />
                    <div className={css.Bills}>middle</div>
                    <hr />
                    <div className={css.Available}>bottom</div>
                </div>
                <div className={css.body}>
                    <CriptoCoins coins={coins} />
                </div>
                <div className={css.footer}>4</div>
            </section>
        </>
    )
}