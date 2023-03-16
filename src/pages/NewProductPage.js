import NewProductForm from '../components/NewProductForm';



function NewProductPage() {


    return (

        <div className='new_product'>

            <h1>Add new product</h1>

            <p>Please fill in the form for the new product</p>

            <br />

           <NewProductForm/>

        </div>

    );


}

export default NewProductPage;
