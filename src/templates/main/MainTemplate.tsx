import React from 'react'
import NavBar from '../../components/common/NavBar'
import {MainPage} from '../../containers/main/MainPageContainer'

function MainTemplate() {
  return (
    <div>
      <NavBar />
      <MainPage>
        <div></div>
      </MainPage>
    </div>
  )
}

export default MainTemplate
