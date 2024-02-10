import './App.css';
import MenuContainer from "./Components/MenuContainer";
import Pin from "./Components/Pin";
import Data from "./Components/Data";
import { useEffect } from "react";
import { Add, FavoriteRounded, Person, QuestionMark, Notifications, Chat } from "@mui/icons-material";


function App() {
  //HOOK - can get rendered every time a page or a single component is being used {} -- for functions [] -- for dependencies.
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive(event) {
      allIcon.forEach((n) => n.classList.remove('active'));
      event.currentTarget.classList.add("active");
    }
    
    allIcon.forEach(n => n.addEventListener('click', setMenuActive));

    return () => {
      allIcon.forEach(n => n.removeEventListener('click', setMenuActive));
    };
  }, []);

  return (
    <div className="App">
      {/* Menu Container  */}
      <div className="menuContainer">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pixit-c872d.appspot.com/o/camera-2868620_1280.png?alt=media&token=58d2cb4d-42a2-4cdc-9e7d-3d9cb4f07c4d"
          alt=""
          className="logo"
        />
        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} />
          </div>

          <div>
            <MenuContainer icon={<FavoriteRounded />} />
          </div>

          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
          </div>
        </div>
      </div>
      {/* Main Container  */}
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search" />
            <div className="Search">
              <img 
                  src="https://firebasestorage.googleapis.com/v0/b/pixit-c872d.appspot.com/o/icons8-forward-arrow-50.png?alt=media&token=d068ccaa-4dd8-4405-aa1a-83b3e1fb5a0f" 
                  alt="" 
                  
                  />
            </div>
        </div>
        <div className="mainContainer">
          {
            Data && Data.map((data) => (
              <Pin key={data.id} pinSize = {data.size} imgSrc = {data.imgSrc} name = {data.name} link = {data.link} />
            ))
          }
          

        </div>
      </main>
    </div>
  );
}

export default App;
