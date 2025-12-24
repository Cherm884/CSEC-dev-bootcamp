import { Link } from 'react-router-dom';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
    const styles = {
        container: {
            maxWidth: '600px',
            width: '100%',
            margin: '0 auto',
            padding: '20px',
        },
        nav: {
            marginTop: '20px',
            textAlign: 'center',
        },
        link: {
            color: 'var(--primary-color)',
            textDecoration: 'none',
            fontSize: '1.1rem',
        }
    };

    return (
        <div style={styles.container}>
            <TaskInput />
            <TaskList />
            <div style={styles.nav}>
                <Link to="/stats" style={styles.link}>📊 View Stats</Link>
            </div>
        </div>
    );
};

export default Home;
