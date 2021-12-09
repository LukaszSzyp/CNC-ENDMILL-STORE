import styled from "styled-components";

export const Login = styled.section`
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  label {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 3px 0;
  }

  .btn {
    margin: 5px 0;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: 600;
    border-style: none;
    cursor: pointer;
  }

  .btn:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  input:focus {
    outline: none;
  }
`;
