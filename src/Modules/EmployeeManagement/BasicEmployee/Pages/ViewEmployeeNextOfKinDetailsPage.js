import React from 'react'
import {Link} from 'react-router-dom'
import PageTitle from '../Components/PageTitle'
import NavigationButton from '../Components/NavigationButton'
import NavigationBar from '../Components/NavigationBar'

let nextOfKinDetails = {
  "firstName": "Wesley",
  "otherNames": "Odhiambo",
  "lastName": "Wanyande",
  "relationship": "Brother",
  "nationalIdNumber": 38550526,
  "phoneNumber": 722310184,
  "personalEmail": "wesleywanyande@gmail.com"
}

const ViewEmployeeNextOfKinDetailsPage = ({nextOfKin = nextOfKinDetails}) => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="mx-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <NavigationButton buttonText="Back to Dashboard" link="../employee"></NavigationButton>
        </div>

        {/* <!-- Breadcrumb --> */}
        <div className="mt-2 mb-4">
          <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <Link to="../employee" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Employee Details Dashboard
                </Link>
              </li>
              <li>
                <div class="flex items-center">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <p class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">View Employee Next of Kin Details</p>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        

        <PageTitle title="View Employee Next of Kin Details"></PageTitle>

        <div className="flex justify-center mt-8">
          <ul class="sm:w-[640px] text-sm shadow-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">First Name</li>
              <li class="px-8 py-2 text-left">{nextOfKin.firstName}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Other Names</li>
              <li class="px-8 py-2 text-left">{nextOfKin.otherNames}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Last Name</li>
              <li class="px-8 py-2 text-left">{nextOfKin.lastName}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Relationship</li>
              <li class="px-8 py-2 text-left">{nextOfKin.relationship}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">National ID Number</li>
              <li class="px-8 py-2 text-left">{nextOfKin.nationalIdNumber}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Phone Number</li>
              <li class="px-8 py-2 text-left">+254{nextOfKin.phoneNumber}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Personal Email</li>
              <li class="px-8 py-2 text-left">{nextOfKin.personalEmail}</li>
            </div>
          </ul>
        </div>
      </div>
    </>   
    )  
}

export default ViewEmployeeNextOfKinDetailsPage