import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  state = {
    companyName: this.props.companyName,
    phoneNumber: "+79193977777",
    site: "www.mary.com",
    email: "mary@tochka.com",
    isVisible: { aboutCompany: false, companyRequisites: false }
  };

  handleDisplayChange(value) {
    switch (value) {
      case "aboutCompany":
        this.setState({
          isVisible: {
            aboutCompany: !this.state.isVisible.aboutCompany,
            companyRequisites: this.state.isVisible.companyRequisites
          }
        });
        break;
      case "companyRequisites":
        this.setState({
          isVisible: {
            aboutCompany: this.state.isVisible.aboutCompany,
            companyRequisites: !this.state.isVisible.companyRequisites
          }
        });
        break;
      default:
        break;
    }
  }

  render() {
    const { companyName, phoneNumber, site, email, isVisible } = this.state;

    return (
      <div className="headerBlock pageBlock withShadow">
        <div className="header">
          <div className="customerContacts">
            <h2 className="companyName header boldText">{companyName}</h2>
            <div className="contactsRow">
              <a
                className="contact phoneNumber noUnderline"
                href={"tel:" + phoneNumber}
              >
                {phoneNumber}
              </a>
              <a
                className="contact site darkgoldenrodText noUnderline"
                href="/TinaMarie.html"
              >
                {site}
              </a>
              <a
                className="contact email darkgoldenrodText noUnderline"
                href={"mailto:" + email}
              >
                {email}
              </a>
            </div>
            <button
              className="aboutCompanyButton darkgoldenrodText"
              onClick={() => this.handleDisplayChange("aboutCompany")}
            >
              Информация о компании
            </button>
            {isVisible.aboutCompany && (
              <section className="aboutCompany  animated changeOpacity">
                <blockquote>
                  Мы начали создавать интерьеры в 2008 году. Сейчас студия
                  <a
                    href="/TinaMarie.html"
                    className="darkgoldenrodText noUnderline"
                  >
                    {` ${companyName} `}
                  </a>
                  - это команда специалистов, более 250 объектов в портфолио и
                  все то, что нужно для успешной работы в сфере дизайна. Мы
                  очень любим своих клиентов. Интерьер Вашей мечты начинается
                  здесь.
                </blockquote>
              </section>
            )}
            <button
              className="companyRequisitesButton darkgoldenrodText"
              onClick={() => this.handleDisplayChange("companyRequisites")}
            >
              Показать реквизиты
            </button>
            {isVisible.companyRequisites && (
              <section className="companyRequisites animated changeOpacity">
                <h2 className="requisitesHeader">Реквизиты компании</h2>
                <ul className="requisitesList">
                  <li>
                    <span className="darkgoldenrodText requisiteName">
                      Расчетный счет:
                    </span>{" "}
                    40702810500000000001
                  </li>
                  <li>
                    <span className="darkgoldenrodText requisiteName">
                      Полное наименование банка:
                    </span>{" "}
                    Точка ПАО Банка «ФК Открытие», г. Екатеринбург
                  </li>
                  <li>
                    <span className="darkgoldenrodText requisiteName">
                      Корреспондентский счет банка:
                    </span>{" "}
                    3010100000000000001
                  </li>
                  <li>
                    <span className="darkgoldenrodText requisiteName">
                      БИК:
                    </span>{" "}
                    04580577
                  </li>
                </ul>
              </section>
            )}
          </div>
          <div className="customerLogoContainer">
            <img
              className="customerLogo"
              src="/images/logo1.jpg"
              alt="Логотип"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
