import React from 'react'

const FooterForm = () => {
  return (
    <div className='text-black'>
      <h4 className="text-white font-bold text-xl mb-2 text-center md:text-right">تواصل معنا</h4>
      <div className='flex flex-row-reverse items-center gap-2 mb-2'>
        <input className='text-right basis-1/2 p-2' type="text" placeholder='الاسم' />
        <input className='text-right basis-1/2 p-2' type="text" placeholder='رقم المحمول' />
      </div>
      <input className='block w-full text-right p-2 mb-2' type="text" placeholder='البريد الالكتروني' />
      <input className='block w-full text-right p-2 mb-2' type="text" placeholder='عنوان الرسالة' />
      <textarea className='block w-full text-right p-2 mb-2 resize-none' cols="30" rows="8" placeholder='استفسارك'></textarea>
      <button className='bg-[#8DC540] px-3 py-1 text-center text-white'>ارسال</button>
    </div>
  )
}

export default FooterForm