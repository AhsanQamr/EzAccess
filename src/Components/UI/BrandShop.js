import React from "react";
import "./BrandShop.css";
const BrandShop = () => {
    return (
        <>
            <div className="brand__shop">
                <h1>Shop by Brand</h1>
                <a href='/'>View More</a>
            </div>
            <div className="brand__shop__container">
                <a href="/">
                <img src="https://static.priceoye.pk/images/brands/svg/samsung.svg" alt="sam_brand" />
                </a>
                <a href="/">
                <img src="https://static.priceoye.pk/images/brands/svg/oppo.svg" alt="oppo_brand" />
                </a>
                <a href="/">
                <img src="https://static.priceoye.pk/images/brands/svg/xiaomi.svg" alt="xiaomi_brand" />
                </a>
                <a href="/">
                <img src="https://static.priceoye.pk/images/brands/svg/infinix.svg" alt="infinix_brand" />
                </a>
                <a href="/">
                <img src="https://static.priceoye.pk/images/brands/svg/apple.svg" alt="apple_brand" />
                </a>
                <a href="/">
                <img src="https://static.priceoye.pk/images/brands/svg/nokia.svg" alt="nokia_brand" />
                </a>
                <a href="/">
                <img src="https://static.priceoye.pk/images/brands/svg/oneplus.svg" alt="oneplus_brand" />
                </a>
            </div>
        </>
    );
};

export default BrandShop;