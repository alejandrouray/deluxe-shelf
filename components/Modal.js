import { CardActionArea } from "@material-ui/core";
import { Button, Modal as ModalBootstrap } from "react-bootstrap";

const Modal = ({ activator, title, children, toggle, action = {} }) => {
  return (
    <ModalBootstrap show={activator} onHide={toggle}>
      <ModalBootstrap.Header closeButton>
        <ModalBootstrap.Title>{title}</ModalBootstrap.Title>
      </ModalBootstrap.Header>

      <ModalBootstrap.Body>{children}</ModalBootstrap.Body>

      <ModalBootstrap.Footer>
        <Button onClick={toggle}>Cancelar</Button>
        <Button onClick={action.method && action.method}>
          {action.method && action.title}
        </Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
};

export default Modal;
