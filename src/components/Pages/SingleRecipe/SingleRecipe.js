import { useNavigate, useParams } from 'react-router-dom';
import './SingleRecipe.css'
import { useContext, useEffect, useState } from 'react';
import { RecipeContext } from '../../../contexts/RecipeContext';
import Layout from '../../Layouts/Layout';

const SingleRecipe = () => {
    const { recipeID } = useParams();
    const navigate = useNavigate();
    const { recipeList } = useContext(RecipeContext)
    const [ currRecipe, setCurrRecipe ] = useState({
        _id: "",
        name: "",
        cuisineType: "",
        imgLink: "",
        ingredients: "",
        instructions: ``
    });

    const { name, cuisineType, imgLink, ingredients, instructions } = currRecipe;

    useEffect(()=>{
        const tempRecipe = recipeList.find(({_id}) => _id === recipeID);
        if(tempRecipe !== undefined){
            setCurrRecipe(tempRecipe);
        }else{
            navigate('/');
        }// eslint-disable-next-line
    }, [recipeID]);

    return <Layout>
        <div className='single-heading-div'>
            <h2>{name}</h2>
        </div>
        <div className='single-card'>
            <div className='single-img-div'>
                <img src={imgLink} alt={name} className="single-card-img"/>
            </div>
            <div className='single-card-content'>
                <div className='single-card-cuisine'>Cuisine: {cuisineType}</div>
                <div className='single-card-ingredients'><span className='single-card-bold'>Ingredients:</span>{ingredients}</div>
                <div>
                    <div className='single-card-bold'>Instructions:</div>
                    <div>{instructions}</div>
                </div>
            </div>
        </div>
    </Layout>
}

export default SingleRecipe;