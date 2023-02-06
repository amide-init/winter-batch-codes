import { useEffect } from "react";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
const Home = () => {
    const apiKey = "rzp_test_jWSsNwCXunvn7c"
    const apiSecret = "mE3RlrdSYdW6uw0yVJP2pDqI"



    const products = [
        {
            id: 0,
            name: "Black Shoe",
            detail: "Nikee's best white Shoues",
            image: "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/m/m/v/-original-imagg7szgcmfgauh.jpeg",
            price: 78888
        },
        {
            id: 1,
            name: "White Shoe",
            detail: "Nikee's best white Shoues",
            image: "https://m.media-amazon.com/images/I/51UL5o4HKqL._UY500_.jpg",
            price: 9999
        }, {
            id: 2,
            name: "Green Shoe",
            detail: "Nikee's best white Shoues",
            image: "https://4.imimg.com/data4/UY/SB/ANDROID-35738063/product-500x500.jpeg",
            price: 1999
        }
    ]

    var options = {
        key: apiKey, // Enter the Key ID generated from the Dashboard
        // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        // "name"
        // "description":
        // "image": "https://example.com/your_logo",
        // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },

        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const buyNow = async (index) => {
        options['amount'] = products[index].price * 100;
        options['name'] = products[index].name
        options['description'] = products[index].detail
        options['image'] = products[index].image
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if(res) {
            var rzp = new window.Razorpay(options); //why ? 
            rzp.open();
        }
       
       
    }
    return (
        <div className="container my-5">
            <div className="row">
                {products.map((product) => {
                    return <div className="col-4" key={product.id}>
                        <div className="card p-2">
                            <img src={product.image} height="300" />
                            <h3>{product.name}</h3>
                            <h5 className="text-success"> Rs. {product.price}</h5>
                            <small>{product.detail}</small>
                            <button className="btn btn-warning" onClick={async (event) => {
                                event.preventDefault();
                                await buyNow(product.id)
                            }} >Buy Now</button>
                        </div>
                    </div>
                })}
            </div>
        </div>

    )
}

export default Home;