import { useContext } from 'react';
import './Layout.css';
import { RecipeContext } from '../../contexts/RecipeContext';
import AddPage from '../Pages/AddPage/AddPage';

const Layout = ({children}) => {

    const { showModal, setShowModal } = useContext(RecipeContext);
    return <>
    <div className='layoutHeading'>
        <h1>Recipe Organizer</h1>
        <button onClick={()=>setShowModal(true)} className='layoutHeadingbtn'>Add Recipe</button>
    </div>
    <main>
        {children}
    </main>
    { showModal && <AddPage />}
    </>
};

export default Layout;