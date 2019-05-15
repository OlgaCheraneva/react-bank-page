import React, { Component } from "react";
import "../styles/companyInformation.css";

class CompanyInformation extends Component {
  state = {
    isExtraInformationVisible: false
  };

  handleDisplayChange() {
    this.setState({
      isExtraInformationVisible: !this.state.isExtraInformationVisible
    });
  }

  render() {
    const { companyName } = this.props;

    return (
      <div className="companyInformationBlock pageBlock withShadow">
        <h2 className="header boldText">О студии {companyName}</h2>
        <ul className="resumeList">
          <li className="resumeItem">
            <img className="photo" src="/images/photo-1.jpg" alt="Интерьер" />
            <p className="caption">Металлические кресла</p>
            <p className="price">$1.000</p>
          </li>
          <li className="resumeItem">
            <img className="photo" src="/images/photo-2.jpg" alt="Интерьер" />
            <p className="caption">Диван</p>
            <p className="price">$3.000</p>
          </li>
          <li className="resumeItem">
            <img className="photo" src="/images/photo-3.jpg" alt="Интерьер" />
            <p className="caption">Обеденный стол</p>
            <p className="price">$2.500</p>
          </li>
        </ul>
        <div className="textContent">
          Дизайн интерьера — отрасль дизайна, направленная на интерьер помещений
          с целью обеспечить удобство и эстетически приятное взаимодействие
          среды с людьми. Интерьерный дизайн сочетает в себе художественный и
          промышленный дизайн.
        </div>
        {!this.state.isExtraInformationVisible && (
          <button
            className="extraInformationButton darkgoldenrodText"
            onClick={() => this.handleDisplayChange()}
          >
            Показать все
          </button>
        )}
        {this.state.isExtraInformationVisible && (
          <section className="extraInformation animated changeOpacity">
            <p>
              Разработка дизайна интерьера начинается с составления
              дизайн-проекта — комплекта документов, описывающих функциональные
              и дизайнерские решения, в них содержатся чертежи помещения и
              описания всех деталей будущего интерьера, включая отделочные
              материалы и расположение коммуникаций. В проекте присутствует
              техническое задание, в котором описаны все требования и пожелания
              заказчика.
            </p>
            <p>
              Сначала производятся обмеры помещения, после чего разрабатываются
              примерные планировочные решения и эскизы. На этом этапе дизайнер
              предлагает заказчику несколько вариантов планировки с
              распределением основных функциональных зон и расстановкой мебели.
              Так как 3D-моделирование — трудозатратный процесс, на этапе
              примерного планирования подробные трёхмерные модели
              разрабатываются только после согласования с заказчиком.
            </p>
            <button
              className="extraInformationHideButton darkgoldenrodText"
              onClick={() => this.handleDisplayChange()}
            >
              Скрыть дополнительную информацию
            </button>
          </section>
        )}
      </div>
    );
  }
}

export default CompanyInformation;
