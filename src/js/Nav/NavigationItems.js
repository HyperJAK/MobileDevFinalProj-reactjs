import Nav from "react-bootstrap/Nav";


export const NavigationItems = ({handleNavButtonSelect,setCurrentScreen, currentScreen})=> {
    return (
        <Nav variant="tabs" onSelect={handleNavButtonSelect} defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{
                    setCurrentScreen('flight')
                    var serializedString = JSON.stringify({
                        lastScreen: 'flight',
                    });
                    localStorage.setItem('currentScreen', serializedString);
                }} >Flights</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{
                    setCurrentScreen('hotel')
                    var serializedString = JSON.stringify({
                        lastScreen: 'hotel',
                    });
                    localStorage.setItem('currentScreen', serializedString);
                }} >Hotels</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={() => {
                    setCurrentScreen('trip')
                    var serializedString = JSON.stringify({
                        lastScreen: 'trip',
                    });
                    localStorage.setItem('currentScreen', serializedString);
                }}>
                    Trips
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}