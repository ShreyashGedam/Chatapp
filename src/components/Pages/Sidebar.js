import { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import { Contacts } from "./Contacts";
import { Conversation } from "./Conversation";
import { NewContactModal } from "./NewContactModal";
import { NewConversationModal } from "./NewConversationModal";

const CONVERSATION_KEY = "conversation";
const CONTACTS_KEY = "contacts";

export const Sidebar = ({ id }) => {
  const [activeKey, setActivekey] = useState(CONVERSATION_KEY);
  const [openModal, setOpenModal] = useState(false);
  const conversationsOpen = activeKey === CONVERSATION_KEY;

  function closeModal() {
    // console.log("I am being called");
    setOpenModal(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActivekey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content
          style={{
            overflow: "auto",
            height: "80vh",
            borderRight: "1px solid grey",
            borderBottom: "1px solid grey",
          }}
        >
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversation />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="small">
          Your id is : <span className="text-muted">{id}</span>
        </div>
      </Tab.Container>
      <Button className="rounded-0" onClick={() => setOpenModal(true)}>
        New {conversationsOpen ? "Conversation" : "Contact"}
      </Button>
      <Modal show={openModal} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
};
