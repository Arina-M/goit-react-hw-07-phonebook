import styled from 'styled-components';

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    background-color: #fff;
    padding: 20px;
    border: 1px solid #879cb7;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
        0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const TitleInput = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
`;

export const InputField = styled.input`
    padding: 5px;
    font-size: 24px;
    color: grey;
    text-align: center;
    font-weight: 500;
    border-color: transparent;
    border-radius: 5px;
    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
        0px 1px 10px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    outline: none;
`;

export const ButtonAdd = styled.button`
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    border-radius: 10px;
  border: none;
  box-shadow: 10px 10px 10px rgba(46, 47, 66, 0.08),
  0px 1px 4px rgba(46, 47, 66, 0.16), 2px 2px 3px rgba(46, 47, 66, 0.08);;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  padding: 15px;
  color: black;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #edf3fb;
  outline: none;
  &:hover {
    background-color: #879cb7;
    color: #edf3fb;
  }
`;