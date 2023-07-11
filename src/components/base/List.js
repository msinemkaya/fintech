import ListItem from './ListItem';

export default function List({ list, listClasses, itemClasses}){
  return(
    <ul className={listClasses}>
      {list.map((item, index) => (
        <ListItem item={item} key={index} className={itemClasses}/>
      ))}
    </ul>
  );
}