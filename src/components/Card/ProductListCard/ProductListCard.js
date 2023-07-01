import ProductCard from '../ProductCard/ProductCard';
import './ProductListCard.css';

export default function ProductListCard (props){
    const { recipeList } = props;
    return <section className="productlist-section">
        {
            recipeList.length > 0 ? recipeList.map(recipe => <ProductCard key={recipe._id} recipe={recipe} />) : <h3>No recipes.....</h3>
        }
    </section>
}