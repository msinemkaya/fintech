export default function ListItem({ item, className }){
  return(
    <li className={className}>
      {item}
    </li>
  );
}