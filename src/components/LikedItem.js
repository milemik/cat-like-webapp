export default function LikedItem({item, unlike}) {
    return <img src={item.imageUrl} alt={item.imageDescription} className="h-32" onClick={() => unlike(item.id)}/>
}