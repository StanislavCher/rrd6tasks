import {Navigate, NavLink, Outlet, useParams, useRoutes} from "react-router-dom";

function App() {
    const routs =  [{
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: 'users',
                element: <UsersLayout />,
                children: [
                    {
                        index: true,
                        element: <UsersListPage />
                    },
                    {
                        path: ':userId',
                        element: <Outlet />,
                        children: [
                            {
                                path: 'edit',
                                element: <UserEditPage />
                            },
                            {
                                path: 'profile',
                                element: <UserProfilePage />
                            },
                            {
                                index: true,
                                element: <Navigate to='profile' />
                            },
                            {
                                path: '*',
                                element: <Navigate to='../profile' />
                            }
                            ]
                    }
                ]
            },
            {
                path: '*',
                element: <Navigate to='/' />
            }
        ]
    }]

    const elements = useRoutes(routs)

  return (
    <div>
        {elements}
        {/*<Routes>*/}
        {/*    <Route path='/' element={<AppLayout />} >*/}
        {/*        <Route index element={<MainPage />} />*/}
        {/*        <Route path='users' element={<UsersLayout />} >*/}
        {/*            <Route path='' element={<UsersListPage />} />*/}
        {/*            <Route path={':userId/edit'} element={<UserEditPage />} />*/}
        {/*            <Route path={':userId/profile'} element={<UserProfilePage />} />*/}
        {/*        </Route>*/}
        {/*    </Route>*/}
        {/*</Routes>*/}
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
                <li><NavLink to={`/users/${userId}`}>User profile Page</NavLink></li>
                <li><NavLink to={`/users/${(+userId + 1) % 5}/`}>Another User</NavLink></li>
                <li><NavLink to='/users'>Users list Page</NavLink></li>
            </ul>
        </>
    )
}

export default App;
