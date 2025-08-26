function Anchor({ href, openNewTab = true, children }) {
  return (
    <a
      className="inline-flex items-center gap-1 hover:cursor-pointer text-zinc-400 hover:text-zinc-300 hover:underline"
      href={href}
      target={openNewTab ? "_blank" : ""}
    >
      {children}
    </a>
  );
}

export default Anchor;
