import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Swal from 'sweetalert2'
import {deleteProduct, findById, getProducts} from "../services/productServices";
import {NavLink} from "react-router-dom";

export default function List() {
    const dispatch = useDispatch()
    const products = useSelector(store => {
            return store.productReducer.products
        }
    )
    const handleDetail = (id) => dispatch(findById({id: id}))
    const handleEdit = (id) => dispatch(findById({id: id}))
    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Bạn có chắc chắn muốn xóa bài viết này?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Xóa'
            });

            if (result.isConfirmed) {
                await dispatch(deleteProduct({id: id}));

                await Swal.fire({
                    title: 'Xóa blog thành công!',
                    icon: 'success',
                    timer: 1000, // Thời gian hiển thị thông báo (miligiây)
                    showConfirmButton: false // Ẩn nút xác nhận
                });
            }
        } catch (error) {
            console.error('Lỗi khi xóa bài viết:', error);
            await Swal.fire('Đã xảy ra lỗi!', 'Vui lòng thử lại sau.', 'error');
        }
    };
    useEffect(() => {dispatch(getProducts())},[])
    let current = localStorage.getItem('username')

    return(
        <>
        <h1>DANH SÁCH SẢN PHẨM</h1>
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Mô tả</th>
                <th scope="col" colSpan={3}>Hành động</th>
            </tr>
            </thead>
            <tbody>
            {products.map((b,index) => (
                <tr key={index}>
                    <td>{b.id}</td>
                    <td><NavLink to={'detail/' + b.id} className="nav-link" onClick={() => handleDetail(b.id)}>{b.title}</NavLink></td>
                    <td>{b.price}</td>
                    <td>{b.description}</td>
                    <td><NavLink to={'edit/' + b.id} className="btn btn-primary nav-link" onClick={() => handleEdit(b.id)}>Sửa</NavLink></td>
                    <td><button  type="button" className="btn btn-danger nav-link" onClick={() => handleDelete(b.id)}>Xóa</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}