import React, { useEffect, useState } from 'react';
import { ALL_CRYPTO_API } from '../constant'
import { TransactionsTable } from './TableComponent';
import SpinnerPage from '../components/SpinnerPage';

const HomePage = () => {

  const [cryptoAll, setCryptoAll] = useState([])
  const [cryptoStates, setCryptoStates] = useState([])
  const getAllData = async () => {

    const options = {
      method: 'GET',
      headers: {
        'x-access-token': 'coinranking78a18a828d6eee95f682f036536e2bcd2a182348b5d4343a'
      }
    };

    try {
      const response = await fetch(`${ALL_CRYPTO_API}?limit=10`, options);
      const result = await response.json();
      setCryptoAll(result.data.coins);
      console.log('result.data.coins: ', result.data.coins);
      setCryptoStates(result.data.stats)

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllData();
  }, [])

  const TABLE_HEAD = ["", "Name", "Price", "Market Cap", "24h"];

  return (
    <div className='pt-20'>
      {
        cryptoAll.length != 0
          ? <TransactionsTable TABLE_ROWS={cryptoAll} TABLE_HEAD={TABLE_HEAD} TITLE={'Top 10 Cryptocurrency'} PAGINATIONREQ={false} />
          : <SpinnerPage />
      }

    </div>
  )
}

export default HomePage
