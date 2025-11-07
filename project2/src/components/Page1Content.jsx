import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-12 pt-4 flex items-center gap-10 h-[85vh] px-18'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content