import {NavLink, Redirect, Route, Switch, useParams, useRouteMatch} from "react-router-dom";

function App() {
  return (
    <div>
        <h1>App Layout</h1>
        <NavLink to='/users'>Users list Page</NavLink>
        <Switch>
            <Route path='/users' component={UsersLayout} />
            <Route path='/' component={MainPage} />
            <Redirect to='/' />
        </Switch>
    </div>
  )
}

const UsersLayout = () => {
    const { path } = useRouteMatch()
    return (
        <>
            <h1>Users Layout</h1>
            <NavLink to='/'>Main Page</NavLink>
            <Switch>
                <Route path={path + '/:userId?/edit'} component={UserEditPage} />
                <Route path={path + '/:userId?/profile'} component={UserProfilePage} />
                <Route path={path} exact component={UsersListPage} />
                <Redirect from={path + '/:userId?'} to={path + '/:userId?/profile'} />
            </Switch>
        </>
    )
}

const MainPage = () => {
    return (
        <>
            <h1>Main Page</h1>
        </>
    )
}

const UsersListPage = () => {
    const { path } = useRouteMatch()
    return (
        <>
            <div>
                <h1>User List Page</h1>
                <ul>
                    {new Array(5).fill('').map((_, index) => {
                        return <li key={'user_key_' + index}>
                                   <NavLink to={`${path}/${index}`}>User {index}</NavLink>
                               </li>
                    })
                    }
                </ul>
            </div>
        </>
    )
}

const UserProfilePage = () => {
    const { userId } = useParams()
    return (
        <div>
            <h1>User Page</h1>
            <ul>
                <li><NavLink to='/users'>Users list Page</NavLink></li>
                <li><NavLink to={`/users/${userId}/edit`}>Edit this User</NavLink></li>
                <p>UserId:{userId}</p>
            </ul>
        </div>
    )
}

const UserEditPage = () => {
    const { userId } = useParams()
    return (
        <>
            <h1>Edit User Page</h1>
            <ul>
                <li><NavLink to={`/users/${userId}`}>User profile Page</NavLink></li>
                <li><NavLink to={`/users/${(+userId + 1) % 5}`}>Another User</NavLink></li>
                <li><NavLink to='/users'>Users list Page</NavLink></li>
            </ul>
        </>
    )
}

export default App;
