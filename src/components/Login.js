import { useRef } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

export const Login = ({ setUserId }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(idRef.current.value);
  };

  const createId = () => {
    setUserId(uuidv4());
  };

  return (
    <Container
      style={{
        marginTop: "10vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "50%",
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Login Id</Form.Label>
          <Form.Control type="text" ref={idRef} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ marginRight: "2vw" }}
          onClick={() => setUserId()}
        >
          Login
        </Button>
        <Button variant="secondary" onClick={createId}>
          Create a new Id
        </Button>
      </Form>
    </Container>
  );
};
