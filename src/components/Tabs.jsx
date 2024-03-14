import React, { useState } from 'react'

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState('1');

    const tabs = [
        {
            id: 1, 
            tabTitle: 'Skills', 
            title: 'Title 1', 
            content: 'a'
        },
        {
            id: 2, 
            tabTitle: 'Education', 
            title: 'Title 2', 
            content: 'b'
        },
        {
            id: 3, 
            tabTitle: 'Experience', 
            title: 'Title 3', 
            content: 'c'
        }
    ]

    const handleTabChange = (e) => {
        setCurrentTab(e.target.id)
    }

  return (
    <div className='border-4 border-black'>
        <div className='flex'>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    id={tab.id}
                    disabled={currentTab === `${tab.id}`}
                    onClick={handleTabChange}
                    className='cursor-pointer p-4 mr-1 border-2 border-black disabled:bg-neutral-300 disabled:text-white'
                >
                    {tab.tabTitle}
                </button>
            ))}
        </div>
        <div className="">
            {tabs.map((tab, index) => (
                <div key={index}>
                    {currentTab === `${tab.id}` && 
                        <div>
                            <p>{tab.title}</p>
                            <p>{tab.content}</p>
                        </div>
                    }
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tabs