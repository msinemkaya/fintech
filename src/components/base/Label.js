export default function Label({ children, className, ...rest }){
  return(
    <label className={className} {...rest}>
      {children}
    </label>
  );
}