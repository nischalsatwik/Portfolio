import Card from 'react-bootstrap/Card';
import lendi from "../Images/lendi.jpg";
import hobbies from "../Images/hobbies.jpg"
import tools from "../Images/tools.png"
import School from "../Images/smtgodavari.png"
import Nptel from "../Images/Nptel1.jpeg"
import Meta from "../Images/meta.jpg"
import sailpoint from "../Images/sailpoint.png";
import meta from "../Images/metas.jpg"
import apps from "../Images/Apps.png"
function Main(){
    return(
        <div className='main snaps-inline'>
            <Card className='info-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={lendi} />
                <Card.Body>
                    <Card.Title className='main-title'>My college</Card.Title>
                    <Card.Text className="main-text">I've done Btech from here and got 8.0 CGPA which is quite average.</Card.Text>
                </Card.Body>
            </Card>
            <Card className='info-card'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hobbies} />
                <Card.Body>
                    <Card.Title className='main-title'>My hobbies</Card.Title>
                    <Card.Text className="main-text">Which keeps me relaxed and energetic</Card.Text>
                </Card.Body>
            </Card>
            <Card className='info-card' style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={tools}  />
                <Card.Body>
                    <Card.Title className='main-title'>Tools I've Learnt</Card.Title>
                    <Card.Text className="main-text">Thanks to youtube and all other platforms which made me learn</Card.Text>
                </Card.Body>
            </Card>
            <Card className='info-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sailpoint} />
                <Card.Body>
                    <Card.Title className='main-title'>First Project IAM</Card.Title>
                    <Card.Text className="main-text">
                        Worked in agile for 1 year and learnt tools like postman and jira
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='info-card'  style={{ width: '18rem' }}>
                <Card.Img variant="top" src={meta} />
                <Card.Body>
                    < Card.Title className='main-title'>Second Project</Card.Title>
                    <Card.Text className="main-text">
                        Worked for 1 year as the team lead and responsible for the deliverables which is quite challenging for me
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='info-card' style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={apps}  />
                <Card.Body>
                    <Card.Title className='main-title'>Solo projects</Card.Title>
                    <Card.Text className="main-text">
                        These helped me understand how things work and how apps run.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='info-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={School} />
                <Card.Body>
                    <Card.Title className='main-title'>Topped as school first</Card.Title>
                    <Card.Text className="main-text">
                        which is quite not relevant now but still it&apos;s an acheivement.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='info-card'  style={{ width: '18rem' }}>
                <Card.Img variant="top" className='nptel' src={Nptel} />
                <Card.Body>
                    <Card.Title className='main-title'>Python</Card.Title>
                    <Card.Text className="main-text">Python is easy to learn and which amused me towards programming</Card.Text>
                </Card.Body>
            </Card>
            <Card className='info-card' style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={Meta}  />
                <Card.Body>
                    <Card.Title className='main-title'>Meta</Card.Title>
                    <Card.Text className='main-text'>
                         Onboarded the module for which I've worked it's hectic but learnt alot of things
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Main;