import React,{useState}   from 'react';
import Header from '../home/Header';
import EndPage from '../home/endpage';


const Tours = (props) => {
    const { done, items, deleteTour } = props
    const [fullText, setFullText] = useState(false)


    const handleShowMore = (e) => {
        e.preventDefault();
        setFullText(!fullText)
    }

    return done ? (
        <Header />
    ): (
    <form className="main">
        {
            items.length > 0 ?
            <section className='section'>
                <h3 className=''> Our Tours </h3>
                <hr className='underline' />
                {
                    items.map((item) => {
                        const shortInfo = item.info.slice(0, 200)
                        return (
                        <ul key={item.id} className='single-tour'>
                            <li ><img src={item.image} alt={item.name} /></li>
                            <li className="tour-info">
                                <h4>{item.name}</h4>
                                <ul  style={{display: 'inline-block'}}>
                                    <li className="tour-price"> ${item.price}</li>
                                </ul>
                            </li>
                            <li className="tour-info">
                                <p style={{display: 'inline-block'}}>
                                    {fullText ? item.info : shortInfo }
                                    <button className="button" onClick={(e) => handleShowMore(e)}>{fullText ? `...show less` : `...show more`}</button>
                                </p>
                            </li>
                            <button className='delete-btn' onClick = {() => deleteTour(item.id)}>NOT INTERESTED</button>
                        </ul>
                    )})
                }
            </section>
            :
            <EndPage />
        }
    </form>
    )
}
export default Tours;