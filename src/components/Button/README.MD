## Button

[props]

- color : background-color 버튼의 배경색을 전달받습니다.

- size : large, medium, small로 선택할 수 있습니다.

- outline을 props로 전달하면, 입력한 color값이 border와 font-color가 됩니다.
  (ex<button outline />)

- fullWidth를 props로 전달하면, 버튼의 크기가 width=100%이 됩니다.
  (ex<button fullWidth />)

- children (optional)
  this.props.children 사용이 가능합니다.
  모달 컴포넌트의 자식 요소를 부모 컴포넌트에서 전달해줄 수 있습니다.

- 테두리가 없는 하얀색 버튼이 필요하시면 `border: 1px solid white;`를 따로 지정해주세요.
