import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';

function Header() {
  const { isAuthenticated, username, logout } = useAuth();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fileInput, setFileInput] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Состояние для отображения окна логина

  // Функция для открытия окна логина
  const openLogin = () => {
    setIsLoginOpen(true);
  };


  const handleUpload = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("fileInput", fileInput);

      await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem('token')
        }
      });

      setIsPopupOpen(false);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="container absolute z-50 w-full left-2 navbar mb-2 flex flex-col justify-center mx-auto px-4">
      <div className="flex flex-row flex-wrap">
        <div className="w-full flex flex-col sm:flex-col flex-wrap ">
          <div className="text-5xl 2xl:text-7xl font-['Catalogue'] font-bold logo text-success flex flex-col justify-start">
            <Link to="/">[morph)</Link>
          </div>
          <div className=''>
          <p className="text-4xl 2xl:text-5xl font-bold text-success">навигация<br /> к прибыли</p>
          {/* <p className="text-xl 2xl:text-2xl  font-bold text-success">веб решения</p>
          <div className="border-2 mt-2 py-2 px-4 rounded-full border-success w-auto inline-block text-xl 2xl:text-xl font-bold text-success">для бизнеса</div> */}

          </div>
          {/* <div className="profile_info text-success flex flex-row flex-wrap gap-4 justify-center items-center">
            <div className="font-bold border-4 border-success rounded-full py-2 px-4 flex flex-col justify-center" id="welcome-message">
              {isAuthenticated ? `Привет, ${username || "Guest"}!` : "Привет, гость!"}
            </div>
            {isAuthenticated && (
              <button className="rounded-full logout_button" onClick={logout}>
                Выйти
              </button>
            )}
            <div className='flex flex-col gap-2 justify-center'>
              {!isAuthenticated && (
                <Link to="/authorize" className="rounded-full login_button">
                  Войти
                </Link>
              )}
              {!isAuthenticated && (
                <Link to="/registration" className="rounded-full register_button">
                  Регистрация
                </Link>
              )}
            </div>
          </div> */}
        </div>
        <div className="flex flex-row flex-wrap items-center gap-2">
          {/* <div className="search flex items-center mr-4 gap-2">
            <input type="text" id="searchInput" placeholder="Искать по названию" className="p-2 rounded-md" />
            <button id="searchButton" className="border-2 text-white font-bold py-2 px-4 rounded-md">Найти</button>
          </div> */}
          {isAuthenticated && (
            <>
              <button onClick={() => setIsPopupOpen(true)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">Загрузить</button>
              <Link to="/favorites">
                <button className="bg-[#FF3366] text-white font-bold py-2 px-4 rounded-md ml-4">
                  Любимые
                </button>
              </Link>
            </>
          )}
          {isPopupOpen && isAuthenticated && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl mb-4">Upload Your File</h2>
                <form onSubmit={handleUpload} encType="multipart/form-data">
                  <input type="file" id="fileInput" name="fileInput" onChange={(e) => setFileInput(e.target.files[0])} className="mb-4" />
                  <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2">Загрузить</button>
                    <button onClick={() => setIsPopupOpen(false)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">Close</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Output.css';

// function Header() {
//   const [userData, setUserData] = useState({ isAuthenticated: false });
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [fileInput, setFileInput] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get("http://192.168.231.85:80/get-user-data");
//         console.log("Response from server:", response.data); // Выводим ответ от сервера для отладки
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleUpload = async (event) => {
//     event.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("fileInput", fileInput);

//       await axios.post("http://192.168.231.85:80/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       });

//       // Закрываем попап после успешной загрузки
//       setIsPopupOpen(false);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div className="navbar py-4 px-2 rounded-md bg-[#1137C6]">
//       <div className="mx-auto flex flex-row justify-between">
//         <div className="profile_info text-white">
//           {/* <div id="welcome-message">{userData.isAuthenticated ? `Welcome, ${userData.username || "Guest"}!` : "Привет, гость!"}</div> */}
//           <div id="welcome-message">{userData.isAuthenticated ? `Welcome, ${userData.username || "Guest"}!` : "Привет, гость!"}</div>
//           {/* <div id="user-content">{userData.content && userData.content.join("")}</div> */}
//           <a id="logout-link" href={userData.isAuthenticated ? "/logout" : "/authorize"} className={userData.isAuthenticated ? "logout_button" : ""}>{userData.isAuthenticated ? "Выйти" : "Войти"}</a>
//         </div>
//         <div className="flex items-center">
//           <div className="search flex items-center mr-4">
//             <input type="text" id="searchInput" placeholder="Искать по названию" className="px-4 py-2 rounded-l-lg" />
//             <button id="searchButton" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-lg">Найти</button>
//           </div>
//           <button onClick={() => setIsPopupOpen(true)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">Загрузить</button>
//         </div>
//       </div>
//       {/* Попап для загрузки */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg">
//             <h2 className="text-xl mb-4">Upload Your File</h2>
//             <form onSubmit={handleUpload} encType="multipart/form-data">
//               <input type="file" id="fileInput" name="fileInput" onChange={(e) => setFileInput(e.target.files[0])} className="mb-4" />
//               <div className="flex justify-end">
//                 <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-2">Загрузить</button>
//                 <button onClick={() => setIsPopupOpen(false)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">Close</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header;
