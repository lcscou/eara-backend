export default function Save(props) {
  const { attributes } = props;
  const { renderMode, buttonLabel, title, description } = attributes;

  return (
    <div className={`newsletter-form newsletter-form--${renderMode}`}>
      <div className="newsletter-form__content">
        <h2 className="newsletter-form__title">{title}</h2>
        <p className="newsletter-form__description">{description}</p>
        
        <form className="newsletter-form__form">
          <div className="newsletter-form__grid">
            <div className="newsletter-form__field">
              <label className="newsletter-form__label">
                First name <span className="newsletter-form__required">*</span>
              </label>
              <input 
                type="text" 
                className="newsletter-form__input" 
                placeholder="Jane" 
              />
            </div>

            <div className="newsletter-form__field">
              <label className="newsletter-form__label">
                Last name <span className="newsletter-form__required">*</span>
              </label>
              <input 
                type="text" 
                className="newsletter-form__input" 
                placeholder="Doe" 
              />
            </div>

            <div className="newsletter-form__field">
              <label className="newsletter-form__label">
                Organization
              </label>
              <input 
                type="text" 
                className="newsletter-form__input" 
                placeholder="European Animal Research Association" 
              />
            </div>

            <div className="newsletter-form__field">
              <label className="newsletter-form__label">
                Email <span className="newsletter-form__required">*</span>
              </label>
              <input 
                type="email" 
                className="newsletter-form__input" 
                placeholder="you@example.com" 
              />
            </div>
          </div>

          <div className="newsletter-form__field newsletter-form__field--full">
            <label className="newsletter-form__label">
              Country <span className="newsletter-form__required">*</span>
            </label>
            <input 
              type="text" 
              className="newsletter-form__input" 
              placeholder="Country where you are based" 
            />
          </div>

          <div className="newsletter-form__field newsletter-form__field--full">
            <label className="newsletter-form__label">
              I am interested in <span className="newsletter-form__required">*</span>
            </label>
            <select className="newsletter-form__select">
              <option value="">Choose one or more</option>
              <option value="research">Research</option>
              <option value="policy">Policy</option>
              <option value="education">Education</option>
              <option value="events">Events</option>
            </select>
          </div>

          <p className="newsletter-form__privacy">
            By subscribing, you agree with EARA's{" "}
            <a href="#" className="newsletter-form__privacy-link">Privacy Policy</a>.
          </p>

          <div className="newsletter-form__actions">
            <button type="button" className="newsletter-form__button newsletter-form__button--clear">
              Clear
            </button>
            <button type="submit" className="newsletter-form__button newsletter-form__button--submit">
              {buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
