import './AboutPage.css';

export default function AboutPage() {
    return (
        <section
            className="about-hero"
            /* 👉 підставте власний шлях до зображення */
            style={{ backgroundImage: "url('/images/about-handshake.jpg')" }}
        >
            <div className="about__content">
                <h1 className="about__title">Компанія&nbsp;Топлог</h1>

                <p className="about__lead">
                    Компанія&nbsp;«Топлог» — український розробник систем класу WMS / YMS
                    на платформі 1С. Працюємо на ринку автоматизації складської логістики
                    із 2009 року. Географія реалізованих проєктів охоплює Україну та країни
                    СНД. Автоматизовано понад 200 складів із різною галузевою специфікою.
                    «Топлог» внесена до Реєстру акредитованих ІТ-компаній Мінцифри.
                </p>

                <div className="about__stats">
                    <div className="stat">
                        <span className="stat__num">15</span>
                        <span className="stat__txt">років плідної роботи</span>
                    </div>
                    <div className="stat">
                        <span className="stat__num">200+</span>
                        <span className="stat__txt">автоматизованих складів</span>
                    </div>
                    <div className="stat">
                        <span className="stat__num">50</span>
                        <span className="stat__txt">професіоналів у штаті</span>
                    </div>
                </div>

                <a href="/projects" className="about__btn">Наші проєкти</a>
            </div>
        </section>
    );
}