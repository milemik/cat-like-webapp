import { useState } from "react";
import Item from "./Item";


const addItemFormInit = {itemName: "", id: "", imageUrl: "", imageDescription: ""};

export default function Items({itemsList, setItemList, likeItem}) {
    const [addItemFormData, setAddItemFormData] = useState(addItemFormInit);

    function addItem(itemData) {
        let newList = structuredClone(itemsList);
        newList.push({
            itemName: itemData.itemName,
            id: itemData.id,
            imageUrl: itemData.imageUrl,
            imageDescription: itemData.imageDescription
        })
        setItemList(newList);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(addItemFormData)
        setAddItemFormData(addItemFormInit)
        
    }

    const handleChage = (e) => {
        const {name, value} = e.target;
        setAddItemFormData({...addItemFormData, [name]: value});
    }

    return (
        <>
            <div>
                <h2 className="text-2xl">Items</h2>
            </div>
            <ol className="m-4 p-4 md:flex md:flex-wrap grid justify-items-stretch">
                {itemsList.map((e) => (
                    <Item itemName={e.itemName} id={e.id} imageUrl={e.imageUrl} imageDescription={e.imageDescription} addItemLiked={likeItem}/>
                        )
                    )
                }
            </ol>
            <div>
                <h2 className="text-3xl">Add item</h2>
                <form className="grid" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add item name" name="itemName" value={addItemFormData.itemName} onChange={handleChage}/>
                    <input type="text" placeholder="ITEM ID" name="id" value={addItemFormData.id} onChange={handleChage}/>
                    <input type="text" placeholder="ITEM URL" name="imageUrl" value={addItemFormData.imageUrl} onChange={handleChage}/>
                    <input type="text" placeholder="ITEMM DESCRIPTION" name="imageDescription" value={addItemFormData.imageDescription} onChange={handleChage}/>
                    <input className="hover:cursor-pointer" type="submit" value="ADD ITEM"/>
                </form>
            </div>
        
        </>
    )
}