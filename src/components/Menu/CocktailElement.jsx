import './menu.scss'


const CocktailElement = ({name, price, flavourProfile, specs}) => {
    return (
        <article className='cocktail-element' >
            <div className='title-price-row uppercase'>
                <h3>{name}</h3>
                <h3>{price}</h3>
            </div>
            <div>
                <p className='flavour-profile' style={{fontStyle: "italic"}}>{flavourProfile}</p>
                <p className='specs'>{specs}</p>
            </div>
        </article>
    )

}

export default CocktailElement;