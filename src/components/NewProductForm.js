import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { useFormik } from "formik";
import * as Yup from 'yup';
import '../App.css';
import axios from "axios";
import { useState } from "react";

function NewProductForm(props) {
  let category = "مو";
  const categories = [
    { label: "مو", value: "مو" },
    { label: "پوست", value: "پوست" },
    { label: "صورت", value: "صورت" },
    { label: "بدن", value: "بدن" },
  ];



  const [picFile, setpicFile] = useState(null);

  const  pictureUploadHandler = async ({ files }) => {

    
    const file = files[0];
    setpicFile(file);


  };

 

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: "",
      pic: "",
      description: ""
    },
    onSubmit: (values) => {

     
    //uploading pic
    let formData = new FormData();
    formData.append("file", picFile);

    const c = {
      headers: {
          "Contetnt-Type":"multipart/form-data" 
      }
    }
    axios.post('http://localhost:3003/products/uploadPic', formData,c).then(res => {
      //Now do what you want with the response;

      
      let fileName = res.data.fileName;

      const data = JSON.stringify({name:values.name,category:values.category,price:values.price,pic: fileName, description: values.description});
     
          //creating product in database
          const config = {     
            headers: { 'Content-Type': 'application/json' }
        }
       
        axios.post("http://localhost:3003/products", data, config)
            .then(response => {
               console.log(response);
            })
            .catch(error => {
               console.log(error);
            });

    })





      



    alert(JSON.stringify('محصول با موفقیت ثبت شد', null, 2));
    //  alert(JSON.stringify(values, null, 2));


    },
    validationSchema: Yup.object({
        name: Yup.string()
                .label('name')
                .required("لطفاً یک نام برای محصول خود انتخاب کنید"),
        category: Yup.string()
                .required("لطفاً دسته بندی محصول خود را مشخص کنید"),
        price: Yup.string()
                .required("لطفا یک قیمت برای محصول خود انتخاب کنید"),
        pic: Yup.string()
                 ,
        description: Yup.string()
                    .label('description')
                    

      })
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <table className="add_product_form">
        <tr>
          <td colSpan={2} className="one_column">
            <ul className="add_product_field">
              <li className="label">
                <label htmlFor="name">نام محصول</label>
              </li>
              <li>
                <InputText
                  id="name"
                  name="name"
                  className={` ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                <span className='text-red-400'>{formik.errors.name}</span>
              </li>
              
            </ul>
          </td>
        </tr>

        <tr>
          <td className="two_colomn">
            <ul className="add_product_field">
              <li className="label">
                <label htmlFor="category">دسته بندی</label>
              </li>
              <li>
                <Dropdown
                  id="category"
                  name="category"
                  className={` ${formik.touched.category && formik.errors.category ? 'border-red-400' : 'border-gray-300'}`}
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  onBlur={formik.handleBlur}
                  options={categories}
                  placeholder="انتخاب کنید"
                />
                <span className='text-red-400'>{formik.errors.category}</span>
              </li>
            </ul>
          </td>

          <td className="two_colomn">
            <ul className="add_product_field">
              <li className="label">
                <label htmlFor="product_price">قیمت (تومان)</label>
              </li>
              <li>
                <InputText
                  id="price"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  className={` ${formik.touched.price && formik.errors.price ? 'border-red-400' : 'border-gray-300'}`}
                  onBlur={formik.handleBlur}
                />
                <span className='text-red-400'>{formik.errors.price}</span>
              </li>
            </ul>
          </td>
        </tr>

        <tr>
          <td colSpan={2} className="one_column">
            <ul className="add_product_field">
              <li>
                <FileUpload
                  id="product_pic"
                  name="pic"
                  onChange={formik.handleChange}
                  value={formik.values.pic}
                  className={` ${formik.touched.pic && formik.errors.pic ? 'border-red-400' : 'border-gray-300'}`}
                  onBlur={formik.handleBlur}
                  options={categories}
                  accept="image/jpeg"
                  customUpload={true}
                  uploadHandler={pictureUploadHandler}
                  mode="advanced"
                  chooseLabel="تصویر محصول"
                  auto="true"
                  
                />{"فرمت تصویر باید jpg باشد"}
                <span className='text-red-400'>{formik.errors.pic}</span>
              </li>
            </ul>
          </td>
        </tr>

        <tr>
          <td colSpan={2} className="one_column">
            <ul className="add_product_field">
              <li className="label">
                <label htmlFor="description">توضیحات </label>
              </li>
              <li>
                <InputTextarea
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  className={` ${formik.touched.description && formik.errors.description ? 'border-red-400' : 'border-gray-300'}`}
                  onBlur={formik.handleBlur}
                />
                <span className='text-red-400'>{formik.errors.description}</span>
              </li>
            </ul>
          </td>
        </tr>

        <tr>
          <td className="one_column">
            <Button type="submit" label="ثبت کن" />
          </td>
        </tr>
      </table>
    </form>
  );
}

export default NewProductForm;
