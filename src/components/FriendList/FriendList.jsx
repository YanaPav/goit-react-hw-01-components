import PropTypes from "prop-types"
import {Friend, AllFriends, Status, Name} from './FriendList.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <Friend>
                <Status isOnline={isOnline} />
                <img src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </Friend>
}

export const FriendList = ({ friends }) => {
    return (<AllFriends>{friends.map(friend => (
        <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
        ))}
    </AllFriends>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        key: PropTypes.number,
    }))
}