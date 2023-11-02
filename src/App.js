import {Link, Redirect, Route, Switch, useParams} from "react-router-dom";

function App() {
  return (
    <div>
        <h1>App Layout</h1>
        <Link to='/users'>Users list Page</Link>
        <Switch>
            <Route path='/' exact component={AppPage} />
            <Route path='/users/:userId?/edit' component={UserEditPage} />
            {/*<Route path='/users/:userId?/profile' component={UserProfilePage} />*/}
            <Route path='/users/:userId?' component={UsersList} />
            {/*<Route path='/users/' component={UserPage} />*/}
            {/*<Route path='/' component={MainPage} />*/}
            <Redirect to='/' />
        </Switch>
    </div>
  )
}

const AppPage = () => {
    return (
        <>
            {/*<Link to='/users'>Users list Page</Link>*/}
            <h1>Main Page</h1>
        </>
    )
}

const UsersList = () => {
    const params = useParams()
    const { userId } = params
    console.log(params)


    return (
        <>
            <h1>Users Layout</h1>
            <Link to='/'>Main Page</Link>
            {!userId ?
                <div>
                    <h1>User List Page</h1>
                    <ul>
                        <li><Link to='/users/0'>User 0</Link></li>
                        <li><Link to='/users/1'>User 1</Link></li>
                        <li><Link to='/users/2'>User 2</Link></li>
                        <li><Link to='/users/3'>User 3</Link></li>
                        <li><Link to='/users/4'>User 4</Link></li>
                    </ul>
                </div>
                :
                <div>
                    <h1>User Page</h1>
                    <ul>
                        <li><Link to='/users'>Users list Page</Link></li>
                        <li><Link to={`/users/${userId}/edit`}>Edit this User</Link></li>
                        <span>UserId:{userId}</span>
                    </ul>
                </div>
            }
        </>
    )
}

const UserEditPage = () => {
    const params = useParams()
    const { userId } = params
    console.log(params)

    return (
        <>
            <h1>Users Layout</h1>
            <Link to='/'>Main Page</Link>
            <h1>Edit User Page</h1>
            <ul>
                <li><Link to={`/users/${userId}`}>User profile Page</Link></li>
                <li><Link to={`/users/${Number(userId) + 1}`}>Another User</Link></li>
                <li><Link to='/users'>Users list Page</Link></li>
            </ul>
        </>
    )
}

// const UserProfilePage = () => {
//     const params = useParams()
//     const { userId } = params
//     console.log(params)
//
//     return (
//         <>
//             <h1>User Profile Page</h1>
//             <ul>
//                 <li><Link to={`/users/${userId}/edit`}>User profile Page</Link></li>
//                 <li><Link to='/users/edit'>Another User</Link></li>
//                 <li><Link to='/users'>Users list Page</Link></li>
//             </ul>
//         </>
//     )
// }

export default App;
