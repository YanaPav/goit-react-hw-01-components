import {User} from './Profile.styled'

export const Profile = props => {
    const { username, tag, location, avatar } = props
    const {followers, views, likes} = props.stats
    return <User>
                <div className="description">
                    <img
                    src={avatar}
                    alt={username}
                    className="avatar"
                    />
                    <p className="name">{username}</p>
                    <p className="tag">@{tag}</p>
                    <p className="location">{location}</p>
                </div>

                <ul className="stats">
                    <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                    </li>
                    <li>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                    </li>
                    <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                    </li>
                </ul>
            </User>
}