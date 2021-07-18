import "./form.css";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/constants";

export const Form = ({ showForm, onClick, onChange }) => {
//   const dispatch = useDispatch();
//   const [text, setText] = useState("");

//   const clickButton = () => {
//     if (showForm) {
//       dispatch({ type: ACTIONS.GET_INPUT_VALUE, text });
//     } else {
//       dispatch({ type: ACTIONS.GET_INPUT_VALUE_OMDB, text });
//     }
//   };

//   const onChangeForm = (event) => {
//     setText(event.target.value);
//   };

  return (
    <Container className="animate__animated animate__backInDown animate__faster">
      <Input onChange={onChange} />
      <Button onClick={onClick}>Search</Button>
    </Container>
  );
};

const Container = styled.div`
  margin: 35px auto;
  width: 500px;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  width: 350px;
  height: 40px;
  background: #00000080;
  outline: none;
  border: 1px solid #ccc;
  color: #ccccccad;
  padding: 7px;
  font-size: 27px;
  border-radius: 3px;
  font-weight: lighter;
  letter-spacing: 1px;
  text-decoration-style: none;
`;
const Button = styled.button`
  background: #00000080;
  height: 40px;
  width: 80px;
  color: #ccccccad;
  border-radius: 3px;
  letter-spacing: 1px;
  margin-left: 2px;
  cursor: pointer;
`;
