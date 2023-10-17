import React from "react"


export const CustPagination = ({ active, next, prev, totalPage, actionChange }) => {

    return (
        <nav className="w-full">
            <ul className="flex">
                <li>
                    <span 
                        className={`${active === 1 && 'disable bg-gray-300 cursor-default'} select-none mx-1 flex h-9 w-9 items-center cursor-pointer justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                        onClick={e => actionChange(active-1)}
                        aria-label="Previous"
                    >
                        <span className="material-icons text-sm">&#8656;</span>
                    </span>
                </li>
                {
                    totalPage.map((i) => {
                        return(
                            <li key={i}>
                                <span
                                    className={`mx-1 flex h-9 w-9 items-center cursor-pointer justify-center rounded-full bg-blue-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out ${active === i && 'bg-green-500'}`}
                                    onClick={e => actionChange(i)}
                                >
                                    {i}
                                </span>
                            </li>
                        )
                    })
                }
                <li>
                    <span
                        className={`${active === totalPage[totalPage.length-1] && 'disable bg-gray-300 cursor-default'} select-none mx-1 flex h-9 w-9 items-center cursor-pointer justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300`}
                        onClick={e => actionChange(active+1)}
                        aria-label="Next"
                    >
                        <span className="material-icons text-sm">&#8658;</span>
                    </span>
                </li>
            </ul>
        </nav>
    )
}