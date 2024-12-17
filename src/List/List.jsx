
import styles from "./List.module.css"
import PropTypes from "prop-types"
function List (props) {
        const itemList = props.items;
        const categories = props.category; 

        itemList.sort((a,b) => {
           return a.calories - b.calories
        })
        // if you want a higher number to lower number use this 
        // itemList.sort((a,b) => {
        //     return b.calories - a.calories
        //  })

       const listItems = itemList.map((items) => (
        <li key={items.id}>
            {items.name} &nbsp; {items.calories}
        </li>
       ))
    return (
        <>
            <div className={styles.container}>

                  <h3 className={styles.categoryName}>{categories}</h3>
                   <ol className={styles.listItems}>{listItems}</ol>
            </div>
            
        </>
    )

}
List.propTypes = {
    categories : PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,

}))
}
List.defaultProps = {
    category: "Category",
    items: []

}
export default List;