import React, { useState } from 'react'

const TypingCode = () => {
    const[textColor, setTextColor] = useState('pin')
  return (
    <div>
        <div className=' h-fit  flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px]'> 
        {/*HW -> BG gradient*/}

        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
        </div>
        <div
      style={{
        fontSize: '35px',
        color: textColor,
        /* when working without ref and classNames, the manipulated style needs to be
         applied to the parent element, because the TypeAnimation component is perma-memoized */
      }}
    >
      <TypeAnimation
        sequence={[
          'One',
          800,
          () => setTextColor('aqua'),
          'One Two',
          800,
          () => setTextColor('deeppink'),
          'One Two Three',
          1000,
          () => setTextColor('darkkhaki'),
          '',
        ]}
        omitDeletionAnimation={true}
      />
    </div>

     </div>
    </div>
  )
}

export default TypingCode