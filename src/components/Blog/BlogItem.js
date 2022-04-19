import React from 'react'
import Header from '../Header/Menu'

const BlogItem = () => {
  return (
    <div>
        <div className='bg-blog-pattern h-[400px] flex'>
            <Header />
            <h1 className='text-6xl font-bold uppercase text-white flex items-center max-w-6xl mr-auto ml-auto'>Blog Listing</h1>
        </div>

        <section className='max-w-5xl mr-auto ml-auto p-4 mt-10 space-y-4'>
            <div className='p-10 space-y-8'>
                <h2 className='text-4xl font-bold break-words'>Những loại bánh mì hamburger ngon nhất</h2>
                {/* text-1 */}
                <p className='text-style italic'>Bạn là một người yêu thích các loại bánh mì hamburger? Bạn muốn tìm thấy những loại hamburger mới để trải nghiệm? Hôm nay của hàng PizzaforPeople của chứng tôi sẽ giời thiệu cho bạn các loại bánh mì hamburger được ưa chuộng nhất.</p>
            </div>

            {/* img 1 blog */}
            <img src="https://jthemes.net/themes/html/testo/files/images/blog/img-08.jpg"
            alt='error' className='w-full h-full' />
            {/* Text-2 */}
            <div className='p-10 space-y-8'>
                <h2 className='text-xl font-bold break-words'>Bánh mì hamburger của mỹ</h2>
                <p className='text-style'>Những cái bánh burger vĩ đại của Mỹ đã trở nên nặng ký giống như vận động viên đô vật trong thời gian gần đây. Trong những chuỗi nhà hàng thức ăn nhanh và đắt tiền, nó gần như là cực kỳ khổng lồ.</p>
                <p className='text-style'>Ai muốn nướng một cái bánh burger to hoàn hảo ngon lành với nước sốt hợp với chế độ ăn kiêng cũng không cần quá lo lắng. Một vài mẹo nhỏ trong quá trình chế biến sẽ rất có lợi cho sức khỏe. Nếu thích đơn giản, hãy gọi món burger phô mai; cần bánh nhiều hương vị thì burger poblano rất thích hợp. Nếu bạn thích cá, burger cá hồi gồm alpha và omega 3. Tất cả hương vị trên đều phù hợp với mọi khẩu vị.</p>
            </div>
            
            {/* text-3 */}
            <div className='p-10 space-y-8'>
                <h5 className='text-xl font-bold'>
                Burger thịt cừu với gia vị Ấn độ
                </h5>
                <section className='flex items-center space-x-4'>
                    <div>
                        <img src="https://jthemes.net/themes/html/testo/files/images/blog/img-01.jpg" alt='error' className='w-full h-full' />
                        <p>Maecenas gravida porttitor nunc, quis vehicula magna</p>
                    </div>
                    <div>
                        <img src="https://jthemes.net/themes/html/testo/files/images/blog/img-05.jpg" alt='error' className='w-full h-full' />
                        <p>Gravida porttitor nunc, quis vehicula tempor</p>
                    </div>
                </section>
                <p className='text-style'>Phần nhân bánh được chế biến từ thịt cừu chăn nuôi ngoài đồng, loại thịt nạc vai chứa 2/3 lượng mỡ ít hơn thịt cừu nuôi siêu thịt. Để thịt ngon hơn thì nên xay nó nhỏ hơn trước khi chế biến. Thịt sau khi xay được tẩm ướp vadouvan, loại gia vị hỗn hợp của Ấn Độ được sử dụng nhiều trong việc tẩm ướp thịt nướng. Gia vị này kết hợp từ bột cà ri, thêm tỏi, hành khô.</p>
            </div>

            <div className='p-10 space-y-8'>
                <h5 className='text-xl font-bold'>Burger gà tây với tương ớt vị cranberry</h5>
                <p className='text-style'>Bạn hãy thưởng thức hương vị của Lễ Tạ ơn suốt cả năm bằng món burger gà tây. Thịt làm nhân nên chọn mua thịt ức gà tây thả vườn, đây là phần thịt trắng có rất ít mỡ và calori. Ăn kèm có rau quả khô và nho đỏ. </p>
                <div className='w-full h-[300px] bg-red-600' />
            </div>

            <div className='p-10 space-y-8'>
                <h5 className='text-xl font-bold'>Burger theo kiểu Đức với Feta Aioli</h5>
                <p className='text-style'>Loại burger này được nhồi với ớt chuông và rau diếp nướng mang hương vị Đức. Đồ ăn Đức nổi tiếng về những thành phần có lợi cho sức khỏe như rau, dầu oliu. Do đó những burger này là sự lựa chọn thay thế lành mạnh hơn so với các burger truyền thống.</p>
                <div className='w-full h-[300px] bg-red-600' />
            </div>

            <div className='p-10 space-y-8'>
                <h5 className='text-xl font-bold'>Burger gà tây với cà tím nướng</h5>
                <p className='text-style'>Làm sao bạn có thể mua một burger được làm từ con gà tây mềm ít mỡ mà có thịt như thịt bò? Hãy thêm vào thành phần vị umami (vị ngon) của một vài loại thịt trong quá trình chế biến. Đây là công thức nấu ăn: Thịt bò và các thịt đỏ khác có chứa một hỗn hợp được gọi là glutamate. Nước tương và marmite, một loại men cực mạnh bán nhiều trong siêu thị (người Australia rất thích loại Vegemite), có chất này, thêm một ít vào gà tây sẽ làm cho burger có vị umami của thịt.
                Nước sốt làm từ cà tím. Chỉ cần nướng cà tím với dầu oliu, sau đó làm nhuyễn và trộn với thịt.
                </p>
                <div className='w-full h-[300px] bg-red-600' />
            </div>
            <div className='p-10 space-y-8'>
                <p className='text-style'>Trên đây là một trong những loại bánh mì hamburger hảo hạn mà chúng tôi đã giới thiệu đến bạn.</p>
                <p className='text-style'>Tại cửa hàng PizzafoPeople của chứng tôi có bán tất cả các loại burger trên và chúng tôi đang có chương trình giảm giá cho những khách hàng đầu tiên.</p>
                <p className='text-style'>Chúc bạn vào ngày tốt lành. Để xem thông tin chi tiết vui lòng liên hệ 0123456789</p>
                <div className='w-full h-[300px] bg-red-600' />
            </div>

            {/* Wirite more */}

        </section>

          {/* Conntact */}
          <aside className='max-w-6xl mr-auto ml-auto mt-28 
        text-center border bg-gray-100 space-y-4 p-10'>
            <h2 className='text-2xl font-bold'>SUBSCRIBE TO NEWSLETTER</h2>
            <p className='text-gray-500'>Subscribe to the weekly newsletter for all the latest updates</p>
            <form className='flex justify-center space-x-2'>
                <input type='text' placeholder='Your email address' required
                className='w-56 h-14 p-2 border-gray-500 border' />
                <button type='submit' className='p-4 border bg-red-600 text-white
                 hover:bg-white hover:text-red-600 border-red-600
                transition-all duration-300 ease-in-out font-bold'>SIGN UP</button>
            </form>
        </aside>
    </div>
  )
}

export default BlogItem