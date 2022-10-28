
function Menu() {
    return (
      <div className="Menu">
        <ul>
            {[
                ['Home','/'],
                ['Counter','/counter'],
                ['Game','Game']
            ].map(([title, url]) => (
                <li>
                    <a href={url}>{title}</a>
                </li>
            ))}
        </ul>
      </div>
    );
}
export default Menu;