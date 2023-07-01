import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SingleRecipe from "../Pages/SingleRecipe/SingleRecipe";

const AllRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:recipeID" element={<SingleRecipe />} />
        <Route path="*" element={<HomePage />} />
    </Routes>
}

export default AllRoutes;