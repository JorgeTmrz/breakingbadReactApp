import React from 'react'
import CharacterItem from "./CharacterItem"
import Spinner from "../ui/Spinner"

const characterGrid = ({items, isLoading}) => {
    // if is loading return something, if not, return the items
    return isLoading ? <Spinner /> : <section className="cards">
        {// inside the arrow function on teh map is important to not put brackets, put parentesis because jsx sintaxis
        items.map(item => (
        // is important to give a key to each react list element
        <CharacterItem key = {item.char_id} item = {item}></CharacterItem> 
        ))}
    </section> 
}

export default characterGrid
