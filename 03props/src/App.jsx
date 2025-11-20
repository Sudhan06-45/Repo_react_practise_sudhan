import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Sudhan S' age={23} img ='https://mir-s3-cdn-cf.behance.net/user/276/687ecf4923497.607949a954b62.jpg'/>
      <Card user='Sushanth R' age={22} img ='https://tse4.mm.bing.net/th/id/OIP.7-RKdQy0LOBub2Trk8zw_wHaFI?w=725&h=503&rs=1&pid=ImgDetMain&o=7&rm=3'/>
      <Card user='Shreya P' age={21} img ='https://tse1.mm.bing.net/th/id/OIP.07_uIQ9zU3-oDvsIZSFtVAHaE8?w=1200&h=801&rs=1&pid=ImgDetMain&o=7&rm=3'/>
      <Card user='Hritham' age={23} img ='https://pbs.twimg.com/profile_images/1557401591334182912/SncD6hsH_400x400.jpg'/>
      <Card user='ABC' age={23} img ='https://tse4.mm.bing.net/th/id/OIP.7-RKdQy0LOBub2Trk8zw_wHaFI?w=725&h=503&rs=1&pid=ImgDetMain&o=7&rm=3'/>
      
    </div>
  )
}

export default App
