import React from 'react'

function Team() {
  return (
    <div className=" w-full h-full flex justify-center space-x-20 mt-10">
      <div className=" bg-blue-400 w-60 h-96 rounded-2xl shadow-2xl hover:bg-blue-200">
        <h2 className=" text-center mt-4 font-semibold text-lg">Mr. Hakimi Keerai</h2>
        <h3 className=" text-center">ID : 6310110605</h3>
        <div className=" flex justify-center">

          <img
            src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/285941731_2550155771786709_5163971967868804731_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rhaQgxU_f58AX-S3JgA&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfAyo4nj5xmz67Mnb6ogUePDN6bWxpANaDJ6sXCD143tfQ&oe=641AECEB"
            alt="keemee"
            className=" rounded-3xl w-1/2 mt-8"
          ></img>
        </div>
        <h1 className=' text-center bg-white p-3 mt-6 font-semibold'>
            Front-End Developer  and Project Maneger 
        </h1>
      </div>
        {/* Bir */}
      <div className=" bg-blue-400 w-60 h-96 rounded-2xl shadow-2xl hover:bg-blue-200">
        <h2 className=" text-center mt-4 font-semibold text-lg">Mr. Pachara Yuanlae</h2>
        <h3 className=" text-center">ID : 6310110297</h3>
        <div className=" flex justify-center">

          <img
            src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/280642219_3297607093806723_976247352958691542_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pjY0KcQ8oIIAX8ERZAj&_nc_ht=scontent.fbkk10-1.fna&oh=00_AfDbRavh0t0EfCZ7DZdXWBNAd3UB6ZtCPh38ZGHUtfGXvQ&oe=641BBE3C"
            alt="keemee"
            className=" rounded-3xl w-1/2 mt-8"
          ></img>
        </div>
        <h1 className=' text-center bg-white p-3 mt-6 font-semibold'>
        Backend ในการเชื่อม Restfull API กับ Frontent
        </h1>
      </div>

      {/* adilan */}
      <div className=" bg-blue-400 w-60 h-96 rounded-2xl shadow-2xl hover:bg-blue-200">
        <h2 className=" text-center mt-4 font-semibold text-lg">Mr. Adilan Waelohma</h2>
        <h3 className=" text-center">ID : 6310110547</h3>
        <div className=" flex justify-center">

          <img
            src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/309939118_3365863557015954_3134321752357450911_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGJJ1U0uUud71WkcBUKG71W4gD_qIULO1TiAP-ohQs7VMSJcdc-Cq1PLndnMIAclU-rzukID_QXp3M_aCkE6xpj&_nc_ohc=R3stC1TMChkAX_o8Q9I&_nc_ht=scontent.fbkk14-1.fna&oh=00_AfDlARxaFf7t6ykFHvFsVu-dBGpdKXzwJPFZOHJer30iIQ&oe=641A143D"
            alt="keemee"
            className=" rounded-3xl w-1/2 mt-8"
          ></img>
        </div>
        <h1 className=' text-center bg-white p-3 mt-6 font-semibold'>
        Backend ในการเชื่อม Database
        </h1>
      </div>

    </div>
  );
}

export default Team