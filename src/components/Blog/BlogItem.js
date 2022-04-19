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
                <h1 className='text-4xl font-bold break-words'>ALIQUAM AUGUE PURUS, LUCTUS NEQUE ETIAM AN IPSUM AND NEQUE</h1>
                {/* text-1 */}
                <p className='text-style'>Mauris donec ociis et magnis sapien etiam sapien sem 
                    sagittis congue tempor a gravida donec ipsum aporta justo integer 
                    at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna 
                    luctus tempor. Quisque vel laoreet turpis. An augue viverra a augue eget,
                    dictum tempor diam. Sed pulvinar donec ociis et magnis sapien imperdiet 
                    dui varius placerat imperdiet dui varius viverra augue egestas luctus 
                    donec purus and blandit</p>
            </div>

            {/* img 1 blog */}
            <img src="https://jthemes.net/themes/html/testo/files/images/blog/img-08.jpg"
            alt='error' className='w-full h-full' />
            {/* Text-2 */}
            <div className='p-10 space-y-8'>
                <p className='text-style'>Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sagittis congue tempor a gravida donec enim ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna at luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem fusce eu cursus fusce</p>
                <p className='text-style'>Donec dolor suscipit magna vehicula impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida porttitor nunc, quis vehicula magna. Placerat varius consectetur nibh, vel imperdiet dui varius viverra donec ociis et magnis</p>
                <p className='text-style'>Cubilia laoreet augue egestas cursus magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien rutrum tempor mullam blandit tempor sapien and gravida Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque laoreet turpis urna augue, viverra a augue eget, dictum tempor diam.</p>
            </div>
            
            {/* text-3 */}
            <div className='p-10 space-y-8'>
                <h5 className='text-xl font-bold'>
                PRAESENT ALIQUET TEMPUS
                    <br />
                (TEMPOR GRAVIDA IPSUM AS AN EXAMPLE)
                </h5>
                <p className='text-black'>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero. Mauris donec ociis a neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae molestie nunc sapien justo, aliquet non molestie augue, venenatis nec purus. Aliquam eget lacinia elit. Augue tincidunt tincidunt massa</p>
                <p className='list-item text-style ml-6'>Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius</p>
                <p className='list-item text-style ml-6'>Fringilla risus nec, luctus mauris orci auctor euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo</p>
                <p className='list-item text-style ml-6'>Quaerat sodales sapien undo euismod purus blandit velna vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec</p>
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
                <p>Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus et netus and malesuada famesa augue suscipit, luctus at neque purus neque dolor primis. Nemo sodales ipsam egestas volute turpis a dolores aliquam quaerat sodales sapien congue augue eget gravida laoreet turpis urna augue, viverra a augue eget, dictum dictum tempor diam. Sed pulvinar consectetur and placerat imperdiet</p>
                <p className='list-item text-style ml-6'>Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Praesent aliquet tempus, blandit posuere ligula varius</p>
                <p className='list-item text-style ml-6'>Fringilla risus nec, luctus mauris orci auctor euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo</p>
            </div>

            <div className='p-10 space-y-8'>
                <h5 className='text-xl font-bold'>EGESTAS VOLUTPAT EGESTAS</h5>
                <p className='text-style'>In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus. Aliqum mullam blandit tempor sapien gravida donec</p>
                <p className='text-style'>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Sapien justo massa lorem. Fusce eu cursus non nulla vitae massa placerat purus. Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec</p>
                <div className='w-full h-[300px] bg-red-600' />
            </div>

            {/* Wirite more */}

        </section>

          {/* Conntact */}
          <aside className='max-w-6xl mr-auto ml-auto mt-28 
        text-center border bg-gray-100 space-y-4 p-10'>
            <h1 className='text-2xl font-bold'>SUBSCRIBE TO NEWSLETTER</h1>
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