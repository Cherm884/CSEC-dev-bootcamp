import { useTaskContext } from '../store/taskContext';

const Header = () => {
    const { darkMode, toggleDarkMode } = useTaskContext();

    const styles = {
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 0',
            marginBottom: '20px',
            borderBottom: `1px solid var(--border-color)`,
            width: '100%',
            maxWidth: '600px',
        },
        title: {
            margin: 0,
            paddingRight: '20px',
        },
        button: {
            backgroundColor: darkMode ? '#f1c40f' : '#2c3e50',
            color: darkMode ? '#333' : '#fff',
        },
    };

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Task Tracker</h1>
            <button style={styles.button} onClick={toggleDarkMode}>
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </header>
    );
};

export default Header;
