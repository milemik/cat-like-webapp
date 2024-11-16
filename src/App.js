import { useState } from 'react';
import './App.css';
import Items from './components/Items';
import LikedItems from './components/LikedItems';



const ITEM_LIST = [
  {
      itemName: "Cool cat",
      id: "1",
      imageUrl: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      imageDescription: "Cat with glasses"
  },
  {
      itemName: "Cool cat",
      id: "2",
      imageUrl: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      imageDescription: "Cat with glasses"
  },
  {
      itemName: "Cool cat",
      id: "3",
      imageUrl: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
      imageDescription: "Cat with glasses"
  },
  {
      itemName: "AI Cat",
      id: "4",
      imageUrl: "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
      imageDescription: "Cat generated with AI"
  },
]

function App() {
  const [itemsList, setItemList] = useState(ITEM_LIST);
  const [likedItemIds, setLikedItemIds] = useState([])

  function handleLikeAddItem(itemId) {
    
      itemsList.forEach(e => {
        if (e.id === itemId) {
          const newLikeItems = [...likedItemIds]
          newLikeItems.push(itemId)
          console.log(newLikeItems);
          setLikedItemIds(newLikeItems)
        }
      })
  }


  function handleUnLikeItem(itemId) {
    const newLikedItems = likedItemIds.filter(id => id !== itemId)
    setLikedItemIds(newLikedItems);
  }

  return (
    <div className="App">
      <header className="flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-3xl m-4 hover:bg-sky-700 rounded-md p-2 font-bold text-lime-400"><a href="#head">CATS</a></h1>
        <h1 className="text-3xl m-4 hover:bg-sky-700 rounded-md p-2"><a href="#items">Items</a></h1>
        <h1 className="text-3xl m-4 hover:bg-sky-700 rounded-md p-2"><a href="#addItem">Add Item</a></h1>
      </header>
      <main className='justify-center grid gap-6 m-10'>
        <h1 className='text-3xl text-center'>Liked Items</h1>
        <LikedItems likedItems={itemsList.filter(item => likedItemIds.includes(item.id))} unlikeItem={handleUnLikeItem}/>
        <Items itemsList={itemsList} setItemList={setItemList} likeItem={handleLikeAddItem}/>
      </main>
    </div>
  );
}

export default App;
