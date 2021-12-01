import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tours from './components/Tour/tours';

const url = 'https://course-api.com/react-tours-project';

const Loading =  () => {
    const [items, setItems] = useState([]);
    const [done, setDone] = useState(undefined);
    const [loading, setLoading] = useState(true);

    const deleteTour = (id) => {
        console.log({ id })
        setItems(items.filter((item) => item.id !==id))
    }
    useEffect(() => {
        const getItems =async () => {
            const result = await axios( url )
            console.log(result.data)
            
            setItems(result.data)
            setDone(false)
            setLoading(false)
            
        }
        getItems()
    }, []);


    return (
        <div className="container">
            {
                loading ?
                <h3 className='loading'>loading...</h3>
                :
                <Tours done ={done} items = {items} deleteTour={deleteTour} />
            }
            
     </div> 
    );
}

export default Loading;