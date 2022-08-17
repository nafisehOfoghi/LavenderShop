import { useLocation } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { TabView, TabPanel } from 'primereact/tabview';


function Cosmetic() {

    const location = useLocation()
    console.log(location.state.data)
    let pic = "http://localhost:3003/products/getImage/" + location.state.data['pic']

    const items = [1, 2, 3, 4]


    return (
        <>
            <div className="flex flex-column">
                <div className="flex flex-row flex-wrap surface-50  md:h-30rem   md:mt-8 mb-8">
                    <div className="flex md:w-30rem  md:ml-8 md:pl-8  ">
                        <img src={pic} style={{ width: "30rem" }} />

                    </div>
                    <div className="flex-column md:ml-8 md:w-30rem">
                        <div className="flex md:ml-8  md:mt-8 text-2xl font-bold  " dir="rtl">
                            {location.state.data['name']}
                        </div>
                        <div className="flex md:h-10rem   md:ml-8 md:mt-4 text-justify " dir="rtl">
                           توضیحات:بسیاری از افراد برای زیبایی و جذابیت بیشتر ترجیح می‌دهند موهایی نرم و لخت داشته باشند. 
                           اگر چه هنوز هم تعداد کسانی که از موهای وز و کمی فر خوششان می‌آید بسیار زیاد است، اما به هر حال هر خانمی پیش از رفتن به یک مراسم مهم یا مهمانی دوست دارد موهایش را لخت کند. 
                           این موضوع حتی در خصوص آقایانی که موهای بلندی دارند نیز صادق بوده و بسیاری از جوانان موهایی لخت و صاف را ترجیح می‌دهند. 
                        </div>
                        <div className="flex-column md:ml-8 surface-300 md:mt-2" dir="rtl">
                            <div className="flex pr-6 pt-5" > قیمت : 755000 تومان  </div>
                            <hr style={{ marginTop: "1rem", marginRight: "3rem" }} color="#BDBDBD" width="80%" align="center" />
                            <div className="flex pr-6 mt-2"> دسته : آرایشی </div>
                            <hr style={{ marginTop: "1rem", marginRight: "3rem" }} color="#BDBDBD" width="80%" align="center" />
                            <div className="flex pr-6 pb-3 "> دسته : مو </div>

                        </div>
                        <div className="flex md:mt-3 " dir="rtl" >
                            <Button label="اضافه به سبد خرید" />
                            <Dropdown options={items} placeholder="1" className="dropdown"> </Dropdown>
                        </div>

                    </div>
                </div>
                <div className="flex md:w-9  md:ml-8 md:pl-8 md:mr-8 md:pr-8 mb-8 mt-4 text-justify" dir="rtl">
                    <div style={{width:"100%"}}>
                        <TabView>
                            <TabPanel header="توضیحات">
                            بسیاری از افراد برای زیبایی و جذابیت بیشتر ترجیح می‌دهند موهایی نرم و لخت داشته باشند. 
                           اگر چه هنوز هم تعداد کسانی که از موهای وز و کمی فر خوششان می‌آید بسیار زیاد است، اما به هر حال هر خانمی پیش از رفتن به یک مراسم مهم یا مهمانی دوست دارد موهایش را لخت کند. 
                           این موضوع حتی در خصوص آقایانی که موهای بلندی دارند نیز صادق بوده و بسیاری از جوانان موهایی لخت و صاف را ترجیح می‌دهند. 
                        
                            </TabPanel>
                            <TabPanel header="محصولات مرتبط"></TabPanel>
                            <TabPanel header="نظرات "></TabPanel>

                        </TabView>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Cosmetic;