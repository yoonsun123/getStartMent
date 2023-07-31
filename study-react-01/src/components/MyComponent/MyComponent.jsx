const MyComponent = (props) => {

    const{name, children} = props;

  return (
    <div>
      {/* <div>안녕하세요 제 이름은 {props.name}</div>
      <div>children 값은 {props.children}</div> */}
    <div>안녕하세요 제 이름은 {name}</div>
    <div>children 값은 {children}</div>

    </div>
  );
};

export default MyComponent;
