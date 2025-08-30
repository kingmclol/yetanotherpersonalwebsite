function Input({
  className = "bg-slate-600 rounded-full w-full px-4 py-2",
  ...props
}) {
  return <input className={className} {...props} />;
}

export default Input;
