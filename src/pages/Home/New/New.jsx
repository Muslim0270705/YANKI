import React from 'react';
import {Link} from "react-router-dom";

const New = () => {
    return (
        <section className="new">
            <Link className="new__title">Новая коллекция</Link>
            <Link className="new__desc">Смотреть Новинки
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.88903 5L-2.90871e-05 1.11094L1.11091 1.90735e-06L6.11091 5L1.11091 10L-2.90871e-05 8.88907L3.88903 5Z" fill="white"/>
                </svg>
            </Link>
        </section>
    );
};

export default New;