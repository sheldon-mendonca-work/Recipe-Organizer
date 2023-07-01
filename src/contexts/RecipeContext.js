import { createContext, useEffect, useState } from "react";
import { database } from "../backend/database";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

const initDatabase = database;
const initRecipe = {
    name: "",
    cuisineType: "",
    imgLink: "",
    ingredients: "",
    instructions: ``
};

export const RecipeProvider = ({children}) => {
    const navigate = useNavigate();
    const [ recipeList, setRecipeList ] = useState([]);
    const [ searchRecipe, setSearchRecipe ] = useState({type: 'name', value: ''});
    const [ showModal, setShowModal ] = useState(false);
    const [ newRecipe, setNewRecipe ] = useState(initRecipe);

    const getRecipeList = () => {
        if(localStorage.getItem('recipeOrganizer') !== null){
            const tempRecipeList = JSON.parse(localStorage.getItem('recipeOrganizer'))
            setRecipeList(tempRecipeList);
        }else{
            setRecipeList(initDatabase); 
            localStorage.setItem('recipeOrganizer', JSON.stringify(initDatabase));
        }
           
    } 

    const addRecipe = () => {
        const tempRecipe = newRecipe;
        tempRecipe.imgLink = tempRecipe.imgLink.length === 0 ? "https://picsum.photos/272/208": tempRecipe.imgLink;
        tempRecipe._id = uuid();
        console.log(tempRecipe);
        const tempRecipeList = [...recipeList, tempRecipe];
        
        console.log(tempRecipeList)
        setRecipeList(tempRecipeList);
        localStorage.setItem('recipeOrganizer', JSON.stringify(tempRecipeList));
        setNewRecipe(initRecipe);
        setShowModal(false);
        navigate('/');
    }

    const deleteRecipe = (recipeID) => {
        const tempRecipeList = recipeList => recipeList.filter(({_id}) => _id !== recipeID)
        setRecipeList(tempRecipeList);
        localStorage.setItem('recipeOrganizer', JSON.stringify(tempRecipeList));
    } 
    
    useEffect(()=>{
        getRecipeList();// eslint-disable-next-line
    }, [])

    return <RecipeContext.Provider value={{ recipeList, setRecipeList, getRecipeList, searchRecipe, setSearchRecipe, newRecipe, setNewRecipe, addRecipe, showModal, setShowModal, initRecipe, deleteRecipe }}>
        {children}
    </RecipeContext.Provider>
};