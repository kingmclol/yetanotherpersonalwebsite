function FormRow({ error, children, label }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          className="text-xl font-semibold tracking-wide"
          htmlFor={children.props?.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && <p className="bg italic px-4 text-red-500">{error}</p>}
    </div>
  );
}

export default FormRow;
