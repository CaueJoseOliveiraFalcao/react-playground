import './Header.css';
export default function Header(props){
    const hideMenu = props.hideMenu;
    return(
        <header>
            {hideMenu ? null : (
            <ul>
                <li><a href="/">home</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">{props.children}</a></li>
            </ul>
            )}
        </header>
    )
}