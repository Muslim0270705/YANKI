import React from 'react';

const HomeForm = () => {
    return (
        <section className="homeform">
            <h2 className="homeform__title">Узнайте  первым о новинках</h2>
            <form className="form">
                <label className="homeform__label" htmlFor="">
                    <input className='homeform__input' placeholder="Ваш e-mail*" type="text"/>
                </label>
                <button className="homeform__btn">
                    ПОДПИСАТЬСЯ
                </button>
            </form>
            <p className="homeform__desc">
                Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих <br/> персональных данных и ознакомлен(а) с условиями конфиденциальности.
            </p>
        </section>

    );
};

export default HomeForm;