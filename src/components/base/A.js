export default function A({ children, to = '#', className }){
   return(
    <a href={to} className={className}>
      {children}
    </a>
  );
}