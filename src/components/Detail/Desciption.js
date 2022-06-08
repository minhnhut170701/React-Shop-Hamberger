import React from 'react'

const Desciption = ({data}) => {
  return (
    
    <div className='mt-10 p-4'>
        <p>{data.des}</p>
        <ul className='list-disc pt-8 pb-8'>
            <li>
                <span className='font-bold'>Quaerat sodales sapien undo euismod purus blandit velna</span>
                <p>{data.des2}</p>
            </li>
            <li>
                <span className='font-bold'>Quaerat sodales sapien undo euismod purus blandit velna</span>
               <p>vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec
                </p>
            </li>
        </ul>
        <p>
        Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien
        </p>
        <img src={data.img} alt="pizza" loading='lazy' className='w-full h-full' />
    </div>

  )
}

export default Desciption