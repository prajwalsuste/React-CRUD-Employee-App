import {Navbar,Nav,Container} from "react-bootstrap"
import {Route,Routes} from "react-router-dom"
import Update from "./Update"
import Create from "./Create"
import Delete from "./Delete"
import View from "./View"
export default function Main(){
    return<>
    <Navbar bg='success' data-bs-success='dark'>
        <Container>
            <Navbar.Brand href="/">ViewAll</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
            <Nav.Link href="/delete">Delete</Nav.Link>
            
            </Nav>
        </Container>
    </Navbar>

    <Routes>
        <Route path="/" element={<View></View>}></Route>
        <Route path="/view" element={<View></View>}></Route>
        <Route path="/update" element={<Update></Update>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/delete" element={<Delete></Delete>}></Route>
    </Routes>
    
    </>
} 