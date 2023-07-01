import { useContext } from "react";
import Layout from "../../Layouts/Layout";
import './HomePage.css';
import { RecipeContext } from "../../../contexts/RecipeContext";
import ProductListCard from "../../Card/ProductListCard/ProductListCard";

const HomePage = () => {
    const { recipeList, searchRecipe, setSearchRecipe } = useContext(RecipeContext);

    const searchInputChangeHandler = (event) => {
        setSearchRecipe(prevState => ({...prevState, value: event.target.value}));
    }

    const radioSearchHandler = (typeName) => {
        setSearchRecipe(prevState => ({...prevState, type: typeName}));
    }

    const getRecipeItems = () => {
        if(searchRecipe.value.length === 0) return recipeList;
        
        let tempRecipeList = recipeList;
        switch (searchRecipe.type) {
            case 'ingredients':
                tempRecipeList = tempRecipeList.filter(({ingredients}) => (
                    ingredients.toLowerCase().indexOf(searchRecipe.value.trim().toLowerCase()) !== -1
                ));
                return tempRecipeList;
            
            case 'cuisine':
                tempRecipeList = tempRecipeList.filter(({cuisineType}) => (
                    cuisineType.toLowerCase().indexOf(searchRecipe.value.trim().toLowerCase()) !== -1
                ));
                return tempRecipeList;
        
            default:
                tempRecipeList = tempRecipeList.filter(({name}) => (
                    name.toLowerCase().indexOf(searchRecipe.value.trim().toLowerCase()) !== -1
                ));
                return tempRecipeList;
        }
    }

    return <Layout>
        <div className="search-div">
            <span className="search-input-div">
                <input type="text" value={searchRecipe.name} onChange={searchInputChangeHandler} placeholder="Search the item you want..."/>
            </span>
            <span>
                <span>Filters: </span>
                <span>
                    <input type="radio" onChange={()=>radioSearchHandler('name')} checked={searchRecipe.type === 'name'} id="name" />
                    <label htmlFor="name">Name</label>
                </span>
                <span>
                    <input type="radio" onChange={()=>radioSearchHandler('ingredients')} checked={searchRecipe.type === 'ingredients'} id="ingredients" />
                    <label htmlFor="ingredients">Ingredients</label>
                </span>
                <span>
                    <input type="radio" onChange={()=>radioSearchHandler('cuisine')} checked={searchRecipe.type === 'cuisine'} id="cuisine" />
                    <label htmlFor="cuisine">Cuisine</label>
                </span>
            </span>
        </div>
        <div>
            <h2>Recipes:</h2>
            <ProductListCard recipeList={getRecipeItems()} />
        </div>
    </Layout>
}

export default HomePage;