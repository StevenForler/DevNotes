import PropTypes from 'prop-types';


function List(props){
    
    
    const category = props.category;
    const itemList= props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>);

    return(<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>)
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({   id: PropTypes.number,
                                                 name: PropTypes.string,
                                                 calories: PropTypes.number
    }))
 }

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List