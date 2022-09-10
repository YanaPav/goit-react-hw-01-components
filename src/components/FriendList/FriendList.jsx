import PropTypes from "prop-types"
import {Friend, Friends, Status, Name} from './FriendList.styled'

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return <Friend key={id} className="item">
        <Status isOnline={isOnline} />
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </Friend>
}

export const FriendList = ({ friends }) => {
    return (<Friends>{friends.map(friend => (
        <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
        ))}
    </Friends>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}