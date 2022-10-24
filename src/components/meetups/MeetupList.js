import MeetupItems from './MeetupItems';
import classes from './MeetupList.module.css';


const MeetupList = (props) => {
    return (
        <ul className={classes.lists}>
        {props.meetups.map((meetup) => (
            <MeetupItems
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
            />
        ))}
        </ul>
    );
}

export default MeetupList;