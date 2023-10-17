import React, { useEffect, useState } from 'react'

import { ALL_CRYPTO_API } from '../constant'
import { TransactionsTable } from './TableComponent'
import SpinnerPage from '../components/SpinnerPage'

const AllCrpto = () => {
    const [cryptoAll, setCryptoAll] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const [postsPerPage] = useState(10);
    const [totalPage, setTotalPage] = useState(0)
    const [offset, setOffset] = useState(postsPerPage * (currPage - 1))
    const [load, setLoad] = useState(false)

    const [sortBy, setSortBy] = useState('')
    const [orderDirection, setOrderDirection] = useState('asc')

    const getAllData = async () => {
        setLoad(true)
        const options = {
            method: 'GET',
            headers: {
                'x-access-token': 'coinranking78a18a828d6eee95f682f036536e2bcd2a182348b5d4343a'
            }
        };
        //?offset=100&orderBy=marketCap&limit=50&orderDirection=desc&referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&search=

        try {
            const response = await fetch(`${ALL_CRYPTO_API}?offset=${offset}&limit=${postsPerPage}`, options);
            const result = await response.json();
            setCryptoAll(result.data.coins);
            setTotalPage(result.data.stats.total);
            setLoad(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setOffset(postsPerPage * (currPage - 1))
    }, [currPage])
console.log();
    useEffect(() => {
        getAllData()
    }, [offset])
    const changePage = (page) => {
        if (page < totalPage / postsPerPage && page > 0) {
            setCurrPage(page)
        }
    }

    const TABLE_HEAD = ["", "Name", "Price", "Market Cap", "24h"];

    return (
        <div className='pt-20'>
            {
                load
                    ? <SpinnerPage/>
                    : <TransactionsTable TABLE_ROWS={cryptoAll} TABLE_HEAD={TABLE_HEAD} TITLE={'Cryptocurrency'} PAGINATIONREQ={true} ACTIVE={currPage} PAGES={totalPage} ONPAGECHANGE={changePage} />
            }

        </div>
    )
}

export default AllCrpto
