import React, { useEffect, useState } from 'react'
import { HorizontalCard } from './HorizontalCard';
import { CustPagination } from '../components/CustPagination';
import { ALL_NEWS_API, tempNewsData } from '../constant';
import SpinnerPage from '../components/SpinnerPage';
const REACT_APP_PR_KEY2 = process.env.REACT_APP_PR_KEY2;
const REACT_APP_PR_KEY3 = process.env.REACT_APP_PR_KEY3 ? '' : 'pub_313049b0f63144a4c336754da584d4f944737';

const NewsPage = () => {

    const [newsAll, setNewsAll] = useState(tempNewsData)
    const [pageData, setPageData] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const [postsPerPage] = useState(6);
    const [totalPage, setTotalPage] = useState(newsAll.length / postsPerPage)
    const [pages, setPages] = useState([])
    
    const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk';
    
    const getAllNews = async () => {
        pages.length > 0 && setPages([])
        const options = {
            method: 'GET',
            headers: {
                // 'X-RapidAPI-Key': 'NEWS_API_KEY',
                // 'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(`${ALL_NEWS_API}?apikey=${REACT_APP_PR_KEY3}&q=cryptocurrency`, options);
            const result = await response.json();
            setNewsAll([...result.results]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllNews()
        let temp:any = []
        for(let i = 1; i < newsAll.length / postsPerPage; i++) {
            temp.push(i)
        }
        setPages(temp)
    }, [])

    const changePage = (page) => {
        if (page < totalPage && page > 0) {
            setCurrPage(page)            
        }
    }
    useEffect(() => {
        setPageData([])
        let tempData:any = []
        if (newsAll.length > postsPerPage) {
            tempData = newsAll.slice((currPage - 1) * postsPerPage, currPage * postsPerPage);
            setPageData(tempData);
        }
    }, [currPage, newsAll])



    return (
        <div className='pt-20'>
            <div className='h-full w-full grid grid-cols-1 place-items-stretch gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {
                    pageData.length > 0 ? pageData.map((news: any, index) => {
                        return (
                            <div  key={index}>
                                <HorizontalCard title={news.title} thumbnail={news.image_url} description={news.description} moreLink={news.link} />
                            </div>
                        )
                    })
                    : <SpinnerPage />
                }
            </div>
            {newsAll.length > postsPerPage && <CustPagination actionChange={changePage} active={currPage} next={currPage+1} prev={currPage-1} totalPage={pages} />}
        </div>
    )
}



export default NewsPage

