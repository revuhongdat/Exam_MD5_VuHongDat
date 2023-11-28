import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Button} from "react-bootstrap";

export default function Detail() {
    let navigate = useNavigate()
    const curProduct = useSelector(store => {
        console.log(store.productReducer.curProduct)
            return store.productReducer.curProduct
        }
    )
    return(
        <div style={{margin: "auto",textAlign:"center"}}>
            <h1>CHI TIẾT SẢN PHẨM</h1>
            <div className="card" style={{width:1000, textAlign:"center",margin:"auto"}}>
                <div className="card-body">
                    <h3>Tên sản phẩm : {curProduct.title}</h3>
                    <h5>Mô tả sản phẩm : {curProduct.description}</h5>
                    <h5>Giá sản phẩm : {curProduct.price} VNĐ</h5>
                    <Button onClick={() => navigate('/home/list')}>
                        Quay lại
                    </Button>
                </div>
            </div>
        </div>

    )
}