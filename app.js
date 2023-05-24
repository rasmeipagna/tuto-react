const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];

  function ProductRow ({product}) {
    const name = product.stocked ?
    product.name :
    <span className="text-danger">{product.name}</span>
    return <tr>
        <td>{name}</td>
        <td>{product.price}</td>
        
    </tr>
  }
  function ProductCategoryRow ({category}) {
    return <tr>
        <th colSpan="2">{category}</th>
    </tr>
  }
  function ProductTable ({products}) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if (product.category !== lastCategory) {
            lastCategory = product.category
            rows.push(<ProductCategoryRow category={product.category}/>)
        }
        rows.push(<ProductRow product={product}/>)
    })
    
    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
  }
  class FilterableProductTable extends React.Component {
    render() {
        const {products} = this.props
        return <ProductTable products={products}/>
    }
  }
  ReactDOM.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.getElementById('app')
  )
