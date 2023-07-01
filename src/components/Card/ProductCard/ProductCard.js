import { useNavigate } from 'react-router-dom';
import { BinIcon, EditIcon } from '../../Icons';
import './ProductCard.css'
import { useContext } from 'react';
import { RecipeContext } from '../../../contexts/RecipeContext';

export default function ProductCard(props){
    const { recipe } = props;
    const { _id, name, cuisineType, imgLink } = recipe;
    const navigate = useNavigate();
    const { deleteRecipe } = useContext(RecipeContext);

    const deleteRecipeHandler = () => {
        deleteRecipe(_id);
    }

    return <div className="productcard-card" onClick={()=>navigate(`/recipe/${_id}`)}>
        <div className="productcard-img">
            <img src={imgLink} alt={name} className="productcard-card-img"/>
        </div>
        <div className="productcard-content">
            <h4 className="productcard-card-name">{name}</h4>
            <div>
                <span>Cuisine Type:</span>
                <span className="productcard-card-author">{cuisineType}</span>
            </div>
            <div>
                <span>Ingredients:</span>
                <span className="productcard-card-category">{'See Recipe >'}</span>
            </div>
            <div>
                <span>instructions:</span>
                <span className="productcard-card-category">{'See Recipe >'}</span>
            </div>
        </div>
        <div className="productcard-card-edit-div">
            <EditIcon className="productcard-card-svg" />
            <BinIcon className="productcard-card-svg" onClick={deleteRecipeHandler}/>
        </div>
    </div>
}