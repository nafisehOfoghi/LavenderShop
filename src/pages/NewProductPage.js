import NewProductForm from '../components/NewProductForm';



function NewProductPage() {


    return (

        <div className='new_product'>

            <h1>اضافه کردن محصول جدید</h1>

            <p>لطفا مشخصات محصول جدید را در فرم زیر وارد کنید</p>

            <br />

           <NewProductForm/>

        </div>

    );


}

export default NewProductPage;