import React, {useState, useEffect} from 'react'
import NavigationBar from '../Components/NavigationBar'
import ViewEmployeeDependentDetailsSubPage from '../SubPages/ViewEmployeeDependentDetailsSubPage'
import NavigationButton from '../Components/NavigationButton'
import PageTitle from '../Components/PageTitle'
import { Link } from 'react-router-dom'

const ViewEmployeeDependentDetailsPage = ({dependents}) => {

  const [pageDetails, setPageDetails] = useState({
    pageCount: "",
    hasMultiplePages: false,
    currentPageNumber: 1,
    isFirstPage: true,
    isLastPage: false
  })

  useEffect(() => {
    if (dependents.length > 1) {
      setPageDetails({...pageDetails, pageCount: dependents.length + 1, hasMultiplePages: true})
    }
  }, [dependents.length])

  const handleNextPageClick = () => { 
    if (pageDetails.currentPageNumber === dependents.length - 1) {
      setPageDetails({...pageDetails, isLastPage: true, currentPageNumber: pageDetails.currentPageNumber + 1})
    }
    else setPageDetails({...pageDetails, isFirstPage: false, currentPageNumber: pageDetails.currentPageNumber + 1})
  }

  const handlePreviousPageClick = () => {
    if (pageDetails.currentPageNumber === 2) {
      setPageDetails({...pageDetails, isFirstPage: true, currentPageNumber: pageDetails.currentPageNumber - 1})
    }
    else setPageDetails({...pageDetails, isLastPage: false, currentPageNumber: pageDetails.currentPageNumber - 1})
  }

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="mx-4 p-4 pb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="">
      <NavigationButton buttonText="Back to Dashboard" link="../employee/basic"></NavigationButton>
    </div>

    {/* <!-- Breadcrumb --> */}
    <div className="mt-2 mb-4">
      <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <Link to="../employee/basic" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              Employee Details Dashboard
            </Link>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">View Employee Dependent Details</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>

    <PageTitle title="View Employee Dependent Details"></PageTitle>
      <ViewEmployeeDependentDetailsSubPage hasMultiplePages={pageDetails.hasMultiplePages} dependentDetails={dependents[pageDetails.currentPageNumber - 1]} isFirstPage={pageDetails.isFirstPage} isLastPage={pageDetails.isLastPage} handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeDependentDetailsSubPage>
      </div>
    </>
  )
}

export default ViewEmployeeDependentDetailsPage