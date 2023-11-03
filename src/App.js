import {Navigate, NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";

function App() {
  return (
    <div>
        {/*<h1>App Layout</h1>*/}
        {/*<NavLink to='users'>Users list Page</NavLink>*/}
        <Routes>
            <Route path='/' element={<AppLayout />} >
                <Route index element={<MainPage />} />
                <Route path='users' element={<UsersLayout />} >
                    <Route path='' element={<UsersListPage />} />
                    <Route path={':userId/edit'} element={<UserEditPage />} />
                    <Route path={':userId/profile'} element={<UserProfilePage />} />
                </Route>
            </Route>
        </Routes>
    </div>
  )
}

const AppLayout = () => {
    return (
        <>
            <h1>App Layout</h1>
            <NavLink to='users'>Users list Page</NavLink>
            <Outlet />
        </>
    )
}

const UsersLayout = () => {
    return (
        <>
            <h1>Users Layout</h1>
            <NavLink to='../'>Main Page</NavLink>
            <Outlet />
            {/*<Navigate from={':userId?'} to={'/:userId?/profile'} />*/}
        </>
    )
}

const MainPage = () => {
    return (
        <>
            <h1>Main Page</h1>
            <Outlet/>
        </>
    )
}

const UsersListPage = () => {
    return (
        <>
            <div>
                <h1>User List Page</h1>
                <ul>
                    {new Array(5).fill('').map((_, index) => {
                        return <li key={'user_key_' + index}>
                                   <NavLink to={`${index}/profile`}>User {index}</NavLink>
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
    // console.log(userId)
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
                <li><NavLink to={`../${userId}/profile`}>User profile Page</NavLink></li>
                <li><NavLink to={`../${(+userId + 1) % 5}/profile`}>Another User</NavLink></li>
                <li><NavLink to='../'>Users list Page</NavLink></li>
            </ul>
        </>
    )
}

export default App;
