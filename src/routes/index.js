import React from "react"
import PathConstants from "./PathConstants"

const Home = React.lazy(() => import("../pages/HomePage"))
const AllCrypto = React.lazy(() => import("../pages/AllCrpto"))
const News = React.lazy(() => import("../pages/NewsPage"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.ALLCRYPTO, element: <AllCrypto /> },
    { path: PathConstants.NEWS, element: <News /> },
]
export default routes