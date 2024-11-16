export default function Item({itemName, id, imageUrl, imageDescription, addItemLiked}) {
    return (
        <li key={id} className="grid p-4" onClick={() => {addItemLiked(id)}}>
            <p className="text-small">{itemName}</p>
            <img className="h-56 rounded-md" src={imageUrl} alt={imageDescription}/>
        </li>
    )
}
