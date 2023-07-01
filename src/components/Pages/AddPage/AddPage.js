import { useContext } from 'react';
import './AddPage.css'
import { RecipeContext } from '../../../contexts/RecipeContext';

const AddPage = () => {
    const { newRecipe, setNewRecipe, addRecipe, setShowModal, initRecipe } = useContext(RecipeContext);
    const formSubmitHandler = (event) => {
        event.preventDefault();

        addRecipe();
    } 

    const modalClickHandler = () => {
        setShowModal(false);
        setNewRecipe(initRecipe);
    }

    return <>
        <div className='add-layout'>
            <h2 className='add-layout-heading'>Add Recipe</h2>
            <form onSubmit={formSubmitHandler}>
                <div className='add-layout-item'>
                    <label htmlFor='name' className='add-name'>Name:</label>
                    <input type='text' id='name' placeholder='Enter Name' value={newRecipe.name} className="add-name-input" onChange={(event)=>setNewRecipe(prevState => ({...prevState, name: event.target.value}))} required/>
                </div>
                <div className='add-layout-item'>
                    <label htmlFor='cuisine' className='add-cuisine'>Cuisine:</label>
                    <input type='text' id='cuisine' placeholder='Enter Cuisine' value={newRecipe.cuisineType} className="add-cuisine-input" onChange={(event)=>setNewRecipe(prevState => ({...prevState, cuisineType: event.target.value}))} required/>
                </div>
                <div className='add-layout-item'>
                    <label htmlFor='imgLink' className='add-imgLink'>Image:</label>
                    <input type='text' id='imgLink' placeholder='Enter Image' value={newRecipe.imgLink} className="add-imgLink-input" onChange={(event)=>setNewRecipe(prevState => ({...prevState, imgLink: event.target.value}))} />
                </div>
                <div className='add-layout-item'>
                    <label htmlFor='ingredients' className='add-ingredients'>Ingredients:</label>
                    <textarea type='text' id='ingredients' placeholder='Enter Ingredients' value={newRecipe.ingredients} className="add-ingredients-input" onChange={(event)=>setNewRecipe(prevState => ({...prevState, ingredients: event.target.value}))} required/>
                </div>
                <div className='add-layout-item'>
                    <label htmlFor='instructions' className='add-instructions'>Instructions:</label>
                    <textarea type='text' id='instructions' placeholder='Enter Instructions' value={newRecipe.instructions} className="add-instructions-input" onChange={(event)=>setNewRecipe(prevState => ({...prevState, instructions: event.target.value}))} required/>
                </div>
                <div className='add-btn-div'><button className='add-btn' type='submit'>Add Recipe</button></div>
                
            </form>
        </div>
        <div className='add-modal' onClick={modalClickHandler}></div>
    </>
}

export default AddPage;