import './navigation.scss'
const Navigation = () => {
    return (
        <div className="nav-container">
            <ul>
                {
                    renderList(['Home', 'Services', 'News', 'Blog', 'Contact'])
                }
            </ul>
        </div>
    )
}
const renderList = (arr) => {
    return arr.map((item, index) => {
        return(
            <li key={index} className={item}>{item}</li>
        )
    })
}

export default Navigation;