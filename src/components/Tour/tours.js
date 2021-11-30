import React,{useState}   from 'react';
import Header from '../home/Header';


const Tours = (props) => {
    const { done, items, deleteTour } = props
    const [fullText, setFullText] = useState(false)
    return done ? (
        <Header />
    ): (
    <form className="single-tour">
        <section className='section'>
        <h3> Our Tour </h3>
        {items.map((item) => {
            const shortInfo = item.info.slice(0, 200)
            return (
            <ul key={item.id}>
                <li className="single-tour"><img src={item.image} alt={item.name} /></li>
                <li className=""><h3>{item.name}</h3></li>
                <li className="tour-price"> ${item.price}</li>
                <li className="tour-info">
                    <p>{fullText ? item.info : shortInfo }</p>
                    <p style={{cursor: 'pointer'}} onClick={() => setFullText(!fullText)}>{fullText ? `...show less` : `...show more`}</p>
                </li>
                <button className='delete' onClick = {() => deleteTour(item.id)}>NOT INTERESTED</button>
            </ul>
        )})}
    </section>
    </form>
    )
}
export default Tours;