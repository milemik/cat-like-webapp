import LikedItem from "./LikedItem"

export default function LikedItems ({likedItems, unlikeItem}) {
    return likedItems.length > 0 ? likedItems.map(e => {return <LikedItem item={e} unlike={unlikeItem}/>}) : <p>NO ITEMS</p> 
}