import { NewMeetUpsForm } from '../components/meetups/NewMeetUpsForm';
import { useHistory } from 'react-router-dom';


export const NewMeetUps = () => {

    const history = useHistory();

    const addMeetUpHandler = (meetUpData) => {
        fetch( 'https://react-refresher-next-course-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json', {
            method: 'POST',
            body: JSON.stringify( meetUpData ),
            headers: {
                'Content-Type': 'application/json'
            }
        } ).then(  () => {
            history.replace( '/' );
        });
    };
    return (
        <section>
            <h1>New meet up</h1>
            <NewMeetUpsForm onAddMeetUp={addMeetUpHandler}/>
        </section>
    );
};