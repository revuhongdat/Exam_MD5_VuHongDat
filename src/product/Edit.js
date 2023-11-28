import * as Yup from "yup";
import {useNavigate, useParams} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import Swal from 'sweetalert2';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {editProduct} from "../services/productServices";
export default function Edit() {
    let id = useParams().id
    const dispatch = useDispatch();
    const curProduct = useSelector(store => {
            return store.productReducer.curProduct
        }
    )
    let navigate = useNavigate()
    const validate = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Ngắn quá!')
            .max(2000, "Dài quá!")
            .required("Không được để trống"),
        price: Yup.number()
            .min(1000, 'Giá lớn hơn hoặc bằng 1000')
            .max(1000000000, 'Giá nhỏ hơn hoặc bằng 1000000000')
            .required("Không được để trống"),
        description: Yup.string()
            .min(2, 'Ngắn quá!')
            .max(2000, "Dài quá!")
            .required("Không được để trống")
    });
    const handleEdit = async (id, formValues, axiosConfig) => {
        try {
            await dispatch(editProduct({ id: id, data: formValues}));
            // Hiển thị SweetAlert và tự đóng sau 1 giây
            await Swal.fire({
                title: 'Sửa sản phẩm thành công!',
                icon: 'success',
                timer: 1000, // Thời gian hiển thị thông báo (miligiây)
                showConfirmButton: false // Ẩn nút xác nhận
            });

            navigate('/home/list');
        } catch (error) {
            console.error('Lỗi khi sửa sản phẩm:', error);

            // Hiển thị SweetAlert với thông báo lỗi
            await Swal.fire('Đã xảy ra lỗi!', 'Vui lòng thử lại sau.', 'error');
        }
    };

    return(
        <>
            <Formik initialValues={{
                title: curProduct?.title || '',
                price: curProduct?.price || 0,
                description: curProduct?.description || ''
            }}
                    enableReinitialize={true}
                    validationSchema={validate}
                    onSubmit={(formValues) => handleEdit(id, formValues)}
            >
                <Form>
                    <FormGroup className="mb-3">
                        <FormLabel>Tên:</FormLabel>
                        <Field
                            type="text"
                            name="title"
                            placeholder="Nhập tên"
                            as={FormControl}
                        />
                        <ErrorMessage name="title"></ErrorMessage>
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <FormLabel>Giá:</FormLabel>
                        <Field
                            type="text"
                            name="price"
                            placeholder="Nhập giá"
                            as={FormControl}
                        />
                        <ErrorMessage name="price" />
                    </FormGroup>

                    <FormGroup className="mb-3">
                        <FormLabel>Mô tả:</FormLabel>
                        <Field
                            type="text"
                            name="description"
                            placeholder="Nhập mô tả"
                            as={FormControl}
                        />
                        <ErrorMessage name="description"></ErrorMessage>
                    </FormGroup>

                    <Button
                        className="ml-2"
                        variant="primary"
                        type="submit">
                        Sửa sản phẩm
                    </Button>
                    <Button
                        className="ml-2"
                        onClick={() => navigate('/home/list')}
                        variant="primary"
                        type="submit">
                        Quay lại
                    </Button>
                </Form>
            </Formik>
        </>
    )
}