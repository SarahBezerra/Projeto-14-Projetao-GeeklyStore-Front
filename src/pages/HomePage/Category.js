export default function Header({ category }) {
    
    return(
        <ul>
            <div><ion-icon name={category.icon}></ion-icon></div>
            <p>{category.name}</p>
        </ul>            
    )
}