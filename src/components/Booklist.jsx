import React, { useState, useEffect } from 'react';

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])
    console.log(bookData);
    return (
        <div>
            <ul>
                {
                    bookData === null
                        ? <p>now loadong...</p>
                        // : bookData.data.items.map((x, index) =>　<li key={index}>{x.volumeInfo.title}, {x.volumeInfo.authors}</li>)
                        : bookData.data.items.map((x, index) =>　
                            <div key={index}>
                                <li>{x.volumeInfo.title}, {x.volumeInfo.authors}</li>,
                                <img src={x.volumeInfo.imageLinks === undefined
                                    ?""
                                    :x.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                            </div>
                        )                         
                }
            </ul>
        </div>
    );
}

export default Booklist;