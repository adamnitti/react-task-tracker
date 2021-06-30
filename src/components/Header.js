import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

    /* const onClick = () => {
        console.log('Click');
    } */

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={!showAdd ? 'green' : 'steelblue'}
                text={showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

/*CSS in JS
const headerStyle = {
    color: 'red',
    backgroundColor: 'black',
}*/

export default Header