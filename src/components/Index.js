import { Outlet, Link } from "react-router-dom";
export default function Index() {
    return (
        <>
        <nav>
            <Link to="/">
                <div>Trang Chủ</div>
            </Link>
            <Link to="/Aboutus">
                <div>Thông tin liên quan</div>
            </Link>
            <Link to="/Login">
                <div>Trang đăng nhập</div>
            </Link>
            <Link to="/NewFeeds">
                <div>Trang tin tức</div>
            </Link>
            <Link to="/Search">
                <div>Trang tìm kiếm</div>
            </Link>
            <Link to="/Register">
                <div>Trang đăng nhập</div>
            </Link>
        </nav>
        </>
    )
}