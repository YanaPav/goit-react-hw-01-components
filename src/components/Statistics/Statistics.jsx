import PropTypes from "prop-types"
import { StatSection } from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return <StatSection>
        {title && <h2 className="title">{title}</h2>}

                <ul className="stat-list">
                    {stats.map(stat => (
                        <li key={stat.id} className="item" style={{backgroundColor: `${getRandomHexColor()}`}}>
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
                        </li>
                    ))}                    
                </ul>
            </StatSection>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}