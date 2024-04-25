import { useState } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { menu } from './SidebarConfig';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import CreatePostModal from '../Post/CreatePostModal';
import SearchComponets from '../SearchComponent/SearchComponents';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('');
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearchVisible, setIsSearchvisible] = useState(false);

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === 'Profile') {
      navigate('/username');
    } else if (title === 'Home') {
      navigate('/home');
    } else if (title === 'Create') {
      onOpen();
    }
    if (title === 'Search') {
      setIsSearchvisible(true);
    } else {
      setIsSearchvisible(false);
    }
  };

  return (
    <div className="pl-8 sticky top-0 h-[100vh] flex">
      <div
        className={`flex flex-col justify-between h-full ${activeTab === 'Search' ? 'px-2' : 'px-10'}`}
      >
        {
          // Logo
          <div>
            {activeTab !== 'Search' && (
              <div className="pt-10">
                <img
                  className="w-28"
                  src="https://www.shopelitepromo.com/content/v/vspfiles/assets/images/flexfit-logo.png"
                  alt=""
                />
              </div>
            )}

            {/* Icons & titles of tabs */}
            <div className="mt-10 flex flex-col">
              {menu.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleTabClick(item.title)}
                  className="flex flex-row items-center mb-5 cursor-pointer text-lg"
                >
                  {activeTab === item.title ? item.activeIcon : item.icon}
                  {activeTab !== 'Search' && (
                    <p
                      className={`${activeTab === item.title ? 'font-semibold' : 'font-semibold'}`}
                    >
                      {item.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        }

        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          {activeTab !== 'Search' && <p className="ml-5">More</p>}
        </div>
      </div>
      <CreatePostModal onClose={onClose} isOpen={isOpen} />
      {isSearchVisible && <SearchComponets />}
    </div>
  );
};

export default Sidebar;
