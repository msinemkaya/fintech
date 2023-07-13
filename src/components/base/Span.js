export default function Span({ children, className, ...rest }){
  return(
    <span className={className} {...rest}>
      {children}
    </span>
  );
}