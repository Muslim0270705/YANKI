import React from 'react';
import {Link} from "react-router-dom";
import sneak from '../../images/catalog/Rectangle.png'

const Catalog = () => {
    return (
        <div className='catalog'>
            <div className="container">
                <div className="catalog__home">
                    <p className="catalog__home-deck">Главная</p>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.88931 7L4.00024 3.11094L5.11118 2L10.1112 7L5.11118 12L4.00024 10.8891L7.88931 7Z" fill="#E0BEA2"/>
                    </svg>



                    <p className="catalog__home-deck">Каталог</p>
                </div>

                <div className="catalog__product">
                    <ul className="catalog__category">
                        <li className='catalog__category-title'>
                            <Link className="catalog__category-item catalog__category-title">Каталог</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">NEW</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Верхняя одежда</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Шубы</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Пальто</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Пуховики и жилеты</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Костюмы</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Платья</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Рубашки и блузы</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Юбки</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Футболки и топы</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Аксессуары</Link>
                        </li>
                        <li>
                            <Link className="catalog__category-item">Посмотреть всё</Link>
                        </li>
                    </ul>
                    <div className="catalog__products">
                        <div className="catalog__filter">
                            <p className="catalog__products-text">Размер</p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 9.88906L12.8891 6L14 7.11094L9 12.1109L4 7.11094L5.11094 6L9 9.88906Z" fill="#E0BEA2"/>
                            </svg>
                            <p className="catalog__products-text">Цвет</p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 9.88906L12.8891 6L14 7.11094L9 12.1109L4 7.11094L5.11094 6L9 9.88906Z" fill="#E0BEA2"/>
                            </svg>
                            <p className="catalog__products-text">Цена</p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 9.88906L12.8891 6L14 7.11094L9 12.1109L4 7.11094L5.11094 6L9 9.88906Z" fill="#E0BEA2"/>
                            </svg>
                            <p className="catalog__products-text">Сортировать по</p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 9.88906L12.8891 6L14 7.11094L9 12.1109L4 7.11094L5.11094 6L9 9.88906Z" fill="#E0BEA2"/>
                            </svg>

                        </div>
                        <div className="catalog__row">
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="catalog__card">
                                <img src={sneak} alt=""/>
                                <div className="catalog__card-info">
                                    <p className="catalog__card-info-text">Белая куртка <span>New</span></p>
                                    <p className="catalog__card-info-sale">2900 грн</p>
                                    <div className="catalog__card-info-sizes">
                                        <p className="catalog__card-info-size">XXS</p>
                                        <p className="catalog__card-info-size">XS</p>
                                        <p className="catalog__card-info-size">S</p>
                                        <p className="catalog__card-info-size">M</p>
                                        <p className="catalog__card-info-size">L</p>
                                    </div>
                                    <div className="catalog__card-info-color">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="6.85" fill="white" stroke="#252525" stroke-width="0.3"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#6F83A4"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="7" cy="7" r="7" fill="#F1DDAA"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;