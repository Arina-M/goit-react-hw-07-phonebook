import styled from 'styled-components';

export const ListOfContact = styled.ul`
    padding: 20px;
    background-color: #fff;
    border: transparent;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
        0px 1px 10px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 16px;
    button {
        width: fit-content;
        border-radius: 5px;
        border: none;
        box-shadow: 10px 10px 10px rgba(46, 47, 66, 0.08),
        0px 1px 4px rgba(46, 47, 66, 0.16), 2px 2px 3px rgba(46, 47, 66, 0.08);
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        background-color: #edf3fb;
        outline: none;
        padding: 10px;
        &:hover {
            background-color: #879cb7;
            color: #edf3fb;
        }
    }
`;