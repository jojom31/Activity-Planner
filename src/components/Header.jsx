import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1 style={{color: 'orange'}}>{title}</h1> 
            <Button color={showAdd ? 'yellow' : 'orange'} text={showAdd ? 'Close' : 'Add'} onClick= {onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'reMindPrep App',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
