export const ColoredMessage = ({ children: _children, color: _color }) => {
  const contentStyle = {
    color: _color,
    fontSize: '20px',
  };
  return <p style={contentStyle}>{_children}</p>;
};
