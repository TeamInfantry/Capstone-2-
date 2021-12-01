import React,{useState}   from 'react';
import Header from '../home/Header';
import Footer from '../home/footer';


const Tours = (props) => {
    const { done, items, deleteTour } = props
    const [fullText, setFullText] = useState(false)
    return done ? (
        <Header />
    ): (
    <form className="">
        <section className='section'>
        <h3 className=''> Our Tours </h3>
        <hr
        className='underline'
    />
        {items.map((item) => {
            const shortInfo = item.info.slice(0, 200)
            return (
            <ul key={item.id} className='single-tour'>
                <li><img src={item.image} alt={item.name} /></li>
                <li className=""><h3>{item.name}</h3></li>
                <li className="tour-price"> ${item.price}</li>
                <li className="tour-info">
                    <p>{fullText ? item.info : shortInfo }</p>
                    <p style={{cursor: 'pointer', color: '#72A0C1'}} onClick={() => setFullText(!fullText)}>{fullText ? `...show less` : `...show more`}</p>
                </li>
                <button className='delete-btn' onClick = {() => deleteTour(item.id)}>NOT INTERESTED</button>
            </ul>
        )})}
        <Footer />
    </section>
    
    </form>
    )
}
export default Tours;