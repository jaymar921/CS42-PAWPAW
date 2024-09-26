import React from 'react'
import { ApplicationConstants } from '../../contants/ApplicationConstants'
import Button from '../buttons/Button'
import { RedirectTo } from '../utilities/PageUtils'
import { GetProfileInformation } from '../utilities/services/AuthenticationHandler'

function Header() {
  return (
    <div className='p-4 h-[80px] items-center'>
        <div className="grid grid-cols-4">
            <div className='col-span-2 items-center text-center' onClick={()=> RedirectTo("/")}>
                <img src={ApplicationConstants.StraySafeLogo2} />
            </div>
            <div className='flex col-span-2 justify-center'>
            <div className='text-center w-auto font-bold'>
                <Button default>Adopt a Pet</Button>
            </div>
            <div className='text-center w-auto font-bold'>
                <Button default>Lost Pets</Button>
            </div>
            <div className='text-center w-auto font-bold'>
                <Button default>Found Pets</Button>
            </div>
            <div className='text-center w-auto mx-4'>
                <Button>Donate</Button>
            </div>
            <div className='text-center w-auto'>
                <Button icon="fa-solid fa-magnifying-glass" default></Button>
            </div>
            <div className='text-center w-auto'>
                <Button icon="fa-solid fa-user" onClick={GetProfileInformation} default></Button>
            </div>
            </div>
        </div>
      </div>
  )
}

export default Header