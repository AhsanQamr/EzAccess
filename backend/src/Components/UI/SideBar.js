import React from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
    return (
        <>
            <div className={styles.sidebar} >
                <div className={styles.sidebar__header}>
                    <h2>Hello, <span>Guest</span> </h2>
                    {/* <a href="/"><i class="bi bi-x-circle"></i></a> */}
                    <button><i class="bi bi-x-circle"></i></button>
                </div>
                {/* <hr /> */}
                <div className={styles.sidebar__menu}>
                    <div className={styles.sidebar__title}>
                        <p>Categories</p>
                    </div>
                    <ul className={styles.sidebar__ul}>
                        <li><i class="bi bi-phone"></i><a href="/">Mobiles</a></li>
                        <li><i class="bi bi-laptop"></i><a href="/">Laptops</a></li>
                        <li><i class="bi bi-tablet-landscape"></i><a href="/">Tablets</a></li>
                        <li><i class="bi bi-watch"></i><a href="/">Watches</a></li>
                        <li><i class="bi bi-earbuds"></i><a href="/">Accessories</a></li>
                        {/* checkbox with filter */}

                    </ul>
                    <hr />
                    <div className={styles.sidebar__title}>
                        <p>Shops</p>
                    </div>
                    <ul className={styles.sidebar__ul}>
                        <li><a href="/">Daraz</a></li>
                        <li><a href="/">PriceOye</a></li>
                        <li><a href="/">Qmart</a></li>
                        <li><a href="/">Shophive</a></li>
                        <li><a href="/">Symbios</a></li>
                    </ul>
                    <hr />
                    <div className={styles.sidebar__title}>
                        <p>Brands</p>
                    </div>
                    <ul className={`${styles.sidebar__ul} ${styles.sidebar__ul__brands}`} >
                        <li><a href="/">Apple</a></li>
                        <li><a href="/">Samsung</a></li>
                        <li><a href="/">Oppo</a></li>
                        <li><a href="/">Xiaomi</a></li>
                        <li><a href="/">Vivo</a></li>
                        <li><a href="/">Tecno</a></li>
                        <li><a href="/">OnePlus</a></li>
                        <li><a href="/">View All</a></li>
                    </ul>
                    <hr />
                    <div className={styles.sidebar__title}>
                        <p>Price Range</p>
                    </div>
                    <ul className={`${styles.sidebar__ul} ${styles.sidebar__ul__brands}`} >
                        <li><a href="/">Less than 50k</a></li>
                        <li><a href="/"> 50k - 100k</a></li>
                        <li><a href="/">100k - 150k</a></li>
                        <li><a href="/">150k - 200k</a></li>
                        <li><a href="/">200k - 300k</a></li>
                        <li><a href="/">Greater...</a></li>
                    </ul>
                    <hr /> 
                </div>
            </div>
        </>
    );
};

export default SideBar;