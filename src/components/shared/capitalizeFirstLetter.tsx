const CapitalizeFirstLetter = ({ children }: { children: string }) => {
  return children.charAt(0).toUpperCase() + children.slice(1);
};

export default CapitalizeFirstLetter;
