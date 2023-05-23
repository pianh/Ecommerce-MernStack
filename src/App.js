import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
function App() {
  const dispatch = useDispatch()
  const Button = styled.button({
    background: 'red'
  });
  return (
    <>
      <h1>Hello</h1>
      <Button type="primary">Primary Button</Button>
    </>
    
  );
}

export default App;
