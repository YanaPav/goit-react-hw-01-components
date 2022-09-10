import PropTypes from "prop-types"
import { User,Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from './Profile.styled'

export const Profile = props => {
    const { username, tag, location, avatar } = props
    const {followers, views, likes} = props.stats
    return <User>
                <div>
                    <Avatar src={avatar} alt={username}/>
                    <Name>{username}</Name>
                    <Tag>@{tag}</Tag>
                    <Location>{location}</Location>
                </div>

                <Stats>
                    <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                    </StatsItem>
                    <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                    </StatsItem>
                    <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                    </StatsItem>
                </Stats>
            </User>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stat: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
    
}