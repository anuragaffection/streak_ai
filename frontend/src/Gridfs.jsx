import React, { useState } from 'react'

function Gridfs() {
    // not an array
    // const [grid, setGrid] = useState(20);
    // const [row, setRow] = useState(20);
    const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

    // const [spx, setSpx] = useState(null);
    // const [spy, setSpy] = useState(null);

    // const [endPointX, setEndPointX] = useState(null);
    // const [endPointY, setEndPointY] = useState(null);

    const [selectedTile, setSelectedTile] = useState([]);

    const updateTileIndex = (parentItem, item) => {
        if (selectedTile.length >= 2) {
            return
        }
        setSelectedTile([...selectedTile, [parentItem, item]])
    }

    const isTileSelected = (parentItem, item) => {
        for (let i = 0; i < selectedTile.length; i++) {
            if (selectedTile[i][0] === parentItem && selectedTile[i][1] === item) {
                return true;
            }
        }
        return false;
    }

    console.log("seltected tile", selectedTile);

    return (
        <div className='flex flex-col'>
            {
                number.map((parentItem, parentIdx) => {
                    return (
                        <div
                            key={parentItem + parentIdx}
                            className='flex'> {
                                number.map((item, index) => (
                                    <div
                                        key={item + index}
                                        onClick={(e) => updateTileIndex(parentItem, item)}
                                        className={`h-16 w-20 bg-blue-500 text-white my-4 mx-4 items-center flex justify-center ${isTileSelected(parentItem, item) ? "bg-red-500" : ""}`}>
                                        {parentItem * item}
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
            <button
                className='h-16 w-24 px-4 py-6'
                type='button'
                onClick={() => setSelectedTile([])}
            >
                Reset
            </button>
            {/* {
                number.map((item, index) => (
                    <div className='h-12 w-12 bg-blue-500 text-white'> {item} </div>
                ))
            } */}
        </div>
    )
}

export default Gridfs